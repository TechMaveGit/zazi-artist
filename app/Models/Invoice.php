<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    protected $table = 'invoices';
    protected $guarded = ['id'];
    protected $fillable = ['invoice_number','booking_id', 'date', 'due_date', 'discount', 'tax', 'sub_total', 'grand_total','paid_amount','remaining_amount', 'status','note','is_publish'];

    public function invoiceItems()
    {
        return $this->hasMany(InvoiceItem::class);
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }

    public function booking()
    {
        return $this->belongsTo(Booking::class);
    }

    public function bookingService()
    {
        return $this->belongsTo(BookingService::class);
    }

    public function user()
    {
        return $this->hasOneThrough(User::class, Booking::class, 'id', 'id', 'booking_id', 'user_id');
    }

    protected $casts=[
        'date' => 'date',
        'due_date' => 'date'
    ];

}
