<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSubscriptionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true; // Allow all users to make this request for now, can be refined later with proper authorization
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'description' => 'nullable|string',
            'type' => 'required|in:individual,multiple',
            'billing_period' => 'required|in:monthly,quarterly,yearly',
            'max_location' => 'required|integer|min:1',
            'max_artists' => 'required|integer|min:1',
            'is_popular' => 'boolean',
            'is_active' => 'boolean',
        ];
    }
}
