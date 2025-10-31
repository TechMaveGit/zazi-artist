<div id="subscriptions" class="content-section">
            <div class="content-header">
                <div>
                    <h2 class="content-title">Active Subscription</h2>
                    <p class="content-subtitle">View and manage your subscription plan</p>
                </div>
            </div>

            <!-- Active Subscription -->
            @if ($activeSubscription)
                <div class="card">
                    <div class="card-header">
                        <div class="planHead">
                            <div class="PlanLeft">
                                <div class="iconPlan">
                                    <iconify-icon icon="mdi:badge-outline"></iconify-icon>
                                </div>
                                <div class="PlanTitle">
                                    <h5>{{ $activeSubscription->subscription->name ?? 'N/A' }} Plan</h5>
                                </div>
                            </div>
                            <div class="planRight">
                                <span
                                    class="badge badge-soft-success">{{ ucfirst($activeSubscription->status) }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="planBody">
                            <div class="PlanDt">
                                <h6>Price</h6>
                                <p>${{ number_format($activeSubscription->price, 2) }}/{{ $activeSubscription->subscription->billing_period ?? 'N/A' }}
                                </p>
                            </div>
                            <div class="PlanDt">
                                <h6>Purchase Date</h6>
                                <p>{{ $activeSubscription->purchase_date ? $activeSubscription->purchase_date->format('d M, Y') : 'N/A' }}
                                </p>
                            </div>
                            <div class="PlanDt">
                                <h6>Valid On</h6>
                                <p>{{ $activeSubscription->expiry_date ? $activeSubscription->expiry_date->format('d M, Y') : 'N/A' }}
                                </p>
                            </div>
                            <div class="PlanDt">
                                <h6>Payment Method</h6>
                                <p>{{ $activeSubscription->payment_method ?? 'N/A' }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            @else
                <div class="card">
                    <div class="card-body">
                        <p class="text-center">No active subscription found.</p>
                    </div>
                </div>
            @endif

            <!-- Previous Subscription History -->
            <div class="card mt-3">
                <div class="card-header">
                    <div class="planHead">
                        <div class="PlanLeft">
                            <div class="PlanTitle">
                                <h5>Previous Subscription History</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body pb-0">
                    <div class="TableMainWrap">
                        <table class="table common-datatable withoutActionTR nowrap w-100">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Plan</th>
                                    <th>Price</th>
                                    <th>Purchase Date</th>
                                    <th>Expire Date</th>
                                    <th>Payment Method</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($user->userSubscription as $eachSub)
                                    <tr>
                                        <td><a href="{{ route('web.subscription.invoice.download', encrypt($eachSub?->invoice?->id)) }}"
                                                class="text-primary"
                                                target="_blank">#{{ $eachSub?->invoice?->invoice_number }}</a></td>
                                        <td>{{ $eachSub?->subscription?->name ?? 'N/A' }}</td>
                                        <td>${{ number_format($eachSub->price, 2) }}/{{ $eachSub?->subscription?->billing_period ?? 'N/A' }}
                                        </td>
                                        <td>{{ $eachSub?->purchase_date ? $eachSub?->purchase_date->format('d M, Y') : 'N/A' }}
                                        </td>
                                        <td>{{ $eachSub->expiry_date ? $eachSub->expiry_date->format('d M, Y') : 'N/A' }}
                                        </td>
                                        <td>{{ $eachSub->payment_method ?? 'N/A' }}</td>
                                        <td><span
                                                class="badge badge-soft-{{ $eachSub->status === 'active' ? 'success' : 'danger' }}">{{ ucfirst($eachSub->status) }}</span>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>