<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SlotTemplate;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;

class SlotController extends Controller
{   
    use ApiResponse;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $slots = SlotTemplate::where('date', date('Y-m-d'))->get();
        if ($slots->isEmpty()) {
            return $this->error('Slots not found.', 404);
        }
        return $this->success('Slots retrieved successfully.', 200, $slots);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'shop_id' => 'required|exists:shops,id',
            'date' => 'required|date|after_or_equal:today',
            'slots' => 'required|array|min:1',
            'slots.*.start_time' => 'required|date_format:H:i',
            'slots.*.end_time' => 'required|date_format:H:i',
            'slots.*.capacity' => 'required|integer',
            'slots.*.status' => 'nullable|boolean'
        ]);

        try {
            SlotTemplate::where('shop_id', $request->shop_id)->where('date', $request->date)->delete();
            foreach ($request->slots as $slot) {
                SlotTemplate::create([
                    'shop_id' => $request->shop_id,
                    'date' => $request->date,
                    'start_time' => $slot['start_time'],
                    'end_time' => $slot['end_time'],
                    'capacity' => $slot['capacity'],
                ]);
            }

            $slots = SlotTemplate::where('shop_id', $request->shop_id)->where('date', $request->date)->get();
            return ApiResponse::success('Slots created successfully', 200,$slots);
        } catch (\Throwable $th) {
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'start_time' => 'required|date_format:H:i',
            'end_time' => 'required|date_format:H:i',
            'capacity' => 'required|integer',
            'status' => 'nullable|boolean'
        ]);

        try {
            $slot = SlotTemplate::find($id);
            if (!$slot) {
                return $this->error('Slot not found.', 404);
            }
            $slot->start_time = $request->start_time;
            $slot->end_time = $request->end_time;
            $slot->capacity = $request->capacity;
            $slot->status = $request->status;
            $slot->save();
            return ApiResponse::success('Slot updated successfully', 200, $slot);
        } catch (\Throwable $th) {
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $slot = SlotTemplate::find($id);
            if (!$slot) {
                return $this->error('Slot not found.', 404);
            }
            if ($slot->bookingServiceSlots->count() > 0) {
                return $this->error('Slot cannot be deleted because it is associated with a booking', 400);
            }
            $slot->delete();
            return ApiResponse::success('Slot deleted successfully', 200);
        } catch (\Throwable $th) {
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }
}
