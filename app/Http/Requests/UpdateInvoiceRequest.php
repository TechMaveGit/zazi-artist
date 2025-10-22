<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateInvoiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'shop_id' => 'sometimes|required|exists:shops,id',
            'booking_id' => 'nullable|sometimes|required_without:customer_id|exists:bookings,id',
            'customer_id' => 'nullable|sometimes|required_without:booking_id|exists:users,id',
            'date' => 'sometimes|required|date_format:Y/m/d',
            'due_date' => 'sometimes|required|date_format:Y/m/d',
            'services' => 'sometimes|required|array',
            'services.*.id' => 'required|exists:shop_services,id', // Assuming services are shop_services
            'services.*.price' => 'required|numeric|min:0',
            'services.*.request_amount' => 'required|numeric|min:0',
            'discount' => 'nullable|numeric|min:0',
            'tax_percent' => 'nullable|numeric|min:0',
            'total' => 'sometimes|required|numeric|min:0',
            'notes' => 'nullable|string',
            'is_draft' => 'nullable|boolean',
        ];
    }
}
