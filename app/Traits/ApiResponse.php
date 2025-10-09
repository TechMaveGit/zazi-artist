<?php

namespace App\Traits;

trait ApiResponse
{
    /**
     * Return a success response without data
     *
     * @param string $message
     * @param int $statusCode
     * @return \Illuminate\Http\JsonResponse
     */
    public static function success(string $message = 'Success', int $statusCode = 200, $data = [])
    {
        return response()->json([
            'status' => 'success',
            'message' => $message,
            'data' => $data,
        ], $statusCode);
    }


    /**
     * Return a failed response
     *
     * @param string $message
     * @param int $statusCode
     * @param mixed $errors
     * @return \Illuminate\Http\JsonResponse
     */
    public static function error(string $message = 'Error', int $statusCode = 400, $errors = null)
    {
        $response = [
            'status' => 'fail',
            'message' => $message,
        ];

        if ($errors) {
            $response['errors'] = $errors;
        }

        return response()->json($response, $statusCode);
    }

    /**
     * Return a not found response
     *
     * @param string $message
     * @return \Illuminate\Http\JsonResponse
     */
    public static function notFound(string $message = 'Resource not found')
    {
        return response()->json([
            'status' => 'fail',
            'message' => $message,
        ], 404);
    }

    /**
     * Return an unauthorized response
     *
     * @param string $message
     * @return \Illuminate\Http\JsonResponse
     */
    public static function unauthorized(string $message = 'Unauthorized')
    {
        return response()->json([
            'status' => 'fail',
            'message' => $message,
        ], 401);
    }
}
