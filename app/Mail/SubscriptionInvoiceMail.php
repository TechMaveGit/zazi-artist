<?php

namespace App\Mail;

use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use App\Models\SubscriptionInvoice;
use App\Models\SubscriptionInvoiceItem;
use App\Models\User;
use App\Models\UserSubscription;
use App\Models\Shop;
use App\Models\Subscription;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class SubscriptionInvoiceMail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $subscriptionInvoice;

    /**
     * Create a new message instance.
     */
    public function __construct(SubscriptionInvoice $subscriptionInvoice)
    {
        $this->subscriptionInvoice = $subscriptionInvoice;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Subscription Invoice - #' . $this->subscriptionInvoice->invoice_number,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        // Reconstruct the data object for the email view
        $invoiceData = prepareSubscriptionInvoiceData($this->subscriptionInvoice?->id);
        return new Content(
            view: 'emails.subscription-invoice',
            with: ['invoice' => $invoiceData],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        try {
            $invoiceData = prepareSubscriptionInvoiceData($this->subscriptionInvoice?->id);

            $pdf = Pdf::loadView('pdf.subscription-invoice', [
                'invoice' => $invoiceData,
            ])->setPaper('a4');

            $invoiceNumber = $this->subscriptionInvoice->invoice_number ?? 'N/A';

            return [
                Attachment::fromData(
                    fn() => $pdf->output(),
                    'SubscriptionInvoice-' . $invoiceNumber . '.pdf'
                )->withMime('application/pdf'),
            ];
        } catch (\Exception $e) {
            Log::error('Failed to generate subscription invoice PDF attachment: ' . $e->getMessage());
            return [];
        }
    }
}
