<x-app-layout>
    <div class="page-wrapper">
        <div class="content">
            <div
                class="d-md-flex pagetop_headercmntb d-block align-items-center justify-content-between page-breadcrumb ">
                <div class="my-auto ">
                    <h2 class="mb-1">Transaction Details</h2>
                    <p class="page-subtitle">Details for Invoice ID: {{ $transaction->invoice_number }}</p>
                </div>
                <div class="d-flex my-xl-auto right-content align-items-center flex-wrap ">
                    <div class="me-2">
                        <a href="{{ route('web.subscription.invoice.download', encrypt($transaction->id)) }}" class="btn btn-primary" target="_blank">
                            <iconify-icon icon="solar:download-minimalistic-linear"></iconify-icon> Download Invoice
                        </a>
                    </div>
                    <div class="">
                        <a href="{{ route('transactions.index') }}" class="btn refreshpagebtn">
                            <iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Transactions
                        </a>
                    </div>
                    <div class="head-icons ms-2 headicon_innerpage">
                        <a href="javascript:void(0);" class="" data-bs-toggle="tooltip" data-bs-placement="top"
                            data-bs-original-title="Collapse" id="collapse-header">
                            <i class="ti ti-chevrons-up"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Transaction Information</h5>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <p><strong>Transaction ID:</strong> {{ $transaction->invoice_number }}</p>
                            <p><strong>Salon Name:</strong> {{ $transaction->userSubscription->user->shop->first()->name ?? 'N/A' }}</p>
                            <p><strong>Plan:</strong> {{ $transaction->userSubscription->subscription->name ?? 'N/A' }}</p>
                            <p><strong>Amount:</strong> ${{ number_format($transaction->grand_total, 2) }}</p>
                            <p><strong>Status:</strong> {{ ucfirst($transaction->status) }}</p>
                        </div>
                        <div class="col-md-6">
                            <p><strong>Date:</strong> {{ $transaction->date->format('d M, Y') }}</p>
                            <p><strong>Payment Method:</strong> {{ $transaction->payment_method }}</p>
                            <p><strong>Subtotal:</strong> ${{ number_format($transaction->subtotal, 2) }}</p>
                            <p><strong>Discount:</strong> ${{ number_format($transaction->discount, 2) }}</p>
                            <p><strong>Tax:</strong> ${{ number_format($transaction->tax, 2) }}</p>
                        </div>
                    </div>
                    @if($transaction->note)
                        <hr>
                        <p><strong>Note:</strong> {{ $transaction->note }}</p>
                    @endif
                </div>
            </div>

        </div>
    </div>
</x-app-layout>
