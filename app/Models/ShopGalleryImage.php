<?php

namespace App\Models;

use App\Traits\UploadFile;
use Illuminate\Database\Eloquent\Model;

class ShopGalleryImage extends Model
{   use UploadFile;
    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    protected $appends = ['file_url'];

    public function getFileUrlAttribute()
    {
        return UploadFile::getFileUrl($this->file);
    }
}
