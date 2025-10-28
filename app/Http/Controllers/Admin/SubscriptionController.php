<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSubscriptionRequest;
use App\Models\PlanFeature;
use App\Models\Subscription;
use App\Models\User;
use App\Models\UserSubscription;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    use ApiResponse;
    public function index(Request $request)
    {
        $subscriptions = Subscription::with('userSubscriptions')->withCount('userSubscriptions')->withSum('userSubscriptions', 'price')->get();
        $userSubsciptions = UserSubscription::where('status', 'active')->get();
        $monthlyRevenue = UserSubscription::whereIn('status', ['active', 'completed'])
            ->whereMonth('purchase_date', now()->month)
            ->whereYear('purchase_date', now()->year)
            ->sum('price');

        // Fetch all user subscriptions with user and subscription details for modal filtering
        $allUserSubscriptions = UserSubscription::with('user', 'subscription')->latest()->get();

        return view('subscriptions.index', compact('subscriptions', 'userSubsciptions', 'monthlyRevenue', 'allUserSubscriptions'));
    }

    public function create(Request $request)
    {
        $features = PlanFeature::where('status', true)->get();
        return view('subscriptions.create', compact('features'));
    }

    public function store(StoreSubscriptionRequest $request)
    {
        try {
            $validated = $request->validated();
            Subscription::create($validated);
            return ApiResponse::success('Subscription plan created successfully.', 200, ['redirect' => route('subscription.index')]);
        } catch (\Throwable $th) {
            return ApiResponse::error('Failed to create subscription plan. ' . $th->getMessage(), 500);
        }
    }

    public function edit(Subscription $subscription)
    {
        $features = PlanFeature::where('status', true)->get();
        return view('subscriptions.edit', compact('subscription', 'features'));
    }

    public function update(StoreSubscriptionRequest $request, Subscription $subscription)
    {
        try {
            $validated = $request->validated();
            $subscription->update($validated);
            return ApiResponse::success('Subscription plan updated successfully.', 200, ['redirect' => route('subscription.index')]);
        } catch (\Throwable $th) {
            return ApiResponse::error('Failed to update subscription plan. ' . $th->getMessage(), 500);
        }
    }

    public function destroy(Subscription $subscription)
    {
        $subscription->delete();
        return ApiResponse::success('Subscription plan deleted successfully.', 200);
    }
}
