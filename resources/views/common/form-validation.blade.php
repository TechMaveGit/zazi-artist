<script>
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': '{{ csrf_token() }}'
        }
    });

    var isValid = true;
    var ajaxCheck = true;

    function validateForm(formID, action = null) {
        var isValid = true;
        var form = $('#' + formID);
        var submitBtn = form.find('.submitBtn');
        if (submitBtn.length === 0) {
            submitBtn = form.find('#submitBtn');
        }
        var password = $('#' + formID + ' [name="password"]').val();
        var confirmPassword = $('#' + formID + ' [name="password_confirmation"]').val();
        if ($('#' + formID).find('.invalid-feedback-unique').length != 0 && $('#' + formID).find('input[type="email"]')
            .val() == '') {
            $('#' + formID).find('.invalid-feedback-unique').remove();
        }
        let content = '';

        // Check if the form contains a textarea
        if ($('#' + formID).find('textarea').length) {
            // Check if CKEditor is initialized for the textarea
            if (typeof editorInstance !== 'undefined' && editorInstance !== null) {
                content = editorInstance.getData().trim();
            } else {
                // If editorInstance does not exist, fallback to textarea value
                content = $('#' + formID).find('textarea').val().trim();
            }
        }

        $('.submitBtn').attr('disabled', true);

        $('#' + formID + ' [required]').each(function() {
            // Reset validity state
            $(this).removeClass('is-invalid').removeClass('is-valid');
            $(this).next('.invalid-feedback').remove();


            if (!$(this).val() && !$(this).is(':file')) {

                isValid = false;
                $(this).addClass('is-invalid');

                // Check if .form-group exists
                if ($(this).closest('.form-group').length === 0) {
                    $(this).css('border-bottom', '1px solid red');
                }

                // Append the error message if it doesn't exist
                if ($(this).closest('.form-group').find('.invalid-feedback').length === 0) {
                    $(this).closest('.form-group').append(
                        '<span style="font-size:0.90rem; " class="invalid-feedback text-danger">This field is required.</span>'
                    );
                }

                $('#' + $(this).closest('.tab-pane').attr('id') + 'Tab').tab('show');
                // $(this).focus();
            } else if ($(this).is('textarea') && content === "") {
                console.log('Textarea is empty');
                isValid = false;
                $(this).addClass('is-invalid');

                // Ensure there's a form-group or handle edge case
                if ($(this).closest('.form-group').length === 0) {
                    $(this).css('border', '1px solid red');
                }

                // Append the error message if it doesn't already exist
                if ($(this).closest('.form-group').find('.invalid-feedback').length === 0) {
                    $(this).closest('.form-group').append(
                        '<span style="font-size:0.90rem; margin-top: 0px; display: block;" class="invalid-feedback text-danger">This field is required.</span>'
                    );
                }

                // Show the corresponding tab for the textarea
                const tabId = $(this).closest('.tab-pane').attr('id');
                if (tabId) {
                    $('#' + tabId + 'Tab').tab('show');
                }

                // $(this).focus();
            } else if ($(this).is('select') && ($(this).val() == "" || $(this).val() === null)) {
                isValid = false;
                $(this).addClass('is-invalid');

                // Check if .form-group exists
                if ($(this).closest('.form-group').length === 0) {
                    $(this).css('border-bottom', '1px solid red');
                }

                // Append the error message if it doesn't exist
                if ($(this).closest('.form-group').find('.invalid-feedback').length === 0) {
                    $(this).closest('.form-group').append(
                        '<span style="font-size:0.90rem; margin-top: -24px; display: block;" class="invalid-feedback text-danger">This field is required.</span>'
                    );
                }

                $('#' + $(this).closest('.tab-pane').attr('id') + 'Tab').tab('show');
                $(this).focus();
            } else if ($(this).is(':file') && !$(this).val()) {
                isValid = false;
                $(this).addClass('is-invalid');

                // Remove any previous error message and line break
                $(this).parent().find('.br, .invalid-feedback').remove();

                // Append the error message
                $(this).parent().append(
                    '<br class="br"><span style="font-size:0.90rem;" class="invalid-feedback text-danger">This field is required.</span>'
                );

                $('#' + $(this).closest('.tab-pane').attr('id') + 'Tab').tab('show');
                $(this).focus();
            } else if ($(this).is(':checkbox')) {
                if (!$(this).is(':checked')) {
                    isValid = false;

                    // Check if the error message already exists
                    if ($(this).closest('.custom-checkbox').find('.custom_error').length === 0) {
                        $(this).closest('.custom-checkbox').append(
                            '<span class="custom_error invalid-feedback text-danger">This field is required.</span>'
                        );
                    }

                    $(this).focus();
                    $('#' + $(this).closest('.tab-pane').attr('id') + 'Tab').tab('show');
                } else {
                    $(this).closest('.custom-checkbox').find('.custom_error').remove();
                }
            } else {
                // Valid case: remove invalid class and any existing error messages
                $(this).removeClass('is-invalid').addClass('is-valid');
                $(this).next('.invalid-feedback').remove();
                $(this).closest('.form-group').find('.invalid-feedback').remove();
                $(this).next('.custom-file-label').next('.br').next('.invalid-feedback').remove();
                $(this).css('border-bottom', '');
            }
        });

        // Email validation
        var email = $('#' + formID + ' [type="email"]').val();
        if (email) {
            if (!isValidEmail(email)) {
                isValid = false;
                $('#' + formID + ' [type="email"]').removeClass('is-valid').addClass('is-invalid');

                if ($('#' + formID + ' [type="email"]').next('.invalid-feedback').length === 0) {
                    $('#' + formID + ' [type="email"]').parent().append(
                        '<span style="font-size:0.90rem;" class="invalid-feedback text-danger">Invalid email address.</span>'
                    );
                }

                $('.spinner-border').css('display', 'none');
                $('#pay_btn').removeClass('disabled');
            } else {
                $('#' + formID + ' [type="email"]').removeClass('is-invalid').addClass('is-valid');
                $('#' + formID + ' [type="email"]').next('.invalid-feedback').remove();
            }
        }

        // Phone no. Validation
        $(`#${formID} .phoneValid`).each(function() {
            let phoneInput = $(this);
            let phoneValue = phoneInput.val().trim(); // Get the value and trim whitespace
            if (phoneValue) {
                if (!isValidPhoneNumber(phoneValue)) {
                    isValid = false;
                    phoneInput.removeClass('is-valid').addClass('is-invalid');
                    if (phoneInput.closest('.form-group').find('.invalid-feedback').length === 0) {
                        phoneInput.closest('.form-group').append(
                            '<span style="font-size:0.90rem;" class="invalid-feedback text-danger">Invalid phone number format.</span>'
                        );
                    }
                }
                // Check if the phone number is at least 8 characters long and no more than 13 characters (ignoring spaces)
                else if (phoneValue.replace(/\s/g, '').length < 8) {
                    isValid = false;
                    phoneInput.removeClass('is-valid').addClass('is-invalid');
                    if (phoneInput.closest('.form-group').find('.invalid-feedback').length === 0) {
                        phoneInput.closest('.form-group').append(
                            '<span style="font-size:0.90rem;" class="invalid-feedback text-danger">Mobile number must be at least 8 characters long.</span>'
                        );
                    }
                } else if (phoneValue.replace(/\s/g, '').length > 13) {
                    isValid = false;
                    phoneInput.removeClass('is-valid').addClass('is-invalid');
                    if (phoneInput.closest('.form-group').find('.invalid-feedback').length === 0) {
                        phoneInput.closest('.form-group').append(
                            '<span style="font-size:0.90rem;" class="invalid-feedback text-danger">The mobile number field should not be greater than 13 characters.</span>'
                        );
                    }
                }
                // If valid
                else {
                    phoneInput.removeClass('is-invalid').addClass('is-valid');
                    phoneInput.closest('.form-group').find('.invalid-feedback')
                        .remove(); // Remove error message
                }
            }
        });



        // Password validation
        if (password) {
            if (password.length < 8) {
                isValid = false;
                $('#' + formID + ' [type="password"]').removeClass('is-valid').addClass('is-invalid');
                if ($('#' + formID + ' [type="password"]').next('.invalid-feedback').length === 0) {
                    $('#' + formID + ' [type="password"]').parent().append(
                        '<span style="font-size:0.90rem;" class="invalid-feedback text-danger">Password must be at least 8 characters long.</span>'
                    );
                }
            } else {
                $('#' + formID + ' [type="password"]').removeClass('is-invalid').addClass('is-valid');
                $('#' + formID + ' [type="password"]').next('.invalid-feedback').remove();
            }
        }
        if (confirmPassword) {
            if (!confirmPassword) {
                isValid = false;
                $('#' + formID + ' [name="password_confirmation"]').removeClass('is-valid').addClass(
                    'is-invalid');
                if ($('#' + formID + ' [name="password_confirmation"]').next('.invalid-feedback').length ===
                    0) {
                    $('#' + formID + ' [name="password_confirmation"]').parent().append(
                        '<span style="font-size:0.90rem;" class="invalid-feedback text-danger">This field is required.</span>'
                    );
                }
            } else if (password != confirmPassword) {
                isValid = false;
                $('#' + formID + ' [name="password_confirmation"]').removeClass('is-valid').addClass(
                    'is-invalid');
                if ($('#' + formID + ' [name="password_confirmation"]').next('.invalid-feedback').length ===
                    0) {
                    $('#' + formID + ' [name="password_confirmation"]').parent().append(
                        '<span style="font-size:0.90rem;" class="invalid-feedback text-danger">Passwords do not match.</span>'
                    );
                }
            } else {
                $('#' + formID + ' [name="password_confirmation"]').removeClass('is-invalid').addClass(
                    'is-valid');
                $('#' + formID + ' [name="password_confirmation"]').next('.invalid-feedback').remove();
            }
        }

        if (document.querySelector('#' + formID + ' [name="start_reading"]') && document.querySelector('#' + formID +
                ' [name="end_reading"]')) {
            const startReading = document.querySelector('[name="start_reading"]').value ? parseFloat(document
                .querySelector(
                    '[name="start_reading"]').value) : '';
            const endReading = document.querySelector('[name="end_reading"]').value ? parseFloat(document.querySelector(
                '[name="end_reading"]').value) : '';
            const endInput = document.querySelector('[name="end_reading"]');
            const endGroup = endInput.closest('.form-group');

            // Clear previous error messages
            endGroup.querySelector('.invalid-feedback')?.remove();

            if (endReading !== '' && endReading != null) {
                if (endReading <= startReading) {
                    isValid = false;
                    // Display error message
                    const errorMessage =
                        '<span class="invalid-feedback text-danger" style="font-size: 0.9rem;">End reading must be greater than start reading.</span>';
                    endGroup.insertAdjacentHTML('beforeend', errorMessage);

                    // Highlight the invalid input
                    endInput.classList.add('is-invalid');
                } else {
                    // Remove invalid feedback and class if valid
                    endInput.classList.remove('is-invalid');
                }
            } else {
                isValid = false;
                const errorMessage =
                    '<span class="invalid-feedback text-danger" style="font-size: 0.9rem;">This Field is required.</span>';
                endGroup.insertAdjacentHTML('beforeend', errorMessage);
                endInput.classList.add('is-invalid');
            }
        }

        if (document.querySelector('#' + formID + ' [name="start_date"]') && document.querySelector('#' + formID + ' [name="start_time"]') &&
        document.querySelector('#' + formID + ' [name="end_date"]') && document.querySelector('#' + formID + ' [name="end_time"]')) {
            const startDate = document.querySelector('#' + formID + ' [name="start_date"]').value;
            const startTime = document.querySelector('#' + formID + ' [name="start_time"]').value;
            const endDate = document.querySelector('#' + formID + ' [name="end_date"]').value;
            const endtimeInput = document.querySelector('#' + formID + ' [name="end_time"]');

            const endTime =  endtimeInput.value;
            const endtimeGroup = endtimeInput.closest('.form-group');

            // Clear previous error messages
            endtimeGroup.querySelectorAll('.invalid-feedback').forEach(el => el.remove());
            endtimeInput.classList.remove('is-invalid');

            // Parse date and time into JavaScript Date objects
            const startDateTime = new Date(`${startDate}T${convertTo24Hour(startTime)}`);
            const endDateTime = new Date(`${endDate}T${convertTo24Hour(endTime)}`);

            if (!endTime) {
                isValid = false;

                const errorMessage =
                    '<span class="invalid-feedback text-danger" style="font-size: 0.9rem;">This field is required.</span>';
                endtimeGroup.insertAdjacentHTML('beforeend', errorMessage);

                // Highlight the invalid input
                endtimeInput.classList.add('is-invalid');
            } else {
                if (startDateTime >= endDateTime) {
                    isValid = false;

                    const errorMessage =
                        '<span class="invalid-feedback text-danger" style="font-size: 0.9rem;">Start date and time must be earlier than end date and time.</span>';
                    endtimeGroup.insertAdjacentHTML('beforeend', errorMessage);

                    // Highlight the invalid input
                    endtimeInput.classList.add('is-invalid');
                }
            }
        }


        if (document.querySelector('#' + formID + ' [name="date"]') && document.querySelector('#' + formID + ' [name="start_time"]') && document.querySelector('#' + formID + ' [name="end_time"]')) {
            const startDate = document.querySelector('#' + formID + ' [name="date"]').value;
            const startTime = document.querySelector('#' + formID + ' [name="start_time"]').value;
            const endtimeInput = document.querySelector('#' + formID + ' [name="end_time"]');

            const endTime = endtimeInput.value;
            const endtimeGroup = endtimeInput.closest('.form-group');

            // Clear previous error messages
            if (endtimeGroup){
                endtimeGroup.querySelectorAll('.invalid-feedback').forEach(el => el.remove());
                endtimeInput.classList.remove('is-invalid');
            }

            // Parse date and time into JavaScript Date objects
            const startDateTime = new Date(`${startDate}T${(startTime)}`);
            const endDateTime = new Date(`${startDate}T${(endTime)}`);

            if (!endTime) {
                isValid = false;

                const errorMessage =
                    '<span class="invalid-feedback text-danger" style="font-size: 0.9rem;">This field is required.</span>';
                endtimeGroup.insertAdjacentHTML('beforeend', errorMessage);

                // Highlight the invalid input
                endtimeInput.classList.add('is-invalid');
            } else {
                if (startDateTime >= endDateTime) {
                    isValid = false;
                    const errorMessage =
                        '<span class="invalid-feedback text-danger" style="font-size: 0.9rem;">Start time must be earlier than end time.</span>';
                    endtimeGroup.insertAdjacentHTML('beforeend', errorMessage);

                    // Highlight the invalid input
                    endtimeInput.classList.add('is-invalid');
                }
            }
        }

        if (ajaxCheck && isValid) {
            if(action != null)
            {
                let formElement = document.getElementById(formID);
                let formData = new FormData(formElement); // Collect form data
                //skip other forms
                let allowedForms = ['single_enquery_form', 'dual_occupancy_form', 'group_enquiry_form','update_enquery_form','application_basic_details','application_currently_reside',
                'application_property_details','application_landlord_details','application_home_address','application_society_details','application_other_details','application_guarantor_details','application_guarantor_bank',
                'application_terms_use','application_GDPR_regulations','application_application_submission'];
                if (allowedForms.includes(formID)) {
                    let fields = [];
                    $(formElement).find('.dynamic-field').each(function() {
                        const field = $(this);
                        const fieldId = field.data('id') || '';

                        // Determine field type
                        const fieldType = field.find('.customdataPicker').length ? 'date' :
                                        field.find('.select2').length ? 'select' :
                                        field.find('.multiselect-item').length ? 'multiselect' :
                                        field.find('input[type="checkbox"]').length ? 'checkbox' :
                                        field.find('input[type="radio"]').length ? 'radio' : 'input';

                        // Create object to store field data
                        let currentFieldData = {
                            id: fieldId,
                            type: fieldType,
                            label: field.find('label').first().text().trim(),
                            value: '',
                            answer: '',
                        };

                        // Bind values based on field type
                        if (fieldType === 'select') {
                            currentFieldData.value = field.find('.select2 option').map(function() {
                                return $(this).text();
                            }).get();
                            currentFieldData.answer = field.find('.select2').val() || ''; // Get selected value
                        } else if (fieldType === 'checkbox') {
                            currentFieldData.value = field.find('.form-check-label').map(function() {
                                return $(this).text();
                            }).get();
                            currentFieldData.answer = field.find('input[type="checkbox"]:checked').map(function() {
                                return $(this).val();
                            }).get();
                        } else if (fieldType === 'radio') {
                            currentFieldData.value = field.find('.form-check-label').map(function() {
                                return $(this).text();
                            }).get();
                            currentFieldData.answer = field.find('input[type="radio"]:checked').val() || '';
                        } else if (fieldType === 'input') {
                            currentFieldData.value = field.find('input').prop('placeholder') || '';
                            currentFieldData.answer = field.find('input').val() || ''; // Capture input value
                        } else if (fieldType === 'date') {
                            currentFieldData.value = field.find('.customdataPicker').prop('placeholder') || '';
                            currentFieldData.answer = field.find('.customdataPicker').val() || '';
                        } else if (fieldType === 'multiselect') {
                            currentFieldData.value = field.find('.individual-option').map(function() {
                                return $(this).val() || '';
                            }).get();
                            currentFieldData.answer = field.find('.individual-option:checked').map(function() {
                                return $(this).val();
                            }).get(); // Get selected values
                        }

                        // Push to fields array
                        fields.push(currentFieldData);
                    });

                    // Append dynamic fields as JSON
                    formData.append('fields', JSON.stringify(fields));
                }

                $.ajax({
                    url: action, // Use form's action attribute
                    type: formElement.method, // Use form's method attribute
                    data: formData,
                    processData: false,
                    contentType: false,
                    beforeSend: function () {
                        // $('#submitBtn').prop('disabled', true).text('Submitting...');
                        submitBtn.prop('disabled', true).text('Submitting...');
                    },
                    success: function (response) {
                        // $('#submitBtn').prop('disabled', false).text('Submit');
                        submitBtn.prop('disabled', false).text('Submit');

                        if (response.success == true) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Success!',
                                text: response.message,
                                timer: 2000, // 2 sec ke baad Swal auto close ho jaye
                                showConfirmButton: true // Confirm button hatane ke liye
                            }).then(() => {
                                $('#'+formID)[0].reset(); // Reset form fields
                                $('.select2').val(null).trigger('change'); // Reset select2 dropdowns
                                window.location.reload(); // 2 sec baad page refresh
                            });


                        } else {
                            // alert(response)
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops!',
                                text: response.message
                            });
                        }
                    },
                    error: function (xhr) {
                        $('#submitBtn').prop('disabled', false).text('Submit');

                        let errors = xhr.responseJSON?.errors;
                        if (errors) {

                            let errorHtml = '<ul class="error_li">';
                            $.each(errors, function (key, value) {
                                errorHtml += `<li class="text-danger"><small>* ${value[0]}</small></li>`;
                            });
                            errorHtml += '</ul>';

                            Swal.fire({
                                icon: 'error',
                                title: 'Validation Errors',
                                html: errorHtml
                            });
                            } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Error!',
                                text: 'Something went wrong. Please try again.'
                            });
                        }
                    }
                });
            }else{
                submitBtn.prop('disabled', true).text('Submitting...');
                setTimeout(() => {
                    form.submit(); // Regular form submission
                }, 100);

                // $('#' + formID).submit();
            }
        } else {
            // $('#spinner').hide();
            // $('.submitBtn').attr('disabled', false);
            submitBtn.prop('disabled', false).text('Submit');
        }
    }

    function convertTo24Hour(time) {
        const [timePart, modifier] = time.split(' ');
        let [hours, minutes] = timePart.split(':');
        if (modifier === 'PM' && hours !== '12') {
            hours = parseInt(hours, 10) + 12;
        }
        if (modifier === 'AM' && hours === '12') {
            hours = '00';
        }
        return `${hours}:${minutes}:00`; // Return in HH:MM:SS format
    }


    function isValidEmail(email) {
        // Regular expression for validating email format
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }


    function isValidPhoneNumber(phone) {
        var regex = /^[0-9()\-\s+]+$/; // Allow digits, parentheses, hyphens, and spaces
        return regex.test(phone);
    }

    function formatDate(date){

        const cleanDate = date.replace(',', '').trim(); // "03 April 2025"

        // Create a Date object from cleaned date
        const parsedDate = new Date(cleanDate); // safe now

        // Convert to YYYY-MM-DD format
        const formattedDate = parsedDate.toISOString().split('T')[0]; // "2025-04-03"
        return formattedDate;
    }
