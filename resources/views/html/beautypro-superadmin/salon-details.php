<?php include("header.php") ?>

<!-- Include Salon Details CSS -->
<link rel="stylesheet" href="assets/css/salon-details.css">

<div class="page-wrapper">
    <div class="content">
        <div class="d-md-flex pagetop_headercmntb d-block align-items-center justify-content-between page-breadcrumb ">
            <div class="pageheaderleft">
                <a href="salons.php" class="btn btn-ghost btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        data-lucide="arrow-left" class="lucide lucide-arrow-left">
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path>
                    </svg>
                </a>
                <div class="my-auto ">
                    <h2 class="mb-1">Salon Details</h2>
                    <p class="page-subtitle">Complete overview of salon information and performance</p>
                </div>
            </div>

            <div class="d-flex my-xl-auto right-content align-items-center flex-wrap ">
                <div class="">
                    <button type="button" class="salon-detail-action-btn salon-detail-btn-danger me-2" id="suspendAccountBtn">
                        <iconify-icon icon="material-symbols:block"></iconify-icon>Suspend Account
                    </button>
                </div>
                <div class="">
                    <button type="button" class="salon-detail-action-btn salon-detail-btn-primary" id="sendReminderBtn">
                        <iconify-icon icon="material-symbols:mail-outline"></iconify-icon>Send Reminder
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

        <section class="subscriptionstats">
            <div class="row">
        <div class="col-lg-3 col-md-6 ">
            <div class="metric-card card">
                <div class="metric-content">
                    <div class="metric-info">
                        <p class="metric-label">Total Artists</p>
                        <p class="metric-value">15</p>
                    </div>
                    <div class="metric-icon primary">
                       <iconify-icon icon="proicons:star"></iconify-icon>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-3 col-md-6 ">
            <div class="metric-card card">
                <div class="metric-content">
                    <div class="metric-info">
                        <p class="metric-label">Gallery Images</p>
                        <p class="metric-value">48</p>
                    </div>
                    <div class="metric-icon success">
                        <iconify-icon icon="mynaui:users"></iconify-icon>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-3 col-md-6 ">
            <div class="metric-card card">
                <div class="metric-content">
                    <div class="metric-info">
                        <p class="metric-label">Services</p>
                        <p class="metric-value">23</p>
                    </div>
                    <div class="metric-icon warning">
                        <iconify-icon icon="hugeicons:dollar-02"></iconify-icon>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-3 col-md-6 ">
            <div class="metric-card card">
                <div class="metric-content">
                    <div class="metric-info">
                        <p class="metric-label">Monthly Revenue</p>
                        <p class="metric-value">$12,500</p>
                    </div>
                    <div class="metric-icon primary">
                        <iconify-icon icon="hugeicons:floor-plan"></iconify-icon>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </section>

        <!-- Salon Basic Info -->
        <div class="row">
            <div class="col-lg-8">
                <div class="card salon-detail-glass-card">
                    <div class="card-body">
                        <div class="salon-detail-profile">
                            <div class="salon-detail-avatar">
                                <img src="assets/img/users/userdummy.png" alt="Glamour Studio" class="salon-detail-image">
                                <div class="salon-detail-status salon-detail-active">
                                    <iconify-icon icon="material-symbols:check-circle"></iconify-icon>
                                </div>
                            </div>
                            <div class="salon-detail-info">
                                <h3 class="salon-detail-name">Glamour Studio</h3>
                                <p class="salon-detail-owner">Owner: Sarah Johnson</p>
                                <div class="salon-detail-meta">
                                    <div class="salon-detail-meta-item">
                                        <iconify-icon icon="material-symbols:mail-outline"></iconify-icon>
                                        <span>glamour@example.com</span>
                                    </div>
                                    <div class="salon-detail-meta-item">
                                        <iconify-icon icon="material-symbols:call-outline"></iconify-icon>
                                        <span>+1 212 555 7890</span>
                                    </div>
                                    <div class="salon-detail-meta-item">
                                        <iconify-icon icon="material-symbols:location-on-outline"></iconify-icon>
                                        <span>New York, NY (USA)</span>
                                    </div>
                                    <div class="salon-detail-meta-item">
                                        <iconify-icon icon="material-symbols:calendar-today-outline"></iconify-icon>
                                        <span>Joined: Dec 15, 2023</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card salon-detail-glass-card">
                    <div class="card-header cardflex_header">
                        <h6 class="salon-detail-card-title">
                            <iconify-icon icon="material-symbols:credit-card-outline"></iconify-icon>
                            Current Plan
                        </h6>
                       
                    </div>
                    <div class="card-body">
                        <div class="salon-detail-current-plan">
                           <div class="plansalonwrap">
                             <div class="salon-detail-plan-badge">Premium Plan</div>
                            <div class="salonplantile">
                                <div class="salon-detail-plan-price">$199.99<span>/monthly</span></div>
                            <div class="salon-detail-plan-expiry">
                                <iconify-icon icon="material-symbols:schedule-outline"></iconify-icon>
                                <span>Expires: Jan 15, 2025</span>
                            </div>
                            </div>
                           </div>
                            

                             <div class="salon-detail-plan-status salon-detail-active">
                                <iconify-icon icon="material-symbols:check-circle"></iconify-icon>
                                <span>Active</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    

        <!-- Main Content Tabs -->
        <div class="row">
            <div class="col-12">
                <div class="card salon-detail-glass-card">
                    <div class="card-header">
                        <ul class="nav nav-tabs salon-detail-tabs" id="salonTabs" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="billing-tab" data-bs-toggle="tab" data-bs-target="#billing" type="button" role="tab">
                                    <iconify-icon icon="material-symbols:receipt-long-outline"></iconify-icon>
                                    Billing History
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="artists-tab" data-bs-toggle="tab" data-bs-target="#artists" type="button" role="tab">
                                    <iconify-icon icon="material-symbols:group-outline"></iconify-icon>
                                    Artists
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="gallery-tab" data-bs-toggle="tab" data-bs-target="#gallery" type="button" role="tab">
                                    <iconify-icon icon="material-symbols:photo-library-outline"></iconify-icon>
                                    Gallery
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="services-tab" data-bs-toggle="tab" data-bs-target="#services" type="button" role="tab">
                                    <iconify-icon icon="material-symbols:design-services-outline"></iconify-icon>
                                    Services
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div class="transactionWrap">
                        <div class="tab-content" id="salonTabsContent">
                            <!-- Billing History Tab -->
                            <div class="tab-pane fade show active" id="billing" role="tabpanel">
                                <div class="table-responsive">
                                    <table class="table common-datatable withoutActionTR nowrap w-100">
                                        <thead>
                                            <tr>
                                                <th>Invoice ID</th>
                                                <th>Plan</th>
                                                <th>Amount</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>#INV-001</td>
                                                <td>Premium Plan</td>
                                                <td>$199.99</td>
                                                <td>Dec 15, 2024</td>
                                                <td><span class="salon-detail-badge-success">Paid</span></td>
                                                <td>
                                                    <button class="btninvoiceDownload btn">
                                                        <iconify-icon icon="bytesize:download"></iconify-icon> Download
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#INV-002</td>
                                                <td>Premium Plan</td>
                                                <td>$199.99</td>
                                                <td>Nov 15, 2024</td>
                                                <td><span class="salon-detail-badge-success">Paid</span></td>
                                                <td>
                                                    <button class="btninvoiceDownload btn">
                                                        <iconify-icon icon="bytesize:download"></iconify-icon> Download
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#INV-003</td>
                                                <td>Professional Plan</td>
                                                <td>$99.99</td>
                                                <td>Oct 15, 2024</td>
                                                <td><span class="salon-detail-badge-success">Paid</span></td>
                                                <td>
                                                     <button class="btninvoiceDownload btn">
                                                        <iconify-icon icon="bytesize:download"></iconify-icon> Download
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Artists Tab -->
                            <div class="tab-pane fade" id="artists" role="tabpanel">
                                <div class="salon-detail-artists-grid card-body">
                                    <div class="salon-detail-artist-card">
                                        <div class="salon-detail-artist-avatar">
                                            <img src="assets/img/users/userdummy.png" alt="Emma Wilson">
                                        </div>
                                        <div class="salon-detail-artist-info">
                                            <h6 class="salon-detail-artist-name">Emma Wilson</h6>
                                            <p class="salon-detail-artist-specialty">Hair Stylist</p>
                                            <div class="salon-detail-artist-meta">
                                                <span class="salon-detail-artist-rating">
                                                    <iconify-icon icon="material-symbols:star"></iconify-icon>
                                                    4.8
                                                </span>
                                                <span class="salon-detail-artist-bookings">142 bookings</span>
                                            </div>
                                        </div>
                                        <div class="salon-detail-artist-status salon-detail-active">Active</div>
                                    </div>

                                    <div class="salon-detail-artist-card">
                                        <div class="salon-detail-artist-avatar">
                                            <img src="assets/img/users/userdummy.png" alt="Michael Chen">
                                        </div>
                                        <div class="salon-detail-artist-info">
                                            <h6 class="salon-detail-artist-name">Michael Chen</h6>
                                            <p class="salon-detail-artist-specialty">Makeup Artist</p>
                                            <div class="salon-detail-artist-meta">
                                                <span class="salon-detail-artist-rating">
                                                    <iconify-icon icon="material-symbols:star"></iconify-icon>
                                                    4.9
                                                </span>
                                                <span class="salon-detail-artist-bookings">98 bookings</span>
                                            </div>
                                        </div>
                                        <div class="salon-detail-artist-status salon-detail-active">Active</div>
                                    </div>

                                    <div class="salon-detail-artist-card">
                                        <div class="salon-detail-artist-avatar">
                                            <img src="assets/img/users/userdummy.png" alt="Sofia Rodriguez">
                                        </div>
                                        <div class="salon-detail-artist-info">
                                            <h6 class="salon-detail-artist-name">Sofia Rodriguez</h6>
                                            <p class="salon-detail-artist-specialty">Nail Technician</p>
                                            <div class="salon-detail-artist-meta">
                                                <span class="salon-detail-artist-rating">
                                                    <iconify-icon icon="material-symbols:star"></iconify-icon>
                                                    4.7
                                                </span>
                                                <span class="salon-detail-artist-bookings">76 bookings</span>
                                            </div>
                                        </div>
                                        <div class="salon-detail-artist-status salon-detail-inactive">Inactive</div>
                                    </div>

                                    <div class="salon-detail-artist-card">
                                        <div class="salon-detail-artist-avatar">
                                            <img src="assets/img/users/userdummy.png" alt="James Thompson">
                                        </div>
                                        <div class="salon-detail-artist-info">
                                            <h6 class="salon-detail-artist-name">James Thompson</h6>
                                            <p class="salon-detail-artist-specialty">Barber</p>
                                            <div class="salon-detail-artist-meta">
                                                <span class="salon-detail-artist-rating">
                                                    <iconify-icon icon="material-symbols:star"></iconify-icon>
                                                    4.6
                                                </span>
                                                <span class="salon-detail-artist-bookings">89 bookings</span>
                                            </div>
                                        </div>
                                        <div class="salon-detail-artist-status salon-detail-active">Active</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Gallery Tab -->
                            <div class="tab-pane fade" id="gallery" role="tabpanel">
                                <div class="salon-detail-gallery-grid card-body">
                                    <div class="salon-detail-gallery-item">
                                        <img src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Gallery Image" data-lightbox="salon-gallery">
                                    </div>
                                    <div class="salon-detail-gallery-item">
                                        <img src="https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Gallery Image" data-lightbox="salon-gallery">
                                    </div>
                                    <div class="salon-detail-gallery-item">
                                        <img src="https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Gallery Image" data-lightbox="salon-gallery">
                                    </div>
                                    <div class="salon-detail-gallery-item">
                                        <img src="https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Gallery Image" data-lightbox="salon-gallery">
                                    </div>
                                    <div class="salon-detail-gallery-item">
                                        <img src="https://images.pexels.com/photos/3993454/pexels-photo-3993454.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Gallery Image" data-lightbox="salon-gallery">
                                    </div>
                                    <div class="salon-detail-gallery-item">
                                        <img src="https://images.pexels.com/photos/3764010/pexels-photo-3764010.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Gallery Image" data-lightbox="salon-gallery">
                                    </div>
                                    <div class="salon-detail-gallery-item">
                                        <img src="https://images.pexels.com/photos/3993458/pexels-photo-3993458.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Gallery Image" data-lightbox="salon-gallery">
                                    </div>
                                    <div class="salon-detail-gallery-item">
                                        <img src="https://images.pexels.com/photos/3764012/pexels-photo-3764012.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Gallery Image" data-lightbox="salon-gallery">
                                    </div>
                                </div>
                            </div>

                            <!-- Services Tab -->
                            <div class="tab-pane fade" id="services" role="tabpanel">
                                <div class="salon-detail-services-grid card-body">
                                    <div class="salon-detail-service-card">
                                        <div class="salon-detail-service-info">
                                            <h6 class="salon-detail-service-name">Hair Cut & Styling</h6>
                                            <p class="salon-detail-service-description">Professional hair cutting and styling services</p>
                                            <div class="salon-detail-service-price">$45.00</div>
                                        </div>
                                        <div class="salon-detail-service-status salon-detail-active">Active</div>
                                    </div>

                                    <div class="salon-detail-service-card">
                                        <div class="salon-detail-service-info">
                                            <h6 class="salon-detail-service-name">Hair Coloring</h6>
                                            <p class="salon-detail-service-description">Full hair coloring and highlighting services</p>
                                            <div class="salon-detail-service-price">$85.00</div>
                                        </div>
                                        <div class="salon-detail-service-status salon-detail-active">Active</div>
                                    </div>

                                    <div class="salon-detail-service-card">
                                        <div class="salon-detail-service-info">
                                            <h6 class="salon-detail-service-name">Bridal Makeup</h6>
                                            <p class="salon-detail-service-description">Complete bridal makeup package</p>
                                            <div class="salon-detail-service-price">$150.00</div>
                                        </div>
                                        <div class="salon-detail-service-status salon-detail-active">Active</div>
                                    </div>

                                    <div class="salon-detail-service-card">
                                        <div class="salon-detail-service-info">
                                            <h6 class="salon-detail-service-name">Nail Art</h6>
                                            <p class="salon-detail-service-description">Creative nail art and manicure services</p>
                                            <div class="salon-detail-service-price">$35.00</div>
                                        </div>
                                        <div class="salon-detail-service-status salon-detail-inactive">Inactive</div>
                                    </div>

                                    <div class="salon-detail-service-card">
                                        <div class="salon-detail-service-info">
                                            <h6 class="salon-detail-service-name">Facial Treatment</h6>
                                            <p class="salon-detail-service-description">Deep cleansing and rejuvenating facial</p>
                                            <div class="salon-detail-service-price">$65.00</div>
                                        </div>
                                        <div class="salon-detail-service-status salon-detail-active">Active</div>
                                    </div>

                                    <div class="salon-detail-service-card">
                                        <div class="salon-detail-service-info">
                                            <h6 class="salon-detail-service-name">Hair Spa</h6>
                                            <p class="salon-detail-service-description">Relaxing hair spa and treatment</p>
                                            <div class="salon-detail-service-price">$75.00</div>
                                        </div>
                                        <div class="salon-detail-service-status salon-detail-active">Active</div>
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

