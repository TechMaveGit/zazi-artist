@extends('layouts.main')
@section('main-content')

    <div class="page-wrapper">
        <div class="content">
            <div class="d-md-flex pagetop_headercmntb d-block align-items-center justify-content-between page-breadcrumb ">
                <div class="my-auto ">
                    <h2 class="mb-1">Subscription Plans</h2>
                    <p class="page-subtitle">Manage subscription plans and pricing for beauty salons</p>
                </div>
                <div class="d-flex my-xl-auto right-content align-items-center flex-wrap ">

                    <div class="">
                        <a href="{{route('subscription.create')}}" class="btn btn-primary d-flex align-items-center cmnaddbtn">
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
                                    <p class="metric-value">3</p>
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
                                    <p class="metric-value">3</p>
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
                    <div class="col-lg-4 mb-4">
                        <div class="plan-card">
                            <div class="plan-header">
                                <div class="plan-title-section">
                                    <h6 class="plan-name">Basic Plan</h6>
                                    <div class="plan-price">
                                        <span class="price">$49.99</span>
                                        <span class="period">/monthly</span>
                                    </div>
                                </div>
                                <p class="plan-description">Perfect for small salons just getting started with basic
                                    features and essential tools.</p>
                            </div>

                            <div class="plan-stats">
                                <div class="stat">
                                    <div class="stat-value success">124</div>
                                    <div class="stat-label">Subscribers</div>
                                </div>
                                <div class="stat">
                                    <div class="stat-value warning">$6,199</div>
                                    <div class="stat-label">Revenue</div>
                                </div>
                            </div>

                            <div class="plan-body">


                                <div class="plan-features">
                                    <div class="feature">
                                        <div class="feature-dot"></div>
                                        Online Booking
                                    </div>
                                    <div class="feature">
                                        <div class="feature-dot"></div>
                                        Gallery Management
                                    </div>
                                    <div class="feature">
                                        <div class="feature-dot"></div>
                                        Basic Analytics
                                    </div>
                                </div>

                                <div class="plan-actions">
                                    <button class="btn-icon" data-bs-toggle="modal" data-bs-target="#planDetailsModal">
                                        <iconify-icon icon="formkit:eye"></iconify-icon>
                                    </button>
                                    <a href="{{route('subscription.edit')}}" class="btn-icon">
                                        <iconify-icon icon="cuida:edit-outline"></iconify-icon>
                                    </a>
                                    <button class="btn-icon text-danger">
                                        <iconify-icon icon="fluent:delete-32-regular"></iconify-icon>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 mb-4">
                        <div class="plan-card popular">
                            <span class="popular-badge">Popular</span>
                            <div class="plan-header">
                                <div class="plan-title-section">
                                    <h6 class="plan-name">Professional Plan</h6>
                                    <div class="plan-price">
                                        <span class="price">$99.99</span>
                                        <span class="period">/monthly</span>
                                    </div>
                                </div>
                                <p class="plan-description">Ideal for growing salons with advanced features and premium
                                    support for enhanced business growth.</p>

                            </div>

                            <div class="plan-stats">
                                <div class="stat">
                                    <div class="stat-value success">67</div>
                                    <div class="stat-label">Subscribers</div>
                                </div>
                                <div class="stat">
                                    <div class="stat-value warning">$6,699</div>
                                    <div class="stat-label">Revenue</div>
                                </div>
                            </div>

                            <div class="plan-body">


                                <div class="plan-features">
                                    <div class="feature">
                                        <div class="feature-dot"></div>
                                        Everything in Basic
                                    </div>
                                    <div class="feature">
                                        <div class="feature-dot"></div>
                                        Artist Management
                                    </div>
                                    <div class="feature">
                                        <div class="feature-dot"></div>
                                        Advanced Analytics
                                    </div>
                                    <div class="feature">
                                        <div class="feature-dot"></div>
                                        Payment Integration
                                    </div>
                                    <div class="feature-more">+2 more features</div>
                                </div>

                                <div class="plan-actions">
                                    <button class="btn-icon" data-bs-toggle="modal" data-bs-target="#planDetailsModal">
                                        <iconify-icon icon="formkit:eye"></iconify-icon>
                                    </button>
                                    <a href="{{route('subscription.edit')}}" class="btn-icon">
                                        <iconify-icon icon="cuida:edit-outline"></iconify-icon>
                                    </a>
                                    <button class="btn-icon text-danger">
                                        <iconify-icon icon="fluent:delete-32-regular"></iconify-icon>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 mb-4">
                        <div class="plan-card">
                            <div class="plan-header">
                                <div class="plan-title-section">
                                    <h6 class="plan-name">Premium Plan</h6>
                                    <div class="plan-price">
                                        <span class="price">$199.99</span>
                                        <span class="period">/monthly</span>
                                    </div>
                                </div>
                                <p class="plan-description">Complete solution for large salon chains with enterprise
                                    features and dedicated account management.</p>

                            </div>

                            <div class="plan-stats">
                                <div class="stat">
                                    <div class="stat-value success">23</div>
                                    <div class="stat-label">Subscribers</div>
                                </div>
                                <div class="stat">
                                    <div class="stat-value warning">$4,600</div>
                                    <div class="stat-label">Revenue</div>
                                </div>
                            </div>


                            <div class="plan-body">


                                <div class="plan-features">
                                    <div class="feature">
                                        <div class="feature-dot"></div>
                                        Everything in Professional
                                    </div>
                                    <div class="feature">
                                        <div class="feature-dot"></div>
                                        Multi-location Support
                                    </div>
                                    <div class="feature">
                                        <div class="feature-dot"></div>
                                        Custom Branding
                                    </div>
                                    <div class="feature">
                                        <div class="feature-dot"></div>
                                        24/7 Priority Support
                                    </div>
                                </div>

                                <div class="plan-actions">
                                    <button class="btn-icon" data-bs-toggle="modal" data-bs-target="#planDetailsModal">
                                        <iconify-icon icon="formkit:eye"></iconify-icon>
                                    </button>
                                    <a href="{{route('subscription.edit')}}" class="btn-icon">
                                        <iconify-icon icon="cuida:edit-outline"></iconify-icon>
                                    </a>
                                    <button class="btn-icon text-danger">
                                        <iconify-icon icon="fluent:delete-32-regular"></iconify-icon>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
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
                        <div class="modal-badges" id="modalBadges"><span class="badge badge-success">Active</span></div>
                    </div>
                    <div class="modal-actions">
                        <a href="edit-plan.php" class="btn btn-primary btn-sm" id="editPlanBtn">
                            <iconify-icon icon="cuida:edit-outline"></iconify-icon>
                            Edit Plan
                        </a>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" data-lucide="dollar-sign"
                                                class="lucide lucide-dollar-sign">
                                                <line x1="12" x2="12" y1="2" y2="22"></line>
                                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                            </svg>
                                        </div>
                                        <div class="plmatric_content">
                                            <div class="metric-value">$49.99</div>
                                            <div class="metric-label">per monthly</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="metric-card text-center">
                                        <div class="metric-icon success">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" data-lucide="users"
                                                class="lucide lucide-users">
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                                <circle cx="9" cy="7" r="4"></circle>
                                            </svg>
                                        </div>
                                        <div class="plmatric_content">
                                            <div class="metric-value">124</div>
                                            <div class="metric-label">Subscribers</div>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="metric-card text-center">
                                        <div class="metric-icon warning">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" data-lucide="trending-up"
                                                class="lucide lucide-trending-up">
                                                <path d="M16 7h6v6"></path>
                                                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                            </svg>
                                        </div>
                                        <div class="plmatric_content">
                                            <div class="metric-value">$6,198.76</div>
                                            <div class="metric-label">Monthly Revenue</div>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="metric-card text-center">
                                        <div class="metric-icon primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" data-lucide="star"
                                                class="lucide lucide-star">
                                                <path
                                                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div class="plmatric_content">
                                            <div class="metric-value">3</div>
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
                                            <span class="detail-value">Perfect for small salons just getting started with
                                                basic features and essential tools.</span>
                                        </div>
                                        <hr>
                                        <div class="detail-item">
                                            <span class="detail-label">Billing Cycle:</span>
                                            <span class="detail-value">Monthly</span>
                                        </div>
                                        <div class="detail-item">
                                            <span class="detail-label">Max Salons:</span>
                                            <span class="detail-value">1</span>
                                        </div>
                                        <div class="detail-item">
                                            <span class="detail-label">Max Artists:</span>
                                            <span class="detail-value">5 per salon</span>
                                        </div>
                                        <hr>
                                        <div class="detail-item">
                                            <span class="detail-label">Created:</span>
                                            <span class="detail-value">Dec 15, 2023</span>
                                        </div>
                                        <div class="detail-item">
                                            <span class="detail-label">Last Modified:</span>
                                            <span class="detail-value">Jan 10, 2024</span>
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
                                            <span class="performance-value">24.5%</span>
                                        </div>
                                        <div class="performance-item primary">
                                            <span>Retention Rate</span>
                                            <span class="performance-value">92.3%</span>
                                        </div>
                                        <div class="performance-item warning">
                                            <span>Avg. Lifetime Value</span>
                                            <span class="performance-value">$1,247</span>
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
                                    <div id="planFeatures">
                                        <div class="feature mb-2">
                                            <iconify-icon icon="prime:check-circle"></iconify-icon>
                                            <span>Online Booking</span>
                                        </div>
                                        <div class="feature mb-2">
                                            <iconify-icon icon="prime:check-circle"></iconify-icon>
                                            <span>Gallery Management</span>
                                        </div>
                                        <div class="feature mb-2">
                                            <iconify-icon icon="prime:check-circle"></iconify-icon>
                                            <span>Basic Analytics</span>
                                        </div>
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
                                                <div class="activity-subtitle">Beauty Lounge subscribed • 2 hours ago</div>
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

@endsection