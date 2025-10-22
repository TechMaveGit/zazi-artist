<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateInvoiceRequest;
use App\Http\Requests\UpdateInvoiceRequest;
use App\Mail\InvoiceMail;
use App\Models\Booking;
use App\Models\BookingService;
use App\Models\Invoice;
use App\Models\InvoiceItem;
use App\Models\Payment;
use App\Models\Shop;
use App\Models\ShopService;
use App\Traits\ApiResponse;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class InvoiceController extends Controller
{
    use ApiResponse;

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if (empty($request->shop_id)) {
            return $this->error('Shop ID is required.', 400);
        }
        $sortBy = $request->get('sort_by', 'newest');
        $sortBy = match ($sortBy) {
            'newest' => ['created_at', 'desc'],
            'oldest' => ['created_at', 'asc'],
            'hight_to_low' => ['grand_total', 'desc'],
            'low_to_high' => ['grand_total', 'asc'],
            default => ['created_at', 'desc'],
        };

        $filters = $request->filters;
        $invoices = Invoice::with(['user'])->whereHas('booking', function ($query) use ($request) {
            $query->where('shop_id', $request->shop_id);
        })
            ->when(!empty($filters['query']), function ($query) use ($filters) {
                $query->where('invoice_number', 'like', "%{$filters['query']}%");
                $query->orWhereHas('user', function ($q) use ($filters) {
                    $q->where('name', 'like', "%{$filters['query']}%");
                });
            })
            ->when(!empty($filters['status']) && $filters['status'] != 'all', function ($query) use ($filters) {
                if ($filters['status'] == 'draft') {
                    $query->where('is_publish', 0);
                }
                $query->where('status', $filters['status']);
            })
            ->when(!empty($filters['date_range']), function ($query) use ($filters) {
                [$from, $to] = explode('-', $filters['date_range']);
                $from = Carbon::parse($from)->startOfDay();
                $to = Carbon::parse($to)->endOfDay();
                $query->whereBetween('created_at', [$from, $to]);
            })
            ->orderBy($sortBy[0], $sortBy[1]);


        $paidQuery = clone $invoices;
        $unpaidQuery = clone $invoices;
        $draftQuery = clone $invoices;
        $data['counts']['paid'] = $paidQuery->where('status', 'paid')->count();
        $data['counts']['outstanding'] = $unpaidQuery->where('status', 'unpaid')->orWhere('status', 'partial')->count();
        $data['counts']['draft'] = $draftQuery->where('is_publish', 0)->count();
        if ($invoices->get()->isEmpty()) {
            return $this->error('Invoices not found.', 404);
        }
        $data['invoices'] = $invoices->paginate(10);
        return $this->success('Invoices retrieved successfully.', 200, $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateInvoiceRequest $request)
    {
        DB::beginTransaction();
        try {
            $invoiceData = $request->only([
                'booking_id',
                'customer_id',
                'date',
                'due_date',
                'discount',
                'tax_percent',
                'total',
                'notes',
                'is_draft'
            ]);

            $booking_id = $request->booking_id;
            if (!$request->filled('booking_id')) {
                $booking = $this->createBooking($request);
                $booking_id = $booking->id;
            }
            $subTotal = $request->sub_total;
            $grandTotal = $request->total;
            $paidAmount = $grandTotal;
            $remainingAmount = $grandTotal - $paidAmount;
            $status = $request->is_draft ? 'draft' : ($remainingAmount > 0 ? 'pending' : 'paid');

            $invoice = Invoice::create([
                'booking_id' => $booking_id,
                'customer_id' => $request->customer_id,
                'date' => $request->date ?? now(),
                'due_date' => $request->due_date ?? now()->addDays(7),
                'sub_total' => $subTotal,
                'discount' => $request->discount ?? 0,
                'tax' => $request->tax_percent ?? 0,
                'grand_total' => $grandTotal,
                'paid_amount' => $paidAmount,
                'remaining_amount' => $remainingAmount,
                'is_publish' => $request->is_draft ? false : true,
                'note' => $request->notes,
                'status' => $status,
            ]);

            $invoice_number = $this->generateInvoiceNumber($invoice);
            $invoice->update(['invoice_number' => $invoice_number]);

            foreach ($request->services as $service) {
                $bookingService = BookingService::where('booking_id', $booking_id)
                    ->where('service_id', $service['id'])
                    ->first();

                if ($bookingService) {
                    $invoice->invoiceItems()->create([
                        'booking_service_id' => $bookingService->id,
                        'shop_service_id' => $service['id'],
                        'price' => $service['price'],
                        'discount' => $service['discount'] ?? 0,
                        'total' => $service['price'],
                        'paid_amount' => $service['price'],
                        'remaining_amount' => 0
                    ]);
                }
            }

            // If there's a paid amount and not a draft, create a payment record
            if (!$request->is_draft) {
                $invoice->payments()->create([
                    'amount' => $paidAmount,
                    'payment_method' => $request->payment_method ?? 'online',
                    'status' => 'success',
                ]);
                Mail::to($invoice?->user?->email)->send(new InvoiceMail($invoice));
            }

            DB::commit();
            return $this->success('Invoice created successfully.', 200, $invoice->load('invoiceItems', 'payments'));
        } catch (\Exception $e) {
            DB::rollBack();
            return $this->error('Failed to create invoice: ' . $e->getMessage(), 500);
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $invoice = Invoice::with(['invoiceItems', 'invoiceItems.shopService', 'invoiceItems.shopService.serviceSessions'])->find($id);
        if (!$invoice) {
            return $this->error('Invoice not found.', 404);
        }
        return $this->success('Invoice retrieved successfully.', 200, $invoice);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateInvoiceRequest $request, string $id)
    {
        DB::beginTransaction();
        try {
            $invoice = Invoice::findOrFail($id);

            $booking_id = $invoice->booking_id;
            $subTotal = $request->sub_total ?? $invoice->sub_total;
            $discount = $request->discount ?? $invoice->discount;
            $taxPercent = $request->tax_percent ?? $invoice->tax;
            $grandTotal = $request->total ?? $invoice->grand_total;
            $paidAmount = $request->paid_amount ?? $invoice->paid_amount;
            $remainingAmount = $grandTotal - $paidAmount;
            $status = $request->is_draft ? 'draft' : ($remainingAmount > 0 ? 'pending' : 'paid');

            $invoice->update([
                'customer_id' => $request->customer_id ?? $invoice->customer_id,
                'date' => $request->date ?? $invoice->date,
                'due_date' => $request->due_date ?? $invoice->due_date,
                'sub_total' => $subTotal,
                'discount' => $discount,
                'tax' => $taxPercent,
                'grand_total' => $grandTotal,
                'paid_amount' => $paidAmount,
                'remaining_amount' => $remainingAmount,
                'is_publish' => $request->is_draft ? false : true,
                'note' => $request->notes ?? $invoice->note,
                'status' => $status,
            ]);

            // Update invoice items if services are provided
            if ($request->has('services')) {
                $invoice->invoiceItems()->delete();
                foreach ($request->services as $service) {
                    $bookingService = BookingService::where('booking_id', $booking_id)
                        ->where('service_id', $service['id'])
                        ->first();
                    if ($bookingService) {
                        $invoice->invoiceItems()->create([
                            'booking_service_id' => $bookingService->id,
                            'shop_service_id' => $service['id'],
                            'price' => $service['price'],
                            'discount' => $service['discount'] ?? 0,
                            'total' => $service['total'] ?? $service['price'],
                            'paid_amount' => $service['paid_amount'] ?? ($service['total'] ?? $service['price']),
                            'remaining_amount' => $service['remaining_amount'] ?? 0
                        ]);
                    }
                }
            }

            // Handle payment update/creation
            if ($paidAmount > 0 && !$request->is_draft) {
                $payment = $invoice->payments()->first();
                if ($payment) {
                    $payment->update([
                        'amount' => $paidAmount,
                        'payment_method' => $request->payment_method ?? $payment->payment_method,
                        'status' => 'success',
                    ]);
                } else {
                    $invoice->payments()->create([
                        'amount' => $paidAmount,
                        'payment_method' => $request->payment_method ?? 'online',
                        'status' => 'success',
                    ]);
                }
            }

            DB::commit();
            return $this->success('Invoice updated successfully.', 200, $invoice->load('invoiceItems', 'payments'));
        } catch (\Exception $e) {
            DB::rollBack();
            return $this->error('Failed to update invoice: ' . $e->getMessage(), 500);
        }
    }

    public function customerCheckout(Request $request)
    {
        try {
            $booking_id = $request->booking_id;
            if (!$request->filled('booking_id')) {
                $booking_id = $this->createBooking($request);
            }

            $booking_id = $request->booking_id;
            if (!$request->filled('booking_id')) {
                $booking = $this->createBooking($request);
                $booking_id = $booking->id;
            }
            $subTotal = $request->sub_total;
            $grandTotal = $request->total;
            $paidAmount = $grandTotal;
            $remainingAmount = $grandTotal - $paidAmount;
            $status = $request->is_draft ? 'draft' : ($remainingAmount > 0 ? 'pending' : 'paid');

            $invoice = Invoice::where('booking_id', $booking_id)->first();
            if (!$invoice) {
                $invoice = Invoice::create([
                    'booking_id' => $booking_id,
                    'customer_id' => $request->customer_id,
                    'date' => $request->date ?? now(),
                    'due_date' => $request->due_date ?? now()->addDays(7),
                    'sub_total' => $subTotal,
                    'discount' => $request->discount ?? 0,
                    'tax' => $request->tax_percent ?? 0,
                    'grand_total' => $grandTotal,
                    'paid_amount' => $paidAmount,
                    'remaining_amount' => $remainingAmount,
                    'is_publish' => $request->is_draft ? false : true,
                    'status' => $status
                ]);
                $invoice->update(['invoice_number' => $this->generateInvoiceNumber($invoice)]);
            }

            if ($request->has('services')) {
                $invoice->invoiceItems()->delete();
                foreach ($request->services as $service) {
                    $bookingService = BookingService::where('booking_id', $booking_id)
                        ->where('service_id', $service['id'])
                        ->first();
                    if ($bookingService) {
                        $invoice->invoiceItems()->create([
                            'booking_service_id' => $bookingService->id,
                            'shop_service_id' => $service['id'],
                            'price' => $service['price'],
                            'discount' => $service['discount'] ?? 0,
                            'total' => $service['total'] ?? $service['price'],
                            'paid_amount' =>  $service['price'],
                            'remaining_amount' =>  0
                        ]);
                    }
                }
            }

            if ($paidAmount > 0) {
                $payment = $invoice->payments()->first();
                if ($payment) {
                    $payment->update([
                        'amount' => $paidAmount,
                        'payment_method' => $request->payment_method ?? $payment->payment_method,
                        'status' => 'success',
                    ]);
                } else {
                    $invoice->payments()->create([
                        'amount' => $paidAmount,
                        'payment_method' => $request->payment_method ?? 'online',
                        'status' => 'success',
                    ]);
                }
            }

            return $this->success('Checkout successful.', 200, $invoice->load('invoiceItems', 'payments'));
        } catch (\Exception $e) {
            DB::rollBack();
            return $this->error('Failed to create invoice: ' . $e->getMessage(), 500);
        }
    }

    //Helper function
    private function createBooking(Request $request)
    {

        DB::beginTransaction();
        try {
            $services_id = collect($request->services)->pluck('id')->toArray();
            $ShopService = ShopService::whereIn('id', $services_id)->get();
            $bookingPrice = $request->total;
            $totalServicePrice = $ShopService->sum('service_price');
            $shop = Shop::findOrFail($request->shop_id);

            $booking = Booking::create([
                'shop_id' => $request->shop_id,
                'user_id' => $request->customer_id,
                'is_date_flexible' => false,
                'is_time_flexible' => 'after',
                'start_date' => now()->format('Y-m-d'),
                'start_time' => now()->format('H:i:s'),
                'end_date' => null,
                'end_time' => null,
                'booking_amount' => $bookingPrice,
                'pay_later_amount' => ($totalServicePrice - $bookingPrice),
                'total_amount' => $totalServicePrice,
                'status' => 'confirmed'
            ]);

            $booking_id = 'OD' . str_pad($booking->id, 6, '0', STR_PAD_LEFT);
            $booking->update(['booking_id' => $booking_id]);

            foreach ($ShopService as $service) {
                $booking_price = collect($request->services)->where('id', $service->id)->first()['request_amount'] ?? 0;
                $bookingService = $booking->bookingServices()->create([
                    'booking_id' => $booking->id,
                    'service_id' => $service->id,
                    'booking_amount' => $booking_price,
                    'pay_later_amount' => ($service->service_price - $booking_price),
                    'total_amount' => $service->service_price,
                    'status' => 'confirmed',
                    'is_consent_form' => 'N'
                ]);

                //service session
                $service->serviceSessions;
                foreach ($service->serviceSessions as $session) {
                    $bookingService->bookingServiceSessions()->create([
                        'booking_service_id' => $booking->id,
                        'service_session_id' => $session->id
                    ]);
                }
            }

            DB::commit();
            return $booking;
        } catch (\Exception $e) {
            DB::rollBack();
            return false;
        }
    }

    //Helper function
    private function generateInvoiceNumber($invoice)
    {
        $invoiceNumber = 'INV' . str_pad($invoice->id, 6, '0', STR_PAD_LEFT);
        return $invoiceNumber;
    }
}
