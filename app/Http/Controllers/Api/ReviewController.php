<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Review;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    use ApiResponse;
    public function store(Request $request)
    {
        $request->validate([
            'booking_id' => 'required|exists:bookings,id',
            'service_rating' => 'required|integer|min:0|max:5',
            'hygiene_rating' => 'required|integer|min:0|max:5',
            'ambience_rating' => 'required|integer|min:0|max:5',
            'comment' => 'nullable|string',
        ]);

        try {
            $booking = Booking::find($request->booking_id);
            $total_rating = number_format(($request->service_rating + $request->hygiene_rating + $request->ambience_rating) / 3, 2);
            $review = Review::create([
                'shop_id' => $booking->shop_id,
                'booking_id' => $request->booking_id,
                'service_rating' => $request->service_rating,
                'hygiene_rating' => $request->hygiene_rating,
                'ambience_rating' => $request->ambience_rating,
                'total_rating' => $total_rating,
                'comment' => $request->comment,
                'user_id' => auth()->user()->id
            ]);
            return ApiResponse::success('Review Created', 200, $review);
        } catch (\Throwable $th) {
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }
}