</script>

@if (isset($validate_url_path))
    <script>
        function checkUniqueData(that, colname, table, previousVal = '') {
            let inputElement = $(that);
            let colvalue = encodeURIComponent($(that).val());
            if (colvalue !== undefined && colvalue.length) {
                $(inputElement).next("span.custom_error").remove();
                // $(inputElement).next('span.custom_error_unique').remove();
                $(inputElement).closest('.form-group').find('.invalid-feedback').remove();
                $(inputElement).closest('.form-group').find('.invalid-feedback-unique').remove();
                $(inputElement).next('.spinner-border').remove();
                $(inputElement).removeClass('is-invalid');
                $(inputElement).after(
                    '<div class="spinner-border spinner-border-sm text-primary" role="status"><span class="visually-hidden">Loading...</span></div>'
                );
                $.ajax({
                    type: "POST",
                    url: "{{ route($validate_url_path) }}",
                    headers: {
                        'X-CSRF-TOKEN': "{{ csrf_token() }}"
                    },
                    data: {
                        "colname": colname,
                        "colvalue": colvalue,
                        "table": table,
                        "previousVal": previousVal
                    },
                    dataType: 'json',
                    success: function(result) {
                        $(inputElement).next('.spinner-border').remove();
                        if (!result.status) {
                            isValid = false;
                            $(inputElement).addClass('is-invalid');
                            ajaxCheck = false;
                            if ($(inputElement).closest('.form-group').find('.invalid-feedback-unique')
                                .length === 0) {
                                $(inputElement).closest('.form-group').append(
                                    `<span class="custom_error_unique invalid-feedback-unique text-danger">${result.message}</span>`
                                );
                            }
                            // $(inputElement).css('border-bottom', '1px solid red');
                            // $(inputElement).after(
                            //     `<span class="custom_error_unique invalid-feedback-unique text-danger">${result.message}</span>`
                            // );
                        } else {
                            isValid = true;
                            ajaxCheck = true;
                        }
                    },
                    error: function(data) {
                        isValid = false;
                        ajaxCheck = false;
                    }
                });
            }
        }
    </script>
