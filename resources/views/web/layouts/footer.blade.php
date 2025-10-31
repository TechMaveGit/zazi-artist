<!-- Footer-Section start -->
<footer class="white_text" data-aos="fade-in" data-aos-duration="1500">
    <div class="footer_overlay"> <img src="{{ asset('web_assets/images/overlay-bg3-reverse.svg') }}" alt="img"> </div>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="logo_side">
                    <div class="logo">
                        <a href="#">
                            <img src="{{ asset('web_assets/images/new-image/beautyPro.png') }}" alt="Logo">
                        </a>
                    </div>
                    <div class="news_letter">
                        <h3>Powering Beauty Businesses</h3>
                        <p>BeautySuite Pro helps beauty professionals manage bookings, clients, and growth all from one
                            app.</p>

                    </div>
                    <ul class="contact_info">
                        <li><a href="mailto:">info@beautypro.com</a></li>
                        <li><a href="tel: ">+1-900-123 4567</a></li>
                    </ul>
                    <ul class="social_media">
                        <li><a href="#"><i class="icofont-facebook"></i></a></li>
                        <li><a href="#"><i class="icofont-twitter"></i></a></li>
                        <li><a href="#"><i class="icofont-instagram"></i></a></li>
                        <!-- <li><a href="#"><i class="icofont-pinterest"></i></a></li> -->
                    </ul>
                </div>
            </div>
            <div class="col-md-6">
                <div class="download_side">
                    <h3>Download app</h3>
                    <ul class="app_btn">
                        <li>
                            <a href="#">
                                <img class="blue_img" src="{{ asset('web_assets/images/googleplay.png') }}"
                                    alt="image">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img class="blue_img" src="{{ asset('web_assets/images/appstorebtn.png') }}"
                                    alt="image">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="footer_bottom">
        <div class="container">
            <div class="ft_inner">
                <div class="copy_text">
                    <p>© Copyrights 2025. All rights reserved.</p>
                </div>
                <ul class="links">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Term & Condition</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
                <div class="design_by">
                    <p>Design & Developed by <a href="https://techmavesoftware.com/" target="blank">Techmave
                            Software</a></p>
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- Footer-Section end -->

<!-- go top button -->
<div class="go_top" id="Gotop">
    <span><i class="icofont-arrow-up"></i></span>
</div>

<!-- Video Model Start -->
<div class="modal fade youtube-video" id="myModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <button id="close-video" type="button" class="button btn btn-default text-right" data-dismiss="modal">
                <i class="icofont-close-line-circled"></i>
            </button>
            <div class="modal-body">
                <div id="video-container" class="video-container">
                    <iframe id="youtubevideo" width="640" height="360" allowfullscreen></iframe>
                </div>
            </div>
            <div class="modal-footer">
            </div>
        </div>
    </div>
</div>
<!-- Video Model End -->
</div>
<!-- Page-wrapper-End -->

<!-- Jquery-js-Link -->
<script src="{{ asset('web_assets/js/jquery.js') }}"></script>
<!-- owl-js-Link -->
<script src="{{ asset('web_assets/js/owl.carousel.min.js') }}"></script>
<!-- bootstrap-js-Link -->
<script src="{{ asset('web_assets/js/bootstrap.min.js') }}"></script>
<!-- aos-js-Link -->
<script src="{{ asset('web_assets/js/aos.js') }}"></script>
<!-- Typed Js Cdn -->
<script src="{{ asset('web_assets/js/typed.min.js') }}"></script>
<!-- Sweetalert 2 -->
<script src="{{ asset('assets/plugins/sweetalert/sweetalert2.all.min.js') }}"></script>
<script src="{{ asset('assets/plugins/sweetalert/sweetalerts.min.js') }}"></script>
<!-- main-js-Link -->
<script src="{{ asset('web_assets/js/main.js') }}"></script>

