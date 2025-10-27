<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BeautyPro - Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('web_assets/css/login.css') }}">
</head>

<body>
    <div class="login-container">
        <div class="login-card">
            <div id="backButtonContainer" style="display: none;">
                <button class="back-btn" id="backBtn">← Back</button>
            </div>
            <div class="logo"><a href="index.php"><img src="images/new-image/beautyPro.png" alt=""></a></div>

            <h1 class="welcome-title" id="welcomeTitle">Welcome Back !</h1>
            <!-- <p class="welcome-subtitle">Join our sustainable community</p> -->

            <div class="step-indicator">
                <div class="step active" id="step1"></div>
                <div class="step" id="step2"></div>
                <div class="step" id="step3"></div>
                <div class="step" id="step4"></div>
            </div>

            <div class="error-message" id="errorMessage"></div>
            <div class="loading" id="loading">
                <div class="spinner"></div>
                <p>Processing...</p>
            </div>

            <!-- Step 1: Login Form -->
            <div class="form-step active" id="loginForm">
                <form id="loginFormElement" method="POST" action="{{ route('web.login.post') }}">
                    @csrf
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-input" id="loginEmail" placeholder="Enter your email"
                            value="{{ old('email') }}" required name="email">
                        @error('email')
                            <span class="text-danger">{{ $message }}</span>
                        @enderror
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <div class="password-container">
                            <input type="password" class="form-input" id="loginPassword"
                                placeholder="Enter your password" required name="password">
                            <button type="button" class="password-toggle" onclick="togglePassword('loginPassword')">
                                <i class="fas fa-eye" id="loginPasswordIcon"></i>
                            </button>
                        </div>
                        <a href="#" class="forgot-password" onclick="showForgotPassword()">Forget Password?</a>
                    </div>
                    <button type="submit" class="btn-primary">Log in</button>
                </form>
            </div>

            <!-- Step 2: Forgot Password - Email Entry -->
            <div class="form-step" id="forgotPasswordForm">
                <h3 style="margin-bottom: 20px; text-align: center;">Forgot Password</h3>
                <p style="color: #94a3b8; text-align: center; margin-bottom: 30px;">Enter your email address and we'll
                    send you an OTP to reset your password.</p>

                <form id="forgotPasswordFormElement">
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-input" id="forgotEmail" placeholder="Enter your email"
                            required>
                    </div>
                    <button type="submit" class="btn-primary">Send OTP</button>
                </form>
            </div>

            <!-- Step 3: OTP Verification -->
            <div class="form-step" id="otpForm">
                <h3 style="margin-bottom: 20px; text-align: center;">Enter OTP</h3>
                <p style="color: #94a3b8; text-align: center; margin-bottom: 30px;">We've sent a 6-digit code to <span
                        id="otpEmail"></span></p>

                <form id="otpFormElement">
                    <div class="otp-container">
                        <input type="text" class="otp-input" maxlength="1" id="otp1"
                            oninput="moveToNext(this, 'otp2')" onkeydown="moveToPrev(event, this, null)">
                        <input type="text" class="otp-input" maxlength="1" id="otp2"
                            oninput="moveToNext(this, 'otp3')" onkeydown="moveToPrev(event, this, 'otp1')">
                        <input type="text" class="otp-input" maxlength="1" id="otp3"
                            oninput="moveToNext(this, 'otp4')" onkeydown="moveToPrev(event, this, 'otp2')">
                        <input type="text" class="otp-input" maxlength="1" id="otp4"
                            oninput="moveToNext(this, 'otp5')" onkeydown="moveToPrev(event, this, 'otp3')">
                        <input type="text" class="otp-input" maxlength="1" id="otp5"
                            oninput="moveToNext(this, 'otp6')" onkeydown="moveToPrev(event, this, 'otp4')">
                        <input type="text" class="otp-input" maxlength="1" id="otp6"
                            oninput="moveToNext(this, null)" onkeydown="moveToPrev(event, this, 'otp5')">
                    </div>
                    <button type="submit" class="btn-primary">Verify OTP</button>
                    <button type="button" class="btn-secondary" onclick="resendOTP()">Resend OTP</button>
                </form>
            </div>

            <!-- Step 4: Reset Password -->
            <div class="form-step" id="resetPasswordForm">
                <h3 style="margin-bottom: 20px; text-align: center;">Create New Password</h3>
                <p style="color: #94a3b8; text-align: center; margin-bottom: 30px;">Enter your new password below.</p>

                <form id="resetPasswordFormElement">
                    <div class="mb-3">
                        <label class="form-label">New Password</label>
                        <div class="password-container">
                            <input type="password" class="form-input" id="newPassword"
                                placeholder="Enter new password" required minlength="8">
                            <button type="button" class="password-toggle" onclick="togglePassword('newPassword')">
                                <i class="fas fa-eye" id="newPasswordIcon"></i>
                            </button>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Confirm Password</label>
                        <div class="password-container">
                            <input type="password" class="form-input" id="confirmPassword"
                                placeholder="Confirm new password" required minlength="8">
                            <button type="button" class="password-toggle"
                                onclick="togglePassword('confirmPassword')">
                                <i class="fas fa-eye" id="confirmPasswordIcon"></i>
                            </button>
                        </div>
                    </div>
                    <button type="submit" class="btn-primary">Reset Password</button>
                </form>
            </div>

            <!-- Step 5: Success Message -->
            <div class="form-step" id="successForm">
                <div class="success-message">
                    <i class="fas fa-check-circle success-icon"></i>
                    <h3 style="margin-bottom: 15px;">Password Changed Successfully!</h3>
                    <p>Your password has been updated. You can now log in with your new password.</p>
                </div>
                <button class="btn-primary" onclick="showLogin()">Continue to Login</button>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        let currentStep = 1;
        let userEmail = '';

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            updateStepIndicator();

            // Add form submit listeners
            // document.getElementById('loginFormElement').addEventListener('submit', handleLogin);
            document.getElementById('forgotPasswordFormElement').addEventListener('submit', handleForgotPassword);
            document.getElementById('otpFormElement').addEventListener('submit', handleOtpVerification);
            document.getElementById('resetPasswordFormElement').addEventListener('submit', handleResetPassword);
        });

        function showStep(stepNumber) {
            // Hide all steps
            const steps = document.querySelectorAll('.form-step');
            steps.forEach(step => step.classList.remove('active'));

            // Show target step
            const targetStep = document.querySelectorAll('.form-step')[stepNumber - 1];
            targetStep.classList.add('active');

            currentStep = stepNumber;
            updateStepIndicator();

            // Handle welcome title
            const welcomeTitle = document.getElementById('welcomeTitle');
            if (stepNumber === 1) {
                welcomeTitle.style.display = 'block';
            } else {
                welcomeTitle.style.display = 'none';
            }

            // Handle back button
            const backContainer = document.getElementById('backButtonContainer');
            if (stepNumber === 1 || stepNumber === 5) {
                backContainer.style.display = 'none';
            } else {
                backContainer.style.display = 'block';
                const backBtn = document.getElementById('backBtn');
                if (stepNumber === 2) {
                    backBtn.textContent = '← Back to Login';
                    backBtn.onclick = showLogin;
                } else if (stepNumber === 3) {
                    backBtn.textContent = '← Back';
                    backBtn.onclick = showForgotPassword;
                } else if (stepNumber === 4) {
                    backBtn.textContent = '← Back';
                    backBtn.onclick = showOtpForm;
                }
            }
        }

        function updateStepIndicator() {
            const indicators = document.querySelectorAll('.step');
            indicators.forEach((indicator, index) => {
                if (index < currentStep) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        }

        function showLogin() {
            showStep(1);
            hideError();
        }

        function showForgotPassword() {
            showStep(2);
            hideError();
        }

        function showOtpForm() {
            showStep(3);
            hideError();
        }

        function showResetPassword() {
            showStep(4);
            hideError();
        }

        function showSuccess() {
            showStep(5);
            hideError();
        }

        function showLoading() {
            document.getElementById('loading').style.display = 'block';
        }

        function hideLoading() {
            document.getElementById('loading').style.display = 'none';
        }

        function showError(message) {
            const errorDiv = document.getElementById('errorMessage');
            errorDiv.textContent = message;
            errorDiv.style.display = 'block';
            setTimeout(() => {
                hideError();
            }, 5000);
        }

        function hideError() {
            document.getElementById('errorMessage').style.display = 'none';
        }

        function togglePassword(inputId) {
            const input = document.getElementById(inputId);
            const icon = document.getElementById(inputId + 'Icon');

            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        }

        function moveToNext(current, nextId) {
            if (current.value.length === 1 && nextId) {
                document.getElementById(nextId).focus();
            }
        }

        function moveToPrev(event, current, prevId) {
            if (event.key === 'Backspace' && current.value === '' && prevId) {
                document.getElementById(prevId).focus();
            }
        }

        function handleLogin(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            if (!email || !password) {
                showError('Please fill in all fields');
                return;
            }

            showLoading();

            $.ajax({
                url: "{{ route('web.login.post') }}",
                method: 'POST',
                data: {
                    email: email,
                    password: password,
                    _token: '{{ csrf_token() }}'
                },
                success: function(response) {
                    hideLoading();
                    showSuccess();
                },
                error: function(xhr, status, error) {
                    hideLoading();
                    showError('Login failed. Please try again.');
                }
            })
        }

        function handleForgotPassword(e) {
            e.preventDefault();
            const email = document.getElementById('forgotEmail').value;

            if (!email) {
                showError('Please enter your email address');
                return;
            }

            if (!isValidEmail(email)) {
                showError('Please enter a valid email address');
                return;
            }

            userEmail = email;
            document.getElementById('otpEmail').textContent = email;

            showLoading();

            // Simulate OTP sending
            setTimeout(() => {
                hideLoading();
                showOtpForm();
                // Focus on first OTP input
                document.getElementById('otp1').focus();
                showError('OTP sent successfully! (Demo: Use 123456)');
            }, 2000);
        }

        function handleOtpVerification(e) {
            e.preventDefault();

            let otp = '';
            for (let i = 1; i <= 6; i++) {
                const input = document.getElementById(`otp${i}`);
                if (!input.value) {
                    showError('Please enter the complete OTP');
                    input.focus();
                    return;
                }
                otp += input.value;
            }

            showLoading();

            // Simulate OTP verification
            setTimeout(() => {
                hideLoading();
                // In demo, accept 123456 as valid OTP
                if (otp === '123456') {
                    showResetPassword();
                } else {
                    showError('Invalid OTP. Please try again. (Demo: Use 123456)');
                }
            }, 1500);
        }

        function handleResetPassword(e) {
            e.preventDefault();
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (!newPassword || !confirmPassword) {
                showError('Please fill in all fields');
                return;
            }

            if (newPassword.length < 8) {
                showError('Password must be at least 8 characters long');
                return;
            }

            if (newPassword !== confirmPassword) {
                showError('Passwords do not match');
                return;
            }

            showLoading();

            // Simulate password reset
            setTimeout(() => {
                hideLoading();
                showSuccess();

                // Auto redirect to login after 3 seconds
                setTimeout(() => {
                    showLogin();
                    // Clear all forms
                    document.querySelectorAll('form').forEach(form => form.reset());
                    clearOtpInputs();
                }, 3000);
            }, 2000);
        }

        function resendOTP() {
            showLoading();

            // Simulate resending OTP
            setTimeout(() => {
                hideLoading();
                showError('OTP resent successfully! (Demo: Use 123456)');
                clearOtpInputs();
                document.getElementById('otp1').focus();
            }, 1500);
        }

        function clearOtpInputs() {
            for (let i = 1; i <= 6; i++) {
                document.getElementById(`otp${i}`).value = '';
            }
        }

        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        // Auto-focus on first input when page loads
        window.addEventListener('load', () => {
            document.getElementById('loginEmail').focus();
        });
    </script>
</body>

</html>
