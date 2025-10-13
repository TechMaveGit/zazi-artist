<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateShopRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->check() && auth()->user()->hasAnyRole(['artist', 'salon']);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'shop_id' => 'nullable|exists:shops,id',
            'location' => 'required_if:shop_id,null|string|max:255',
            'lat' => 'required_if:shop_id,null|numeric|between:-90,90',
            'long' => 'required_if:shop_id,null|numeric|between:-180,180',
            'name' => 'required_if:shop_id,null|string|max:255',
            'email' => 'required_if:shop_id,null|email|unique:shops,email,' . $this->shop_id,
            'dial_code' => 'required_if:shop_id,null|string|max:20',
            'phone' => 'required_if:shop_id,null|string|max:20',
            'address' => 'required_if:shop_id,null|string|max:500',
            'country' => 'required_if:shop_id,null|string|max:100',
            'state' => 'required_if:shop_id,null|string|max:100',
            'city' => 'required_if:shop_id,null|string|max:100',
            'zipcode' => 'required_if:shop_id,null|string|max:10',
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
            'lat.required_if' => 'Latitude is required.',
            'long.required_if' => 'Longitude is required.',
            'name.required_if' => 'Shop name is required.',
            'dial_code.required_if' => 'Shop dial code is required.',
            'phone.required_if' => 'Shop phone is required.',
            'email.required_if' => 'Shop email is required.',
            'address.required_if' => 'Shop address is required.',
            'country.required_if' => 'Country is required.',
            'state.required_if' => 'State is required.',
            'city.required_if' => 'City is required.',
            'zipcode.required_if' => 'Pincode is required.',
        ];
    }
}
