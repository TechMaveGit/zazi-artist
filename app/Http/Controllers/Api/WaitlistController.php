<?php

namespace App\Http\Controllers\APi;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;

class WaitlistController extends Controller
{
    use ApiResponse;
    public function index()
    {
        $bookings = Booking::when(auth()->user()->hasRole('customer'), function ($query) {
            $query->where('user_id', auth()->user()->id);
        })
            ->when(auth()->user()->hasAnyRole(['artist', 'salon']), function ($query) {
                $shop_id = auth()->user()->shop->pluck('id')->toArray();
                $query->whereIn('id', $shop_id);
            })
            ->where('status', 'waitlist')
            ->orderBy('created_at', 'desc')
            ->get();
        if ($bookings->isEmpty()) {
            return ApiResponse::success('No Waitlists Found', 200, []);
        }

        return ApiResponse::success('Waitlists', 200, $bookings);
    }

    public function cancelRequest($id)
    {
        $booking = Booking::where('id', $id)->where('status', 'waitlist')->first();
        if (!$booking) {
            return ApiResponse::error('Booking already confirmed or waitlist not found', 404);
        }
        $booking->delete();
        return ApiResponse::success('Waitlist Canceled', 200, $booking);
    }
}
