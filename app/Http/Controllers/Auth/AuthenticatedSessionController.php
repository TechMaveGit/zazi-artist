<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the web login view.
     */
    public function webLogin(): View
    {
        return view('web.login');
    }

    /**
     * Display the login view.
     */
    public function create(): View
    {
        return view('auth.login');
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request)
    {
        $request->authenticate();

        $request->session()->regenerate();
        return redirect()->intended(route('dashboard', absolute: false));
    }


    /**
     * Handle an incoming web authentication request.
     */
    public function webLoginPost(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::guard('salon')->attempt($credentials)) {
            if (Auth::guard('salon')->user()->hasRole('admin')) {
                return back()->withErrors([
                    'email' => 'The provided credentials do not match our records.',
                ])->onlyInput('email');
            }
            $request->session()->regenerate();
            return to_route('web.profile');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();
        // $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }

    /**
     * Handle an incoming web logout request.
     */    public function webLogout(Request $request): RedirectResponse
    {
        Auth::guard('salon')->logout();
        // $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
