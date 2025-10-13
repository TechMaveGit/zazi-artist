<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Favorite;
use App\Traits\ApiResponse;
use App\Traits\UploadFile;
use Illuminate\Http\Request;

class FavoriteController extends Controller
{   
    use ApiResponse, UploadFile;

    public function index(Request $request) {
        $favorites = Favorite::where('user_id', auth()->id())
            ->with(['shop', 'artist']) 
            ->when($request->filled('type') && $request->type != 'all', function ($query) use ($request) {
                return $request->type == 'artist' ? $query->where('type', 'artist') : ($request->type == 'salon' ? $query->where('type', 'salon') : '');
            })
            ->orderBy('created_at', 'desc')
            ->get();

        return ApiResponse::success('Favorites retrieved successfully', 200, $favorites);
    }

    public function store(Request $request) {
        $request->validate([
            'shop_id' => 'required_if:artist_id,null|exists:shops,id',
            'artist_id' => 'required_if:shop_id,null|exists:users,id'
        ]);

        try {
            $favorite = new Favorite();
            $favorite->user_id = auth()->id();
            $favorite->artist_id = $request->artist_id;
            $favorite->shop_id = $request->shop_id;
            $favorite->type = $request->filled('artist_id') ? 'artist' : 'salon';
            $favorite->save();
            return ApiResponse::success('Added to favorite', 200, $favorite);
        } catch (\Throwable $th) {
            return ApiResponse::error('Something went wrong', 500, $th->getMessage());
        }
    }

    public function destroy($id) {
        try {
            $favorite = Favorite::where('id', $id) ->firstOrFail();
            $favorite->delete();

            return ApiResponse::success('Removed from favorite', 200, null);
        } catch (\Throwable $th) {
            return ApiResponse::error('Something went wrong', 500, $th->getMessage());
        }
    }
}
