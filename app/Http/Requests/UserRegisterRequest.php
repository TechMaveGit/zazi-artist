<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRegisterRequest extends FormRequest
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
            'name' => 'required',
            'email' => 'required|unique:users,email',
            'phone_code' => 'required',
            'phone' => 'required|min_digits:10|max_digits:10',
            'password' => 'required|min:6',
            'confirm_password' => 'required|same:password',
            'gender' => 'required|in:male,female',
        ];
    }

    public function messages()
    {
        return [
            'phone.min_digits' => 'Phone number must be 10 digits',
            'phone.max_digits' => 'Phone number must be 10 digits',
        ];
    }
}
