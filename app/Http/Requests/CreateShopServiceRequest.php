<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class CreateShopServiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::check() && (Auth::user()->hasRole('salon') || Auth::user()->hasRole('artist'));
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'shop_id' => ['required', 'exists:shops,id'],
            'category_id' => ['required', 'exists:categories,id'],
            'name' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'service_duration' => ['required', 'numeric', 'min:0.1'],
            'service_price' => ['required', 'numeric', 'min:0'],
            'booking_price' => ['nullable', 'numeric', 'min:0'],
            'cover_img' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'],
            'sessions' => ['nullable', 'array'],
            'sessions.*.session_no' => ['required', 'numeric', 'min:0'],
            'sessions.*.type' => ['required', 'string', 'in:days,weeks'],
            'sessions.*.gap_duration' => ['required', 'integer', 'min:0'],
            'status' => ['nullable', 'in:publish,draft'],
        ];
    }
}
