@extends('layouts.main')
@section('main-content')

<div class="page-wrapper">
    <div class="content dashboard_content">

        <div class="d-md-flex d-block align-items-center justify-content-between mb-3 pagetop_headercmn index_head">
            <div class="my-auto mb-2 dashtopTitle">
                <h2 class="mb-1">Dashboard <iconify-icon icon="fluent-emoji:waving-hand"></iconify-icon>
                </h2>
                <p class="page-subtitle">Welcome back! Here's what's happening with BeautyPro today.</p>
            </div>
            <div class="d-flex my-xl-auto right-content align-items-center flex-wrap ">

                <div class="ms-2 head-icons">
                    <a href="javascript:void(0);" class="" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-original-title="Collapse" id="collapse-header">
                        <i class="ti ti-chevrons-up"></i>
                    </a>
                </div>
            </div>
        </div>

        <section class="DashMatrix">
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="metric-card">
                        <div class="metric-content">
                            <div class="metric-info">
                                <p class="metric-label">Total Revenue</p>
                                <p class="metric-value">$47,250</p>
                                <p class="metric-change positive">+12.5% from last month</p>
                            </div>
                            <div class="metric-icon primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" data-lucide="dollar-sign" class="lucide lucide-dollar-sign">
                                    <line x1="12" x2="12" y1="2" y2="22"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="metric-card">
                        <div class="metric-content">
                            <div class="metric-info">
                                <p class="metric-label">Active Salons</p>
                                <p class="metric-value">1,248</p>
                                <p class="metric-change positive">+8.2% from last month</p>
                            </div>
                            <div class="metric-icon success">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" data-lucide="users" class="lucide lucide-users">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="metric-card">
                        <div class="metric-content">
                            <div class="metric-info">
                                <p class="metric-label">Subscription Growth</p>
                                <p class="metric-value">23.4%</p>
                                <p class="metric-change positive">+4.1% from last month</p>
                            </div>
                            <div class="metric-icon warning">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" data-lucide="trending-up" class="lucide lucide-trending-up">
                                    <path d="M16 7h6v6"></path>
                                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="metric-card">
                        <div class="metric-content">
                            <div class="metric-info">
                                <p class="metric-label">Active Plans</p>
                                <p class="metric-value">342</p>
                                <p class="metric-change negative">-2.1% from last month</p>
                            </div>
                            <div class="metric-icon destructive">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" data-lucide="credit-card" class="lucide lucide-credit-card">
                                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                                    <line x1="2" x2="22" y1="10" y2="10"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="row">
            <div class="col-md-9">
                <div class="card">
                    <div class="card-header cardflex_header">
                        <div class="flexcard_heading">
                            <h5 class="card-title">Revenue Overview</h5>
                            <p class="card-subtitle">Monthly revenue and subscription trends</p>
                        </div>
                        <div class="chartdynamic_filter">
                            <!-- Dynamic Filter Dropdown -->
                            <label for="requestFilter">Filter by:</label>
                            <select id="requestFilter" class="select2" onchange="updateRequestChart()">
                                <option value="monthly">Monthly</option>
                                <option value="weekly">Weekly</option>
                                <option value="daily">Daily</option>
                            </select>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="store-performance-card">
                            <div id="salonrevenu-chart"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Notifications Card -->
            <div class="col-lg-3">
                <div class="card notifications notifications_card mb-0">
                    <div class="card-header">
                        <h5 class="card-title customcard_title">
                            <div class="cardheader_TITIcon">
                                <iconify-icon icon="iconoir:bell-notification"></iconify-icon>
                            </div>
                            Recent Notifications
                        </h5>
                    </div>
                    <div class="card-body">
                        <div class="noti-content">
                            <!-- Notifications List -->
                            <ul class="notification-list" id="notificationList">
                                <!-- Your existing notification-message li elements go here -->
                                <li class="notification-message">
                                    <a href="activitiesjavascript:void(0);">
                                        <div class="media d-flex">
                                            <span class="avatar flex-shrink-0">
                                                <img alt="" src="assets/img/newimages/userdummy.png">
                                            </span>
                                            <div class="media-body flex-grow-1">
                                                <p class="noti-details"><span class="noti-title">Glam Studio</span>
                                                    added a new <span class="noti-title">Bridal Makeup Package</span>
                                                </p>
                                                <p class="noti-time"><span class="notification-time">5 mins ago</span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="notification-message">
                                    <a href="activitiesjavascript:void(0);">
                                        <div class="media d-flex">
                                            <span class="avatar flex-shrink-0">
                                                <img alt="" src="assets/img/newimages/userdummy.png">
                                            </span>
                                            <div class="media-body flex-grow-1">
                                                <p class="noti-details"><span class="noti-title">Sarah Johnson</span>
                                                    booked <span class="noti-title">Hair Spa Appointment</span>
                                                </p>
                                                <p class="noti-time"><span class="notification-time">12 mins ago</span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="notification-message">
                                    <a href="activitiesjavascript:void(0);">
                                        <div class="media d-flex">
                                            <span class="avatar flex-shrink-0">
                                                <img alt="" src="assets/img/newimages/userdummy.png">
                                            </span>
                                            <div class="media-body flex-grow-1">
                                                <p class="noti-details"><span class="noti-title">Bella Spa</span>
                                                    upgraded to <span class="noti-title">Premium Subscription
                                                        Plan</span>
                                                </p>
                                                <p class="noti-time"><span class="notification-time">25 mins ago</span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="notification-message">
                                    <a href="activitiesjavascript:void(0);">
                                        <div class="media d-flex">
                                            <span class="avatar flex-shrink-0">
                                                <img alt="" src="assets/img/newimages/userdummy.png">
                                            </span>
                                            <div class="media-body flex-grow-1">
                                                <p class="noti-details"><span class="noti-title">Olivia Martin</span>
                                                    left a 5-star review on <span class="noti-title">Nail Art
                                                        Service</span>
                                                </p>
                                                <p class="noti-time"><span class="notification-time">1 hour ago</span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="notification-message">
                                    <a href="activitiesjavascript:void(0);">
                                        <div class="media d-flex">
                                            <span class="avatar flex-shrink-0">
                                                <img alt="" src="assets/img/newimages/userdummy.png">
                                            </span>
                                            <div class="media-body flex-grow-1">
                                                <p class="noti-details"><span class="noti-title">Luxe Salon</span>
                                                    added a new staff member <span class="noti-title">Emma
                                                        Williams</span>
                                                </p>
                                                <p class="noti-time"><span class="notification-time">2 days ago</span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>

                            </ul>

                            <!-- Empty State (hidden by default) -->
                            <div class="empty-state" id="emptyState">
                                <div class="empty-icon">
                                    <iconify-icon icon="iconoir:bell-off"></iconify-icon>
                                </div>
                                <h3>No Notifications Found</h3>
                                <p>You're all caught up! New notifications will appear here.</p>
                            </div>
                        </div>
                    </div>

                    <!-- View All Footer (hidden when no notifications) -->
                    <div class="card-footer" id="cardFooter">
                        <button class="view-all-btn">View All Notifications</button>
                    </div>
                </div>
            </div>

        </div>

        <section class="othermatrixcards">
            <div class="row">
                <div class="col-md-4 ">
                    <div class="stat-card">
                        <div class="stat-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" data-lucide="calendar" class="lucide lucide-calendar">
                                <path d="M8 2v4"></path>
                                <path d="M16 2v4"></path>
                                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                <path d="M3 10h18"></path>
                            </svg>
                        </div>
                        <div class="stat-info">
                            <p class="stat-label">This Month</p>
                            <p class="stat-value">89 New Salons</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 ">
                    <div class="stat-card">
                        <div class="stat-icon success">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" data-lucide="trending-up" class="lucide lucide-trending-up">
                                <path d="M16 7h6v6"></path>
                                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                            </svg>
                        </div>
                        <div class="stat-info">
                            <p class="stat-label">Conversion Rate</p>
                            <p class="stat-value">68.4%</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 ">
                    <div class="stat-card">
                        <div class="stat-icon warning">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" data-lucide="bar-chart-3" class="lucide lucide-bar-chart-3">
                                <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                <path d="M18 17V9"></path>
                                <path d="M13 17V5"></path>
                                <path d="M8 17v-3"></path>
                            </svg>
                        </div>
                        <div class="stat-info">
                            <p class="stat-label">Avg. Revenue/Salon</p>
                            <p class="stat-value">$2,847</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="row">
            <div class="col-lg-12">
                <div class="card dashbTable">
                    <div class="card-header">
                        <h5 class="card-title">Recent Salons</h5>
                        <p class="card-subtitle">Latest salon registrations and activity</p>
                    </div>
                    <div class="custom-datatable-filter">

                        <div class="TableMainWrap">
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
                                            <img src="assets/img/users/userdummy.png" alt="Glamour Studio"
                                                class="avatar-img">
                                        </div>
                                    </div>
                                    <div class="media-body">
                                        <span class="d-block text-high-em">Glamour Studio</span>
                                        <small>Owner: Sarah Johnson</small>
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
                                            <img src="assets/img/users/userdummy.png" alt="Elite Beauty Lounge"
                                                class="avatar-img">
                                        </div>
                                    </div>
                                    <div class="media-body">
                                        <span class="d-block text-high-em">Elite Beauty Lounge</span>
                                        <small>Owner: Maria Garcia</small>
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
                                            <img src="assets/img/users/userdummy.png" alt="Harmony Spa & Salon"
                                                class="avatar-img">
                                        </div>
                                    </div>
                                    <div class="media-body">
                                        <span class="d-block text-high-em">Harmony Spa & Salon</span>
                                        <small>Owner: Jennifer Chen</small>
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
                                            <img src="assets/img/users/userdummy.png" alt="Royal Crown Beauty"
                                                class="avatar-img">
                                        </div>
                                    </div>
                                    <div class="media-body">
                                        <span class="d-block text-high-em">Royal Crown Beauty</span>
                                        <small>Owner: Lisa Thompson</small>
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
                    </div>

                </div>
            </div>
        </div>

    </div>
