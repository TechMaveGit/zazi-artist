<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Receipt</title>
</head>

<body
    style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; color: #333333; line-height: 1.6;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
        style="background-color: #f4f4f4;">
        <tr>
            <td style="padding: 20px 0;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="600"
                    style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                        <td
                            style="padding: 40px 40px 30px; text-align: center; background-color: #ffffff; border-bottom: 1px solid #e9ecef; color: #333333;">
                            {{-- <div style="display: inline-block; margin-bottom: 20px;">
                                <img src="{{ asset('assets/img/logo-small.png') }}" alt="Company Logo"
                                    style="height: 40px; width: auto;">
                            </div> --}}
                            <h1 style="margin: 0 0 10px; font-size: 24px; font-weight: 600; color: #007bff;">Payment
                                Received</h1>
                            <p style="margin: 0; font-size: 16px; color: #6c757d;">Thank you for your payment</p>
                        </td>
                    </tr>
                    <!-- Main Content -->
                    <tr>
                        <td style="padding: 40px;">
                            <p style="font-size: 18px; margin: 0 0 5px; color: #333333;">
                                Dear <strong>{{ $invoice->user->name ?? 'Customer' }}</strong>,
                            </p>
                            <p style="font-size: 16px; margin: 0 0 25px; color: #555555;">
                                We are pleased to confirm that we have received your payment in full for the services
                                provided. For your records, please find attached your invoice
                                <strong>#{{ $invoice->invoice_number ?? 'N/A' }}</strong>.
                            </p>
                            <div
                                style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #007bff; margin-bottom: 25px;">
                                <p style="font-size: 14px; margin: 0 0 10px; color: #495057; font-weight: 500;">Payment
                                    Details:</p>
                                <ul
                                    style="margin: 0; padding-left: 20px; font-size: 14px; color: #6c757d; line-height: 1.5;">
                                    <li><strong>Status:</strong>
                                        {{ $invoice->status == 'paid' ? 'Paid' : ($invoice->status == 'partial' ? 'Partially Paid' : 'Unpaid') }}
                                    </li>
                                    <li><strong>Invoice Amount:</strong> ${{ $invoice->grand_total }}</li>
                                    <li><strong>Payment Date:</strong> {{ $invoice->date?->format('M d, Y') }}</li>
                                </ul>
                            </div>
                            <p style="font-size: 16px; margin: 0; color: #555555;">
                                Your account is now up to date, and we appreciate your prompt payment. We value your
                                continued partnership and look forward to serving you again soon.
                            </p>
                            <p style="font-size: 16px; margin: 20px 0 0; color: #007bff; font-style: italic;">
                                Best regards,<br>
                                <strong>The {{ $invoice->booking->shop->name ?? config('app.name') }} Team</strong>
                            </p>
                        </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                        <td
                            style="padding: 30px 40px; background-color: #f8f9fa; border-top: 1px solid #e9ecef; text-align: center; font-size: 14px; color: #6c757d;">
                            <p style="margin: 0 0 10px; font-weight: 500;">
                                {{ $invoice?->booking?->shop?->name ?? config('app.name') }}</p>
                            <p style="margin: 0 0 15px;">{{ $invoice->booking->shop->address ?? '' }}<br>Email:
                                {{ $invoice?->booking?->shop->email ?? '' }} | Phone:
                                ({{ $invoice?->booking?->shop->dial_code ?? '' }})
                                {{ $invoice?->booking?->shop->phone ?? '' }}</p>
                            <p style="margin: 0; font-size: 12px; opacity: 0.8;">
                                This is an automated notification. For inquiries, please contact us directly.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
