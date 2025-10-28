@include('web.layouts.header')
<style>
    header {
        background: #000;
    }
</style>

<!-- Checkout Page Start -->
<section class="checkout-page">
    <div class="container">
        <div class="checkout-header">
            <h1>Checkout</h1>
            <p>Complete your purchase to get started with {{ config('app.name') }}</p>
        </div>

        <div class="checkout-content">
            <div class="checkout-form-section">
                <!-- Billing Information -->
                <div class="billing-section">
                    <h2>Billing Information</h2>
                    <form id="checkout-form" action="{{ route('checkout.store') }}" method="POST">
                        @csrf
                        <input type="hidden" name="plan_id" value="{{ $plan->id }}">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group full-width">
                                    <label for="fullName">Full Name</label>
                                    <input type="text" id="fullName" name="fullName" placeholder="First & Last Name"
                                        required>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group full-width">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" name="email" placeholder="Email" required>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group full-width">
                                    <label for="mobileNo">Mobile No.</label>
                                    <input type="text" id="mobileNo" name="mobileNo" placeholder="Mobile No."
                                        required>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group full-width">
                                    <label for="address1">Address 1</label>
                                    <input type="text" id="address1" name="address1"
                                        placeholder="421, Dubai Main St." required>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group full-width">
                                    <label for="address2">Address 2</label>
                                    <input type="text" id="address2" name="address2"
                                        placeholder="Apartment, suite, etc. (optional)">
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="city">City</label>
                                    <input type="text" id="city" name="city" placeholder="City" required>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="state">State</label>
                                    <input type="text" id="state" name="state" placeholder="State" required>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="zipCode">Zip Code</label>
                                    <input type="text" id="zipCode" name="zipCode" placeholder="Zip code" required>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <!-- Payment Method -->
                <div class="payment-section">
                    <h2>Payment Method</h2>
                    <div class="payment-methods">
                        <div class="payment-option active" data-method="card">
                            <div class="payment-icon">
                                <i class="icofont-credit-card"></i>
                            </div>
                            <span>Credit Card</span>
                        </div>
                        <div class="payment-option" data-method="paypal">
                            <div class="payment-icon">
                                <i class="icofont-paypal"></i>
                            </div>
                            <span>PayPal</span>
                        </div>
                    </div>

                    <!-- Credit Card Form -->
                    <div class="payment-form card-form active">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group full-width">
                                    <label class="form-label" for="card-element">Credit or debit card</label>
                                    <div id="card-element" class="form-input" style="height: 40px; border: 1px solid #ced4da; padding: 10px; border-radius: 4px; background-color: white; display: block !important; visibility: visible !important; z-index: 9999 !important;">
                                        <!-- A Stripe Element will be inserted here. -->
                                    </div>
                                    <!-- Used to display form errors. -->
                                    <div id="card-errors" role="alert" style="color: red;"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- PayPal Form -->
                    <div class="payment-form paypal-form">
                        <div class="paypal-info">
                            <p>You will be redirected to PayPal to complete your payment securely.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Order Summary -->
            <div class="order-summary-section">
                <div class="order-summary-card">
                    <h2>Order Summary</h2>

                    <div class="plan-details">
                        <div class="plan-icon">
                            <i class="icofont-star"></i>
                        </div>
                        <div class="plan-info">
                            <h3 id="selectedPlan">{{ $plan->name }} Plan</h3>
                            <p id="selectedPlanDescription">{{ $plan->description }}</p>
                        </div>
                    </div>

                    <div class="pricing-breakdown">
                        <div class="pricing-row">
                            <span>Subtotal</span>
                            <span id="subtotal">${{ $plan->price }}</span>
                        </div>
                        <div class="pricing-row">
                            <span>Tax</span>
                            <span id="tax">${{ number_format($plan->price * 0.1, 2) }}</span>
                        </div>
                        <div class="pricing-row total">
                            <span>Total</span>
                            <span id="total">${{ number_format($plan->price * 1.1, 2) }}</span>
                        </div>
                    </div>

                    <button class="place-order-btn" type="button" id="card-button">
                        <span>Make Payment</span>
                        <i class="icofont-arrow-right"></i>
                    </button>

                    <div class="security-info">
                        <i class="icofont-lock"></i>
                        <span>Your payment information is secure and encrypted</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Checkout Page End -->

<!-- Success Modal -->
<div class="ModalSuccess">
    <div id="successModal" class="modal">
        <div class="modal-content">
            <h2>Awesome!</h2>
            <p>User buy the subscription plan successfully and login and password sent to the email</p>
            <a href="login.php" class="btn btn-primary"
                onclick="document.getElementById('successModal').style.display='none'">Continue</a>
        </div>
    </div>
</div>


@include('web.layouts.footer')

<script src="https://js.stripe.com/v3/"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Script block loaded.');
        // Payment method switching
        document.querySelectorAll('.payment-option').forEach(option => {
            option.addEventListener('click', function() {
                document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('active'));
                document.querySelectorAll('.payment-form').forEach(form => form.classList.remove('active'));

                this.classList.add('active');

                const method = this.dataset.method;
                document.querySelector(`.${method}-form`).classList.add('active');
            });
        });

        // Stripe integration
        console.log('Stripe Key:', '{{ env('STRIPE_KEY') }}');
        const stripe = Stripe('{{ env('STRIPE_KEY') }}');
        const elements = stripe.elements();
        const card = elements.create('card');
        card.mount('#card-element');
        console.log('Stripe card element mounted.');

        const form = document.getElementById('checkout-form');
        const cardButton = document.getElementById('card-button');

        cardButton.addEventListener('click', async (e) => {
            e.preventDefault();
            console.log('Make Payment button clicked. Form submission initiated.');

            const { paymentMethod, error } = await stripe.createPaymentMethod(
                'card', card, {
                    billing_details: {
                        name: document.getElementById('fullName').value,
                        email: document.getElementById('email').value,
                    }
                }
            );

            if (error) {
                console.error('Stripe error:', error);
                const displayError = document.getElementById('card-errors');
                displayError.textContent = error.message;
            } else {
                console.log('PaymentMethod created:', paymentMethod);
                const hiddenInput = document.createElement('input');
                hiddenInput.setAttribute('type', 'hidden');
                hiddenInput.setAttribute('name', 'stripeToken');
                hiddenInput.setAttribute('value', paymentMethod.id);
                form.appendChild(hiddenInput);

                console.log('Submitting form to backend...');
                form.submit();
            }
        });

        // Update order summary based on selected plan
        const price = {{ $plan->price }};
        const tax = Math.round(price * 0.1 * 100) / 100;
        const total = price + tax;

        document.getElementById('subtotal').textContent = `$${price}.00`;
        document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
        document.getElementById('total').textContent = `$${total.toFixed(2)}`;
    });
</script>
