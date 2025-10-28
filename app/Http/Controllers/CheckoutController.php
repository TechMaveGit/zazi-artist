<?php

namespace App\Http\Controllers;

use App\Models\PlanFeature;
use App\Models\Shop;
use App\Models\Subscription;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Mail\WelcomeUserMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Stripe\Stripe;
use Stripe\PaymentIntent;

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
            'address2' => 'nullable|string|max:255',
            'city' => 'required|string|max:255',
            'state' => 'required|string|max:255',
            'zipCode' => 'required|string|max:10',
            'stripeToken' => 'required|string',
            'plan_id' => 'required|exists:subscriptions,id',
        ]);
        $plan = Subscription::findOrFail($request->plan_id);

        Stripe::setApiKey(env('STRIPE_SECRET'));

        try {
            $paymentIntent = PaymentIntent::create([
                'amount' => $plan->price * 100, 
                'currency' => 'usd',
                'payment_method' => $request->stripeToken,
                'confirmation_method' => 'manual',
                'confirm' => true,
                'description' => 'Subscription for ' . $plan->name . ' Plan',
                'return_url' => route('web.profile'), 
            ]);

            if ($paymentIntent->status === 'succeeded') {
                $password = Str::random(10);
                $user = User::create([
                    'name' => $request->fullName,
                    'email' => $request->email,
                    'phone' => $request->mobileNo,
                    'password' => Hash::make($password),
                    'role' => 'salon', 
                ]);

                $user->assignRole('salon');

                Shop::create([
                    'user_id' => $user->id,
                    'name' => $request->fullName . "'s Shop", 
                    'email' => $request->email,
                    'dial_code' => '1',
                    'phone' => $request->mobileNo,
                    'address' => $request->address1,
                    'country' => 'USA',
                    'city' => $request->city,
                    'state' => $request->state,
                    'zipcode' => $request->zipCode,
                    'description' => 'A new shop created after plan purchase.',
                ]);

                Auth::guard('salon')->login($user);

                $shopConfigMessage = "Please log in and navigate to your profile to complete your shop's setup, including adding services, scheduling, and gallery images.";
                Mail::to($user->email)->send(new WelcomeUserMail($user, $password, $shopConfigMessage));
                return redirect()->route('web.profile')->with('success', 'Payment successful and shop created!');
            } else {
                return redirect()->back()->with('error', 'Payment failed: ' . $paymentIntent->last_payment_error->message ?? 'Unknown error.');
            }

        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Payment failed: ' . $e->getMessage());
        }
    }
}
