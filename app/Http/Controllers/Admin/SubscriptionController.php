<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSubscriptionRequest;
use App\Models\Subscription;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    public function index(Request $request)
    {
        $subscriptions = Subscription::all();
        return view('subscriptions.index', compact('subscriptions'));
    }

    public function create(Request $request)
    {
        return view('subscriptions.create');
    }

    public function store(StoreSubscriptionRequest $request)
    {
        $validated = $request->validated();
        Subscription::create($validated);
        return redirect()->route('subscription.index')->with('success', 'Subscription plan created successfully.');
    }

    public function edit(Subscription $subscription)
    {
        return view('subscriptions.edit', compact('subscription'));
    }

    public function update(StoreSubscriptionRequest $request, Subscription $subscription)
    {
        $validated = $request->validated();
        $subscription->update($validated);
        return redirect()->route('subscription.index')->with('success', 'Subscription plan updated successfully.');
    }

    public function destroy(Subscription $subscription)
    {
        $subscription->delete();
        return redirect()->route('subscription.index')->with('success', 'Subscription plan deleted successfully.');
    }
}
