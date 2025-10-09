<!-- Header -->
<div class="header">

    <!-- Logo -->
    <div class="header-left">
        <a href="{{ route('dashboard') }}" class="logo logo-normal">
            <img src="{{ asset('assets/img/newimages/logohorizontal2.png') }}" alt="">
        </a>
        <a href="{{ route('dashboard') }}" class="logo logo-white">
            <img src="{{ asset('assets/img/logo-white.png') }}" alt="">
        </a>
        <a href="{{ route('dashboard') }}" class="logo-small">
            <img src="{{ asset('assets/img/logo-small.png') }}" alt="">
        </a>
        <!-- <a id="toggle_btn" href="javascript:void(0);">
     <i data-feather="chevrons-left" class="feather-16"></i>
    </a> -->
    </div>
    <!-- /Logo -->

    <a id="mobile_btn" class="mobile_btn" href="#sidebar">
        <span class="bar-icon">
            <span></span>
            <span></span>
            <span></span>
        </span>
    </a>

    <div class="headerleft_right_menu">
        <div class="topleftheader_menu">
            <a id="toggle_btn" href="javascript:void(0);" class="active">
                <iconify-icon icon="mynaui:sidebar"></iconify-icon>
            </a>
        </div>
        <div class="headerRightmenu">
            <ul class="nav user-menu">
                <li class="nav-item nav-item-box">
                    <a href="javascript:void(0);" id="btnFullscreen">
                        <iconify-icon icon="solar:maximize-square-linear"></iconify-icon>
                    </a>
                </li>

                <!-- Notifications -->
                <li class="nav-item dropdown nav-item-box">
                    <a href="javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                        <iconify-icon icon="proicons:bell"></iconify-icon><span class="badge rounded-pill">2</span>
                    </a>
                    <div class="dropdown-menu notifications">
                        <div class="topnav-dropdown-header">
                            <span class="notification-title">Notifications</span>
                            <a href="javascript:void(0)" class="clear-noti"> Clear All </a>
                        </div>
                        <div class="noti-content">
                            <ul class="notification-list">
                                <li class="notification-message">
                                    <a href="activitiesjavascript:void(0);">
                                        <div class="media d-flex">
                                            <span class="avatar flex-shrink-0">
                                                <img alt=""
                                                    src="{{ asset('assets/img/newimages/userdummy.png') }}">
                                            </span>
                                            <div class="media-body flex-grow-1">
                                                <p class="noti-details"><span class="noti-title">John Doe</span>
                                                    added
                                                    new task <span class="noti-title">Patient appointment
                                                        booking</span>
                                                </p>
                                                <p class="noti-time"><span class="notification-time">4 mins
                                                        ago</span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="notification-message">
                                    <a href="activitiesjavascript:void(0);">
                                        <div class="media d-flex">
                                            <span class="avatar flex-shrink-0">
                                                <img alt=""
                                                    src="{{ asset('assets/img/newimages/userdummy.png') }}">
                                            </span>
                                            <div class="media-body flex-grow-1">
                                                <p class="noti-details"><span class="noti-title">Tarah
                                                        Shropshire</span>
                                                    changed the task name <span class="noti-title">Appointment
                                                        booking
                                                        with payment gateway</span>
                                                </p>
                                                <p class="noti-time"><span class="notification-time">6 mins
                                                        ago</span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="notification-message">
                                    <a href="activitiesjavascript:void(0);">
                                        <div class="media d-flex">
                                            <span class="avatar flex-shrink-0">
                                                <img alt=""
                                                    src="{{ asset('assets/img/newimages/userdummy.png') }}">
                                            </span>
                                            <div class="media-body flex-grow-1">
                                                <p class="noti-details"><span class="noti-title">Misty
                                                        Tison</span>
                                                    added <span class="noti-title">Domenic Houston</span> and
                                                    <span class="noti-title">Claire Mapes</span> to project
                                                    <span class="noti-title">Doctor available module</span>
                                                </p>
                                                <p class="noti-time"><span class="notification-time">8 mins
                                                        ago</span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="notification-message">
                                    <a href="activitiesjavascript:void(0);">
                                        <div class="media d-flex">
                                            <span class="avatar flex-shrink-0">
                                                <img alt=""
                                                    src="{{ asset('assets/img/newimages/userdummy.png') }}">
                                            </span>
                                            <div class="media-body flex-grow-1">
                                                <p class="noti-details"><span class="noti-title">Rolland
                                                        Webber</span>
                                                    completed task <span class="noti-title">Patient and Doctor
                                                        video
                                                        conferencing</span>
                                                </p>
                                                <p class="noti-time"><span class="notification-time">12 mins
                                                        ago</span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="notification-message">
                                    <a href="activitiesjavascript:void(0);">
                                        <div class="media d-flex">
                                            <span class="avatar flex-shrink-0">
                                                <img alt=""
                                                    src="{{ asset('assets/img/newimages/userdummy.png') }}">
                                            </span>
                                            <div class="media-body flex-grow-1">
                                                <p class="noti-details"><span class="noti-title">Bernardo
                                                        Galaviz</span>
                                                    added new task <span class="noti-title">Private chat
                                                        module</span>
                                                </p>
                                                <p class="noti-time"><span class="notification-time">2 days
                                                        ago</span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="topnav-dropdown-footer">
                            <a href="activitiesjavascript:void(0);">View all Notifications</a>
                        </div>
                    </div>
                </li>
                <!-- /Notifications -->

                <li class="dropdown notification-list topbar-dropdown border-left toprProfileBtn">
                    <button type="button" class="dropdown-toggle" data-bs-toggle="dropdown" role="button"
                        aria-haspopup="false" aria-expanded="false">
                        <div class="profiletpAvatar">
                            <div class="cu3-avatar">
                                <div class="user-bg-purple avatar" cu3-size="20">AS</div>
                            </div>
                        </div>
                        <iconify-icon icon="iconamoon:arrow-down-2-light"></iconify-icon>
                    </button>
                    <!-- <p class="user_mail_id">avi@techmavesoftware.com</p> -->
                    <div class="dropdown-menu dropdown-menu-end profile-dropdown ">
                        <!-- item-->
                        <div class="dropdown-header noti-title">
                            <div class="proileDrop_right">
                                <div class="profileInrImagewrap">
                                    <!-- <img src="http://localhost/techmave-product/public/assets/images/new-images/userdummy.png"  alt="user-image" class="rounded-circle"> -->
                                    <div class="namerletters">AS</div>
                                </div>

                                <div class="pro-user-name ms-1">
                                    <h2>BeautyPro</h2>
                                    <p class="user_mail_id">beautypro@gmail.com</p>
                                </div>
                            </div>

                        </div>
                        <a href="{{ route('profile.edit') }}" class="dropdown-item notify-item">
                            <iconify-icon icon="si:user-duotone"></iconify-icon><span>My Account</span>
                        </a>

                        <a href="{{ route('logout') }}" class="dropdown-item notify-item">
                            <iconify-icon icon="hugeicons:logout-square-02"></iconify-icon><span>Logout</span>
                        </a>
                    </div>
                </li>
            </ul>
            <!-- /Header Menu -->

            <!-- Mobile Menu -->
            <div class="dropdown mobile-user-menu">
                <a href="javascript:void(0);" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="{{ route('profile.edit') }}">">My Profile</a>
                    <a class="dropdown-item" href="{{ route('logout') }}">Logout</a>
                </div>
            </div>
            <!-- /Mobile Menu -->
        </div>
    </div>

    <!-- Mobile Menu -->
    <div class="dropdown mobile-user-menu">
        <a href="javascript:void(0);" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
            aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
        <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="{{ route('profile.edit') }}">My Profile</a>
            <a class="dropdown-item" href="{{ route('logout') }}">Logout</a>
        </div>
    </div>
    <!-- /Mobile Menu -->
</div>
<!-- /Header -->

