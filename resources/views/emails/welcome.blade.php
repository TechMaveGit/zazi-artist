<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Salon & Tattoo App</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f4f4f4;">
        <tr>
            <td style="padding: 20px 0;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" align="center" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="padding: 40px 30px 20px; text-align: center; background-color: #667eea; border-radius: 8px 8px 0 0; color: #ffffff;">
                            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">Welcome to Salon & Tattoo App!</h1>
                            <p style="margin: 10px 0 0; font-size: 16px; opacity: 0.9;">We're thrilled to have you join our community</p>
                        </td>
                    </tr>
                    <!-- Content -->
                    <tr>
                        <td style="padding: 30px; text-align: center;">
                            <h2 style="margin: 0 0 20px; font-size: 22px; color: #333;">Hello, {{ $user->name }}!</h2>
                            <p style="margin: 0 0 30px; font-size: 16px; color: #666; line-height: 1.5;">
                                Thank you for registering with us! We're excited to help you manage your salon and tattoo business with ease. 
                                Your account is now ready to use.
                            </p>
                            <!-- Credentials Card -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 400px; margin: 0 auto 30px; background-color: #f8f9fa; border-radius: 8px; border: 1px solid #e9ecef;">
                                <tr>
                                    <td style="padding: 20px; text-align: left;">
                                        <h3 style="margin: 0 0 15px; font-size: 18px; color: #333;">Your Account Details</h3>
                                        <div style="margin-bottom: 10px;">
                                            <strong style="color: #333;">Email:</strong><br>
                                            <span style="color: #666;">{{ $user->email }}</span>
                                        </div>
                                        <div style="margin-bottom: 10px;">
                                            <strong style="color: #333;">Password:</strong><br>
                                            <span style="color: #666; font-family: monospace;">{{ $password }}</span>
                                        </div>
                                        <p style="margin: 15px 0 0; font-size: 14px; color: #999; font-style: italic;">
                                            <strong>Security Note:</strong> For your safety, change this password after logging in.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            <!-- CTA Button -->
                            {{-- <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td style="text-align: center;">
                                        <a href="{{ url('/login') }}" style="display: inline-block; padding: 12px 30px; background-color: #667eea; color: #ffffff; text-decoration: none; font-weight: bold; border-radius: 6px; font-size: 16px;">Get Started Now</a>
                                    </td>
                                </tr>
                            </table> --}}
                            <p style="margin: 30px 0 0; font-size: 14px; color: #999; line-height: 1.5;">
                                If you have any questions, feel free to <a href="{{ url('/contact') }}" style="color: #667eea;">contact our support team</a>.
                            </p>
                            <p style="margin: 20px 0 0; font-size: 12px; color: #999;">
                                Best regards,<br>
                                The Salon & Tattoo App Team
                            </p>
                        </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                        <td style="padding: 20px 30px; text-align: center; background-color: #f8f9fa; border-radius: 0 0 8px 8px; font-size: 12px; color: #999;">
                            <p style="margin: 0;">&copy; 2025 Salon & Tattoo App. All rights reserved.</p>
                            <p style="margin: 5px 0 0;">
                                <a href="{{ url('/privacy') }}" style="color: #999; text-decoration: none;">Privacy Policy</a> | 
                                <a href="{{ url('/terms') }}" style="color: #999; text-decoration: none;">Terms of Service</a>
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>