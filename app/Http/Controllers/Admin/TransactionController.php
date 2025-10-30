<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\DataTables\TransactionDataTable;
use App\Models\SubscriptionInvoice;
use App\Models\Subscription; // Assuming Subscription model for plan names

class TransactionController extends Controller
{
    public function index(TransactionDataTable $dataTable)
    {
        $totalRevenue = SubscriptionInvoice::where('status', 'paid')->sum('grand_total');
        $pendingPayments = SubscriptionInvoice::where('status', 'pending')->count();
        $failedTransactions = SubscriptionInvoice::where('status', 'failed')->count();
        $totalTransactions = SubscriptionInvoice::count();
        $successRate = $totalTransactions > 0 ? (SubscriptionInvoice::where('status', 'paid')->count() / $totalTransactions) * 100 : 0;

        // Calculate success rate for last 30 days and change
        $now = now();
        $thirtyDaysAgo = $now->copy()->subDays(30);
        $sixtyDaysAgo = $now->copy()->subDays(60);

        $totalTransactionsLast30Days = SubscriptionInvoice::whereBetween('date', [$thirtyDaysAgo, $now])->count();
        $paidTransactionsLast30Days = SubscriptionInvoice::where('status', 'paid')->whereBetween('date', [$thirtyDaysAgo, $now])->count();
        $successRateLast30Days = $totalTransactionsLast30Days > 0 ? ($paidTransactionsLast30Days / $totalTransactionsLast30Days) * 100 : 0;

        $totalTransactionsPrev30Days = SubscriptionInvoice::whereBetween('date', [$sixtyDaysAgo, $thirtyDaysAgo])->count();
        $paidTransactionsPrev30Days = SubscriptionInvoice::where('status', 'paid')->whereBetween('date', [$sixtyDaysAgo, $thirtyDaysAgo])->count();
        $successRatePrev30Days = $totalTransactionsPrev30Days > 0 ? ($paidTransactionsPrev30Days / $totalTransactionsPrev30Days) * 100 : 0;

        $successRateChange = 0;
        if ($successRatePrev30Days > 0) {
            $successRateChange = (($successRateLast30Days - $successRatePrev30Days) / $successRatePrev30Days) * 100;
        } elseif ($successRateLast30Days > 0) {
            $successRateChange = 100; // If previous was 0 and current is > 0, it's a 100% increase
        }

        $plans = Subscription::distinct()->pluck('name')->toArray();
        $statuses = ['paid', 'pending', 'failed']; 

        return $dataTable->render('transactions.index', [
            'totalRevenue' => $totalRevenue,
            'pendingPayments' => $pendingPayments,
            'failedTransactions' => $failedTransactions,
            'successRate' => $successRate,
            'plans' => $plans,
            'statuses' => $statuses,
            'successRateLast30Days' => $successRateLast30Days,
            'successRateChange' => $successRateChange,
        ]);
    }

    public function show(SubscriptionInvoice $transaction)
    {
        // You can load relationships here if needed for the show view
        $transaction->load(['userSubscription.user.shop', 'userSubscription.subscription']);
        return view('transactions.show', compact('transaction'));
    }
    
}
