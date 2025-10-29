<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Subscription Purchase Invoice</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            font-size: 12px;
            line-height: 1.4;
            color: #333;
            margin: 0;
            padding: 20px;
        }

        .header {
            text-align: center;
            border-bottom: 2px solid #000;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }

        .invoice-details {
            display: flex;
            justify-content: start;
            margin-bottom: 20px;
            text-align: left;
        }

        .section {
            width: 45%;
        }

        .bill-to,
        .bill-from {
            margin-bottom: 20px;
        }

        .bill-to h3,
        .bill-from h3 {
            margin: 0 0 10px 0;
            font-size: 14px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        th,
        td {
            border: 1px solid #000;
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #f0f0f0;
            font-weight: bold;
        }

        .totals {
            text-align: right;
        }

        .payment-terms,
        .notes,
        .payment-instructions {
            margin-bottom: 20px;
        }

        .payment-terms ul {
            margin: 0;
            padding-left: 20px;
        }

        .footer {
            text-align: center;
            font-size: 10px;
            color: #666;
            border-top: 1px solid #ccc;
            padding-top: 10px;
        }
    </style>
</head>

<body>
    <div class="header">
        <h2>Subscription Purchase Invoice</h2>
        <div class="invoice-details" >
            <div style="text-align: start;">
                <strong>Invoice Number:</strong> {{ $invoice->invoice_number ?? 'N/A' }}<br>
                <strong>Invoice Date:</strong> {{ $invoice->invoice_date ?? 'N/A' }}<br>
                <strong>Due Date:</strong> {{ $invoice->due_date ?? 'N/A' }}<br>
                <strong>Billing Period:</strong> {{ $invoice->billing_period ?? 'N/A' }}
            </div>
        </div>
    </div>

    <div class="bill-to">
        <h3>Bill To</h3>
        <strong>Customer Name:</strong> {{ $invoice->customer_name ?? 'N/A' }}<br>
        <strong>Company:</strong> {{ $invoice->company_name ?? 'N/A' }}<br>
        <strong>Address:</strong> {{ $invoice->customer_address ?? 'N/A' }}<br>
        <strong>Email:</strong> {{ $invoice->customer_email ?? 'N/A' }}<br>
        <strong>Phone:</strong> {{ $invoice->customer_phone ?? 'N/A' }}
    </div>

    <div class="bill-from">
        <h3>Bill From</h3>
        <strong>Company:</strong> {{ $invoice->bill_from_company ?? 'N/A' }}<br>
        {{-- <strong>Address:</strong> {{ $invoice->bill_from_address ?? 'N/A' }}<br>
        <strong>Email:</strong> {{ $invoice->bill_from_email ?? 'N/A' }}<br>
        <strong>Phone:</strong> {{ $invoice->bill_from_phone ?? 'N/A' }}<br> --}}
        <strong>Website:</strong> {{ $invoice->bill_from_website ?? 'N/A' }}
    </div>

    <table>
        <thead>
            <tr>
                <th>Item #</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($invoice->items ?? [] as $item)
            <tr>
                <td>{{ $item->item_number }}</td>
                <td>{{ $item->description }}</td>
                <td>{{ $item->quantity }}</td>
                <td>${{ number_format($item->unit_price, 2) }}</td>
                <td>${{ number_format($item->total, 2) }}</td>
            </tr>
            @endforeach
            <tr style="font-weight: bold;">
                <td colspan="4" style="text-align: right;">Subtotal</td>
                <td>${{ number_format($invoice->subtotal ?? 0, 2) }}</td>
            </tr>
            <tr style="font-weight: bold;">
                <td colspan="4" style="text-align: right;">Tax ({{ $invoice->tax_rate ?? 0 }}%)</td>
                <td>${{ number_format($invoice->tax_amount ?? 0, 2) }}</td>
            </tr>
            <tr style="font-weight: bold; font-size: 14px; border-top: 2px solid #000;">
                <td colspan="4" style="text-align: right;">Grand Total</td>
                <td>${{ number_format($invoice->grand_total ?? 0, 2) }}</td>
            </tr>
        </tbody>
    </table>

    <div class="payment-terms">
        <h3>Payment Terms</h3>
        <ul>
            @foreach ($invoice->payment_terms ?? [] as $term)
            <li>{{ $term }}</li>
            @endforeach
        </ul>
    </div>

    <div class="notes">
        <h3>Notes</h3>
        @foreach ($invoice->notes ?? [] as $note)
        <p>{{ $note }}</p>
        @endforeach
    </div>

    {{-- <div class="footer">
        <p>This is a sample invoice template. Customize placeholders (e.g., names, amounts) as needed for your use.</p>
    </div> --}}
</body>

</html>
