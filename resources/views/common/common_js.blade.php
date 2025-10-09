<script>
    $(document).on('submit', '.global-ajax-form', function(e) {
        e.preventDefault(); // Stop normal form submission

        let form = $(this);
        let url = form.attr('action');
        let formData = form.serialize();

        // Clear old errors
        form.find('.text-danger').remove();
        form.find('.is-invalid').removeClass('is-invalid');

        $.ajax({
            url: url,
            method: 'POST',
            data: formData,
            success: function(response) {
                // If success: handle accordingly
                alert('Form submitted successfully!');
                form[0].reset();
            },
            error: function(xhr) {
                if (xhr.status === 422) {
                    let errors = xhr.responseJSON.errors;

                    // Loop through validation errors
                    $.each(errors, function(field, messages) {
                        let input = form.find(`[name="${field}"]`);

                        // Add error style
                        input.addClass('is-invalid');

                        // Append error message below the field
                        input.after(`<div class="text-danger mt-1">${messages[0]}</div>`);
                    });
                } else {
                    alert('Something went wrong. Please try again.');
                }
            }
        });
    });

    $(document).ready(function() {
        $(".status-dropdown").change(function() {
            let dropdown = $(this);
            let staffId = dropdown.data("id");
            let newStatus = dropdown.val();
            let table = dropdown.data("table");

            Swal.fire({
                title: "Are you sure?",
                text: "Do you really want to change the status?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, change it!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true,
                customClass: {
                    confirmButton: "btn btn-success",
                    cancelButton: "btn btn-danger"
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    $.ajax({
                        url: "{{ route('status.users') }}",
                        type: "POST",
                        data: {
                            id: staffId,
                            status: newStatus,
                            table: table,
                            _token: $('meta[name="csrf-token"]').attr("content")
                        },
                        success: function() {
                            Swal.fire("Success!", "Status updated successfully.",
                                "success");
                            location.reload();
                        },
                        error: function() {
                            Swal.fire("Error!", "Failed to update status.",
                            "error");
                        }
                    });
                } else {
                    dropdown.val(dropdown.data("prev")); // Revert selection if canceled
                }
            });
        });

        // Store previous value before change
        $(".status-dropdown").focus(function() {
            $(this).data("prev", $(this).val());
        });
    });
</script>

<script>
    $(document).ready(function() {
        $('.status-dropdown').select2({
            minimumResultsForSearch: Infinity // This hides the search box
        });
    });
</script>

<script>
    $(document).on("click", '.del-button', function(e) {
        e.preventDefault();
        const button = $(this);
        const recordId = button.data('id'); // Get encrypted ID from button
        const tableName = button.data('table'); // Get encrypted table name
        const csrfToken = $('meta[name="csrf-token"]').attr("content"); // Get CSRF token

        Swal.fire({
            html: '<div class="mb-3"><i class="ri-delete-bin-6-line fs-5 text-danger"></i></div><h5 class="text-danger">Delete This Entry?</h5><p class="sweetaleart_description">Deleting a entry will permanently remove them from your Admin Panel.</p>',
            customClass: {
                confirmButton: 'btn btn-outline-secondary text-danger',
                cancelButton: 'btn btn-outline-secondary text-gray',
                container: 'swal2-has-bg',
                actions: 'w-100'
            },
            showCancelButton: true,
            buttonsStyling: false,
            confirmButtonText: 'Yes, Delete',
            cancelButtonText: 'No, Keep it',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    url: "{{ route('delete.hard') }}",
                    type: "POST",
                    data: {
                        id: recordId,
                        table: tableName,
                        _token: csrfToken
                    },
                    beforeSend: function() {
                        Swal.fire({
                            html: '<div class="d-flex align-items-center"><i class="ri-loader-4-line me-2 fs-3 text-primary"></i><h5 class="text-primary mb-0">Deleting Entry...</h5></div>',
                            showConfirmButton: false,
                            allowOutsideClick: false
                        });
                    },
                    success: function(response) {
                        Swal.fire({
                            html: '<div class="d-flex align-items-center"><i class="ri-delete-bin-5-fill me-2 fs-3 text-danger"></i><h5 class="text-danger mb-0">This entry has been deleted!</h5></div>',
                            customClass: {
                                confirmButton: 'btn btn-primary',
                                actions: 'justify-content-start w-100',
                            },
                            buttonsStyling: false,
                            confirmButtonText: 'OK'
                        });

                        // Auto-refresh page after 2 seconds
                        setTimeout(() => {
                            location.reload();
                        }, 2000);
                    },
                    error: function(xhr) {
                        Swal.fire({
                            html: '<div class="d-flex align-items-center"><i class="ri-alert-fill me-2 fs-3 text-danger"></i><h5 class="text-danger mb-0">Failed to delete user!</h5></div>',
                            customClass: {
                                confirmButton: 'btn btn-danger',
                                actions: 'justify-content-start w-100',
                            },
                            buttonsStyling: false
                        });
                        console.error("AJAX Error:", xhr.responseText);
                    }
                });
            }
        });
    });
</script>
