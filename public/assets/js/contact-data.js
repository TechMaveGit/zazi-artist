"use strict"; 
$(function() {
    /* Select2 */
    $("#input_tags_1,#input_tags_2,#input_tags_3").select2({
        tags: true,
        tokenSeparators: [',', ' ']
    });

    /* DataTable Init for each .common-datatable */
    $(".common-datatable").each(function(index) {
        var $table = $(this);

        // Check if DataTable is already initialized on this table
        if (!$.fn.DataTable.isDataTable($table)) {
            var targetDt = $table.DataTable({
                dom: '<"row"<"col-7 mb-3 contact-toolbar-left-' + index + ' contact-toolbar-left"><"col-5 mb-3 contact-toolbar-right"flip>><"row"<"col-sm-12"t>><"row"<"col-sm-12 col-md-5"i><"col-sm-12 col-md-7"p>>',
                columnDefs: [{ searchable: false, orderable: false }],
                pagingType: 'simple_numbers',
                order: [1, 'asc'],
                language: { search: "", searchPlaceholder: "Search here...", info: "_START_ - _END_ of _TOTAL_", sLengthMenu: "View  _MENU_", paginate: { next: '<i class="ri-arrow-right-s-line"></i>', previous: '<i class="ri-arrow-left-s-line"></i>' } },
                drawCallback: function () {
                    $table.closest('.common-datatable_wrapper').find('.pagination').addClass('custom-pagination pagination-simple justify-content-end');
                }
            });

            // Add search icon inside the input
            $('.dt-search input').before('<iconify-icon icon="majesticons:search-line"></iconify-icon>');

            $table.closest('.pagination').addClass('custom-pagination pagination-simple justify-content-end');
            $(document).on('click', '.del-button', function () {
                targetDt.row('.selected').remove().draw(false);
                return false;
            });

            // Unique toolbar with common class for each table
            $("div.contact-toolbar-left-" + index).addClass("contact-toolbar-left").html('<div class="d-xxl-flex filterbyTable d-none align-items-center form-group mb-0"> <label class="flex-shrink-0 mb-0 me-2">Filter by:</label> </div>');

            if ($(".contact-toolbar-left-" + index + " .dataTables_length").length === 0) {
                var lengthMenu = $('<div class="dataTables_length"><label>Show </label><select class="form-select form-select-sm" aria-label=".form-select-sm example"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select><label> entries</label></div>');
                $("div.contact-toolbar-left-" + index).append(lengthMenu);
            }

            $table.parent().addClass('table-responsive');

            // Column Visibility Dropdown
            var columnDropdown = $('<div class="dropdown d-inline-block"></div>');
            var columnButton = $('<button class="btn-sm dropdown-toggle d-flex align-items-center w-130p form-select form-select-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="columnDropdown"><i class="bi bi-layout-three-columns"></i> Columns</button>');
            var columnMenu = $('<ul class="dropdown-menu columnvisible_dropdownmenus"></ul>');

            targetDt.columns().every(function() {
                var column = this;
                var columnCheckbox = $('<li><label class="dropdown-item"><input type="checkbox" class="column-checkbox form-check-input is-valid" checked="checked">' + column.header().textContent + '</label></li>');
                columnCheckbox.find('input').on('change', function() {
                    column.visible($(this).is(':checked'));
                });
                columnMenu.append(columnCheckbox);
            });

            columnDropdown.append(columnButton);
            columnDropdown.append(columnMenu);
            $("div.contact-toolbar-left-" + index).append(columnDropdown);

            // Export Button Dropdown
            var exportDropdown = $('<div class="dropdown d-inline-block"></div>');
            var exportButton = $('<button id="exportDropdown" class="btn-sm dropdown-toggle d-flex align-items-center w-130p form-select form-select-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-download"></i> Export</button>');
            var exportMenu = $('<ul class="dropdown-menu exportdropdown_menu"></ul>');
            
            exportDropdown.append(exportButton);
            exportDropdown.append(exportMenu);

            // Initialize DataTables buttons for export
            new $.fn.dataTable.Buttons(targetDt, {
                buttons: [
                    'copy', 'excel', 'csv', 'pdf', 'print'
                ]
            }).container().appendTo(exportMenu);

            $("div.contact-toolbar-left-" + index).append(exportDropdown);
        }
    });
});