</div>

<script>
    // Revenue Data (Monthly / Weekly / Daily)
    var revenueData = {
        monthly: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            values: [4000, 2800, 2900, 3100, 1700, 2300, 3400, 3800, 3500, 3700, 4200, 4900]
        },
        weekly: {
            categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
            values: [1200, 1500, 1700, 2000]
        },
        daily: {
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            values: [400, 600, 550, 700, 650, 800, 750]
        }
    };
    var revenueChartOptions = {
        series: [{
            name: "Revenue",
            data: revenueData.monthly.values
        }],
        chart: {
            height: 350,
            type: "area",
            toolbar: {
                show: false
            }
        },
        stroke: {
            curve: "smooth",
            width: 2
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0,
                stops: [0, 90, 100]
            }
        },
        colors: ["#8000ff"], // Purple
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 4,
            colors: ["#8000ff"],
            strokeColors: "#fff",
            strokeWidth: 2,
            hover: {
                size: 7
            }
        },
        xaxis: {
            categories: revenueData.monthly.categories
        },
        yaxis: {
            min: 0,
            max: 6000,
            tickAmount: 6
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return "revenue : " + val;
                }
            }
        },
        legend: {
            show: false
        }
    };
    var revenueChart = new ApexCharts(document.querySelector("#salonrevenu-chart"), revenueChartOptions);
    revenueChart.render();
    // Function to update chart based on filter
    function updateRequestChart() {
        var selectedFilter = document.getElementById("requestFilter").value;
        revenueChart.updateOptions({
            series: [{
                data: revenueData[selectedFilter].values
            }],
            xaxis: {
                categories: revenueData[selectedFilter].categories
            }
        });
    }
    // Initialize Select2
    $(document).ready(function() {
        $('.select2').select2({
            minimumResultsForSearch: Infinity, // hides search box
            width: '150px'
        });
    });
