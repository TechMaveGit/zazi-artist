<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BookingServiceSession;
use App\Traits\ApiResponse;
use App\Traits\UploadFile;
use Illuminate\Http\Request;

class SessionController extends Controller
{
    use ApiResponse,UploadFile;
    public function start(Request $request)
    {
        $request->validate([
            'before_img' => 'required|array',
            'before_img.*' => 'required|image|mimes:jpg,png,jpeg,svg|max:2048',
            'consent_notes' => 'nullable|string',
        ]);
        try {
            $session= BookingServiceSession::find($request->id);
            if(!$session){
                return ApiResponse::error("Session not found", 404);
            }
            if($request->hasFile('before_img')){
                $before_imgages = [];
                foreach ($request->file('before_img') as $each) {
                    $before_imgages[] = UploadFile::uploadFile($each, 'booking_sessions');
                }
                $session->before_img = $before_imgages;
            }
            $session->start_date = now()->format('Y-m-d');
            $session->start_time = now()->format('H:i:s');
            $session->consent_notes=$request->consent_notes;
            $session->save();
            return ApiResponse::success("Session started successfully", 200, $session);
        } catch (\Throwable $th) {
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }
    public function end(Request $request)
    {
        $request->validate([
            'after_img' => 'required|array',
            'after_img.*' => 'required|image|mimes:jpg,png,jpeg,svg|max:2048',
            'healed_img' => 'nullable|array',
            'healed_img.*' => 'nullable|image|mimes:jpg,png,jpeg,svg|max:2048',
            'treatment_details' => 'nullable|string',
            'skin_type' => 'nullable|string',
            'equipment_used' => 'nullable|string',
            'session_notes' => 'nullable|string',
        ]);
        try {
            $session= BookingServiceSession::find($request->id);
            if(!$session){
                return ApiResponse::error("Session not found", 404);
            }
            if($request->hasFile('after_img')){
                $after_imgages = [];
                foreach ($request->file('after_img') as $each) {
                    $after_imgages[] = UploadFile::uploadFile($each, 'booking_sessions');
                }
                $session->after_img = $after_imgages;
            }
            if($request->hasFile('healed_img')){
                $healed_imgages = [];
                foreach ($request->file('healed_img') as $each) {
                    $healed_imgages[] = UploadFile::uploadFile($each, 'booking_sessions');
                }
                $session->healed_img = $healed_imgages;
            }
            $session->end_date = now()->format('Y-m-d');
            $session->end_time = now()->format('H:i:s');
            $session->treatment_details=$request->treatment_details;
            $session->skin_type=$request->skin_type;
            $session->equipment_used=$request->equipment_used;
            $session->session_notes=$request->session_notes;
            $session->save();            

            return ApiResponse::success("Session ended successfully", 200, $session);
        } catch (\Throwable $th) {
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }
}
