<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ShopGalleryImage;
use App\Traits\ApiResponse;
use App\Traits\UploadFile;
use Illuminate\Http\Request;
use Twilio\Rest\Api;

class ShopGalleryImageController extends Controller
{   
    use ApiResponse,UploadFile;
   
    public function index(Request $request)
    {
        if(!$request->filled('shop_id')) {
            ApiResponse::error('Shop id is required',400);
        }
        try {
            $shopGalleryImages = ShopGalleryImage::where('shop_id', $request->shop_id)->get();
            return ApiResponse::success('Shop gallery images',200,$shopGalleryImages);
        } catch (\Throwable $th) {
            return ApiResponse::error('Something went wrong',500,$th->getMessage());
        }
    }

    public function store(Request $request)
    {   
        $request->validate([
            'shop_id' => 'required|exists:shops,id',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        try {
            $shopGalleryImage = New ShopGalleryImage();
            $shopGalleryImage->shop_id = $request->shop_id;
            $shopGalleryImage->file = UploadFile::uploadFile($request->image,'shop_gallery_image');
            $shopGalleryImage->save();
            return ApiResponse::success('Image uploaded successfully',200,$shopGalleryImage);
        } catch (\Throwable $th) {
            return ApiResponse::error('Something went wrong',500,$th->getMessage());
        }
    }

    public function update(Request $request, string $id)
    {   
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        try {
            $shopGalleryImage = ShopGalleryImage::find($id);
            $shopGalleryImage->file = UploadFile::uploadFile($request->image,'shop_gallery_image');
            $shopGalleryImage->save();
            return ApiResponse::success('Image updated successfully',200,$shopGalleryImage);
        } catch (\Throwable $th) {
            return ApiResponse::error('Something went wrong',500,$th->getMessage());
        }
    }

    
    public function destroy(string $id)
    {
        try {
            $shopGalleryImage = ShopGalleryImage::findOrFail($id);
            UploadFile::deleteFile($shopGalleryImage->file);
            $shopGalleryImage->delete();
            return ApiResponse::success('Image deleted successfully',200);
        } catch (\Throwable $th) {
            return ApiResponse::error('Something went wrong',500,$th->getMessage());
        }
    }
}
