<x-app-layout>
    <div class="page-wrapper">
        <div class="content">
            <div
                class="d-md-flex pagetop_headercmntb d-block align-items-center justify-content-between page-breadcrumb ">
                <div class="my-auto ">
                    <h2 class="mb-1">Salon Management</h2>
                    <p class="page-subtitle">Manage registered salons, their subscriptions, and performance.</p>
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
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="metric-card">
                            <div class="metric-content">
                                <div class="metric-info">
                                    <p class="metric-label">Total Salons</p>
                                    <p class="metric-value primary">{{ $totalSalons }}</p>
                                </div>
                                <div class="metric-icon primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" data-lucide="store"
                                        class="lucide lucide-store">
                                        <path d="M12.22 2h.06a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-.12a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm2.72 18h-5.88"></path>
                                        <path d="M19 6H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"></path>
                                        <path d="M14 2v2"></path>
                                        <path d="M10 2v2"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="metric-card">
                            <div class="metric-content">
                                <div class="metric-info">
                                    <p class="metric-label">Active Salons</p>
                                    <p class="metric-value success">{{ $activeSalons }}</p>
                                </div>
                                <div class="metric-icon success">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" data-lucide="check-circle"
                                        class="lucide lucide-check-circle">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22,4 12,14.01 9,11.01"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="metric-card">
                            <div class="metric-content">
                                <div class="metric-info">
                                    <p class="metric-label">Inactive Salons</p>
                                    <p class="metric-value warning">{{ $inactiveSalons }}</p>
                                </div>
                                <div class="metric-icon warning">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" data-lucide="minus-circle"
                                        class="lucide lucide-minus-circle">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="metric-card">
                            <div class="metric-content">
                                <div class="metric-info">
                                    <p class="metric-label">Suspended Salons</p>
                                    <p class="metric-value destructive">{{ $suspendedSalons }}</p>
                                </div>
                                <div class="metric-icon destructive">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" data-lucide="minus-circle"
                                        class="lucide lucide-minus-circle">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card tablemaincard_nopaddingleftright">
                <div id="tablefiltesa_container">
                    <div class="row mb-2">
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
                                                <option value="active">Active</option>
                                                <option value="inactive">Inactive</option>
                                                <option value="suspended">Suspended</option> 
                                            </select>
                                        </div>
                                    </div>

                                    <!-- Location Filter -->
                                    <div class="col-lg-3 col-sm-6 col-12">
                                        <div class="input-blocks">
                                            <i data-feather="map-pin" class="info-img"></i>
                                            <select class="select2" id="location">
                                                <option value="">Choose Location</option>
                                                @foreach($locations as $location)
                                                    <option value="{{ $location }}">{{ ucwords($location) }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <!-- Right Filters - Removed date range filter -->
                        <div class="col-lg-4">
                            <div class="rightPrFilters">
                                <!-- This section can be used for other filters if needed, currently empty as date range is removed -->
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
                    data.location = $('#location').val();
                });

                $("body").on('change', '#status, #plan_type, #location', function() {
                    table.ajax.reload();
                });
            });
        </script>
    @endpush
</x-app-layout>
