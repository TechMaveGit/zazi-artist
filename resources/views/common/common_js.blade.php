<script>
    $(document).on('submit', '.global-ajax-form', function(e) {
        e.preventDefault();

        let form = $(this);
        let url = form.attr('action');
        let method = form.attr('method') || 'POST';
        let formData = form.serialize();

        // Clear old errors
        form.find('.text-danger').remove();
        form.find('.is-invalid').removeClass('is-invalid');

        $.ajax({
            url: url,
            method: method,
            data: formData,
            success: function(response) {
                Swal.fire({
                    title: "Success!",
                    text: response.message || "Form submitted successfully.",
                    icon: "success"
                }).then(() => {
                    if (response.redirect) {
                        window.location.href = response.redirect;
                    } else {
                        location.reload();
                    }
                });
            },
            error: function(xhr) {
                if (xhr.status === 422) {
                    let errors = xhr.responseJSON.errors;
                    $.each(errors, function(field, messages) {
                        let input = form.find(`[name="${field}"]`);
                        input.addClass('is-invalid');
                        input.after(`<div class="text-danger mt-1">${messages[0]}</div>`);
                    });
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: "An unexpected error occurred. Please try again later.",
                        icon: "error"
                    });
                }
            }
        });
    });

    // $(document).ready(function() {
    //     $(".status-dropdown").change(function() {
    //         let dropdown = $(this);
    //         let staffId = dropdown.data("id");
    //         let newStatus = dropdown.val();
    //         let table = dropdown.data("table");

    //         Swal.fire({
    //             title: "Are you sure?",
    //             text: "Do you really want to change the status?",
    //             icon: "warning",
    //             showCancelButton: true,
    //             confirmButtonText: "Yes, change it!",
    //             cancelButtonText: "No, cancel!",
    //             reverseButtons: true,
    //             customClass: {
    //                 confirmButton: "btn btn-success",
    //                 cancelButton: "btn btn-danger"
    //             }
    //         }).then((result) => {
    //             if (result.isConfirmed) {
    //                 $.ajax({
    //                     url: "status/update",
    //                     type: "POST",
    //                     data: {
    //                         id: staffId,
    //                         status: newStatus,
    //                         table: table,
    //                         _token: $('meta[name="csrf-token"]').attr("content")
    //                     },
    //                     success: function() {
    //                         Swal.fire("Success!", "Status updated successfully.",
    //                             "success");
    //                         location.reload();
    //                     },
    //                     error: function() {
    //                         Swal.fire("Error!", "Failed to update status.",
    //                         "error");
    //                     }
    //                 });
    //             } else {
    //                 dropdown.val(dropdown.data("prev")); // Revert selection if canceled
    //             }
    //         });
    //     });

    //     // Store previous value before change
    //     $(".status-dropdown").focus(function() {
    //         $(this).data("prev", $(this).val());
    //     });
    // });
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
            icon: 'warning',
            title: 'Are you sure?',
            html: 'Do you really want to delete this entry?',
            customClass: {
                confirmButton: 'btn btn-outline-secondary text-danger',
                cancelButton: 'btn btn-outline-secondary text-gray  me-2',
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
                    url: "{{ route('delete.record') }}",
                    type: "POST",
                    data: {
                        id: recordId,
                        table: tableName,
                        _token: csrfToken
                    },
                    success: function(response) {
                        Swal.fire({icon: 'success',text: 'Deleted Successfully!'});
                        // Auto-refresh page after 2 seconds
                        setTimeout(() => {
                            location.reload();
                        }, 2000);
                    },
                    error: function(xhr) {
                        Swal.fire({icon: 'error', text: 'Something went wrong!',});
                        console.error("AJAX Error:", xhr.responseText);
                    }
                });
            }
        });
    });
</script>
