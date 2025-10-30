<x-app-layout>
    <div class="page-wrapper">
        <div class="content">
            <div
                class="d-md-flex pagetop_headercmntb d-block align-items-center justify-content-between page-breadcrumb ">
                <div class="my-auto ">
                    <h2 class="mb-1">Transaction Management</h2>
                    <p class="page-subtitle">Monitor payments and financial activities</p>
                </div>
                <div class="d-flex my-xl-auto right-content align-items-center flex-wrap ">
                    <div class="head-icons ms-2 headicon_innerpage">
                        <a href="javascript:void(0);" class="" data-bs-toggle="tooltip" data-bs-placement="top"
                            data-bs-original-title="Collapse" id="collapse-header">
                            <i class="ti ti-chevrons-up"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="transactons_matrix">
                <div class="row">
                    <div class="col-lg-3 col-md-6 ">
                        <div class="metric-card card">
                            <div class="metric-content">
                                <div class="metric-info">
                                    <p class="metric-label">Total Revenue</p>
                                    <p class="metric-value success">${{ number_format($totalRevenue, 2) }}</p>
                                </div>
                                <div class="metric-icon success">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" data-lucide="dollar-sign"
                                        class="lucide lucide-dollar-sign">
                                        <line x1="12" x2="12" y1="2" y2="22"></line>
                                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="metric-footer">
                                <div class="metric-change {{ $successRateChange >= 0 ? 'positive' : 'negative' }}">
                                    @if($successRateChange >= 0)
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" data-lucide="trending-up"
                                            class="lucide lucide-trending-up">
                                            <path d="M16 7h6v6"></path>
                                            <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                        </svg>
                                    @else
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" data-lucide="trending-down"
                                            class="lucide lucide-trending-down">
                                            <path d="M16 17h6v-6"></path>
                                            <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                                        </svg>
                                    @endif
                                    <span>{{ number_format(abs($successRateChange), 2) }}%</span>
                                    <span class="text-muted">vs last month</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 ">
                        <div class="metric-card card">
                            <div class="metric-content">
                                <div class="metric-info">
                                    <p class="metric-label">Pending Payments</p>
                                    <p class="metric-value warning">{{ $pendingPayments }}</p>
                                </div>
                                <div class="metric-icon warning">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" data-lucide="clock"
                                        class="lucide lucide-clock">
                                        <path d="M12 6v6l4 2"></path>
                                        <circle cx="12" cy="12" r="10"></circle>
                                    </svg>
                                </div>
                            </div>
                            <div class="metric-footer">
                                <p class="text-muted">{{ $pendingPayments }} transactions pending</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 ">
                        <div class="metric-card card">
                            <div class="metric-content">
                                <div class="metric-info">
                                    <p class="metric-label">Failed Transactions</p>
                                    <p class="metric-value destructive">{{ $failedTransactions }}</p>
                                </div>
                                <div class="metric-icon destructive">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" data-lucide="x-circle"
                                        class="lucide lucide-x-circle">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="m15 9-6 6"></path>
                                        <path d="m9 9 6 6"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="metric-footer">
                                <p class="text-muted">Requires attention</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 ">
                        <div class="metric-card card">
                            <div class="metric-content">
                                <div class="metric-info">
                                    <p class="metric-label">Success Rate</p>
                                    <p class="metric-value primary">{{ number_format($successRate, 2) }}%</p>
                                </div>
                                <div class="metric-icon primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" data-lucide="check-circle"
                                        class="lucide lucide-check-circle">
                                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                        <path d="m9 11 3 3L22 4"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="metric-footer">
                                <p class="text-muted">Last 30 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card tablemaincard_nopaddingleftright">
                <div class="card-header">
                    <h5 class="card-title">
                        <iconify-icon icon="solar:card-broken"></iconify-icon> Transaction History
                    </h5>
                </div>

                <div id="tablefiltesa_container">
                    <div class="row">
                        <!-- Left Filters -->
                        <div class="col-lg-8">
                            <div class="leftprFilters">
                                <div class="row">

                                    <!-- Plan Filter -->
                                    <div class="col-lg-3 col-sm-6 col-12">
                                        <div class="input-blocks">
                                            <i data-feather="layers" class="info-img"></i>
                                            <select class="select2" id="plan_type">
                                                <option value="">Choose Plan</option>
                                                @foreach($plans as $plan)
                                                    <option value="{{ $plan }}">{{ $plan }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <!-- Status Filter -->
                                    <div class="col-lg-3 col-sm-6 col-12">
                                        <div class="input-blocks">
                                            <i data-feather="toggle-right" class="info-img"></i>
                                            <select class="select2" id="status">
                                                <option value="">Choose Status</option>
                                                @foreach($statuses as $status)
                                                    <option value="{{ $status }}">{{ ucfirst($status) }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <!-- Right Filters -->
                        <div class="col-lg-4">
                            <div class="rightPrFilters">
                                <div class="input-icon mb-2 position-relative">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-calendar text-gray-9"></i>
                                    </span>
                                    <input type="text" class="form-control date-range bookingrange"
                                        placeholder="dd/mm/yyyy - dd/mm/yyyy" id="date_range">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Filter -->

                {{ $dataTable->table() }}

            </div>

            <!-- /Filter -->

        </div>
    </div>

    @push('scripts')
        {{ $dataTable->scripts(attributes: ['type' => 'module']) }}
        <script>
            $(document).ready(function() {
                const table = window.LaravelDataTables && window.LaravelDataTables["global-datatable"]; 

                table.on('preXhr.dt', function(e, settings, data) {
                    data.status = $('#status').val();
                    data.plan_type = $('#plan_type').val();
                    data.date_range = $('#date_range').val();
                });

                $("body").on('change', '#status, #plan_type', function() {
                    table.ajax.reload();
                });

                $('.bookingrange').on('apply.daterangepicker', function(ev, picker) {
                    table.ajax.reload();
                });
            });
        </script>
    @endpush

    {{-- Removed Add Category and Edit Category modals as they are not relevant to transactions --}}

</x-app-layout>
