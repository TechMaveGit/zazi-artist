<?php

namespace App\Http\Controllers;

use App\Models\PlanFeature;
use App\Models\Subscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{   
    public function index(Request $request) {
        $user = Auth::guard('salon')->user();
        $plans= Subscription::where('is_active',1)->get()->groupBy('billing_period');
        $plan_features= PlanFeature::all();
        return view('web.index', compact('user','plans','plan_features'));
    }

    public function contact() {
        return view('web.contact');
    }

    public function profile() {
        $user = Auth::guard('salon')->user();
        return view('web.profile', compact('user'));
    }

    public function checkout($id) {
        $user = Auth::guard('salon')->user();
        $plan= Subscription::find($id);
        return view('web.checkout', compact('user','plan'));
    }
}
