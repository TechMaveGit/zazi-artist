<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">
    <meta name="robots" content="">
    <title>{{ $title }} || BeautyPro Home</title>

    <!-- Favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('assets/img/logo-small.png') }}">

    <!-- Theme Script js -->
    <script src="{{asset('assets/js/theme-script.js')}}" type=""></script>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.min.css') }}">
    <!-- Tabler Icon CSS -->
    <link rel="stylesheet" href="{{ asset('assets/plugins/tabler-icons/tabler-icons.css') }}">
    <!-- Datetimepicker CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/bootstrap-datetimepicker.min.css') }}">

    <!-- Daterangepikcer CSS -->
    <link rel="stylesheet" href="{{ asset('assets/plugins/daterangepicker/daterangepicker.css') }}">

    <!-- animation CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/animate.css') }}">

    <!-- Select2 CSS -->
    <link rel="stylesheet" href="{{ asset('assets/plugins/select2/css/select2.min.css') }}">

    <!-- Fontawesome CSS -->
    <link rel="stylesheet" href="{{ asset('assets/plugins/fontawesome/css/fontawesome.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/plugins/fontawesome/css/all.min.css') }}">

    <!-- Feathericon CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/feather.css') }}">

    <!-- Datatable CSS -->
    <!-- Data Table CSS -->
    <link href="{{ asset('assets/vendors/datatables.net-bs5/css/dataTables.bootstrap5.min.css') }}" rel="stylesheet"
        type="text/css" />
    <link href="{{ asset('assets/vendors/datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css') }}"
        rel="stylesheet" type="text/css" />

    <!-- Main CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">

    <link rel="stylesheet" href="{{ asset('assets/css/custom.css') }}">

    <link rel="stylesheet" href="{{ asset('assets/css/modernstyle.css') }}">
    @stack('title')
    @stack('custom_css')
</head>

<body>
    <div class="main-wrapper">
        @include('layouts.header')
        {{ $slot }}

        @include('layouts.footer')
        @include('common.message')
    </div>
    @stack('push_script')
    <!-- Offcanvas elements for each card -->
    <!-- jQuery -->
    <script src="{{ asset('assets/js/jquery-3.7.1.min.js') }}"></script>

    <!-- iconify icon -->
    <script src="{{ asset('assets/js/iconify.js') }}"></script>

    <!-- Feather Icon JS -->
    <script src="{{ asset('assets/js/feather.min.js') }}"></script>

    <!-- Slimscroll JS -->
    <script src="{{ asset('assets/js/jquery.slimscroll.min.js') }}"></script>

    <!-- Bootstrap Core JS -->
    <script src="{{ asset('assets/js/bootstrap.bundle.min.js') }}"></script>

    <!-- Chart JS -->
    <script src="{{ asset('assets/plugins/apexchart/apexcharts.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/apexchart/chart-data.js') }}"></script>

    <!-- Sweetalert 2 -->
    <script src="{{ asset('assets/plugins/sweetalert/sweetalert2.all.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/sweetalert/sweetalerts.min.js') }}"></script>

    <!-- dropify -->
    <script type="text/javascript" src="{{ asset('assets/js/dropify.min.js') }}"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/dropify.min.css') }}">

    <!-- Datatable JS -->
    <script src="{{ asset('assets/js/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('assets/js/dataTables.bootstrap5.min.js') }}"></script>
    <script src="{{ asset('assets/js/contact-data.js') }}"></script>

    <!-- Datetimepicker JS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
    <script src="{{ asset('assets/js/daterangepicker-data.js') }}"></script>

    <!-- Data Table JS -->
    <script src="{{ asset('assets/vendors/datatables.net/js/dataTables.min.js') }}"></script>
    <script src="{{ asset('assets/vendors/datatables.net-bs5/js/dataTables.bootstrap5.min.js') }}"></script>
    <script src="{{ asset('assets/vendors/datatables.net-select/js/dataTables.select.min.js') }}"></script>

    <!-- Mobile Input -->
    <!-- Mobile CSS-->
    <link rel="stylesheet" href="{{ asset('assets/plugins/intltelinput/css/intlTelInput.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/plugins/intltelinput/css/demo.css') }}">
    <script src="{{ asset('assets/plugins/intltelinput/js/intlTelInput.js') }}"></script>

    <link rel="stylesheet" type="text/css" href="{{ asset('assets/customplugins/buttons.dataTables.min.css') }}">
    <script type="text/javascript" src="{{ asset('assets/customplugins/dataTables.buttons.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('assets/customplugins/jszip.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('assets/customplugins/pdfmake.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('assets/customplugins/vfs_fonts.js') }}"></script>
    <script type="text/javascript" src="{{ asset('assets/customplugins/buttons.html5.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('assets/customplugins/buttons.colVis.min.js') }}"></script>
    <!-- Select2 JS -->
    <script src="{{ asset('assets/plugins/select2/js/select2.min.js') }}"></script>

    <!-- Daterangepikcer JS -->
    <script src="{{ asset('assets/js/moment.js') }}"></script>
    <script src="{{ asset('assets/js/bootstrap-datetimepicker.min.js') }}"></script>
    <!-- Custom JS -->
    <script src="{{asset('assets/js/script.js')}}" type=""></script>
    <!-- Custom JS -->
    <script src="{{ asset('assets/js/theme-script.js') }}"></script>
    <!-- Datetimepicker JS -->
    <script src="{{asset('assets/js/bootstrap-datetimepicker.min.js')}}" type=""></script>
    <!-- Daterangepikcer JS -->
    <script src="{{asset('assets/plugins/daterangepicker/daterangepicker.js')}}" type=""></script>

    <script src="{{ asset('assets/js/custom-select2.js') }}"></script>



    <!-- ------------------------------------