</script>

<!-- end -->

<!-- notification data no data functionality -->
<script>
    function checkNotifications() {
        const notificationList = document.getElementById('notificationList');
        const emptyState = document.getElementById('emptyState');
        const cardFooter = document.getElementById('cardFooter');
        // Count only visible <li> elements with .notification-message
        const notificationMessages = notificationList ?
            notificationList.querySelectorAll('.notification-message') :
            [];
        if (notificationMessages.length > 0) {
            // Show notifications
            if (notificationList) notificationList.style.display = 'block';
            if (emptyState) emptyState.style.display = 'none';
            if (cardFooter) cardFooter.style.display = 'block';
        } else {
            // No notifications
            if (notificationList) notificationList.style.display = 'none';
            if (emptyState) emptyState.style.display = 'block';
            if (cardFooter) cardFooter.style.display = 'none';
        }
    }
    document.addEventListener('DOMContentLoaded', function() {
        checkNotifications();
        // Notification click highlight
        document.addEventListener('click', function(e) {
            const notificationLink = e.target.closest('.notification-message a');
            if (notificationLink) {
                notificationLink.style.backgroundColor = '#f0f9ff';
                setTimeout(() => {
                    notificationLink.style.backgroundColor = '';
                }, 300);
            }
        });
        // View All button click
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('view-all-btn')) {
                console.log('View all notifications clicked');
            }
        });
    });
</script>
@endsection