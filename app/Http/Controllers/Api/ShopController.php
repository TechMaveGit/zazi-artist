<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateShopRequest;
use App\Http\Requests\UpdateShopRequest;
use App\Models\Shop;
use App\Models\ShopGalleryImage;
use App\Models\ShopScheduled;
use App\Traits\ApiResponse;
use App\Traits\UploadFile;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ShopController extends Controller
{
    use ApiResponse, UploadFile;
    public function index(Request $request)
    {
        $shops = Shop::with(['scheduled' => fn($query) => $query->where('day', date('l'))])
            ->select('id', 'name', 'email', 'lat', 'lng', 'banner_img','status')
            ->where('status','active')
            ->when(auth()->user()->hasAnyRole(['artist', 'salon']), function ($query) {
                $shop_id = auth()->user()->shop->pluck('id')->toArray();
                $query->whereIn('id', $shop_id);
            })
            ->get();
        $shops = Collection::make($shops)->sortBy('distance')->values();

        $perPage = $request->get('per_page', 10);
        $page = $request->get('page', 1);
        $currentItems = $shops->slice(($page - 1) * $perPage, $perPage)->values();
        $paginatedShops = new LengthAwarePaginator(
            $currentItems,
            $shops->count(),
            $perPage,
            $page,
            ['path' => $request->url(), 'query' => $request->query()]
        );
        return ApiResponse::success("Shops retrieved successfully", 200, $paginatedShops);
    }

    public function show(Request $request)
    {
        try {
            $shop = Shop::with(['services', 'locations', 'locations.schedules', 'galleryImages', 'scheduled', 'artists', 'reviews', 'reviews.user'])->withCount('reviews')->findOrFail($request->id);
            return ApiResponse::success("Shop details", 200, $shop);
        } catch (\Throwable $th) {
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }

    public function store(CreateShopRequest $request)
    {
        DB::beginTransaction();
        try {
            $shop = new Shop();
            $shop->user_id = Auth::id();
            $shop->name = $request->name;
            $shop->email = $request->email;
            $shop->dial_code = $request->dial_code;
            $shop->phone = $request->phone;
            $shop->address = $request->address;
            $shop->country = $request->country;
            $shop->state = $request->state;
            $shop->city = $request->city;
            $shop->zipcode = $request->zipcode;
            $shop->lat = $request->lat;
            $shop->lng = $request->long;
            $shop->description = $request->description;
            if ($request->hasFile('banner_img')) {
                $banner_imgages = [];
                foreach ($request->file('banner_img') as $each) {
                    $banner_imgages[] = UploadFile::uploadFile($each, 'shop');
                }
                $shop->banner_img = $banner_imgages;
            }
            $shop->save();
            DB::commit();

            return ApiResponse::success('Shop created successfully', 200, $shop);
        } catch (\Throwable $th) {
            DB::rollBack();
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }

    public function update(UpdateShopRequest $request, string $id)
    {
        DB::beginTransaction();
        try {
            $shop = Shop::findOrFail($id);

            $shop->name = $request->name;
            $shop->email = $request->email;
            $shop->dial_code = $request->dial_code;
            $shop->phone = $request->phone;
            $shop->address = $request->address;
            $shop->country = $request->country;
            $shop->state = $request->state;
            $shop->city = $request->city;
            $shop->zipcode = $request->zipcode;
            $shop->lat = $request->lat;
            $shop->lng = $request->long;
            $shop->description = $request->description;
            if ($request->hasFile('banner_img')) {
                $banner_imgages = [];
                foreach ($request->file('banner_img') as $each) {
                    $banner_imgages[] = UploadFile::uploadFile($each, 'shop');
                }
                $shop->banner_img = $banner_imgages;
            }

            $shop->save();
            DB::commit();
            return ApiResponse::success('Shop updated successfully', 200, $shop);
        } catch (\Throwable $th) {
            DB::rollBack();
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }

    public function destroy(string $id)
    {
        DB::beginTransaction();
        try {
            $shop = Shop::findOrFail($id);
            $shop->delete();
            DB::commit();
            return ApiResponse::success('Shop deleted successfully', 200, null);
        } catch (\Throwable $th) {
            DB::rollBack();
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }

    public function openedClosedBooking(Request $request, string $id)
    {
        try {
                // $shop = Shop::findOrFail($id);
                // $shop->is_opened_today = $shop->is_opened_today == 1 ? 0 : 1;
                // $shop->save();

                // $message = $shop->is_opened_today == 1 ? 'Booking opened successfully for today.' : 'Booking closed successfully for today.';
                $message = 'Booking status updated successfully for today.';
            return ApiResponse::success($message, 200, null);
        } catch (\Throwable $th) {
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }

    public function shopSchedules(Request $request, string $id)
    {
        try {
            $dayOrder = [
                'sunday',
                'monday',
                'tuesday',
                'wednesday',
                'thursday',
                'friday',
                'saturday'
            ];

            // 1. Fetch all 7 schedule records for the shop. Do not use ORDER BY day.
            $shop = ShopScheduled::where('shop_id', $id)
                ->select('id', 'shop_id', 'day', 'opening_time', 'closing_time', 'is_closed', 'additional_hours')
                ->get();

            // 2. Sort the collection using the day's chronological index.
            $shop = $shop->sortBy(function ($item) use ($dayOrder) {
                return array_search(strtolower($item->day), $dayOrder);
            })->values();
            return ApiResponse::success('Shop schedules', 200, $shop);
        } catch (\Throwable $th) {
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }

    public function updateSchedule(Request $request, string $id)
    {
        $request->validate([
            'schedule_id' => 'required|exists:shop_scheduleds,id',
            'opening_time' => 'required_if:is_closed,false',
            'closing_time' => 'required_if:is_closed,false',
            'is_closed' => 'required|boolean',
            'additional_hours' => 'nullable|array',
            'additional_hours.opening_time' => 'required|date_format:H:i',
            'additional_hours.closing_time' => 'required|date_format:H:i',
        ], [
            'opening_time.required_if' => 'Opening time is required for non-closed day.',
            'closing_time.required_if' => 'Closing time is required for non-closed day.',
        ]);

        try {
            $ShopScheduled = ShopScheduled::updateOrCreate([
                'id' => $request->schedule_id,
                'shop_id' => $id
            ], [
                'opening_time' => ($request->is_closed ? null : $request->opening_time),
                'closing_time' => ($request->is_closed  ? null : $request->closing_time),
                'is_closed' => $request->is_closed,
                'additional_hours' => $request->additional_hours
            ]);
            return ApiResponse::success('Schedule updated successfully', 200, $ShopScheduled);
        } catch (\Throwable $th) {
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }

    public function availableSlots(Request $request, string $id)
    {
        try {
            $shop = Shop::find($id);
            if (!$shop) {
                return ApiResponse::error("Shop not found", 404, null);
            }
            $date = $request->filled('date') ? Carbon::parse($request->date)->format('Y-m-d') : Carbon::now()->format('Y-m-d');
            $availableSlots = $shop->availableSlots($date);
            if ($availableSlots->isEmpty()) return ApiResponse::error("No slots available", 404, null);

            return ApiResponse::success('Available slots', 200, $availableSlots);
        } catch (\Throwable $th) {
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }
}
