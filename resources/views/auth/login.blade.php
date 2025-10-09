<x-guest-layout>
    <div class="main-wrapper">
        <div class="LoginformWrap">
            <div class="login-header">
                <img src="{{ asset('assets/img/newimages/logohorizontal3.png') }}" class="img-fluid" alt="Logo">
            </div>
            <div class="login-body">
                <div class="loginformcontent">
                    <!-- Login Form -->
                    <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <div class="loginformContainer">
                            <div class="text-center mb-3 formtitle_login">
                                <h2 class="mb-2">Welcome Back!</h2>
                                <p class="mb-0">Please Enter Your Details to Sign in.</p>
                            </div>
                            <div class="logform_fields">
                                <div class="form-group Iconinp_Group">
                                    <label class="form-label">Email Address</label>
                                    <input type="text" class="form-control" name="email"
                                        value="{{ old('email') }}">
                                    <iconify-icon icon="material-symbols:mark-email-read-outline-rounded">
                                    </iconify-icon>
                                    @error('email')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>

                                <div class="form-group password-group Iconinp_Group">
                                    <label class="form-label">Password</label>
                                    <input type="password" id="password" class="pass-input form-control"
                                        name="password" placeholder="********"
                                        style="width: 100%; padding-right: 40px;" />
                                    <iconify-icon icon="mdi:eye" id="togglePassword"></iconify-icon>
                                </div>

                            </div>
                            <div class="d-flex align-items-center justify-content-between mb-3">
                                <div class="form-check form-check-md mb-0">
                                    <input class="form-check-input" id="remember_me" type="checkbox" name="remember" value="1">
                                    <label for="remember_me" class="form-check-label mt-0">Remember Me</label>
                                </div>
                                {{-- <div class="text-end">
                                        <a href="{{ route('password.request') }}" class="link-danger">Forgot Password?</a>
                                        <a href="{{ route('password.request') }}" class="link-danger forgotpassword">Forgot Password?</a>
                                    </div> --}}
                            </div>
                            <div class="mb-3">
                                <button type="submit" class="btn btn-primary w-100">Sign In</button>
                            </div>
                        </div>
                    </form>

                    <!-- Forgot Password Container (Initially Hidden) -->
                    {{-- <form method="POST" action="{{ route('password.email') }}">
                            <div class="forgot_Container" style="display: none;">
                                <div class="text-center mb-3 formtitle_login">
                                    <h2 class="mb-2">Forgot password?</h2>
                                    <p class="mb-0">If you forgot your password, we’ll email you instructions to reset it.
                                    </p>
                                </div>
                                <div class="logform_fields">
                                    <div class="form-group Iconinp_Group">
                                        <label class="form-label">Email Address</label>
                                        <input type="text" class="form-control" name="email">
                                        <iconify-icon icon="material-symbols:mark-email-read-outline-rounded">
                                        </iconify-icon>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary w-100 forgotlink_send">Send Link</button>
                                </div>
                            </div>
                        </form> --}}

                    <!-- Success Message (Initially Hidden) -->
                    <div class="success-message" style="display: none;">
                        <img src="{{ asset('assets/img/newimages/successtic.gif') }}" alt="Success">
                        <h2>Password link sent</h2>
                        <p>Please check your inbox for the reset link.</p>
                        <button type="submit" class="btn back-to-login">Back to Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-guest-layout>
