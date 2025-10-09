<x-app-layout>
    <div class="page-wrapper">
        <form action="profile.php">
            <div class="content settings-content">
                <div
                    class="d-md-flex pagetop_headercmntb d-block align-items-center justify-content-between page-breadcrumb ">

                    <div class="my-auto ">
                        <h2 class="mb-1 flexpagetitle">
                            <div class="backbtnwrap">
                                <a href="index.php">
                                    <iconify-icon icon="octicon:arrow-left-24"></iconify-icon>
                                </a>
                            </div>
                            Your Profile
                        </h2>
                    </div>

                    <div class="d-flex  right-content align-items-center flex-wrap ">
                        <ul class="tophead_action">

                            <li>
                                <div class="enquiryDate">
                                    <iconify-icon icon="ion:calendar-outline"></iconify-icon> Last Updated On : <div
                                        class="Onboarddate">
                                        14 Dec 2024 12:24pm</div>

                                </div>
                            </li>
                            <li>
                                <div class="pageheader_rightbtns">
                                    <button type="submit" class="cmnPromary_btn">Save Changes</button>
                                </div>
                            </li>


                        </ul>
                        <div class="head-icons ms-2 mb-0">
                            <a href="javascript:void(0);" class="" data-bs-toggle="tooltip"
                                data-bs-placement="top" data-bs-original-title="Collapse" id="collapse-header">
                                <i class="ti ti-chevrons-up"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="card tablemaincard_nopaddingleftright noboxshadow">
                    <div class="card-body p-0">
                        <div class="custom-datatable-filter">
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="settings-wrapper d-flex">
                                        <div class="sidebars settings-sidebar " id="sidebar2">
                                            <div class="sidebar-inner slimscroll">
                                                <div class="profile-content">
                                                    <div class="profile-contentimg">
                                                        <img src="assets/img/newimages/userdummy.png" alt="img"
                                                            id="blah">
                                                    </div>
                                                    <div class="profile-contentname">
                                                        <h2>BeautyPro</h2>
                                                        <p><a
                                                                href="mailto:BeautyProinfo@gmail.com">BeautyPro@gmail.com</a>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div class="copy-container">
                                                    <span>Your ID:</span>
                                                    <div class="user-id" id="userID">#USD565</div>
                                                </div>

                                                <div id="sidebar-menu5" class="sidebar-menu">
                                                    <div class="nav vendorDetail_lefttabs flex-column nav-pills  tab-style-7"
                                                        id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                        <button class="nav-link text-start active" id="main-profile-tab"
                                                            data-bs-toggle="pill" data-bs-target="#main-profile"
                                                            type="button" role="tab" aria-controls="main-profile"
                                                            aria-selected="true">
                                                            <iconify-icon icon="solar:user-line-duotone"></iconify-icon>
                                                            Basic
                                                            Details
                                                        </button>
                                                        <button class="nav-link text-start" id="man-password-tab"
                                                            data-bs-toggle="pill" data-bs-target="#man-password"
                                                            type="button" role="tab" aria-controls="man-password"
                                                            aria-selected="false">
                                                            <iconify-icon
                                                                icon="hugeicons:square-lock-password"></iconify-icon>
                                                            Security
                                                        </button>

                                                    </div>

                                                </div>

                                                <div class="profileLogout_wrap">
                                                    <button class="btn" id="logoutbtn" type="button">
                                                        <iconify-icon icon="solar:logout-broken"></iconify-icon> Logout
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="settings-page-wrap">
                                            <div class="tab-content" id="v-pills-tabContent">
                                                @include('profile.partials.update-profile-information-form')
                                                @include('profile.partials.update-password-form')
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </form>
    </div>
    <!-- Add Bank Account -->
    <div class="modal fade" id="add-account">
        <div class="modal-dialog modal-dialog-centered custom-modal-two">
            <div class="modal-content">
                <div class="page-wrapper-new p-0">
                    <div class="content">
                        <div class="modal-header border-0 custom-modal-header">
                            <div class="page-title">
                                <h4>Add Bank Account</h4>
                            </div>

                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body custom-modal-body">
                            <form action="profile.php">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="mb-3">
                                            <label class="form-label">Bank Name <span> *</span></label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="mb-3">
                                            <label class="form-label">Account Number <span> *</span></label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="mb-3">
                                            <label class="form-label">Account Name <span> *</span></label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="mb-3">
                                            <label class="form-label">Branch <span> *</span></label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="mb-3">
                                            <label class="form-label">IFSC <span> *</span></label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div
                                            class="status-toggle modal-status d-flex justify-content-between align-items-center mb-3">
                                            <span class="status-label">Status</span>
                                            <input type="checkbox" id="user2" class="check" checked="">
                                            <label for="user2" class="checktoggle"></label>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div
                                            class="status-toggle modal-status d-flex justify-content-between align-items-center">
                                            <span class="status-label">Make as default</span>
                                            <input type="checkbox" id="user3" class="check" checked="">
                                            <label for="user3" class="checktoggle"></label>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer-btn">
                                    <button type="button" class="btn btn-cancel me-2"
                                        data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" class="btn btn-submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Add Bank Account -->
    <!-- Edit Bank Account -->
    <div class="modal fade" id="edit-account">
        <div class="modal-dialog modal-dialog-centered custom-modal-two">
            <div class="modal-content">
                <div class="page-wrapper-new p-0">
                    <div class="content">
                        <div class="modal-header border-0 custom-modal-header">
                            <div class="page-title">
                                <h4>Edit Bank Account</h4>
                            </div>

                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body custom-modal-body">
                            <form action="profile.php">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="mb-3">
                                            <label class="form-label">Bank Name <span> *</span></label>
                                            <input type="text" class="form-control" value="HDFC">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="mb-3">
                                            <label class="form-label">Account Number <span> *</span></label>
                                            <input type="text" class="form-control" value="**** **** 1832">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="mb-3">
                                            <label class="form-label">Account Name <span> *</span></label>
                                            <input type="text" class="form-control" value="Mathew">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="mb-3">
                                            <label class="form-label">Branch <span> *</span></label>
                                            <input type="text" class="form-control" value="Bringham">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="mb-3">
                                            <label class="form-label">IFSC <span> *</span></label>
                                            <input type="text" class="form-control" value="124547">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div
                                            class="status-toggle modal-status d-flex justify-content-between align-items-center mb-3">
                                            <span class="status-label">Status</span>
                                            <input type="checkbox" id="user5" class="check" checked="">
                                            <label for="user5" class="checktoggle"></label>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div
                                            class="status-toggle modal-status d-flex justify-content-between align-items-center">
                                            <span class="status-label">Make as default</span>
                                            <input type="checkbox" id="user6" class="check" checked="">
                                            <label for="user6" class="checktoggle"></label>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer-btn">
                                    <button type="button" class="btn btn-cancel me-2"
                                        data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" class="btn btn-submit">Save Changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Edit Bank Account -->
    @push('scripts')
        <!-- SweetAlert2 CDN -->
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

        <!-- copy id functionality start -->
        <script>
            function copyText() {
                // Get the User ID content
                const userID = document.getElementById('userID').textContent;
                // Copy text to clipboard
                const textarea = document.createElement('textarea');
                textarea.value = userID;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                // SweetAlert2 Toast Notification
                Swal.fire({
                    toast: true,
                    icon: 'success',
                    title: 'Copied to clipboard!',
                    position: 'bottom-end',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    background: '#fff',
                    color: '#333',
                });
            }
        </script>
        <!-- end -->

        <!-- profile image upload js -->
        <script>
            document.addEventListener("change", function(event) {
                if (event.target.classList.contains("uploadProfileInput")) {
                    var triggerInput = event.target;
                    var currentImg = triggerInput.closest(".pic-holder").querySelector(".pic").src;
                    var holder = triggerInput.closest(".pic-holder");
                    var wrapper = triggerInput.closest(".profile-pic-wrapper");
                    var alerts = wrapper.querySelectorAll('[role="alert"]');
                    alerts.forEach(function(alert) {
                        alert.remove();
                    });
                    triggerInput.blur();
                    var files = triggerInput.files || [];
                    if (!files.length || !window.FileReader) {
                        return;
                    }
                    if (/^image/.test(files[0].type)) {
                        var reader = new FileReader();
                        reader.readAsDataURL(files[0]);
                        reader.onloadend = function() {
                            holder.classList.add("uploadInProgress");
                            holder.querySelector(".pic").src = this.result;
                            var loader = document.createElement("div");
                            loader.classList.add("upload-loader");
                            loader.innerHTML =
                                '<div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div>';
                            holder.appendChild(loader);
                            setTimeout(function() {
                                holder.classList.remove("uploadInProgress");
                                loader.remove();
                                var random = Math.random();
                                if (random < 0.9) {
                                    wrapper.innerHTML +=
                                        '<div class="snackbar show" role="alert"><i class="fa fa-check-circle text-success"></i> Store image updated successfully</div>';
                                    triggerInput.value = "";
                                    // Hide the label by setting opacity to 0
                                    wrapper.querySelector(".upload-file-block").style.opacity = "0";
                                    setTimeout(function() {
                                        wrapper.querySelector('[role="alert"]').remove();
                                    }, 3000);
                                } else {
                                    holder.querySelector(".pic").src = currentImg;
                                    wrapper.innerHTML +=
                                        '<div class="snackbar show" role="alert"><i class="fa fa-times-circle text-danger"></i> There is an error while uploading! Please try again later.</div>';
                                    triggerInput.value = "";
                                    setTimeout(function() {
                                        wrapper.querySelector('[role="alert"]').remove();
                                    }, 3000);
                                }
                            }, 1500);
                        };
                    } else {
                        wrapper.innerHTML +=
                            '<div class="alert alert-danger d-inline-block p-2 small" role="alert">Please choose a valid image.</div>';
                        setTimeout(function() {
                            var invalidAlert = wrapper.querySelector('[role="alert"]');
                            if (invalidAlert) {
                                invalidAlert.remove();
                            }
                        }, 3000);
                    }
                }
            });
        </script>
        <!-- profile image upload js -->

        <!-- password validation functionality start -->
        <script>
            $(document).ready(function() {
                // Toggle password visibility
                $(".inputwithICON iconify-icon").click(function() {
                    let input = $(this).siblings("input");
                    let type = input.attr("type") === "password" ? "text" : "password";
                    input.attr("type", type);
                });
                // Password validation and match check
                function validatePassword(password) {
                    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                    return regex.test(password);
                }
                $("input[placeholder='Enter New Password']").on("keyup", function() {
                    let newPassword = $(this).val();
                    let validationMessage =
                        "Password should be at least 8 characters long and include uppercase, lowercase, numbers, and special characters.";
                    if (validatePassword(newPassword)) {
                        $(".securityNote p").text("Password meets requirements.").css("color", "green");
                        $("input[placeholder='Confirm Password']").prop("disabled", false);
                    } else {
                        $(".securityNote p").text(validationMessage).css("color", "red");
                        $("input[placeholder='Confirm Password']").prop("disabled", true);
                    }
                });
                $("input[placeholder='Confirm Password']").on("keyup", function() {
                    let newPassword = $("input[placeholder='Enter New Password']").val();
                    let confirmPassword = $(this).val();
                    $(".match-message, .error-message").remove();
                    if (newPassword !== "" && confirmPassword !== "") {
                        if (newPassword === confirmPassword) {
                            $(".securityNote").after(
                                "<p class='match-message' style='color: green;'>Passwords match!</p>");
                        } else {
                            $(".securityNote").after(
                                "<p class='error-message' style='color: red;'>Passwords do not match!</p>");
                        }
                    }
                });
            });
        </script>
        <!-- end -->
    @endpush
</x-app-layout>
