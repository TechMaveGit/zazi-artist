<!DOCTYPE html>
<html>
<head>
    <title>Welcome to {{ config('app.name') }}</title>
</head>
<body>
    <p>Hello {{ $user->name }},</p>

    <p>Welcome to {{ config('app.name') }}! We are excited to have you on board.</p>

    <p>Your account has been successfully created. Here are your login details:</p>
    <ul>
        <li><strong>Email:</strong> {{ $user->email }}</li>
        <li><strong>Password:</strong> {{ $password }}</li>
    </ul>

    <p>You can log in to your account <a href="{{ route('web.login') }}">here</a>.</p>

    <p>To configure your shop details and get started, please visit your profile page after logging in.</p>
    <p>{{ $shopConfigMessage }}</p>

    <p>Thank you for subscribing to the {{ $user->subscription->name ?? 'our service' }} plan.</p>

    <p>Best regards,</p>
    <p>The {{ config('app.name') }} Team</p>
</body>
</html>
