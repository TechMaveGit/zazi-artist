<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>OTP Code</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f6f9;
            margin: 0;
            padding: 0;
        }

        .container {
            background: #ffffff;
            max-width: 500px;
            margin: 50px auto;
            padding: 30px 20px;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
            text-align: center;
        }

        h2 {
            color: #333333;
            margin-bottom: 10px;
        }

        p {
            color: #555555;
            font-size: 16px;
            margin-bottom: 20px;
        }

        .otp-box {
            display: inline-block;
            background: #f0f0f0;
            border-radius: 8px;
            padding: 15px 30px;
            font-size: 32px;
            font-weight: bold;
            letter-spacing: 10px;
            color: #007bff;
            margin: 20px 0;
        }

        .btn {
            display: inline-block;
            padding: 12px 25px;
            background-color: #007bff;
            color: #ffffff !important;
            text-decoration: none;
            border-radius: 8px;
            margin-top: 10px;
            font-size: 16px;
        }

        .footer {
            font-size: 12px;
            color: #999999;
            text-align: center;
            margin-top: 25px;
        }

        @media screen and (max-width: 600px) {
            .container {
                width: 90%;
                padding: 20px;
            }

            .otp-box {
                padding: 15px 20px;
                font-size: 28px;
                letter-spacing: 8px;
            }

            .btn {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Hello, {{ $user->name }}</h2>
        <p>Your OTP code for login/verification is:</p>
        <div class="otp-box">{{ $otp }}</div>
        <p>This OTP is valid for the next 10 minutes.</p>
        <p>If you did not request this, please ignore this email.</p>
        <a href="#" class="btn">Verify OTP</a>
        <div class="footer">
            &copy; {{ date('Y') }} Your Company. All rights reserved.
        </div>
    </div>
</body>
</html>
