<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $guarded = ['id'];
    protected $fillable = ['invoice_id', 'amount', 'payment_method', 'status'];

    public function invoice()
    {
        return $this->belongsTo(Invoice::class);
    }
}
