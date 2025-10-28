<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Mail\ForgotPassword;
use App\Mail\SendOtpMail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Twilio\Rest\Client;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;


    protected $fillable = [
        'name',
        'email',
        'password',
        'phone_code',
        'phone',
        'gender',
        'type',
        'email_verified_at',
        'about', // Added 'about' field
        'profile', // Added 'profile' field for image path
    ];

    public $appends = ['profile_url'];


    protected $hidden = [
        'password',
        'remember_token',
        'created_at',
        'updated_at',
    ];


    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'categories' => 'array',
        ];
    }

    public function shop(){
        return $this->hasMany(Shop::class);
    }

    public function bookings(){
        return $this->hasMany(Booking::class);
    }

    public function address(){
        return $this->hasOne(UserAddress::class);
    }

    public function userSubscription()
    {
        return $this->hasMany(UserSubscription::class);
    }

    public function sendOtp($type = 'mobile')
    {
        $otp = 123456; //rand(100000, 999999);

        $this->otp = $otp;
        $this->otp_expires_at = now()->addMinutes(5);
        $this->save();

        if ($type == 'mobile') {
            // $client = new Client(env('TWILIO_SID'), env('TWILIO_TOKEN'));
            // $client->messages->create(
            //     $this->phone,
            //     [
            //         'from' => env('TWILIO_FROM'),
            //         'body' => "Your OTP is: $otp"
            //     ]
            // );
        }
        else {
            Mail::to($this->email)->queue(new SendOtpMail($this, $this->otp));
        }

        return $otp;
    }

    public function sendForgetPasswordMail()
    {
        $otp = 123456; //rand(100000, 999999);
        $this->otp = $otp;
        $this->otp_expires_at = now()->addMinutes(5);
        $this->save();
        Mail::to($this->email)->queue(new ForgotPassword($this, $this->otp));
    }

    public function getProfileUrlAttribute()
    {
        return $this->profile && Storage::disk('public')->exists($this->profile) ? Storage::url($this->profile) : null;
    }

   
}
