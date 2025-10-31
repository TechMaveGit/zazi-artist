<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\PlanFeature;
use App\Models\Subscription;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::guard('salon')->user();
        $plans = Subscription::where('is_active', 1)->get()->groupBy('billing_period');
        $plan_features = PlanFeature::all();
        return view('web.index', compact('user', 'plans', 'plan_features'));
    }

    public function contact()
    {
        return view('web.contact');
    }

    public function profile()
    {
        $user = Auth::guard('salon')->user();
        if ($user) {
            $user = User::with('userSubscription.subscription')->find($user->id);
        }
        $activeSubscription = $user->userSubscription()->where('status', 'active')->first();
        $transactions = $user->userSubscription()->orderBy('purchase_date', 'desc')->get();
        $shop = $user->shop;
        $shopLocations = $shop->locations;
        $galleryImages = $shop->galleryImages;
        $serviceCategorys = Category::all();
        $artists = $shop->artists;
        return view('web.profile', compact('user', 'artists', 'activeSubscription', 'transactions','shop', 'shopLocations','galleryImages','serviceCategorys'));
    }

    public function checkout($id)
    {
        $user = Auth::guard('salon')->user();
        $plan = Subscription::find($id);
        return view('web.checkout', compact('user', 'plan'));
    }
}
