<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\DataTables\SalonDataTable;
use App\Models\Shop;
use App\Models\Subscription;

class SalonController extends Controller
{
    public function index(SalonDataTable $dataTable)
    {
        $totalSalons = Shop::count();
        $activeSalons = Shop::where('status', 'active')->count();
        $inactiveSalons = Shop::where('status', 'inactive')->count();
        $suspendedSalons = Shop::where('status', 'suspended')->count();

        $plans = Subscription::distinct()->pluck('name')->toArray();
        $cities = Shop::distinct()->pluck('city')->filter()->toArray();
        $states = Shop::distinct()->pluck('state')->filter()->toArray();
        $countries = Shop::distinct()->pluck('country')->filter()->toArray();

        $locations = array_unique(array_merge($cities, $states, $countries));
        sort($locations);

        return $dataTable->render('salons.index', compact('totalSalons', 'activeSalons', 'inactiveSalons', 'suspendedSalons', 'plans', 'locations'));
    }

    public function show(Shop $salon)
    {   
        $salon->load([
            'artists', 
            'galleryImages',
            'services.category',
            'owner.userSubscription.subscription', 
            'bookings.invoices.invoiceItems',
            'bookings.invoices.payments'
        ]);
        $currentSubscription = $salon?->owner?->userSubscription->where('status', 'active')->first();
        $allSubscriptions = $salon?->owner?->userSubscription->sortByDesc('created_at');

        return view('salons.show', compact('salon','currentSubscription', 'allSubscriptions'));
    }
}