<script>
    $("#typed").typed({
        strings: ["Manage your salon business",
            "Accept online bookings",
            "Process secure payments",
            "Showcase your work"
        ],
        typeSpeed: 100,
        startDelay: 0,
        backSpeed: 60,
        backDelay: 2000,
        loop: true,
        cursorChar: "|",
        contentType: 'html'
    });

    // Fixed Discount Dish JS
    $(document).ready(function() {
        let cardBlock = document.querySelectorAll('.task_block');
        let topStyle = 120;

        cardBlock.forEach((card) => {
            card.style.top = `${topStyle}px`;
            topStyle += 30;
        })

    });

    // Scroll Down Window 
    $(document).ready(function() {
        // Attach a click event handler to the button
        $('#scrollButton').click(function() {
            // Scroll down smoothly 200 pixels from the current position
            $('html, body').animate({
                scrollTop: $(window).scrollTop() + 600
            }, 800); // Adjust the speed (800ms) as needed
        });
    });

    $(document).on('submit', '.global-ajax-form', function(e) {
        e.preventDefault();

        let form = $(this);
        let url = form.attr('action');
        let method = form.attr('method') || 'POST';
        let formData = new FormData(form[0]);

        // Clear old errors
        form.find('.text-danger').remove();
        form.find('.is-invalid').removeClass('is-invalid');

        $.ajax({
            url: url,
            method: method,
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                showToast('Success', response.message || "Form submitted successfully.", 'success');
                setTimeout(() => {
                    if (response.redirect) {
                        window.location.href = response.redirect;
                    } else {
                        location.reload();
                    }
                }, 2000);

            },
            error: function(xhr) {
                if (xhr.status === 422) {
                    let errors = xhr.responseJSON.errors;

                    // Clear old errors first
                    form.find('.is-invalid').removeClass('is-invalid');
                    form.find('.text-danger').remove();

                    $.each(errors, function(field, messages) {
                        let input = form.find(`[name="${field}"]`);

                        if (input.length === 0) {
                            let fixedName = field
                                .replace(/\.(\d+)\./g, '[$1][')
                                .replace(/\.(\d+)$/g, '[$1]')
                                .replace(/\./g, '][') + ']';

                            input = form.find(`[name="${fixedName}"]`);

                            if (input.length === 0) {
                                // Append [] to handle checkbox arrays
                                fixedName = fixedName.replace(/\]$/, '][]');
                                input = form.find(`[name="${fixedName}"]`);
                            }
                        }

                        if (input.length === 0) {
                            input = form.find(`[name="${field}[]"]`);
                        }

                        if (input.length > 0) {
                            input.addClass('is-invalid');
                            if (input.hasClass('select2-hidden-accessible')) {
                                const select2Container = input.next('.select2');
                                if (select2Container.length) {
                                    select2Container.after(
                                        `<div class="text-danger mt-1">${messages[0]}</div>`
                                    );
                                } else {
                                    input.after(
                                        `<div class="text-danger mt-1">${messages[0]}</div>`
                                    );
                                }
                            } else if (input.attr('type') === 'checkbox' || input.attr(
                                    'type') === 'radio') {
                                const group = input.closest('.days-checkboxes');
                                if (group.length) {
                                    group.after(
                                        `<div class="text-danger mt-1">${messages[0]}</div>`
                                    );
                                } else {
                                    const lastInput = input.last();
                                    const featureBox = lastInput.closest(
                                        '.feature-checkbox');

                                    if (featureBox.length) {
                                        featureBox.after(
                                            `<div class="text-danger mt-1">${messages[0]}</div>`
                                            );
                                    } else {
                                        lastInput.after(
                                            `<div class="text-danger mt-1">${messages[0]}</div>`
                                            );
                                    }
                                }
                            } else {
                                input.after(
                                    `<div class="text-danger mt-1">${messages[0]}</div>`
                                );
                            }
                        } else {
                            showToast('error', messages[0] || "Validation Error",
                                'error');
                        }
                    });
                } else {
                    showToast('Error', xhr.responseJSON.message ||
                        'An unexpected error occurred. Please try again later.',
                        'error');
                }
            }

        });
    });
</script>

</body>

</html>
