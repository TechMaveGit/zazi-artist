<div id="transaction" class="content-section">
            <div class="content-header">
                <div>
                    <h2 class="content-title">Transaction History</h2>
                    <p class="content-subtitle">View and manage your payment transactions</p>
                </div>
            </div>

            <!-- Transaction Filters -->
            <div class="form-card">
                <h3 class="card-title">Filters</h3>
                <div class="transaction-filters">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group">
                                <label class="form-label">Date Range</label>
                                <select class="form-control" id="dateRange">
                                    <option value="all">All Time</option>
                                    <option value="today">Today</option>
                                    <option value="week">This Week</option>
                                    <option value="month" selected>This Month</option>
                                    <option value="quarter">This Quarter</option>
                                    <option value="year">This Year</option>
                                    <option value="custom">Custom Range</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label class="form-label">Transaction Type</label>
                                <select class="form-control" id="transactionType">
                                    <option value="all">All Types</option>
                                    <option value="subscription">Subscription</option>
                                    <option value="booking">Booking Payment</option>
                                    <option value="refund">Refund</option>
                                    <option value="addon">Add-on Services</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label class="form-label">Status</label>
                                <select class="form-control" id="transactionStatus">
                                    <option value="all">All Status</option>
                                    <option value="completed">Completed</option>
                                    <option value="pending">Pending</option>
                                    <option value="failed">Failed</option>
                                    <option value="refunded">Refunded</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label class="form-label">Amount Range</label>
                                <select class="form-control" id="amountRange">
                                    <option value="all">All Amounts</option>
                                    <option value="0-25">$0 - $25</option>
                                    <option value="25-50">$25 - $50</option>
                                    <option value="50-100">$50 - $100</option>
                                    <option value="100+">$100+</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="filter-actions">
                        <button class="btn-custom btn-primary-custom" onclick="applyFilters()">
                            <i class="fas fa-filter"></i>
                            Apply Filters
                        </button>
                        <button class="btn-custom btn-secondary-custom" onclick="clearFilters()">
                            <i class="fas fa-times"></i>
                            Clear
                        </button>
                    </div>
                </div>
            </div>

            <div class="card mt-3">
                <div class="card-header">
                    <div class="planHead">
                        <div class="PlanLeft">
                            <div class="PlanTitle">
                                <h5>Overall Transaction history</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body pb-0">
                    <div class="TableMainWrap">
                        <table class="table common-datatable withoutActionTR nowrap w-100">
                            <thead>
                                <tr>
                                    <th>Transaction ID</th>
                                    <th>Date & Time</th>
                                    <th>Type</th>
                                    <th>Description</th>
                                    <th>Amount</th>
                                    <th>Payment Method</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                @forelse($transactions as $transaction)
                                    <tr>
                                        <td>{{ $transaction->stripe_payment_intent_id ?? 'N/A' }}</td>
                                        <td>{{ $transaction->purchase_date ? $transaction->purchase_date->format('d M, Y h:i A') : 'N/A' }}
                                        </td>
                                        <td>Subscription</td>
                                        <td>{{ $transaction->subscription->name ?? 'N/A' }} Plan</td>
                                        <td>${{ number_format($transaction->price, 2) }}</td>
                                        <td>
                                            @if ($transaction->payment_method == 'card')
                                                <iconify-icon icon="logos:visa" width="20"></iconify-icon> ****
                                                {{ substr($transaction->stripe_response['card']['last4'] ?? 'N/A', -4) }}
                                            @elseif($transaction->payment_method == 'paypal')
                                                <iconify-icon icon="logos:paypal" width="14"></iconify-icon>
                                                PayPal
                                            @else
                                                {{ $transaction->payment_method ?? 'N/A' }}
                                            @endif
                                        </td>
                                        <td><span
                                                class="badge badge-soft-{{ $transaction->status === 'active' || $transaction->status === 'completed' ? 'success' : 'danger' }}">{{ ucfirst($transaction->status) }}</span>
                                        </td>
                                    </tr>
                                @empty
                                    <tr>
                                        <td colspan="7" class="text-center">No transactions found.</td>
                                    </tr>
                                @endforelse
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>