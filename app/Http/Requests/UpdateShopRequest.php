<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class UpdateShopRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::check() && Auth::user()->hasAnyRole(['artist', 'salon']);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {   
        return [
            'location' => 'sometimes|string|max:255',
            'lat' => 'nullable|numeric|between:-90,90',
            'long' => 'nullable|numeric|between:-180,180',
            'name' => 'sometimes|string|max:255',
            'email' => 'nullable|email|unique:shops,email,' . $this->id,
            'dial_code' => 'nullable|string|max:20',
            'phone' => 'nullable|string|max:20',
            'address' => 'nullable|string|max:500',
            'country' => 'nullable|string|max:100',
            'state' => 'nullable|string|max:100',
            'city' => 'nullable|string|max:100',
            'zipcode' => 'nullable|string|max:10',
            'description' => 'nullable|string',
            'availability' => 'nullable|array',
            'availability.*' => 'nullable',
            'banner_img' => 'nullable|array',
            'banner_img.*' => 'nullable|file|mimes:png,jpg,jpeg',
            'gallery_images' => 'nullable|array',
            'gallery_images.*' => 'nullable|file|mimes:png,jpg,jpeg',
        ];
    }

    public function messages()
    {
        return [
            'shop_id.required' => 'Shop ID is required for update.',
            'shop_id.exists' => 'Shop not found.',
        ];
    }
}
