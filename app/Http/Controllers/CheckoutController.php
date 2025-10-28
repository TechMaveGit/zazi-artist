<?php

namespace App\Http\Controllers;

use App\Models\PlanFeature;
use App\Models\Shop;
use App\Models\Subscription;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Stripe\Stripe;
use Stripe\Charge;

class CheckoutController extends Controller
{
    public function showCheckoutForm($id)
    {
        $plan = Subscription::findOrFail($id);
        return view('web.checkout', compact('plan'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'fullName' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'mobileNo' => 'required|string|max:20',
            'address1' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'state' => 'required|string|max:255',
            'zipCode' => 'required|string|max:10',
            'stripeToken' => 'required|string',
            'plan_id' => 'required|exists:plan_features,id',
        ]);

        $plan = PlanFeature::findOrFail($request->plan_id);

        Stripe::setApiKey(env('STRIPE_SECRET'));

        try {
            Charge::create([
                'amount' => $plan->price * 100, // Amount in cents
                'currency' => 'usd',
                'description' => 'Subscription for ' . $plan->name . ' Plan',
                'source' => $request->stripeToken,
            ]);

            $password = Str::random(10); // Generate a random password
            $user = User::create([
                'name' => $request->fullName,
                'email' => $request->email,
                'phone' => $request->mobileNo,
                'password' => Hash::make($password),
                'role' => 'salon', // Assign a default role
            ]);

            Shop::create([
                'user_id' => $user->id,
                'name' => $request->fullName . "'s Shop", // Default shop name
                'email' => $request->email,
                'phone' => $request->mobileNo,
                'address' => $request->address1,
                'city' => $request->city,
                'state' => $request->state,
                'zip_code' => $request->zipCode,
                'description' => 'A new shop created after plan purchase.',
            ]);

            Auth::login($user);

            // Optionally send email with login details
            // Mail::to($user->email)->send(new WelcomeUserMail($user, $password));

            return redirect()->route('web.profile')->with('success', 'Payment successful and shop created!');

        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Payment failed: ' . $e->getMessage());
        }
    }
}
