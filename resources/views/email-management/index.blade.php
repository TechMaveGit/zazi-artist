<x-app-layout>
    <div class="page-wrapper">
        <div class="content">
            <div
                class="d-md-flex pagetop_headercmntb d-block align-items-center justify-content-between page-breadcrumb ">
                <div class="my-auto ">
                    <h2 class="mb-1">Email Templates</h2>
                    <p class="page-subtitle">Manage email templates for customer communication</p>
                </div>
                <div class="d-flex my-xl-auto right-content align-items-center flex-wrap ">

                    <div class="">
                        <a href="{{ route('email-management.create') }}"
                            class="btn btn-primary d-flex align-items-center cmnaddbtn">
                            <iconify-icon icon="icon-park-outline:add-one"></iconify-icon>Create Template
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

            <div class="transactons_matrix">
                <div class="row">
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="metric-card">
                            <div class="metric-content">
                                <div class="metric-info">
                                    <p class="metric-label">Total Templates</p>
                                    <p class="metric-value primary">{{ $templates->count() }}</p>
                                </div>
                                <div class="metric-icon primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" data-lucide="file-text"
                                        class="lucide lucide-file-text">
                                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z">
                                        </path>
                                        <polyline points="14,2 14,8 20,8"></polyline>
                                        <line x1="16" x2="8" y1="13" y2="13"></line>
                                        <line x1="16" x2="8" y1="17" y2="17"></line>
                                        <polyline points="10,9 9,9 8,9"></polyline>
                                    </svg>
                                </div>
                            </div>
                            {{-- <div class="metric-footer">
                                <div class="metric-change positive">
                                    <span>+3 new</span>
                                    <span class="text-muted">this month</span>
                                </div>
                            </div> --}}
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="metric-card">
                            <div class="metric-content">
                                <div class="metric-info">
                                    <p class="metric-label">Active Templates</p>
                                    <p class="metric-value success">{{ $templates->where('status', 1)->count() }}</p>
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
                            {{-- <div class="metric-footer">
                                <p class="text-muted">75% of total</p>
                            </div> --}}
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="metric-card">
                            <div class="metric-content">
                                <div class="metric-info">
                                    <p class="metric-label">Inactive Templates</p>
                                    <p class="metric-value warning">{{ $templates->where('status', 0)->count() }}</p>
                                </div>
                                <div class="metric-icon warning">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" data-lucide="edit-3"
                                        class="lucide lucide-edit-3">
                                        <path d="M12 20h9"></path>
                                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                    </svg>
                                </div>
                            </div>
                            {{-- <div class="metric-footer">
                                <p class="text-muted">25% of total</p>
                            </div> --}}
                        </div>
                    </div>

                    {{-- <div class="col-lg-3 col-md-6 mb-4">
                        <div class="metric-card">
                            <div class="metric-content">
                                <div class="metric-info">
                                    <p class="metric-label">Most Used Template</p>
                                    <p class="metric-value primary">Welcome</p>
                                </div>
                                <div class="metric-icon primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" data-lucide="star"
                                        class="lucide lucide-star">
                                        <polygon
                                            points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26">
                                        </polygon>
                                    </svg>
                                </div>
                            </div>
                            <div class="metric-footer">
                                <p class="text-muted">Template type</p>
                            </div>
                        </div>
                    </div> --}}
                </div>
            </div>

            <div class="card tablemaincard_nopaddingleftright">
                <div class="card-header">
                    <h5 class="card-title">
                        <iconify-icon icon="fontisto:email"></iconify-icon> Email Templates
                    </h5>
                </div>

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
                                            <select class="select2" id="status">
                                                <option value="">All</option>
                                                <option value="1">Active</option>
                                                <option value="0">Inactive</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!-- Status Filter -->
                                    <div class="col-lg-3 col-sm-6 col-12">
                                        <div class="input-blocks">
                                            <i data-feather="toggle-right" class="info-img"></i>
                                            <select class="form-select select2" id="template_type">
                                                <option value="">All Templates</option>
                                                <option value="welcome">Welcome</option>
                                                <option value="promotion">Promotion</option>
                                                <option value="newsletter">Newsletter</option>
                                                <option value="notification">Notification</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <!-- Right Filters -->
                        {{-- <div class="col-lg-4">
                            <div class="rightPrFilters">
                                <div class="input-icon mb-2 position-relative">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-calendar text-gray-9"></i>
                                    </span>
                                    <input type="text" class="form-control date-range bookingrange"
                                        placeholder="dd/mm/yyyy - dd/mm/yyyy">
                                </div>
                            </div>
                        </div> --}}
                    </div>
                </div>
                <!-- /Filter -->
                {{ $dataTable->table() }}
            </div>

            <!-- /Filter -->

        </div>
    </div>

    <!-- Add Category modal start -->
    <div class="modal fade custombottm_modalStyle" id="Addcategory_modal">
        <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Add Category</h4>
                    <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal"
                        aria-label="Close">
                        <i class="ti ti-x"></i>
                    </button>
                </div>
                <form action="categories.php">
                    <div class="modal-body">
                        <div class="row">

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="form-label">Category Name <div class="requiredLabel">*</div>
                                    </label>
                                    <input type="text" placeholder="" class="form-control largeinp_height">
                                    <p class="frmlabelwith_peragraph">The name is how it appears on your site.</p>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="form-group">
                                    <div
                                        class="status-toggle modal-status d-flex justify-content-between align-items-center">
                                        <span class="status-label">Status</span>
                                        <input type="checkbox" id="user2" class="check" checked="">
                                        <label for="user2" class="checktoggle"></label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-white border me-2"
                            data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary canvasSubmit_button">Add Category</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Add category end -->

    <!-- edit Category modal start -->
    <div class="modal fade custombottm_modalStyle" id="Editcategory_modal">
        <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Edit Category</h4>
                    <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal"
                        aria-label="Close">
                        <i class="ti ti-x"></i>
                    </button>
                </div>
                <form action="categories.php">
                    <div class="modal-body">
                        <div class="row">

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="form-label">Category Name <div class="requiredLabel">*</div>
                                    </label>
                                    <input type="text" placeholder="" class="form-control largeinp_height">
                                    <p class="frmlabelwith_peragraph">The name is how it appears on your site.</p>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="form-group">
                                    <div
                                        class="status-toggle modal-status d-flex justify-content-between align-items-center">
                                        <span class="status-label">Status</span>
                                        <input type="checkbox" id="user2" class="check" checked="">
                                        <label for="user2" class="checktoggle"></label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-white border me-2"
                            data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary canvasSubmit_button">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Edit category end -->
    @push('scripts')
        {{ $dataTable->scripts(attributes: ['type' => 'module']) }}
        <script>
            $(document).ready(function() {
                const table = window.LaravelDataTables && window.LaravelDataTables["global-datatable"];

                table.on('preXhr.dt', function(e, settings, data) {
                    data.status = $('#status').val();
                    data.template_type = $('#template_type').val();
                });

                $("body").on('change', '#status,#template_type', function() {
                    table.ajax.reload();
                });
            });
        </script>
    @endpush
</x-app-layout>
