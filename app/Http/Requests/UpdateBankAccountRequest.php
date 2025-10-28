<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class UpdateBankAccountRequest extends FormRequest
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
        return [
            'account_holder_name' => 'sometimes|string|max:255',
            'bank_name' => 'sometimes|string|max:255',
            'account_number' => 'sometimes|string|max:255',
            'branch' => 'sometimes|string|max:255',
            'ifsc_code' => 'sometimes|string|max:255',
            'is_default' => 'sometimes|boolean',
        ];
    }
}
