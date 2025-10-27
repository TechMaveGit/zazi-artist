<x-app-layout :title="__('Subscription Plans')">
    <div class="page-wrapper">
        <div class="content">
            <div
                class="d-md-flex pagetop_headercmntb d-block align-items-center justify-content-between page-breadcrumb ">
                <div class="my-auto ">
                    <h2 class="mb-1">Subscription Plans</h2>
                    <p class="page-subtitle">Manage subscription plans and pricing for beauty salons</p>
                </div>
                <div class="d-flex my-xl-auto right-content align-items-center flex-wrap ">

                    <div class="">
                        <a href="{{ route('subscription.create') }}"
                            class="btn btn-primary d-flex align-items-center cmnaddbtn">
                            <iconify-icon icon="icon-park-outline:add-one"></iconify-icon> Create New Plan
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

            <section class="subscriptionstats">
                <div class="row">
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="metric-card">
                            <div class="metric-content">
                                <div class="metric-info">
                                    <p class="metric-label">Total Plans</p>
                                    <p class="metric-value">{{ $subscriptions->count() }}</p>
                                </div>
                                <div class="metric-icon primary">
                                    <iconify-icon icon="proicons:star"></iconify-icon>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="metric-card">
                            <div class="metric-content">
                                <div class="metric-info">
                                    <p class="metric-label">Total Subscribers</p>
                                    <p class="metric-value">214</p>
                                </div>
                                <div class="metric-icon success">
                                    <iconify-icon icon="mynaui:users"></iconify-icon>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="metric-card">
                            <div class="metric-content">
                                <div class="metric-info">
                                    <p class="metric-label">Monthly Revenue</p>
                                    <p class="metric-value">$17,498</p>
                                </div>
                                <div class="metric-icon warning">
                                    <iconify-icon icon="hugeicons:dollar-02"></iconify-icon>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="metric-card">
                            <div class="metric-content">
                                <div class="metric-info">
                                    <p class="metric-label">Active Plans</p>
                                    <p class="metric-value">{{ $subscriptions->where('is_active', true)->count() }}</p>
                                </div>
                                <div class="metric-icon primary">
                                    <iconify-icon icon="hugeicons:floor-plan"></iconify-icon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="Subscriptions">
                <div class="row">
                    @forelse($subscriptions as $subscription)
                        <div class="col-lg-4 mb-4">
                            <div class="plan-card {{ $subscription->is_popular ? 'popular' : '' }}">
                                @if($subscription->is_popular)
                                    <span class="popular-badge">Popular</span>
                                @endif
                                <div class="plan-header">
                                    <div class="plan-title-section">
                                        <h6 class="plan-name">{{ $subscription->name }}</h6>
                                        <div class="plan-price">
                                            <span class="price">${{ number_format($subscription->price, 2) }}</span>
                                            <span class="period">/{{ $subscription->billing_period }}</span>
                                        </div>
                                    </div>
                                    <p class="plan-description">{{ $subscription->description }}</p>
                                </div>

                                <div class="plan-stats">
                                    <div class="stat">
                                        <div class="stat-value success">0</div> {{-- Placeholder for subscribers --}}
                                        <div class="stat-label">Subscribers</div>
                                    </div>
                                    <div class="stat">
                                        <div class="stat-value warning">$0</div> {{-- Placeholder for revenue --}}
                                        <div class="stat-label">Revenue</div>
                                    </div>
                                </div>

                                <div class="plan-body">
                                    <div class="plan-features">
                                        @forelse($subscription->features as $feature)
                                            <div class="feature">
                                                <div class="feature-dot"></div>
                                                {{ $feature }}
                                            </div>
                                        @empty
                                            <div class="feature">No features defined.</div>
                                        @endforelse
                                    </div>

                                    <div class="plan-actions">
                                        <button class="btn-icon view-plan-details" data-bs-toggle="modal" data-bs-target="#planDetailsModal" data-subscription-id="{{ $subscription->id }}">
                                            <iconify-icon icon="formkit:eye"></iconify-icon>
                                        </button>
                                        <a href="{{ route('subscription.edit', $subscription->id) }}" class="btn-icon">
                                            <iconify-icon icon="cuida:edit-outline"></iconify-icon>
                                        </a>
                                        <form action="{{ route('subscription.destroy', $subscription->id) }}" method="POST" class="d-inline">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="btn-icon text-danger" onclick="return confirm('Are you sure you want to delete this plan?')">
                                                <iconify-icon icon="fluent:delete-32-regular"></iconify-icon>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @empty
                        <div class="col-12">
                            <p>No subscription plans found. Create a new one!</p>
                        </div>
                    @endforelse
                </div>
            </section>



        </div>
    </div>



    <!-- Plan Details Modal -->
    <div class="modal fade custombottm_modalStyle" id="planDetailsModal" tabindex="-1"
        aria-labelledby="planDetailsModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title-section">
                        <h5 class="modal-title" id="planDetailsModalLabel">Plan Details</h5>
                        <div class="modal-badges" id="modalBadges"></div>
                    </div>
                    <div class="modal-actions">
                        <a href="#" class="btn btn-primary btn-sm" id="editPlanBtn">
                            <iconify-icon icon="cuida:edit-outline"></iconify-icon>
                            Edit Plan
                        </a>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <!-- Key Metrics -->
                        <div class="col-12 mb-4">
                            <div class="row" id="planMetrics">
                                <div class="col-md-3">
                                    <div class="metric-card text-center">
                                        <div class="metric-icon primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                data-lucide="dollar-sign" class="lucide lucide-dollar-sign">
                                                <line x1="12" x2="12" y1="2" y2="22">
                                                </line>
                                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                            </svg>
                                        </div>
                                        <div class="plmatric_content">
                                            <div class="metric-value" id="modalPrice">$0.00</div>
                                            <div class="metric-label" id="modalPeriod">/monthly</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="metric-card text-center">
                                        <div class="metric-icon success">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                data-lucide="users" class="lucide lucide-users">
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                                <circle cx="9" cy="7" r="4"></circle>
                                            </svg>
                                        </div>
                                        <div class="plmatric_content">
                                            <div class="metric-value">0</div>
                                            <div class="metric-label">Subscribers</div>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="metric-card text-center">
                                        <div class="metric-icon warning">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                data-lucide="trending-up" class="lucide lucide-trending-up">
                                                <path d="M16 7h6v6"></path>
                                                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                            </svg>
                                        </div>
                                        <div class="plmatric_content">
                                            <div class="metric-value">$0.00</div>
                                            <div class="metric-label">Monthly Revenue</div>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="metric-card text-center">
                                        <div class="metric-icon primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                data-lucide="star" class="lucide lucide-star">
                                                <path
                                                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div class="plmatric_content">
                                            <div class="metric-value" id="modalFeaturesCount">0</div>
                                            <div class="metric-label">Features</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Plan Information & Performance -->
                        <div class="col-lg-6">
                            <div class="card glass-card mb-4">
                                <div class="card-header">
                                    <h6 class="card-title">
                                        <iconify-icon icon="hugeicons:floor-plan"></iconify-icon>
                                        Plan Details
                                    </h6>
                                </div>
                                <div class="card-body">
                                    <div id="planDetails">
                                        <div class="detail-Title">
                                            <span class="detail-label">Description:</span>
                                            <span class="detail-value" id="modalDescription"></span>
                                        </div>
                                        <hr>
                                        <div class="detail-item">
                                            <span class="detail-label">Billing Cycle:</span>
                                            <span class="detail-value" id="modalBillingCycle"></span>
                                        </div>
                                        <div class="detail-item">
                                            <span class="detail-label">Max Salons:</span>
                                            <span class="detail-value" id="modalMaxSalons"></span>
                                        </div>
                                        <div class="detail-item">
                                            <span class="detail-label">Max Artists:</span>
                                            <span class="detail-value" id="modalMaxArtists"></span>
                                        </div>
                                        <hr>
                                        <div class="detail-item">
                                            <span class="detail-label">Created:</span>
                                            <span class="detail-value" id="modalCreatedAt"></span>
                                        </div>
                                        <div class="detail-item">
                                            <span class="detail-label">Last Modified:</span>
                                            <span class="detail-value" id="modalUpdatedAt"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card glass-card">
                                <div class="card-header">
                                    <h6 class="card-title">
                                        <iconify-icon icon="solar:graph-new-up-linear"></iconify-icon>
                                        Performance Insights
                                    </h6>
                                </div>
                                <div class="card-body">
                                    <div class="performance-metrics">
                                        <div class="performance-item success">
                                            <span>Conversion Rate</span>
                                            <span class="performance-value">N/A</span>
                                        </div>
                                        <div class="performance-item primary">
                                            <span>Retention Rate</span>
                                            <span class="performance-value">N/A</span>
                                        </div>
                                        <div class="performance-item warning">
                                            <span>Avg. Lifetime Value</span>
                                            <span class="performance-value">N/A</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Features & Activity -->
                        <div class="col-lg-6">
                            <div class="card glass-card mb-4">
                                <div class="card-header">
                                    <h6 class="card-title">
                                        <iconify-icon icon="proicons:star"></iconify-icon>
                                        Included Features
                                    </h6>
                                </div>
                                <div class="card-body">
                                    <div id="modalPlanFeatures">
                                        <!-- Features will be populated by JavaScript -->
                                    </div>
                                </div>
                            </div>

                            <div class="card glass-card">
                                <div class="card-header">
                                    <h6 class="card-title">
                                        <iconify-icon icon="quill:clock"></iconify-icon>
                                        Recent Activity
                                    </h6>
                                </div>
                                <div class="card-body">
                                    <div class="activity-list">
                                        <div class="activity-item">
                                            <div class="activity-dot success"></div>
                                            <div class="activity-content">
                                                <div class="activity-title">New subscription</div>
                                                <div class="activity-subtitle">Beauty Lounge subscribed • 2 hours ago
                                                </div>
                                            </div>
                                        </div>
                                        <div class="activity-item">
                                            <div class="activity-dot primary"></div>
                                            <div class="activity-content">
                                                <div class="activity-title">Plan updated</div>
                                                <div class="activity-subtitle">Feature list modified • 1 day ago</div>
                                            </div>
                                        </div>
                                        <div class="activity-item">
                                            <div class="activity-dot warning"></div>
                                            <div class="activity-content">
                                                <div class="activity-title">Subscription cancelled</div>
                                                <div class="activity-subtitle">Glamour Studio • 3 days ago</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const planDetailsModal = document.getElementById('planDetailsModal');
            planDetailsModal.addEventListener('show.bs.modal', function(event) {
                const button = event.relatedTarget;
                const subscriptionId = button.getAttribute('data-subscription-id');

                // Fetch subscription data via AJAX or use data passed from Blade (for simplicity, we'll use a placeholder here)
                // In a real application, you'd make an AJAX call to a route like /admin/subscriptions/{id}
                const subscriptions = @json($subscriptions);
                const subscription = subscriptions.find(sub => sub.id == subscriptionId);

                if (subscription) {
                    document.getElementById('planDetailsModalLabel').textContent = subscription.name;
                    document.getElementById('modalBadges').innerHTML = `
                        ${subscription.is_active ? '<span class="badge badge-success">Active</span>' : '<span class="badge badge-secondary">Inactive</span>'}
                        ${subscription.is_popular ? '<span class="badge badge-info ms-2">Popular</span>' : ''}
                    `;
                    document.getElementById('modalPrice').textContent = `$${parseFloat(subscription.price).toFixed(2)}`;
                    document.getElementById('modalPeriod').textContent = `/${subscription.billing_period}`;
                    document.getElementById('modalFeaturesCount').textContent = subscription.features ? subscription.features.length : 0;
                    document.getElementById('modalDescription').textContent = subscription.description || 'No description provided.';
                    document.getElementById('modalBillingCycle').textContent = subscription.billing_period;
                    document.getElementById('modalMaxSalons').textContent = subscription.max_branches;
                    document.getElementById('modalMaxArtists').textContent = subscription.max_artists_per_branch;
                    document.getElementById('modalCreatedAt').textContent = new Date(subscription.created_at).toLocaleDateString();
                    document.getElementById('modalUpdatedAt').textContent = new Date(subscription.updated_at).toLocaleDateString();

                    const modalPlanFeatures = document.getElementById('modalPlanFeatures');
                    modalPlanFeatures.innerHTML = '';
                    if (subscription.features && subscription.features.length > 0) {
                        subscription.features.forEach(feature => {
                            const featureElement = document.createElement('div');
                            featureElement.className = 'feature mb-2';
                            featureElement.innerHTML = `<iconify-icon icon="prime:check-circle"></iconify-icon><span>${feature}</span>`;
                            modalPlanFeatures.appendChild(featureElement);
                        });
                    } else {
                        modalPlanFeatures.innerHTML = '<p>No features included.</p>';
                    }

                    // Update edit button link
                    document.getElementById('editPlanBtn').href = `/admin/subscriptions/${subscription.id}/edit`; // Assuming a route structure
                }
            });
        });
    </script>
</x-app-layout>
