<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to {{ config('app.name') }}</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f4; color: #333333;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto;">
        <!-- Header -->
        <tr>
            <td style="background-color: #ffffff; padding: 40px 30px 20px; text-align: center; border-top: 4px solid #007bff;">
                <h1 style="margin: 0; font-size: 28px; color: #007bff; font-weight: bold;">Welcome to {{ config('app.name') }}!</h1>
                <p style="margin: 10px 0 0; font-size: 16px; color: #666666;">We're excited to have you on board.</p>
            </td>
        </tr>
        
        <!-- Main Content -->
        <tr>
            <td style="background-color: #ffffff; padding: 30px;">
                <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.5;">Hello {{ $user->name }},</p>
                
                <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.5;">Your account has been successfully created. Thank you for subscribing to the <strong>{{ $user->subscription->name ?? 'our service' }} plan</strong>. Get ready to unlock amazing features!</p>
                
                <h2 style="margin: 0 0 15px; font-size: 20px; color: #007bff; font-weight: bold;">Your Login Details</h2>
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width: 100%; margin-bottom: 20px;">
                    <tr>
                        <td style="padding: 10px; background-color: #f8f9fa; border-radius: 4px; border-left: 4px solid #007bff;">
                            <strong style="color: #333333;">Email:</strong> {{ $user->email }}
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #f8f9fa; border-radius: 4px; border-left: 4px solid #007bff; margin-top: 10px;">
                            <strong style="color: #333333;">Temporary Password:</strong> {{ $password }} <em style="color: #666666; font-size: 14px;">(Please change this after logging in for security.)</em>
                        </td>
                    </tr>
                </table>
                
                <!-- CTA Button -->
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin: 30px 0;">
                    <tr>
                        <td style="text-align: center;">
                            <a href="{{ route('web.login') }}" style="display: inline-block; padding: 15px 30px; background-color: #007bff; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 5px;">Log In Now</a>
                        </td>
                    </tr>
                </table>
                
                <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.5;">Once logged in, head to your profile to configure your shop details and start using the platform right away.</p>
                
                @if(isset($shopConfigMessage) && $shopConfigMessage)
                <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.5; font-style: italic; color: #007bff;">{{ $shopConfigMessage }}</p>
                @endif
            </td>
        </tr>
        
        <!-- Footer -->
        <tr>
            <td style="background-color: #f8f9fa; padding: 20px 30px; text-align: center; font-size: 14px; color: #666666; border-bottom: 4px solid #007bff;">
                <p style="margin: 0 0 10px;">Best regards,</p>
                <p style="margin: 0; font-weight: bold;">The {{ config('app.name') }} Team</p>
                <p style="margin: 10px 0 0; font-size: 12px;">If you have any questions, reply to this email or contact our support.</p>
            </td>
        </tr>
    </table>
</body>
</html>