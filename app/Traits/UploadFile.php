<?php

namespace App\Traits;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\UploadedFile;

trait UploadFile
{
    /**
     * Upload a file to storage/app/public/<directory> and return its path
     *
     * @param UploadedFile $file
     * @param string $directory
     * @return string $path
     */
    public static function uploadFile(UploadedFile $file, string $directory): string
    {
        // Generate a unique file name
        $fileName = 'image_' . uniqid() . '.' . $file->getClientOriginalExtension();
        // Store in public disk: storage/app/public/<directory>
        $path = $file->storeAs($directory, $fileName, 'public');

        return $path; // returns path relative to storage/app/public
    }

    /**
     * Delete a file from public disk
     *
     * @param string $filePath
     * @return bool
     */
    public static function deleteFile(string $filePath): bool
    {
        if (Storage::disk('public')->exists($filePath)) {
            return Storage::disk('public')->delete($filePath);
        }

        return false;
    }

    /**
     * Get file URL from public disk
     *
     * @param string $filePath
     * @return string
     */
    public static function getFileUrl(string $filePath): string
    {
        if (empty($filePath)) {
            return '';
        }

        return rtrim(config('app.url'), '/') . '/storage/app/public/' . ltrim($filePath, '/');
    }
}
