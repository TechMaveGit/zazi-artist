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
        $user_lat = $request->lat ?? 28.630130116504127;
        $user_lng = $request->lng ?? 77.3806560103913;

        $shops = Shop::with(['scheduled' => fn($query) => $query->where('day', date('l'))])->select('id', 'name', 'email', 'lat', 'lng', 'banner_img','is_opened_today')->get();
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
            $shop = Shop::with(['services', 'galleryImages', 'scheduled', 'artists'])->findOrFail($request->id);
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
            $shop = Shop::findOrFail($id);
            $shop->is_opened_today = $shop->is_opened_today == 1 ? 0 : 1;
            $shop->save();

            $message = $shop->is_opened_today == 1 ? 'Booking opened successfully for today.' : 'Booking closed successfully for today.';
            return ApiResponse::success($message, 200, null);
        } catch (\Throwable $th) {
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }
}
