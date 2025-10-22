<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProfileRequest extends FormRequest
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
            'type' => 'required|in:customer,artist,salon',
            'name' => 'required|string|max:255',
            'email' => 'required_if:type,customer|email|unique:users,email,' . $this->user()->id,
            'dial_code' => 'required_if:type,customer|string|max:20',
            'phone' => 'required_if:type,customer|string|max:20',
            'about' => 'required|string',
            'profile' => 'nullable|file|mimes:png,jpg,jpeg',
            'categories' => 'nullable|array',
        ];
    }

    /**
     * Get custom messages for validator errors.
     *
     * @return array
     */
    public function messages(): array
    {
        return [
            'email.unique' => 'This email is already registered.',
            'location.required_unless' => 'Location is required.',
        ];
    }
}
