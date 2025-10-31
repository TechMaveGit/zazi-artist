<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use App\Traits\ApiResponse;
use App\Traits\UploadFile;
use Illuminate\Http\Request;
use App\Models\ShopGalleryImage;
use Illuminate\Support\Facades\Auth;

class ShopController extends Controller
{
    use ApiResponse, UploadFile;
    public function update(Request $request, $id)
    {
        $request->validate([
            'banner_img' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg',
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'description' => 'required|string|max:255',

        ]);
        try {
            $shop = Shop::find($id);
            $shop->update([
                'name' => $request->name,
                'description' => $request->description,
                'phone' => $request->phone,
            ]);
            if ($request->hasFile('banner_img')) {
                $banner_imgages[] = UploadFile::uploadFile($request->file('banner_img'), 'shop');
                $shop->banner_img = $banner_imgages;
            }
            $shop->save();

            return ApiResponse::success('Shop Updated Successfully', 200, $shop);
        } catch (\Throwable $th) {
            return ApiResponse::error('Something went wrong', 500, $th->getMessage());
        }
    }

    public function uploadGalleryImages(Request $request)
    {   
        $request->validate([
            'gallery_images' => 'required|array',
            'gallery_images.*' => 'image|mimes:jpeg,png,jpg,gif,svg',
        ]);

        try {
            $user = Auth::guard('salon')->user();
            $shop = $user->shop;
            if (!$shop) {
                return ApiResponse::error('Shop not found for the authenticated user.', 404);
            }

            $uploadedImages = [];
            foreach ($request->file('gallery_images') as $imageFile) {
                $filePath = $this->uploadFile($imageFile, 'shop_gallery');
                $galleryImage = ShopGalleryImage::create([
                    'shop_id' => $shop->id,
                    'file' => $filePath,
                ]);
                $uploadedImages[] = $galleryImage;
            }

            return ApiResponse::success('Images uploaded successfully.', 200, $uploadedImages);
        } catch (\Throwable $th) {
            return ApiResponse::error('Something went wrong during image upload.', 500, $th->getMessage());
        }
    }

    public function deleteGalleryImage(ShopGalleryImage $shopGalleryImage)
    {
        try {
            $user = Auth::guard('salon')->user();
            $shop = $user->shop;

            if (!$shop || $shopGalleryImage->shop_id !== $shop->id) {
                return ApiResponse::error('Unauthorized to delete this image.', 403);
            }

            $this->deleteFile($shopGalleryImage->file);
            $shopGalleryImage->delete();

            return ApiResponse::success('Image deleted successfully.', 200);
        } catch (\Throwable $th) {
            return ApiResponse::error('Something went wrong during image deletion.', 500, $th->getMessage());
        }
    }
}
