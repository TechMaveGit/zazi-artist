<?php

use App\Http\Middleware\ForceJsonForApi;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Client\Request as ClientRequest;
use Illuminate\Http\Request;
use Spatie\Permission\Exceptions\UnauthorizedException;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        api: __DIR__ . '/../routes/api.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->api(ForceJsonForApi::class);
        $middleware->statefulApi();
        $middleware->alias([
            'role' => \Spatie\Permission\Middleware\RoleMiddleware::class,
            'permission' => \Spatie\Permission\Middleware\PermissionMiddleware::class,
            'role_or_permission' => \Spatie\Permission\Middleware\RoleOrPermissionMiddleware::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        $exceptions->renderable(function (AuthenticationException $e, $request) {
            if ($request->is('api/*')) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Unauthenticated',
                    'data' => null,
                ], 401);
            }
        });
        $exceptions->renderable(function (UnauthorizedException $e, $request) {
            if ($request->is('api/*')) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Access denied! You are not allowed to perform this action.',
                    'data' => null,
                ], 403);
            }
        });
    })->create();
