<?php

namespace App\Observers;

use App\Models\User;
use App\Notifications\WelcomeUserNotification;
use App\Traits\UploadFile;

class UserObserver
{
    use UploadFile;
    /**
     * Handle the User "created" event.
     */
    public function created(User $user): void
    {   
        $password= request()->password??123456;
        $user->notify(new WelcomeUserNotification($user, $password));
    }

    /**
     * Handle the User "updated" event.
     */
    public function updated(User $user): void
    {

    }

    /**
     * Handle the User "deleted" event.
     */
    public function deleted(User $user): void
    {
        //
    }

    /**
     * Handle the User "restored" event.
     */
    public function restored(User $user): void
    {
        //
    }

    /**
     * Handle the User "force deleted" event.
     */
    public function forceDeleted(User $user): void
    {
        //
    }
}
