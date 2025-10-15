<?php

namespace App\Services;

use Google\Client as Google_Client;
use Google\Service\Calendar;
use Illuminate\Http\Request;

class GoogleCalendarService
{
    protected $client;


    public function __construct()
    {
        $this->client = new Google_Client();
        $this->client->setClientId(config('services.google.client_id'));
        $this->client->setClientSecret(config('services.google.client_secret'));
    }

    public function getAuthUrl()
    {
        $this->client->setRedirectUri(config('services.google.redirect'));
        $this->client->addScope(Calendar::CALENDAR);
        $this->client->setAccessType('offline');
        $this->client->setPrompt('consent');

        return $this->client->createAuthUrl();
    }

    public function handleGoogleCallback(Request $request)
    {
        $this->client->setRedirectUri(config('services.google.redirect'));
        $token = $this->client->fetchAccessTokenWithAuthCode($request->code);
        config('services.google.access_token', $token['access_token']);
        config('services.google.refresh_token', $token['refresh_token']);
        return $token;
    }

    public function createEvent($customerEmail = 'customer@example.com')
    {
        $accessToken = config('services.google.access_token');
        $refreshToken = config('services.google.refresh_token');
        $this->client->setAccessToken($accessToken);

        if ($this->client->isAccessTokenExpired() && $refreshToken) {
            $this->client->fetchAccessTokenWithRefreshToken($refreshToken);
            config('services.google.access_token', $this->client->getAccessToken());
        }

        $service = new Calendar($this->client);

        $start = date('c', strtotime('+1 hour'));
        $end   = date('c', strtotime('+2 hour'));

        $event = new \Google\Service\Calendar\Event([
            'summary' => 'Salon Appointment',
            'description' => 'Your appointment with Salon',
            'start' => ['dateTime' => $start, 'timeZone' => 'Asia/Kolkata'],
            'end'   => ['dateTime' => $end, 'timeZone' => 'Asia/Kolkata'],
            'attendees' => [['email' => $customerEmail]],
            'sendUpdates' => 'all',
        ]);

        $createdEvent = $service->events->insert('primary', $event);
        return $createdEvent;
    }

    public function createEventServiceAccount($customerEmail = 'customer@example.com')
    {
        $this->client->setAuthConfig(storage_path('app/google-calendar/service-account-credentials.json'));
        $this->client->addScope(Calendar::CALENDAR);

        $service = new Calendar($this->client);

        $start = date('c', strtotime('+1 hour'));
        $end   = date('c', strtotime('+2 hour'));

        $event = new \Google\Service\Calendar\Event([
            'summary' => 'Service Account Appointment',
            'description' => 'Event created via Service Account',
            'start' => ['dateTime' => $start, 'timeZone' => 'Asia/Kolkata'],
            'end'   => ['dateTime' => $end, 'timeZone' => 'Asia/Kolkata'],
            'attendees' => [['email' => $customerEmail]], 
        ]);

        $createdEvent = $service->events->insert('primary', $event);

        return $createdEvent;
    }
}
