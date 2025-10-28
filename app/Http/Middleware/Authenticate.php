<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Contracts\Auth\Factory as Auth;
use Illuminate\Http\Request;

class Authenticate
{
    protected $auth;

    public function __construct(Auth $auth)
    {
        $this->auth = $auth;
    }

    public function handle($request, Closure $next, ...$guards)
    {
        $this->authenticate($request, $guards);

        return $next($request);
    }

    protected function authenticate($request, array $guards)
    {
        if (empty($guards)) {
            $guards = [null];
        }

        foreach ($guards as $guard) {
            if ($this->auth->guard($guard)->check()) {
                return $this->auth->shouldUse($guard);
            }
        }

        $this->unauthenticated($request, $guards);
    }

    protected function unauthenticated($request, array $guards)
    {
        throw new AuthenticationException(
            'Unauthenticated.',
            $guards,
            $this->redirectTo($request, $guards)
        );
    }

    protected function redirectTo(Request $request,array $guards)
    {
        // 🔹 Custom redirect logic:
        if ($request->expectsJson()) {
            return null;
        }

        // Example: Redirect based on guard
        if (in_array('salon', $guards)) {
            return route('web.login');
        }

        if (in_array('web', $guards)) {
            return route('login');
        }

        // Fallback
        return route('login');
    }
}
