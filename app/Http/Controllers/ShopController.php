<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use App\Traits\ApiResponse;
use App\Traits\UploadFile;
use Illuminate\Http\Request;

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
}
