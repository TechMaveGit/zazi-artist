@extends('layouts.main')
@section('main-content')


    <div class="page-wrapper">
        <div class="content">
            <div class="d-md-flex pagetop_headercmntb d-block align-items-center justify-content-between page-breadcrumb ">
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

            <div class="card tablemaincard_nopaddingleftright">
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
                                                <option value="Active">Active</option>
                                                <option value="Pending">Pending</option>
                                                <option value="Suspended">Suspended</option>
                                            </select>
                                        </div>
                                    </div>

                                    <!-- Location Filter -->
                                    <div class="col-lg-3 col-sm-6 col-12">
                                        <div class="input-blocks">
                                            <i data-feather="map-pin" class="info-img"></i>
                                            <select class="select2">
                                                <option value="">Choose Location</option>
                                                <option value="USA">USA</option>
                                                <option value="UK">UK</option>
                                                <option value="Canada">Canada</option>
                                                <option value="France">France</option>
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


                <table class="table common-datatable withoutActionTR nowrap w-100">
                    <thead>
                        <tr>
                            <th>Salon ID</th>
                            <th>Salon / Owner</th>
                            <th>Type</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Total Artists</th>
                            <th>Plan</th>
                            <th>Revenue</th>
                            <th>Status</th>
                            <th>Joined</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="salon-details.php" class="tbuserid">#SAL001</a></td>
                            <td>
                                <a href="salon-details.php">
                                    <div class="tbUserWrap">
                                        <div class="media-head me-2">
                                            <div class="avatar avatar-xs avatar-rounded">
                                                <img src="{{asset('assets/img/users/userdummy.png')}}" alt="Glamour Studio"
                                                    class="avatar-img">
                                            </div>
                                        </div>
                                        <div class="media-body">
                                            <span class="d-block text-high-em">Glamour Studio</span>
                                        </div>
                                    </div>
                                </a>
                            </td>
                            <td>Salon</td>
                            <td>glamour@example.com</td>
                            <td>+1 212 555 7890</td>
                            <td>New York, NY (USA)</td>
                            <td>12</td>
                            <td>Premium</td>
                            <td>$12,500</td>
                            <td>
                                <span class="badge badge-soft-success d-inline-flex align-items-center badge-xs">
                                    <i class="ti ti-point-filled me-1"></i>Active
                                </span>
                            </td>
                            <td>2 days ago</td>
                            <td>
                                <div class="d-flex align-items-center ActionDropdown">
                                    <div class="d-flex">

                                        <a class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                            data-bs-toggle="tooltip" data-placement="top" title=""
                                            data-bs-original-title="Salon Details" href="salon-details.php">
                                            <span class="icon"><span class="feather-icon">
                                                    <iconify-icon icon="hugeicons:view"></iconify-icon>
                                                </span></span>
                                        </a>

                                    </div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td><a href="salon-details.php" class="tbuserid">#SAL002</a></td>
                            <td>
                                <a href="salon-details.php">
                                    <div class="tbUserWrap">
                                        <div class="media-head me-2">
                                            <div class="avatar avatar-xs avatar-rounded">
                                                <img src="{{asset('assets/img/users/userdummy.png')}}" alt="Elite Beauty Lounge"
                                                    class="avatar-img">
                                            </div>
                                        </div>
                                        <div class="media-body">
                                            <span class="d-block text-high-em">Elite Beauty Lounge</span>
                                        </div>
                                    </div>
                                </a>
                            </td>
                            <td>Salon</td>
                            <td>elite@example.com</td>
                            <td>+1 310 444 5678</td>
                            <td>Los Angeles, CA (USA)</td>
                            <td>8</td>
                            <td>Professional</td>
                            <td>$8,900</td>
                            <td>
                                <span class="badge badge-soft-success d-inline-flex align-items-center badge-xs">
                                    <i class="ti ti-point-filled me-1"></i>Active
                                </span>
                            </td>
                            <td>5 days ago</td>
                            <td>
                                <div class="d-flex align-items-center ActionDropdown">
                                    <div class="d-flex">

                                        <a class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                            data-bs-toggle="tooltip" data-placement="top" title=""
                                            data-bs-original-title="Salon Details" href="salon-details.php">
                                            <span class="icon"><span class="feather-icon">
                                                    <iconify-icon icon="hugeicons:view"></iconify-icon>
                                                </span></span>
                                        </a>

                                    </div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td><a href="salon-details.php" class="tbuserid">#SAL003</a></td>
                            <td>
                                <a href="salon-details.php">
                                    <div class="tbUserWrap">
                                        <div class="media-head me-2">
                                            <div class="avatar avatar-xs avatar-rounded">
                                                <img src="{{asset('assets/img/users/userdummy.png')}}" alt="Harmony Spa & Salon"
                                                    class="avatar-img">
                                            </div>
                                        </div>
                                        <div class="media-body">
                                            <span class="d-block text-high-em">Harmony Spa & Salon</span>
                                        </div>
                                    </div>
                                </a>
                            </td>
                            <td>Salon</td>
                            <td>harmony@example.com</td>
                            <td>+1 773 888 1234</td>
                            <td>Chicago, IL (USA)</td>
                            <td>6</td>
                            <td>Basic</td>
                            <td>$5,200</td>
                            <td>
                                <span class="badge badge-soft-warning d-inline-flex align-items-center badge-xs">
                                    <i class="ti ti-point-filled me-1"></i>Pending
                                </span>
                            </td>
                            <td>1 week ago</td>
                            <td>
                                <div class="d-flex align-items-center ActionDropdown">
                                    <div class="d-flex">

                                        <a class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                            data-bs-toggle="tooltip" data-placement="top" title=""
                                            data-bs-original-title="Salon Details" href="salon-details.php">
                                            <span class="icon"><span class="feather-icon">
                                                    <iconify-icon icon="hugeicons:view"></iconify-icon>
                                                </span></span>
                                        </a>

                                    </div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td><a href="salon-details.php" class="tbuserid">#SAL004</a></td>
                            <td>
                                <a href="salon-details.php">
                                    <div class="tbUserWrap">
                                        <div class="media-head me-2">
                                            <div class="avatar avatar-xs avatar-rounded">
                                                <img src="{{asset('assets/img/users/userdummy.png')}}" alt="Royal Crown Beauty"
                                                    class="avatar-img">
                                            </div>
                                        </div>
                                        <div class="media-body">
                                            <span class="d-block text-high-em">Royal Crown Beauty</span>
                                        </div>
                                    </div>
                                </a>
                            </td>
                            <td>Salon</td>
                            <td>royal@example.com</td>
                            <td>+1 305 666 4321</td>
                            <td>Miami, FL (USA)</td>
                            <td>15</td>
                            <td>Premium</td>
                            <td>$14,300</td>
                            <td>
                                <span class="badge badge-soft-danger d-inline-flex align-items-center badge-xs">
                                    <i class="ti ti-point-filled me-1"></i>Suspended
                                </span>
                            </td>
                            <td>1 week ago</td>
                            <td>
                                <div class="d-flex align-items-center ActionDropdown">
                                    <div class="d-flex">

                                        <a class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                            data-bs-toggle="tooltip" data-placement="top" title=""
                                            data-bs-original-title="Salon Details" href="salon-details.php">
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


@endsection