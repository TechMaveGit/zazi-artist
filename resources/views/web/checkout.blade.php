
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
      <p>Complete your purchase to get started with BeautySuite Pro</p>
    </div>
    
    <div class="checkout-content">
      <div class="checkout-form-section">
        <!-- Billing Information -->
        <div class="billing-section">
          <h2>Billing Information</h2>
          <form class="billing-form">
            <div class="row">
              <div class="col-lg-12">
                <div class="form-group full-width">
                  <label for="fullName">Full Name</label>
                  <input type="text" id="fullName" name="fullName" placeholder="First & Last Name" required>
                </div>
              </div>
              <div class="col-lg-6">
                 <div class="form-group full-width">
                  <label for="fullName">Email</label>
                  <input type="text" id="fullName" name="fullName" placeholder="Email" required>
                </div>
              </div>
               <div class="col-lg-6">
                 <div class="form-group full-width">
                  <label for="fullName">Mobile No.</label>
                  <input type="text" id="fullName" name="fullName" placeholder="Mobile No." required>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group full-width">
                  <label for="address1">Address 1</label>
                  <input type="text" id="address1" name="address1" placeholder="421, Dubai Main St." required>
                </div>
              </div>
              <div class="col-lg-6">
              <div class="form-group full-width">
                  <label for="address2">Address 2</label>
                  <input type="text" id="address2" name="address2" placeholder="Apartment, suite, etc. (optional)">
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
                                            <div class="col-lg-6">
 <div class="form-group full-width">
                                            <label class="form-label" for="cardNumber">Card Number *</label>
                                            <input type="text" id="cardNumber" class="form-input" placeholder="1234 5678 9012 3456" required="">
                                        </div>
                                            </div>
                                             <div class="col-lg-6">
                                                <div class="form-group full-width">
                                            <label class="form-label" for="cardName">Name on Card *</label>
                                            <input type="text" id="cardName" class="form-input" required="">
                                        </div>
                                            </div>
                                             <div class="col-lg-6">
                                                  <div class="form-group">
                                            <label class="form-label" for="expiryDate">Expiry Date *</label>
                                            <input type="text" id="expiryDate" class="form-input" placeholder="MM/YY" required="">
                                        </div>
                                            </div>
                                             <div class="col-lg-6">
                                                <div class="form-group">
                                            <label class="form-label" for="cvv">CVV *</label>
                                            <input type="text" id="cvv" class="form-input" placeholder="123" required="">
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
              <h3 id="selectedPlan">Premium Plan</h3>
              <p>Complete salon management solution</p>
            </div>
          </div>

          <div class="pricing-breakdown">
            <div class="pricing-row">
              <span>Subtotal</span>
              <span id="subtotal">$45.00</span>
            </div>
            <div class="pricing-row">
              <span>Tax</span>
              <span id="tax">$4.50</span>
            </div>
            <div class="pricing-row total">
              <span>Total</span>
              <span id="total">$49.50</span>
            </div>
          </div>

          <button class="place-order-btn" type="submit">
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
    <a href="login.php" class="btn btn-primary" onclick="document.getElementById('successModal').style.display='none'">Continue</a>
  </div>
</div>
 </div>


@include('web.layouts.footer')

<script>
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

// Get plan details from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const plan = urlParams.get('plan') || 'premium';
const billing = urlParams.get('billing') || 'monthly';

// Update order summary based on selected plan
const planPrices = {
  free: { monthly: 15, yearly: 99 },
  premium: { monthly: 45, yearly: 399 },
  standard: { monthly: 30, yearly: 299 }
};

const planNames = {
  free: 'Free Plan',
  premium: 'Premium Plan',
  standard: 'Standard Plan'
};

if (planPrices[plan] && planPrices[plan][billing]) {
  const price = planPrices[plan][billing];
  const tax = Math.round(price * 0.1 * 100) / 100;
  const total = price + tax;
  
  document.getElementById('selectedPlan').textContent = planNames[plan];
  document.getElementById('subtotal').textContent = `$${price}.00`;
  document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Card number formatting
document.getElementById('cardNumber').addEventListener('input', function(e) {
  let value = e.target.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
  let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
  e.target.value = formattedValue;
});

// CVV validation
document.getElementById('cvv').addEventListener('input', function(e) {
  e.target.value = e.target.value.replace(/[^0-9]/g, '');
});

// Handle place order button click
document.querySelector('.place-order-btn').addEventListener('click', function(e) {
  e.preventDefault();
  // Simulate successful payment (replace with actual payment processing logic)
  const successModal = document.getElementById('successModal');
  successModal.style.display = 'flex';
});
</script>