<!-- Suspend Account Confirmation Modal -->
<div class="modal fade" id="suspendConfirmModal" tabindex="-1" aria-labelledby="suspendConfirmModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header border-0">
                <div class="salon-detail-modal-icon-wrapper">
                    <div class="salon-detail-modal-icon salon-detail-warning">
                        <iconify-icon icon="material-symbols:warning-outline"></iconify-icon>
                    </div>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
                <h5 class="modal-title mb-2">Suspend Account</h5>
                <p class="salon-detail-modal-description">Are you sure you want to suspend <strong>Glamour Studio</strong>? This action will:</p>
                <ul class="salon-detail-suspension-effects">
                    <li>Disable salon's access to the platform</li>
                    <li>Hide salon from customer searches</li>
                    <li>Pause all active bookings</li>
                    <li>Stop billing for current subscription</li>
                </ul>
                <p class="salon-detail-modal-note">This action can be reversed at any time.</p>
            </div>
            <div class="modal-footer border-0 justify-content-center">
                <button type="button" class="btn btn-white border me-2" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-danger" id="confirmSuspendBtn">
                    <iconify-icon icon="material-symbols:block"></iconify-icon>
                    Suspend Account
                </button>
            </div>
        </div>
    </div>
</div>

<!-- Send Reminder Modal -->
<div class="modal fade" id="sendReminderModal" tabindex="-1" aria-labelledby="sendReminderModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Send Reminder</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="salon-detail-reminder-options">
                    <div class="salon-detail-reminder-option">
                        <input type="radio" id="paymentReminder" name="reminderType" value="payment" checked>
                        <label for="paymentReminder" class="salon-detail-reminder-label">
                            <div class="salon-detail-reminder-icon">
                               <iconify-icon icon="fluent-mdl2:reminder-time"></iconify-icon>
                            </div>
                            <div class="salon-detail-reminder-content">
                                <h6>Payment Reminder</h6>
                                <p>Remind about upcoming payment due date</p>
                            </div>
                        </label>
                    </div>
                    <div class="salon-detail-reminder-option">
                        <input type="radio" id="renewalReminder" name="reminderType" value="renewal">
                        <label for="renewalReminder" class="salon-detail-reminder-label">
                            <div class="salon-detail-reminder-icon">
                                <iconify-icon icon="material-symbols:refresh"></iconify-icon>
                            </div>
                            <div class="salon-detail-reminder-content">
                                <h6>Renewal Reminder</h6>
                                <p>Remind about subscription renewal</p>
                            </div>
                        </label>
                    </div>
                    <div class="salon-detail-reminder-option">
                        <input type="radio" id="updateReminder" name="reminderType" value="update">
                        <label for="updateReminder" class="salon-detail-reminder-label">
                            <div class="salon-detail-reminder-icon">
                                <iconify-icon icon="material-symbols:update"></iconify-icon>
                            </div>
                            <div class="salon-detail-reminder-content">
                                <h6>Profile Update</h6>
                                <p>Remind to update salon information</p>
                            </div>
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Custom Message (Optional)</label>
                    <textarea class="salon-detail-form-control form-control" rows="3" placeholder="Add a personal message..."></textarea>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-white border me-2" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary" id="confirmSendReminderBtn">
                    <iconify-icon icon="material-symbols:send"></iconify-icon>
                    Send Reminder
                </button>
            </div>
        </div>
    </div>
