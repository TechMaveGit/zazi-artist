<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateShopRequest;
use App\Models\Shop;
use App\Models\ShopGalleryImage;
use App\Models\ShopScheduled;
use App\Traits\ApiResponse;
use App\Traits\UploadFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ShopController extends Controller
{
    use ApiResponse, UploadFile;
    public function index(Request $request)
    {
        $user_lat = $request->lat ?? 28.630130116504127;
        $user_lng = $request->lng ?? 77.3806560103913;

        $shops = Shop::select('id', 'name', 'email', 'lat', 'lng', 'banner_img')->get();
        $shopsWithDistance = $shops->map(function ($shop) use ($user_lat, $user_lng) {
            if ($shop->lat && $shop->lng) {
                $distance = calculateDistance(
                    (float)$user_lat,
                    (float)$user_lng,
                    (float)$shop->lat,
                    (float)$shop->lng,
                    'km'
                );
                $shop->distance = $distance . ' km';
            } else {
                $shop->distance = null;
            }
            $shop->ratings = 3.5;
            return $shop;
        });

        $nearestShops = $shopsWithDistance->sortBy('distance')->values();
        return ApiResponse::success("Shops with distance calculated", 200, $nearestShops);
    }

    public function show(Request $request)
    {
        try {
            $shop = Shop::with(['galleryImages', 'scheduled'])->findOrFail($request->id);
            return ApiResponse::success("Shop details", 200, $shop);
        } catch (\Throwable $th) {
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }

    public function store(CreateShopRequest $request)
    {
        DB::beginTransaction();
        try {
            $shop = $request->shop_id ? Shop::find($request->shop_id) : new Shop();
            $shop->user_id = auth()->id();
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

            $message = $request->shop_id ? 'Shop updated successfully' : 'Shop created successfully';
            return ApiResponse::success($message, 200, $shop);
        } catch (\Throwable $th) {
            DB::rollBack();
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }
}
