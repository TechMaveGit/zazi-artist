<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class SuperAdminMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {   
        // If user not logged in
        if (!Auth::guard('web')->check()) {
            return redirect()->route('super-admin.login')->with('error', 'Please log in as Super Admin.');
        }

        // If user logged in but not a Super Admin
        if (!Auth::user()->hasRole('admin')) {
            Auth::guard('web')->logout();
            return redirect()->route('login')->with('error', 'Unauthorized access.');
        }

        return $next($request);
    }
}
