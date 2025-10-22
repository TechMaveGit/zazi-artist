<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateBookingRequest;
use App\Models\Booking;
use App\Models\Invoice;
use App\Models\InvoiceItem;
use App\Models\Payment;
use App\Models\Shop;
use App\Models\ShopService;
use App\Notifications\OrderStatusNotification;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BookingController extends Controller
{
    use ApiResponse;
    public function index()
    {
        $bookings = Booking::when(auth()->user()->hasRole('customer'), function ($query) {
            $query->where('user_id', auth()->user()->id)->where('is_visible', 1);
        })
            ->when(auth()->user()->hasAnyRole(['artist', 'salon']), function ($query) {
                $shop = auth()->user()->shop;
                $query->where('shop_id', $shop->id);
            })
            ->orderBy('created_at', 'desc')
            ->get()
            ->groupBy(function ($booking) {
                $upcoming = ['pending', 'confirmed', 'in_progress', 'reschedule'];
                $completed = ['completed', 'partial_completed'];
                $cancelled = ['canceled', 'cancelled'];

                if (in_array($booking->status, $upcoming)) {
                    return 'upcoming';
                } elseif (in_array($booking->status, $completed)) {
                    return 'completed';
                } elseif (in_array($booking->status, $cancelled)) {
                    return 'cancelled';
                } else {
                    return 'other';
                }
            });

        return ApiResponse::success('Bookings', 200, $bookings);
    }

    public function show($id)
    {
        $booking = Booking::with(['bookingServices', 'bookingServices.bookingServiceSessions'])->findOrFail($id);
        return ApiResponse::success('Booking', 200, $booking);
    }

    public function store(CreateBookingRequest $request)
    {
        DB::beginTransaction();
        try {
            $ShopService = ShopService::whereIn('id', $request->services)->get();
            $bookingPrice = $request->is_waitlist ? 0 : $ShopService->sum('booking_price');
            $servicePrice = $ShopService->sum('service_price');
            $shop = Shop::findOrFail($request->shop_id);
            if ($shop->is_opened_today == 0 && $request->is_waitlist == 0) {
                return ApiResponse::error('There is no more booking accepted for today', 400);
            }


            $booking = Booking::create([
                'shop_id' => $request->shop_id,
                'user_id' => auth()->user()->id,
                'is_date_flexible' => $request->is_date_flexible,
                'is_time_flexible' => $request->is_time_flexible,
                'start_date' => $request->start_date,
                'start_time' => $request->start_time,
                'end_date' => $request->end_date,
                'end_time' => $request->end_time,
                'booking_amount' => $bookingPrice,
                'pay_later_amount' => ($servicePrice - $bookingPrice),
                'total_amount' => $servicePrice,
                'status' => $request->is_waitlist ? 'waitlist' : 'pending'
            ]);

            $booking_id = 'OD' . str_pad($booking->id, 6, '0', STR_PAD_LEFT);
            $booking->update(['booking_id' => $booking_id]);


            foreach ($ShopService as $service) {
                $service->booking_price = $request->is_waitlist ? 0 : $service->booking_price;
                $bookingService = $booking->bookingServices()->create([
                    'booking_id' => $booking->id,
                    'service_id' => $service->id,
                    'booking_amount' => $service->booking_price,
                    'pay_later_amount' => ($service->service_price - $service->booking_price),
                    'total_amount' => $service->service_price,
                    'status' => $request->is_waitlist ? 'waitlist' : 'pending',
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

            // Reserve Code For Future
            // if (!$request->is_waitlist) {
            //     $invoice = Invoice::create([
            //         'booking_id' => $booking->id,
            //         'discount' => 0,
            //         'tax' => 0,
            //         'sub_total' => $service->service_price,
            //         'grand_total' => $service->service_price,
            //         'is_publish' => 0,
            //         'status' => 'partial',
            //     ]);

            //     foreach($booking->bookingServices as $bookingService) {
            //         InvoiceItem::create([
            //             'invoice_id' => $invoice->id,
            //             'booking_service_id' => $bookingService->id,
            //             'shop_service_id' => $bookingService->service_id,
            //             'price' => $bookingService->total_amount,
            //             'discount' => 0,
            //             'total' => $bookingService->total_amount
            //         ]);
            //     }

            //     Payment::create([
            //         'invoice_id' => $booking->id,
            //         'amount' => $booking->total_amount,
            //         'status' => 'success',
            //         'payment_method' => 'online'
            //     ]);
            // }

            $booking->user->notify(new OrderStatusNotification($booking, $request->is_waitlist ? 'waitlist' : 'created'));
            DB::commit();
            $booking->load('bookingServices', 'bookingServices.bookingServiceSessions');
            $message = $request->is_waitlist ? 'You have been added to the waitlist, please wait for confirmation' : 'Your booking has been created, please wait for confirmation';
            return ApiResponse::success($message, 200, $booking);
        } catch (\Throwable $th) {
            DB::rollBack();
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }

    public function markCancel(Request $request, $id)
    {
        try {
            if (!$request->filled('reason')) {
                return ApiResponse::error('Cancel reason is required', 400);
            }
            $booking = Booking::find($id);
            if (!$booking) {
                return ApiResponse::error('No any pending booking found', 404);
            }
            if ($booking && in_array($booking->status, ['in_progress', 'completed', 'partial_completed'])) {
                return ApiResponse::error('You can not cancel this booking, it is already in progress', 409);
            }
            if ($booking->status == 'canceled') {
                return ApiResponse::error('You can not cancel this booking, it is already canceled', 409);
            }
            $booking->reason = $request->reason ?? '';
            $booking->status = 'canceled';
            $booking->save();

            $booking->user->notify(new OrderStatusNotification($booking, 'rejected'));
            return ApiResponse::success('Your booking has been canceled,any applicable refund will be processed shortly', 200, $booking);
        } catch (\Throwable $th) {
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }

    public function markApprove(Request $request, $id)
    {
        try {
            if (auth()->user()->hasRole('customer')) {
                return ApiResponse::error('You can not approve this booking', 409);
            }
            if (!$request->filled('reason')) {
                return ApiResponse::error('Cancel reason is required', 400);
            }
            $booking = Booking::where('id', $id)->whereIn('status', ['pending', 'confirmed'])->first();
            if (!$booking) {
                return ApiResponse::error('No any pending booking found', 404);
            }
            if ($booking && in_array($booking->status, ['in_progress', 'completed', 'partial_completed'])) {
                return ApiResponse::error('You can not approve this booking, it is already in progress', 409);
            }
            $booking->reason = $request->reason ?? '';
            $booking->status = 'confirmed';
            $booking->save();

            $booking->user->notify(new OrderStatusNotification($booking, 'approved'));
            return ApiResponse::success('Your booking has been approved', 200, $booking);
        } catch (\Throwable $th) {
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }
}
