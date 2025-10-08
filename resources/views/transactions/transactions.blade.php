@extends('layouts.main')
@section('main-content')

<div class="page-wrapper">
    <div class="content">
        <div class="d-md-flex pagetop_headercmntb d-block align-items-center justify-content-between page-breadcrumb ">
            <div class="my-auto ">
                <h2 class="mb-1">Transaction Management</h2>
                <p class="page-subtitle">Monitor payments and financial activities</p>
            </div>
            <div class="d-flex my-xl-auto right-content align-items-center flex-wrap ">

                <div class="">
                    <button class="btn refreshpagebtn">
                        <iconify-icon icon="mynaui:refresh"></iconify-icon> Refresh
                    </button>
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
                <div class="col-lg-3 col-md-6 ">
                    <div class="metric-card card">
                        <div class="metric-content">
                            <div class="metric-info">
                                <p class="metric-label">Total Revenue</p>
                                <p class="metric-value success">$549</p>
                            </div>
                            <div class="metric-icon success">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" data-lucide="dollar-sign" class="lucide lucide-dollar-sign">
                                    <line x1="12" x2="12" y1="2" y2="22"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="metric-footer">
                            <div class="metric-change positive">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" data-lucide="trending-up" class="lucide lucide-trending-up">
                                    <path d="M16 7h6v6"></path>
                                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                </svg>
                                <span>+12.3%</span>
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
                                <p class="metric-value warning">$200</p>
                            </div>
                            <div class="metric-icon warning">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" data-lucide="clock" class="lucide lucide-clock">
                                    <path d="M12 6v6l4 2"></path>
                                    <circle cx="12" cy="12" r="10"></circle>
                                </svg>
                            </div>
                        </div>
                        <div class="metric-footer">
                            <p class="text-muted">1 transactions pending</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 ">
                    <div class="metric-card card">
                        <div class="metric-content">
                            <div class="metric-info">
                                <p class="metric-label">Failed Transactions</p>
                                <p class="metric-value destructive">1</p>
                            </div>
                            <div class="metric-icon destructive">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" data-lucide="x-circle" class="lucide lucide-x-circle">
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
                                <p class="metric-value primary">94.2%</p>
                            </div>
                            <div class="metric-icon primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" data-lucide="check-circle"
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
                                        <select class="select2">
                                            <option value="">Choose Plan</option>
                                            <option value="Premium">Premium</option>
                                            <option value="Professional">Professional</option>
                                            <option value="Basic">Basic</option>
                                        </select>
                                    </div>
                                </div>
                                <!-- Status Filter -->
                                <div class="col-lg-3 col-sm-6 col-12">
                                    <div class="input-blocks">
                                        <i data-feather="toggle-right" class="info-img"></i>
                                        <select class="select2">
                                            <option value="">Choose Status</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Failed">Failed</option>
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
                                    placeholder="dd/mm/yyyy - dd/mm/yyyy">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Filter -->

            <table class="table common-datatable nowrap w-100">
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Salon Name</th>
                        <th>Plan</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Payment Method</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="{{route('salon.show')}}" class="tbuserid">#TXN1001</a></td>
                        <td>Glamour Studio</td>
                        <td>Premium</td>
                        <td>$199</td>
                        <td>
                            <span class="badge badge-soft-success d-inline-flex align-items-center badge-xs">
                                <i class="ti ti-point-filled me-1"></i>Success
                            </span>
                        </td>
                        <td>14 Sep, 2025</td>
                        <td>Credit Card</td>
                        <td>
                            <div class="d-flex align-items-center ActionDropdown">
                                <div class="d-flex">

                                    <a class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                        data-bs-toggle="tooltip" data-placement="top" title=""
                                        data-bs-original-title="Salon Details" href="{{route('salon.show')}}">
                                        <span class="icon"><span class="feather-icon">
                                                <iconify-icon icon="hugeicons:view"></iconify-icon>
                                            </span></span>
                                    </a>

                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td><a href="{{route('salon.show')}}" class="tbuserid">#TXN1002</a></td>
                        <td>Elite Beauty Lounge</td>
                        <td>Professional</td>
                        <td>$129</td>
                        <td>
                            <span class="badge badge-soft-warning d-inline-flex align-items-center badge-xs">
                                <i class="ti ti-point-filled me-1"></i>Pending
                            </span>
                        </td>
                        <td>13 Sep, 2025</td>
                        <td>PayPal</td>
                        <td>
                            <div class="d-flex align-items-center ActionDropdown">
                                <div class="d-flex">

                                    <a class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                        data-bs-toggle="tooltip" data-placement="top" title=""
                                        data-bs-original-title="Salon Details" href="{{route('salon.show')}}">
                                        <span class="icon"><span class="feather-icon">
                                                <iconify-icon icon="hugeicons:view"></iconify-icon>
                                            </span></span>
                                    </a>

                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td><a href="{{route('salon.show')}}" class="tbuserid">#TXN1003</a></td>
                        <td>Harmony Spa & Salon</td>
                        <td>Basic</td>
                        <td>$79</td>
                        <td>
                            <span class="badge badge-soft-danger d-inline-flex align-items-center badge-xs">
                                <i class="ti ti-point-filled me-1"></i>Failed
                            </span>
                        </td>
                        <td>12 Sep, 2025</td>
                        <td>Bank Transfer</td>
                        <td>
                            <div class="d-flex align-items-center ActionDropdown">
                                <div class="d-flex">

                                    <a class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                        data-bs-toggle="tooltip" data-placement="top" title=""
                                        data-bs-original-title="Salon Details" href="{{route('salon.show')}}">
                                        <span class="icon"><span class="feather-icon">
                                                <iconify-icon icon="hugeicons:view"></iconify-icon>
                                            </span></span>
                                    </a>

                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td><a href="{{route('salon.show')}}" class="tbuserid">#TXN1004</a></td>
                        <td>Royal Crown Beauty</td>
                        <td>Premium</td>
                        <td>$199</td>
                        <td>
                            <span class="badge badge-soft-success d-inline-flex align-items-center badge-xs">
                                <i class="ti ti-point-filled me-1"></i>Success
                            </span>
                        </td>
                        <td>10 Sep, 2025</td>
                        <td>Stripe</td>
                        <td>
                            <div class="d-flex align-items-center ActionDropdown">
                                <div class="d-flex">

                                    <a class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                        data-bs-toggle="tooltip" data-placement="top" title=""
                                        data-bs-original-title="Salon Details" href="{{route('salon.show')}}">
                                        <span class="icon"><span class="feather-icon">
                                                <iconify-icon icon="hugeicons:view"></iconify-icon>
                                            </span></span>
                                    </a>

                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

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
                <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <i class="ti ti-x"></i>
                </button>
            </div>
            <form action="categories.php">
                <div class="modal-body">
                    <div class="row">

                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="form-label">Category Name <div class="requiredLabel">*</div> </label>
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
                    <button type="button" class="btn btn-white border me-2" data-bs-dismiss="modal">Close</button>
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
                <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <i class="ti ti-x"></i>
                </button>
            </div>
            <form action="categories.php">
                <div class="modal-body">
                    <div class="row">

                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="form-label">Category Name <div class="requiredLabel">*</div> </label>
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
                    <button type="button" class="btn btn-white border me-2" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary canvasSubmit_button">Save Changes</button>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- Edit category end -->

@endsection