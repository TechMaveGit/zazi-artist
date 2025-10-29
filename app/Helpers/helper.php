<?php

use Illuminate\Support\Facades\Crypt;

if (!function_exists('calculateDistance')) {
    function calculateDistance(float $lat1, float $lon1, float $lat2, float $lon2, string $unit = 'km'): float
    {
        if (($lat1 == $lat2) && ($lon1 == $lon2)) {
            return 0;
        }

        $earth_radius = ($unit === 'miles') ? 3959 : 6371;

        $dLat = deg2rad($lat2 - $lat1);
        $dLon = deg2rad($lon2 - $lon1);

        $a = sin($dLat / 2) * sin($dLat / 2) +
            cos(deg2rad($lat1)) * cos(deg2rad($lat2)) *
            sin($dLon / 2) * sin($dLon / 2);

        $c = 2 * atan2(sqrt($a), sqrt(1 - $a));

        return round($earth_radius * $c, 2);
    }
}

if (!function_exists('badgeColor')) {
    function badgeColor(string $status)
    {
        return match (strtolower($status)) {
            'active' => 'badge-success',
            'inactive' => 'badge-danger',
            'pending' => 'badge-warning',
            'banned' => 'badge-dark',
            'notification' => 'badge-danger',
            'promotion' => 'badge-success',
            'welcome' => 'badge-primary',
            'renewel' => 'badge-warning',
            default => 'badge-primary',
        };
    }
}

if (!function_exists('decrypt')) {
    function decrypt($value)
    {
        return Crypt::decryptString($value);
    }
}

if (!function_exists('encrypt')) {
    function encrypt($value)
    {
        return Crypt::encryptString($value);
    }
}

if (!function_exists('prepareSubscriptionInvoiceData')) {
    function prepareSubscriptionInvoiceData($invoiceId ): object {
        $subscriptionInvoice = \App\Models\SubscriptionInvoice::with('items', 'user.shop')->findOrFail($invoiceId);
        $user = $subscriptionInvoice->user;
        $shop = $user->shop->first();
        $userSubscription = $subscriptionInvoice->userSubscription;
        $plan = $userSubscription->subscription;
        return (object) [
            'invoice_number' => $subscriptionInvoice->invoice_number,
            'invoice_date' => $subscriptionInvoice->date->format('F d, Y'),
            'due_date' => $subscriptionInvoice->due_date->format('F d, Y'),
            'billing_period' => $subscriptionInvoice->date->format('F d, Y') . ' – ' . $subscriptionInvoice->due_date->format('F d, Y'),
            'customer_name' => $user->name,
            'company_name' => $shop->name ?? 'N/A',
            'customer_address' => $shop->address ?? 'N/A',
            'customer_email' => $user->email,
            'customer_phone' => $user->phone,
            'bill_from_company' => config('app.name'),
            'bill_from_address' => '456 Innovation Drive, Tech City, USA 67890',
            'bill_from_email' => 'billing@' . parse_url(config('app.url'), PHP_URL_HOST),
            'bill_from_phone' => '(555) 987-6543',
            'bill_from_website' => config('app.url'),
            'items' => $subscriptionInvoice->items->map(function ($item, $key) {
                return (object)[
                    'item_number' => $key + 1,
                    'description' => $item->description,
                    'quantity' => $item->quantity,
                    'unit_price' => $item->price,
                    'total' => $item->total,
                ];
            })->toArray(),
            'subtotal' => $subscriptionInvoice->subtotal,
            'tax_rate' => $subscriptionInvoice->tax,
            'tax_amount' => 0,
            'grand_total' => $subscriptionInvoice->grand_total,
            'payment_terms' => [
                'Payment received and processed successfully on ' . $subscriptionInvoice->date->format('F j, Y') . '.',
                'Your subscription is now active.',
                'For questions, contact billing@' . parse_url(config('app.url'), PHP_URL_HOST) . '.',
            ],
            'notes' => [
                'This invoice is for the initial purchase of a ' . ($plan->name ?? 'subscription') . ' subscription.',
                'Thank you for your business!',
            ],
        ];
    }
}
