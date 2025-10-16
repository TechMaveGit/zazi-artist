<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateUpdateAppointmentRequest;
use App\Models\Booking;
use App\Models\ShopService;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Notifications\OrderStatusNotification;
use Carbon\Carbon;

class AppointmentController extends Controller
{
    use ApiResponse;
    public function index(Request $request)
    {
        try {
            if (empty($request->shop_id)) {
                return ApiResponse::error("Shop id is required", 400);
            }

            $filters = $request->get('filters', []);
            $appointments = Booking::with('user')->where('shop_id', $request->shop_id)
                ->where('is_direct_booking', 1)
                ->orderBy('created_at', 'desc');

            if (!empty($filters['query'])) {
                $appointments->where(function ($query) use ($filters) {
                    $query->where('status', 'like', '%' . $filters['query'] . '%')
                        ->orWhereHas('user', function ($q) use ($filters) {
                            $q->where('name', 'like', '%' . $filters['query'] . '%');
                        });
                });
            }

            if (!empty($filters['date_range'])) {
                [$from, $to] = explode('-', $filters['date_range']);
                $from = Carbon::parse($from)->startOfDay();
                $to = Carbon::parse($to)->endOfDay();
                $appointments->whereBetween('created_at', [$from, $to]);
            }

            if ($appointments->get()->isEmpty()) {
                return ApiResponse::success('No Appointments Found', 200, []);
            }
            $appointments = $appointments->paginate($request->get('per_page', 10));

            return ApiResponse::success('Appointments', 200, $appointments);
        } catch (\Throwable $th) {
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }

    public function show($id)
    {
        $appointment = Booking::with(['bookingServices', 'bookingServices.bookingServiceSessions'])->where('id', $id)->where('is_direct_booking', 1)->first();
        return ApiResponse::success('Appointment', 200, $appointment);
    }

    public function store(CreateUpdateAppointmentRequest $request)
    {
        DB::beginTransaction();
        try {
            $ShopService = ShopService::whereIn('id', $request->services)->get();
            $bookingPrice = 0;
            $servicePrice = $ShopService->sum('service_price');

            $booking = Booking::create([
                'shop_id' => $request->shop_id,
                'user_id' => $request->customer_id,
                'start_date' => $request->date,
                'start_time' => $request->time,
                'booking_amount' => $bookingPrice,
                'pay_later_amount' => ($servicePrice - $bookingPrice),
                'total_amount' => $servicePrice,
                'status' => 'confirmed',
                'notes' => $request->notes,
                'is_direct_booking' => 1,
            ]);

            $booking_id = 'OD' . str_pad($booking->id, 6, '0', STR_PAD_LEFT);
            $booking->update(['booking_id' => $booking_id]);


            foreach ($ShopService as $service) {
                $service->booking_price = 0;
                $bookingService = $booking->bookingServices()->create([
                    'booking_id' => $booking->id,
                    'service_id' => $service->id,
                    'booking_amount' => $service->booking_price,
                    'pay_later_amount' => ($service->service_price - $service->booking_price),
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

            $booking->user->notify(new OrderStatusNotification($booking, 'appointment'));
            DB::commit();
            $booking->load('bookingServices', 'bookingServices.bookingServiceSessions');
            $message = 'Your appointment has been booked, please wait for confirmation';
            return ApiResponse::success($message, 200, $booking);
        } catch (\Throwable $th) {
            DB::rollBack();
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }

    public function update(CreateUpdateAppointmentRequest $request, $id)
    {
        DB::beginTransaction();
        try {
            $booking = Booking::findOrFail($id);

            $ShopService = ShopService::whereIn('id', $request->services)->get();
            $bookingPrice = 0;
            $servicePrice = $ShopService->sum('service_price');

            $booking->update([
                'shop_id' => $request->shop_id,
                'user_id' => $request->customer_id,
                'start_date' => $request->date,
                'start_time' => $request->time,
                'booking_amount' => $bookingPrice,
                'pay_later_amount' => ($servicePrice - $bookingPrice),
                'total_amount' => $servicePrice,
                'notes' => $request->notes,
            ]);

            // Remove existing booking services and sessions
            $booking->bookingServices()->delete();

            foreach ($ShopService as $service) {
                $service->booking_price = 0;
                $bookingService = $booking->bookingServices()->create([
                    'booking_id' => $booking->id,
                    'service_id' => $service->id,
                    'booking_amount' => $service->booking_price,
                    'pay_later_amount' => ($service->service_price - $service->booking_price),
                    'total_amount' => $service->service_price,
                    'status' => 'pending',
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

            $booking->user->notify(new OrderStatusNotification($booking, 'appointment_updated'));
            DB::commit();
            $booking->load('bookingServices', 'bookingServices.bookingServiceSessions');
            $message = 'Your appointment has been updated successfully';
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
            return ApiResponse::success('Your appointment has been canceled,any applicable refund will be processed shortly', 200, $booking);
        } catch (\Throwable $th) {
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }

    public function markNoShow(Request $request, $id)
    {
        try {
            $booking = Booking::where('id', $id)->whereIn('status', ['pending', 'confirmed'])->first();
            if (!$booking) {
                return ApiResponse::error('No any pending booking found', 404);
            }
            $booking->is_visible = 0;
            $booking->save();
            return ApiResponse::success('Appointment marked as no show', 200, $booking);
        } catch (\Throwable $th) {
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }
}
