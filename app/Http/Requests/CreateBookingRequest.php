<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class CreateBookingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $data = [
            'shop_id' => 'required|exists:shops,id',
            'services' => 'required|array',
            'services.*' => 'required|exists:shop_services,id',
            'is_waitlist' => 'required|boolean',

            'start_date' => [
                // Required for Confirmed Booking
                'required_if:is_waitlist,false',
                'date',
                'after_or_equal:today',
            ],


            'start_time' => [
                // Required for Confirmed Booking
                'required_if:is_waitlist,false',
                'nullable',
                'date_format:H:i',
                // Required for Waitlist IF 'after' or 'between' is chosen
                'required_if:is_time_flexible,after',
                'required_if:is_time_flexible,between',
            ],

        ];
        if ($this->get('is_waitlist')) {
            $data['is_date_flexible'] = 'required_if:is_waitlist,true|boolean'; // True = Any Date, False = Specific/Range
            $data['is_time_flexible'] = 'required_if:is_waitlist,true|in:before,after,between,anytime';

            $data['start_date'] = [
                'required_if:is_date_flexible,false',
                'date',
                'after_or_equal:today',
            ];

            $data['end_date'] = [
                'required_if:is_date_flexible,false',
                'nullable',
                'date',
                'after_or_equal:start_date',
            ];

            $data['end_time'] = [
                'sometimes',
                'date_format:H:i',
                'required_if:is_time_flexible,between',
                'nullable',
            ];
        }
        return $data;
    }

    public function messages(): array
    {
        $data = [
            'services.required' => 'At least one service is required.',
            'services.*.exists' => 'Specified services do not exist.',
            'start_date.required_if' => 'A start date is required.',
            'end_date.required_if' => 'An end date is required.',
            'start_time.required_if' => 'A start time is required.',
            'end_time.required_if' => 'An end time is required.',
        ];
        if (!$this->get('is_waitlist')) {
            $data['start_date.required_if'] = 'Date is required.';
            $data['start_time.required_if'] = 'Time is required.';
        }
        return $data;
    }
}
