<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invoice</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
            color: #333;
        }

        .invoice-container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 40px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 30px;
            border-bottom: 2px solid #eee;
            padding-bottom: 20px;
        }

        .company-info h1 {
            margin: 0;
            color: #007bff;
        }

        .company-info p {
            margin: 5px 0;
        }

        .invoice-details {
            text-align: right;
        }

        .invoice-details h2 {
            margin: 0;
            color: #007bff;
        }

        .invoice-meta {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
        }

        .bill-to,
        .ship-to {
            width: 48%;
        }

        .bill-to h3,
        .ship-to h3 {
            margin: 0 0 10px 0;
            color: #333;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        th,
        td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }

        th {
            background-color: #f8f9fa;
            font-weight: bold;
        }

        .total-row td {
            font-weight: bold;
            font-size: 1.1em;
        }

        .grand-total {
            background-color: #e9ecef;
            border-top: 2px solid #007bff;
        }

        .footer {
            margin-top: 30px;
            text-align: center;
            font-size: 0.9em;
            color: #666;
            border-top: 1px solid #eee;
            padding-top: 20px;
        }
    </style>
</head>

<body>
    <div class="invoice-container">
        <div class="header">
            <div class="company-info">
                <h1>{{ $invoice->booking->shop->name ?? config('app.name') }}</h1>
                <p>{{ $invoice->booking->shop->address ?? '' }}</p>
                <p>{{ $invoice->booking->shop->email ?? '' }}</p>

            </div>
            <div class="invoice-details">
                <h2>INVOICE</h2>
                <p><strong>Invoice #:</strong> {{ $invoice?->invoice_number }}</p>
                <p><strong>Date:</strong> {{ $invoice?->date }}</p>
                <p><strong>Due Date:</strong> {{ $invoice?->due_date }}</p>
            </div>
        </div>

        <div class="invoice-meta">
            <div class="bill-to">
                <h3>Bill To:</h3>
                <p><strong>{{ $invoice->booking->customer->name ?? 'Walk-in Customer' }}</strong></p>
                <p>{{ $invoice->booking->customer->email ?? '' }}</p>
                <p>{{ $invoice->booking->customer->phone ?? '' }}</p>
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Service Name</th>
                    <th>Paid Amount</th>
                    <th>Remaining Amount</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                @forelse ($invoice->invoiceItems as $item)
                    <tr>
                        <td>{{ $item->shopService->name ?? '' }}</td>
                        <td>{{ $item->paid_amount ?? '' }}</td>
                        <td>{{ $item->remaining_amount ?? '' }}</td>
                        <td>{{ $item->total ?? '' }}</td>
                    </tr>
                @empty
                @endforelse
            </tbody>
        </table>

        <table>
            <tr class="total-row">
                <td colspan="3">Subtotal</td>
                <td>${{ number_format($invoice->sub_total, 2) }}</td>
            </tr>
            <tr class="total-row">
                <td colspan="3">Discount</td>
                <td>${{ number_format($invoice->discount, 2) }}</td>
            </tr>
            <tr class="total-row">
                <td colspan="3">Tax ({{ $invoice->tax }}%)</td>
                <td>
                    $
                    @php
                        $tax_amount = ($invoice->sub_total * $invoice->tax) / 100;
                        echo number_format($tax_amount, 2);
                    @endphp
                </td>
            </tr>
            <tr class="total-row grand-total">
                <td colspan="3">Grand Total</td>
                <td>${{ number_format($invoice->grand_total, 2) }}</td>
            </tr>
        </table>

        <div class="footer">
            <p>Thank you for your business!.</p>
            <p>Please make checks payable to {{ $invoice->booking->shop->name ?? config('app.name') }}.</p>
        </div>
    </div>
</body>

</html>