@endif

<script>
    $(document).on('change', 'input[name*="[end_time]"]', function() {
        const endtimeInput = $(this);
        const endtimeGroup = endtimeInput.closest('.form-group'); // Adjust as necessary for your structure
        const row = endtimeInput.closest('.row'); // Locate the row for context

        const date = row.find('input[name*="[date]"]').val();
        const startTime = row.find('input[name*="[start_time]"]').val();
        // const endDate = row.find('input[name*="[end_date]"]').val();
        const endTime = endtimeInput.val();
        // const formattedDate = formatDate(date);

        // Clear previous error messages
        endtimeGroup.find('.invalid-feedback-datetime').remove();
        endtimeGroup.find('.invalid-feedback').remove();
        endtimeInput.removeClass('is-invalid');

        // Parse start and end date-times
        const startDateTime = new Date(`${date}T${(startTime)}`);
        const endDateTime = new Date(`${date}T${(endTime)}`);

        if (startDateTime >= endDateTime) {
            const errorMessage =
                `<span class="invalid-feedback-datetime text-danger" style="font-size: 0.9rem;">End date and time must be after the end date and time.</span>`;
            endtimeGroup.append(errorMessage);
            endtimeInput.addClass('is-invalid');
            isValid = false;
            ajaxCheck = false;
        }else{
            isValid = true;
            ajaxCheck = true;
        }
    });


    $(document).ready(function() {
        $('.onlyNumber').on('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    });

    $(document).ready(function() {
        $('.priceNumber').on('input', function() {
            // Allow digits and only one dot
            this.value = this.value.replace(/[^0-9.]/g, '');
            if ((this.value.match(/\./g) || []).length > 1) {
                this.value = this.value.slice(0, -1); // Remove the extra dot
            }
        });
    });

</script>
