<!-- for selection modal -->
<div class="addEnquiry productSelection_modal">
    <form action="#">
        <div class="modal fade" id="createformModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header modalheader_customStyle">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <div class="modaltitle_icon">
                                <img src="{{ asset('assets/img/newimages/add-to-basket.png') }}" alt="">
                            </div>
                            <div class="enquiryChoose_Title">
                                Create a New Product
                                <span class="modalTitlePara">
                                    Select the type of product you want to add.
                                </span>
                            </div>
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="selectedtype_container">
                            <!-- Single Product Card -->
                            <div class="card cardforAcFire" data-form-type="single">
                                <div class="card-content">
                                    <div class="formtypecard_icon">
                                        <img src="{{ asset('assets/img/newimages/box(1).png') }}" alt="">
                                    </div>
                                    <h2 class="card-title">Single Product</h2>
                                    <div class="radio-container">
                                        <input type="radio" id="radioSingle" name="formType" value="single" />
                                        <label for="radioSingle" class="radio-label"></label>
                                    </div>
                                </div>
                            </div>

                            <!-- Combo Product Card -->
                            <div class="card CardDual" data-form-type="combo">
                                <div class="card-content">
                                    <div class="formtypecard_icon">
                                        <img src="{{ asset('assets/img/newimages/products.png') }}" alt="">
                                    </div>
                                    <h2 class="card-title">Combo Product</h2>
                                    <div class="radio-container">
                                        <input type="radio" id="radioCombo" name="formType" value="combo" />
                                        <label for="radioCombo" class="radio-label"></label>
                                    </div>
                                </div>
                            </div>

                            <input type="hidden" name="selectedFormType" id="selectedFormType" required />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="continueProcessBtn" class="btnContinueProcess editEnquiryBtn">
                            <div class="buttontext">
                                <div class="formediticon_modal">
                                    <iconify-icon icon="uit:process"></iconify-icon>
                                </div>
                                Continue to Process
                            </div>
                            <iconify-icon icon="bi:arrow-right"></iconify-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>

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

{{-- summernote js --}}
<script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.9.1/summernote-bs5.min.js"
    integrity="sha512-qTQLA91yGDLA06GBOdbT7nsrQY8tN6pJqjT16iTuk08RWbfYmUz/pQD3Gly1syoINyCFNsJh7A91LtrLIwODnw=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script src="{{ asset('assets/js/custom-select2.js') }}"></script>

<script src="https://cdn.jsdelivr.net/npm/mammoth@1.4.2/mammoth.browser.min.js"></script>



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
<script>
    const dataTables = {};

    function setupCustomUI(tableInstance, index) {
        const toolbarSelector = `.contact-toolbar-left${index}`;
        const $toolbar = $(toolbarSelector);

        // Add filter text
        $toolbar.addClass("contact-toolbar-left").html(
            '<div class="d-xxl-flex filterbyTable d-none align-items-center form-group mb-0">' +
            '<label class="flex-shrink-0 mb-0 me-2">Filter by:</label></div>'
        );

        // Length menu
        if ($(`${toolbarSelector} .dataTables_length`).length === 0) {
            const lengthMenu = $(
                `<div class="dataTables_length">
                <label>Show </label>
                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                <label> entries</label>
            </div>`
            );

            // Bind select change to DataTable page length update
            lengthMenu.find('select').on('change', function() {
                tableInstance.page.len($(this).val()).draw();
            });

            $toolbar.append(lengthMenu);
        }

        // Column visibility toggle
        const columnDropdown = $('<div class="dropdown d-inline-block"></div>');
        const columnButton = $(`
        <button class="btn-sm dropdown-toggle d-flex align-items-center w-130p form-select form-select-sm" type="button" data-bs-toggle="dropdown" id="columnDropdown" aria-expanded="false">
            <i class="bi bi-layout-three-columns"></i> Columns</button>
    `);
        const columnMenu = $('<ul class="dropdown-menu columnvisible_dropdownmenus"></ul>');

        tableInstance.columns().every(function(index) {
            const column = this;
            const colName = column.header().textContent;

            // Hide from dropdown: column index 0 (id) OR empty header
            if (index === 0 || colName.trim() === '' || column.visible() === false && colName === '') return;

            const checkbox = $(`<li><label class="dropdown-item">
            <input type="checkbox" class="form-check-input is-valid">
            ${colName}</label></li>`);

            checkbox.find('input')
                .prop('checked', column.visible())
                .on('change', function() {
                    column.visible($(this).is(':checked'));
                });

            columnMenu.append(checkbox);
        });

        columnDropdown.append(columnButton).append(columnMenu);
        $toolbar.append(columnDropdown);

        // Export dropdown
        const exportDropdown = $('<div class="dropdown d-inline-block"></div>');
        const exportButton = $(
            `<button class="btn-sm dropdown-toggle d-flex align-items-center w-130p form-select form-select-sm" type="button" data-bs-toggle="dropdown" id="exportDropdown" aria-expanded="false">
            <i class="bi bi-download"></i> Export</button>`
        );
        const exportMenu = $('<ul class="dropdown-menu exportdropdown_menu"></ul>');

        exportDropdown.append(exportButton).append(exportMenu);
        new $.fn.dataTable.Buttons(tableInstance, {
            buttons: ['copy', 'excel', 'csv', 'pdf']
        }).container().appendTo(exportMenu);

        $toolbar.append(exportDropdown);
    }

    function initializeDataTable(tableId, ajaxUrl, columns, index = 0, getAjaxData = () => ({}), defaultOrder = [
        [1, 'asc']
    ]) {
        let $table = $(tableId).DataTable({
            processing: true,
            serverSide: true,
            ajax: {
                url: ajaxUrl,
                data: function(d) {
                    // Merge dynamic data on every request
                    return Object.assign(d, getAjaxData());
                }
            },
            columns: columns,
            pagingType: 'simple_numbers',
            dom: '<"row"<"col-7 mb-3 contact-toolbar-left' + index +
                '"><"col-5 mb-3 contact-toolbar-right"flip>>' +
                '<"row"<"col-sm-12"t>>' +
                '<"row"<"col-sm-12 col-md-5"i><"col-sm-12 col-md-7"p>>',
            order: defaultOrder,
            language: {
                search: "",
                searchPlaceholder: "Search here...",
                info: "_START_ - _END_ of _TOTAL_",
                sLengthMenu: "View  _MENU_",
                paginate: {
                    next: '<i class="ri-arrow-right-s-line"></i>',
                    previous: '<i class="ri-arrow-left-s-line"></i>'
                }
            },
            drawCallback: function() {
                $(tableId).closest('.common-datatable_wrapper').find('.pagination')
                    .addClass('custom-pagination pagination-simple justify-content-end');
            }
        });

        setupCustomUI($table, index);
        dataTables[tableId] = $table;
        return $table;
    }
</script>
