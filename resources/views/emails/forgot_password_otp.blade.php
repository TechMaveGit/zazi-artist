<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset OTP</title>
  <style>
    body {
      background-color: #f4f6f8;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      margin: 0;
      padding: 0;
      color: #333;
    }
    .email-wrapper {
      width: 100%;
      background-color: #f4f6f8;
      padding: 40px 0;
    }
    .email-container {
      max-width: 600px;
      background: #ffffff;
      margin: 0 auto;
      border-radius: 10px;
      box-shadow: 0 3px 8px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    .email-header {
      background-color: #1e1e2f;
      text-align: center;
      padding: 25px;
    }
    .email-header img {
      height: 50px;
    }
    .email-body {
      padding: 40px 30px;
      text-align: left;
    }
    .email-body h2 {
      color: #333;
      font-size: 22px;
      margin-bottom: 15px;
    }
    .email-body p {
      font-size: 15px;
      line-height: 1.6;
      margin: 10px 0;
    }
    .otp-box {
      background: #f0f4ff;
      border: 1px solid #cdd9ff;
      color: #1a237e;
      font-weight: bold;
      font-size: 28px;
      text-align: center;
      padding: 15px 0;
      border-radius: 8px;
      margin: 25px 0;
      letter-spacing: 4px;
    }
    .email-footer {
      background-color: #f9f9f9;
      text-align: center;
      font-size: 13px;
      color: #777;
      padding: 20px 10px;
      border-top: 1px solid #eee;
    }
    .button {
      display: inline-block;
      padding: 12px 25px;
      background-color: #1a73e8;
      color: #fff !important;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="email-container">
      <div class="email-header">
        <img src="{{ asset('images/logo.png') }}" alt="{{ config('app.name') }} Logo">
      </div>
      <div class="email-body">
        <h2>Hello {{ ucfirst($user->name) }},</h2>
        <p>We received a request to reset your password for your <strong>{{ config('app.name') }}</strong> account.</p>
        <p>Please use the following One-Time Password (OTP) to complete the process:</p>

        <div class="otp-box">{{ $otp }}</div>

        <p>This OTP is valid for <strong>5 minutes</strong>. If you didn’t request a password reset, please ignore this email.</p>
      </div>
      <div class="email-footer">
        &copy; {{ date('Y') }} {{ config('app.name') }}. All rights reserved.<br>
        Need help? <a href="mailto:support@{{ parse_url(config('app.url'), PHP_URL_HOST) }}" style="color:#1a73e8;text-decoration:none;">Contact Support</a>
      </div>
    </div>
  </div>
</body>
</html>
