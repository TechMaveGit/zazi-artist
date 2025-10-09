
<!-- Sidebar -->
<div class="sidebar" id="sidebar">
    <div class="customsidebar">
        <div class="sidebar-inner slimscroll">
            <div id="sidebar-menu" class="sidebar-menu">
                <ul>
                    <li class="submenu-open">
                        <h6 class="submenu-hdr">Main Navigation</h6>
                    </li>

                    <li class="submenu-open">

                        <ul>
                            <li><a href="{{ route('dashboard') }}" class="{{ request()->routeIs('dashboard') ? 'active' : '' }}">
                                    <iconify-icon icon="radix-icons:dashboard"></iconify-icon>
                                    <span>Dashboard</span>
                                </a></li>
                            <li><a href="{{ route('subscription.index') }}" class="{{ request()->routeIs('subscription.index') ? 'active' : '' }}">
                                    <iconify-icon icon="hugeicons:credit-card"></iconify-icon>
                                    <span>Subscriptions</span>
                                </a></li>
                            <li><a href="{{ route('salon.index') }}" class="{{ request()->routeIs('salon.index') ? 'active' : '' }}">
                                    <iconify-icon icon="map:beauty-salon"></iconify-icon>
                                    <span>Salons</span>
                                </a></li>
                            <li><a href="{{ route('transactions.index') }}" class="{{ request()->routeIs('transactions.index') ? 'active' : '' }}">
                                    <iconify-icon icon="solar:dollar-linear"></iconify-icon>
                                    <span>Transactions</span>
                                </a></li>
                            <li><a href="{{ route('email-management.index') }}" class="{{ request()->routeIs('email-management.index') ? 'active' : '' }}">
                                    <iconify-icon icon="clarity:email-line"></iconify-icon>
                                    <span>Email Management</span>
                                </a></li>


                        </ul>
                    </li>


                </ul>
            </div>
        </div>

        <div class="SidebottommenuWrap">

            <div id="sidebar-menu" class="sidebar-menu">
                <ul>

                    <li class="submenu-open">
                        <ul>

                            <li><a href="{{ route('profile.edit') }}" class="{{ request()->routeIs('profile.edit') ? 'active' : '' }}">
                                    <iconify-icon icon="iconoir:profile-circle"></iconify-icon>
                                    <span>Profile</span>
                                </a>
                            </li>

                            <li class="sidelogout" id="sidelogout">
                                <a href="{{ route('logout') }}" class="sidelogoutmenu">
                                    <iconify-icon icon="solar:logout-outline"></iconify-icon><span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>

        </div>
    </div>

</div>
<!-- /Sidebar -->