<?php

namespace App\Http\Controllers;

use App\Models\SubscriptionInvoice;
use App\Models\SubscriptionInvoiceItem;
use App\Models\User;
use App\Models\Shop;
use App\Models\Subscription;
use App\Models\UserSubscription;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class SubscriptionInvoiceController extends Controller
{
    public function downloadPdf($subscriptionInvoiceId)
    {
        $subscriptionInvoice = SubscriptionInvoice::with(['user.shop', 'userSubscription.subscription', 'items'])->findOrFail(decrypt($subscriptionInvoiceId));
        
        $subscriptionInvoiceData =  prepareSubscriptionInvoiceData($subscriptionInvoice?->id);
        $pdf = Pdf::loadView('pdf.subscription-invoice', [
            'invoice' => $subscriptionInvoiceData,
        ])->setPaper('a4');

        return $pdf->stream('SubscriptionInvoice-' . $subscriptionInvoice->invoice_number . '.pdf');
    }

}
