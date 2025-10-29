<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Subscription Invoice</title>
</head>
<body>
    <p>Dear {{ $invoice->customer_name ?? 'Customer' }},</p>

    <p>Thank you for your subscription purchase! Please find your detailed subscription invoice attached to this email.</p>

    <p><strong>Invoice Number:</strong> {{ $invoice->invoice_number ?? 'N/A' }}</p>
    <p><strong>Subscription Plan:</strong> {{ $invoice->items[0]->description ?? 'N/A' }}</p>
    <p><strong>Total Amount:</strong> ${{ number_format($invoice->grand_total ?? 0, 2) }}</p>

    <p>If you have any questions regarding your invoice or subscription, please do not hesitate to contact us.</p>

    <p>Thank you,<br>
    {{ $invoice->bill_from_company ?? 'Our Company' }}</p>
</body>
</html>
