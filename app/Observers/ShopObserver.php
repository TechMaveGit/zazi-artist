<?php

namespace App\Observers;

use App\Models\Shop;
use App\Models\ShopGalleryImage;
use App\Models\ShopScheduled;
use App\Traits\UploadFile;

class ShopObserver
{   
    use UploadFile;
    /**
     * Handle the Shop "created" event.
     */
    public function created(Shop $shop): void
    {   
        $request = request();
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
    }

    /**
     * Handle the Shop "updated" event.
     */
    public function updated(Shop $shop): void
    {   
        $request = request();
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
    }

    /**
     * Handle the Shop "deleted" event.
     */
    public function deleted(Shop $shop): void
    {
        //
    }

    /**
     * Handle the Shop "restored" event.
     */
    public function restored(Shop $shop): void
    {
        //
    }

    /**
     * Handle the Shop "force deleted" event.
     */
    public function forceDeleted(Shop $shop): void
    {
        //
    }
}
