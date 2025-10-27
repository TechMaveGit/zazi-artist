<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\RecentSearch;
use App\Models\Shop;
use App\Models\ShopService;
use App\Models\User;
use App\Traits\ApiResponse;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    use ApiResponse;
    public function index(Request $request)
    {
        try {
            $user = auth()->user();
            $data = [];
            if ($user->hasRole('customer')) {
                $data['promotion'] = [];


                //shops nearby
                $shops = Shop::with(['scheduled' => fn($query) => $query->where('day', date('l'))])->select('id', 'name', 'email', 'lat', 'lng', 'banner_img','is_opened_today')->get();
                $data['shops'] = Collection::make($shops)->sortBy('distance')->take(5);

                //latest visits
                $data['latest_visits'] = User::whereHas('roles', function ($query) {
                    $query->where('name', 'customer');
                })
                ->whereHas('bookings', function ($query) {
                    $query->where('status', 'completed')->orderBy('created_at', 'desc');
                })
                ->orderBy('id', 'desc')->select('id', 'name', 'email', 'profile')->limit(5)->get();

                //top rated artist
                $data['artists'] = User::whereHas('roles', function ($query) {
                    $query->where('name', 'artist');
                })->select('id', 'name', 'email', 'profile')->orderBy('id', 'desc')->limit(5)->get();

                return ApiResponse::success('Data retrieved successfully', 200, $data);
            } elseif ($user->hasRole('artist') || $user->hasRole('salon')) {
                if(empty($request->get('shop_id'))){
                    return ApiResponse::error('Shop ID is required', 400);
                }
                $shop = Shop::where('id', $request->get('shop_id'))->first();
                if(empty($shop)){
                    return ApiResponse::error('Shop not found', 400);
                }
                $service= ShopService::where('shop_id', $shop->id)->get();
                $data['counts']['pending_bookings'] = $shop?->bookings()->where('status', 'pending')->count() ?? 0;
                $data['counts']['total_bookings'] = $shop?->bookings()?->count() ?? 0;
                $data['counts']['total_services'] = $service->count();
                $data['bookings'] = $shop?->bookings()?->whereIn('status', ['pending', 'confirmed', 'in_progress'])->orderBy('id', 'desc')->get();
                return ApiResponse::success('Data retrieved successfully', 200, $data);
            }
        } catch (\Throwable $th) {
            return ApiResponse::error('Something went wrong', 500, $th->getMessage());
        }
    }

    public function artists(Request $request)
    {
        try {
            $perPage = $request->get('per_page', 1);

            $data = User::whereHas('roles', function ($query) {
                $query->where('name', 'artist');
            })
                ->select('id', 'name', 'email', 'phone', 'profile')
                ->orderBy('id', 'desc')
                ->paginate($perPage);

            return ApiResponse::success('Data retrieved successfully', 200, $data);
        } catch (\Throwable $th) {
            return ApiResponse::error('Something went wrong', 500, $th->getMessage());
        }
    }

    public function customers(Request $request)
    {
        try {
            $perPage = $request->get('per_page', 1);

            $data = User::whereHas('roles', function ($query) {
                $query->where('name', 'customer');
            })
                ->select('id', 'name', 'email', 'phone', 'profile')
                ->orderBy('id', 'desc')
                ->paginate($perPage);

            return ApiResponse::success('Data retrieved successfully', 200, $data);
        } catch (\Throwable $th) {
            return ApiResponse::error('Something went wrong', 500, $th->getMessage());
        }
    }

    public function globalSearch(Request $request)
    {
        try {
            $perPage = $request->get('per_page', 10);
            $query = $request->get('search', '');
            $sortBy = $request->input('filters.sort_by', null);
            $categories = $request->input('filters.categories', []); 
            $user_lat = $request->input('lat', null);
            $user_lng = $request->input('lng', null);

            //stored recent search
            RecentSearch::updateOrCreate([
                'user_id' => auth()->id(),
                'query' => $query
            ]);
            
            $shopsQuery = Shop::query()->select('id', 'name', 'lat', 'lng', 'banner_img');
            if ($query) {
                $shopsQuery->where('name', 'like', "%{$query}%");
            }

            if (!empty($categories)) {
                // $shopsQuery->whereIn('category', $categories); 
            }

            if ($sortBy === 'distance' && $user_lat && $user_lng) {
                $shopsQuery->selectRaw("*, (6371 * acos(
                    cos(radians(?)) * cos(radians(lat)) *
                    cos(radians(lng) - radians(?)) +
                    sin(radians(?)) * sin(radians(lat))
                )) AS distance", [$user_lat, $user_lng, $user_lat])
                    ->orderBy('distance');
            } else {
                $shopsQuery->orderBy('name');
            }

            $shops = $shopsQuery->get();

            $data['query'] = $query;
            $data['search_result'] = $shops;
            $data['recent_searches']= RecentSearch::where('user_id', auth()->user()->id)->select('id', 'query')->orderBy('id', 'desc')->limit(10)->get();
            
            return ApiResponse::success('Data retrieved successfully', 200, $data);
        } catch (\Throwable $th) {
            return ApiResponse::error('Something went wrong', 500, $th->getMessage());
        }
    }
}