</div>

<?php include("footer.php") ?>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Suspend Account Functionality
    const suspendAccountBtn = document.getElementById('suspendAccountBtn');
    const confirmSuspendBtn = document.getElementById('confirmSuspendBtn');
    
    suspendAccountBtn.addEventListener('click', function() {
        const modal = new bootstrap.Modal(document.getElementById('suspendConfirmModal'));
        modal.show();
    });
    
    confirmSuspendBtn.addEventListener('click', function() {
        // Show loading state
        confirmSuspendBtn.innerHTML = '<iconify-icon icon="eos-icons:loading"></iconify-icon>Suspending...';
        confirmSuspendBtn.disabled = true;
        
        // Simulate suspension process
        setTimeout(() => {
            // Close modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('suspendConfirmModal'));
            modal.hide();
            
            // Show success message
            Swal.fire({
                icon: 'success',
                title: 'Account Suspended',
                text: 'Glamour Studio account has been suspended successfully.',
                confirmButtonText: 'OK',
                customClass: {
                    confirmButton: 'btn btn-primary'
                }
            });
            
            // Reset button
            confirmSuspendBtn.innerHTML = '<iconify-icon icon="material-symbols:block"></iconify-icon>Suspend Account';
            confirmSuspendBtn.disabled = false;
            
            // Update UI to reflect suspended state
            updateSalonStatus('suspended');
        }, 2000);
    });
    
    // Send Reminder Functionality
    const sendReminderBtn = document.getElementById('sendReminderBtn');
    const confirmSendReminderBtn = document.getElementById('confirmSendReminderBtn');
    
    sendReminderBtn.addEventListener('click', function() {
        const modal = new bootstrap.Modal(document.getElementById('sendReminderModal'));
        modal.show();
    });
    
    confirmSendReminderBtn.addEventListener('click', function() {
        const selectedReminder = document.querySelector('input[name="reminderType"]:checked');
        const customMessage = document.querySelector('#sendReminderModal .salon-detail-form-control').value;
        
        if (!selectedReminder) {
            Swal.fire({
                icon: 'warning',
                title: 'Please select a reminder type',
                confirmButtonText: 'OK'
            });
            return;
        }
        
        // Show loading state
        confirmSendReminderBtn.innerHTML = '<iconify-icon icon="eos-icons:loading"></iconify-icon>Sending...';
        confirmSendReminderBtn.disabled = true;
        
        // Simulate sending process
        setTimeout(() => {
            // Close modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('sendReminderModal'));
            modal.hide();
            
            // Show success message
            Swal.fire({
                icon: 'success',
                title: 'Reminder Sent',
                text: `${selectedReminder.value.charAt(0).toUpperCase() + selectedReminder.value.slice(1)} reminder has been sent to Glamour Studio.`,
                confirmButtonText: 'OK',
                customClass: {
                    confirmButton: 'btn btn-primary'
                }
            });
            
            // Reset button and form
            confirmSendReminderBtn.innerHTML = '<iconify-icon icon="material-symbols:send"></iconify-icon>Send Reminder';
            confirmSendReminderBtn.disabled = false;
            document.querySelector('#sendReminderModal .salon-detail-form-control').value = '';
            document.querySelector('input[name="reminderType"]:checked').checked = true;
        }, 1500);
    });
    
    // Function to update salon status in UI
    function updateSalonStatus(status) {
        const statusElements = document.querySelectorAll('.salon-detail-status, .salon-detail-plan-status');
        statusElements.forEach(element => {
            if (status === 'suspended') {
                element.className = 'salon-detail-status salon-detail-suspended';
                element.innerHTML = '<iconify-icon icon="material-symbols:block"></iconify-icon>';
                if (element.nextElementSibling) {
                    element.nextElementSibling.textContent = 'Suspended';
                }
            }
        });
        
        // Update suspend button
        if (status === 'suspended') {
            suspendAccountBtn.innerHTML = '<iconify-icon icon="material-symbols:play-arrow"></iconify-icon>Reactivate Account';
            suspendAccountBtn.classList.remove('salon-detail-btn-danger');
            suspendAccountBtn.classList.add('salon-detail-btn-success');
        }
    }
    
    // Gallery lightbox initialization
    if (typeof lightbox !== 'undefined') {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'albumLabel': "Image %1 of %2"
        });
    }
});
</script>