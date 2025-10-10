<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
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
    // public function index(Request $request)
    // {
    //     return ApiResponse::success("User profile", 200, [
    //         'user' => $request->user()
    //     ]);
    // }

    public function store(Request $request)
    {   
        $request->validate([
            'shop_id' => 'nullable|exists:shops,id',
            'location' => 'required_if:shop_id,null|string|max:255',
            'lat' => 'required_if:shop_id,null|numeric|between:-90,90',
            'long' => 'required_if:shop_id,null|numeric|between:-180,180',
            'name' => 'required_if:shop_id,null|string|max:255',
            'email' => 'required_if:shop_id,null|email|unique:shops,email,' . $request->shop_id,
            'dial_code' => 'required_if:shop_id,null|string|max:20',
            'phone' => 'required_if:shop_id,null|string|max:20',
            'address' => 'required_if:shop_id,null|string|max:500',
            'country' => 'required_if:shop_id,null|string|max:100',
            'state' => 'required_if:shop_id,null|string|max:100',
            'city' => 'required_if:shop_id,null|string|max:100',
            'zipcode' => 'required_if:shop_id,null|string|max:10',
            'description' => 'nullable|string',
            'availability' => 'nullable|array',
            'availability.*' => 'nullable',
            'banner_img' => 'nullable|array',
            'banner_img.*' => 'nullable|file|mimes:png,jpg,jpeg',
            'gallery_images' => 'nullable|array',
            'gallery_images.*' => 'nullable|file|mimes:png,jpg,jpeg',
        ], [
            'lat.required_if' => 'Latitude is required.',
            'long.required_if' => 'Longitude is required.',
            'name.required_if' => 'Shop name is required.',
            'dial_code.required_if' => 'Shop dial code is required.',
            'phone.required_if' => 'Shop phone is required.',
            'email.required_if' => 'Shop email is required.',
            'address.required_if' => 'Shop address is required.',
            'country.required_if' => 'Country is required.',
            'state.required_if' => 'State is required.',
            'city.required_if' => 'City is required.',
            'zipcode.required_if' => 'Pincode is required.',
        ]);

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


            // Store Shop Schedule
            if (!empty($request->availability)) {
                foreach ($request->availability as $each) {
                    $scehedule = ShopScheduled::find($shop->id) ?? new ShopScheduled();
                    $scehedule->shop_id = $shop->id;
                    $scehedule->day = $each['day'];
                    $scehedule->opening_time = $each['open'];
                    $scehedule->closing_time = $each['close'];
                    $scehedule->save();
                }
            }

            //store shop gallary image
            if ($request->hasFile('gallery_images')) {
                foreach ($request->file('gallery_images') as $each) {
                    $shop_gallery =  ShopGalleryImage::find($shop->id) ?? new ShopGalleryImage();
                    $shop_gallery->shop_id = $shop->id;
                    $shop_gallery->file = UploadFile::uploadFile($each, 'shop');
                    $shop_gallery->save();
                }
            }

            DB::commit();

            $message = $request->shop_id ? 'Shop updated successfully' : 'Shop created successfully';
            return ApiResponse::success($message, 200, $shop);
        } catch (\Throwable $th) {
            DB::rollBack();
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }
}