submit trigger processing js
-------------------------------------- -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const forms = document.querySelectorAll('form');
            forms.forEach(form => {
                form.addEventListener('submit', function(event) {
                    const submitButton = form.querySelector(
                        'button[type="submit"].canvasSubmit_button');
                    if (submitButton) {
                        event.preventDefault(); // Prevent default form submission
                        showLoader(submitButton);
                        // Simulate form submission for demonstration purposes
                        setTimeout(() => {
                            hideLoader(submitButton);
                            form
                                .submit(); // Submit the form after processing (e.g., AJAX call)
                        }, 2000); // Simulate a delay for form submission
                    }
                });
            });

            function showLoader(button) {
                button.dataset.originalText = button.innerHTML; // Save original button text
                button.innerHTML = 'Processing <span class="loaderButton_custom"></span>';
                button.disabled = true; // Disable the button to prevent multiple clicks
            }

            function hideLoader(button) {
                button.innerHTML = button.dataset.originalText; // Restore original button text
                button.disabled = false; // Enable the button
            }
        });
    </script>
    <!-- ------------------------------------
submit trigger processing js end
-------------------------------------- -->


    <!-- add new product from sidebar modal js start -->
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const cards = document.querySelectorAll(".card");
            const radioButtons = document.querySelectorAll("input[name='formType']");
            const selectedFormTypeInput = document.getElementById("selectedFormType");
            const continueButton = document.getElementById("continueProcessBtn");

            // Add click event to each card
            cards.forEach((card) => {
                card.addEventListener("click", function() {
                    // Remove "selected" class from all cards
                    cards.forEach((c) => c.classList.remove("selected"));

                    // Add "selected" class to the clicked card
                    this.classList.add("selected");

                    // Check the corresponding radio button
                    const radio = this.querySelector("input[type='radio']");
                    if (radio) {
                        radio.checked = true;
                        selectedFormTypeInput.value = radio.value; // Set the hidden input
                    }
                });
            });

            // Add click event to the continue button
            continueButton.addEventListener("click", function(event) {
                event.preventDefault(); // Prevent default form submission

                // Get the selected form type
                const selectedFormType = selectedFormTypeInput.value;

                // Validate if a card is selected
                const errorMessage = document.querySelector(".modal-footer .error-message");
                if (!selectedFormType) {
                    if (!errorMessage) {
                        const errorElement = document.createElement("div");
                        errorElement.className = "error-message";
                        errorElement.textContent = "Please select a product type to proceed.";
                        continueButton.insertAdjacentElement("beforebegin", errorElement);
                    }
                    return;
                }

                // Remove error message if it exists
                if (errorMessage) {
                    errorMessage.remove();
                }

                // Add loading dots
                continueButton.classList.add("btn-loading");
                continueButton.insertAdjacentHTML(
                    "beforeend",
                    `
                <div class="loading-dots">
                    <span></span><span></span><span></span>
                </div>
            `
                );

                // Simulate a delay before redirection
                setTimeout(function() {
                    // Remove loading dots
                    continueButton.classList.remove("btn-loading");
                    const loadingDots = continueButton.querySelector(".loading-dots");
                    if (loadingDots) {
                        loadingDots.remove();
                    }

                    // Redirect based on selected form type
                    if (selectedFormType === "single") {
                        window.location.href = "add-product.php";
                    } else if (selectedFormType === "combo") {
                        window.location.href = "add-combo-product.php";
                    }
                }, 2000); // Delay for 2 seconds
            });
        });
    </script>
    <!-- add new product from sidebar modal js end -->


    <script>
        // Wait for the DOM to load
        document.addEventListener("DOMContentLoaded", function() {


            // Get all sidebar links
            const links = document.querySelectorAll("#sidebar-menu a");

            // Get the current page URL
            const currentUrl = window.location.pathname;

            // Loop through each link
            links.forEach(link => {
                // Get the href attribute of the link
                const href = link.getAttribute("href");

                // If the href matches the current URL
                if (href && currentUrl.includes(href)) {
                    // Remove the active class from all links
                    links.forEach(l => l.classList.remove("active"));

                    // Add the active class to the matched link
                    link.classList.add("active");

                    // Also handle active class for parent submenu (if applicable)
                    const parentLi = link.closest("li.submenu");
                    if (parentLi) {
                        parentLi.classList.add("active");
                    }
                }
            });

            $(".submenu").each(function() {
                if ($(this).hasClass("active")) {
                    // Add class 'subdrop' to the first anchor tag
                    $(this).children("a").addClass("subdrop");

                    // Set the ul within the submenu to display as block
                    $(this).children("ul").css("display", "block");
                }
            });
        });
    </script>


    <!-- Dropify & lightbox CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/lightbox.min.css') }}">
    <script src="{{ asset('assets/js/lightbox.min.js') }}"></script>

    <script>
        $(document).ready(function() {
            // Initialize Dropify
            var drEvent = $('.dropify').dropify();

            // Customize the Dropify message
            $('.dropify').each(function() {
                var customMessage = `
            <div class="custom-upload">
                <iconify-icon icon="solar:cloud-upload-broken"></iconify-icon>
                <p>Drag and drop image or</p>
                <button type="button" class="uploadimageBtn">Upload image</button>
            </div>
        `;

                // Append the custom message inside the Dropify message div
                $(this).closest('.dropify-wrapper').find('.dropify-message').html(customMessage);
            });

            // Add a hidden lightbox trigger link
            $('body').append(
                '<a id="lightbox-trigger" href="#" data-lightbox="preview" style="display: none;">View Image</a>'
            );

            // Handle new file upload and update Lightbox
            drEvent.on('change', function(event) {
                var input = event.target;
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        $("#lightbox-trigger").attr("href", e.target.result);
                    };
                    reader.readAsDataURL(input.files[0]);
                }
            });

            // Open Lightbox when clicking Dropify preview image
            $(document).on("click", ".dropify-render img", function(event) {
                event.preventDefault(); // Prevent file upload dialog
                $("#lightbox-trigger").click();
            });
        });
    </script>



    <!-- custom select js -->
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const selects = document.querySelectorAll(".custom-default-select");

            selects.forEach(select => {
                const trigger = select.querySelector(".select-trigger");
                const options = select.querySelector(".options");
                const selectedText = select.querySelector(".selected-text");

                // Toggle dropdown
                trigger.addEventListener("click", (e) => {
                    e.stopPropagation();

                    // Close all dropdowns first
                    document.querySelectorAll(".custom-default-select .options").forEach(opt => {
                        if (opt !== options) opt.style.display = "none";
                    });
                    document.querySelectorAll(".select-trigger").forEach(trig => {
                        if (trig !== trigger) trig.classList.remove("active");
                    });

                    // Toggle current
                    const isOpen = options.style.display === "flex";
                    options.style.display = isOpen ? "none" : "flex";
                    trigger.classList.toggle("active", !isOpen);
                });

                // Select option
                options.querySelectorAll("span").forEach(option => {
                    option.addEventListener("click", (e) => {
                        e.stopPropagation();
                        selectedText.textContent = option.textContent;
                        trigger.setAttribute("data-value", option.getAttribute(
                            "data-value"));
                        options.style.display = "none";
                        trigger.classList.remove("active");
                    });
                });
            });

            // Close all when clicking outside
            document.addEventListener("click", () => {
                document.querySelectorAll(".custom-default-select .options")
                    .forEach(opt => opt.style.display = "none");
                document.querySelectorAll(".select-trigger")
                    .forEach(trig => trig.classList.remove("active"));
            });
        });
    </script>
</body>

</html>
