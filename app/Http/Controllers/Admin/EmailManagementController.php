<?php

namespace App\Http\Controllers\Admin;

use App\DataTables\EmailTemplateDataTable;
use App\Http\Controllers\Controller;
use App\Models\EmailTemplate;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Email;

class EmailManagementController extends Controller
{
    use ApiResponse;
    public function index(EmailTemplateDataTable $dataTable)
    {   $templates= EmailTemplate::get();
        return $dataTable->render('email-management.index',compact('templates'));
    }

    public function create()
    {
        return view('email-management.create');
    }

    public function store(Request $request)
    {   
        $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|in:welcome,notification,promotion',
            'subject' => 'required|string|max:255',
            'content' => 'required|string',
            'status' => 'nullable|boolean',
        ]);
        try {
            EmailTemplate::create([
                'name' => $request->name,
                'type' => $request->type,
                'subject' => $request->subject,
                'content' => $request->content,
                'status' => $request->status,
            ]);
            return ApiResponse::success('Email template created successfully.', 200, ['redirect' => route('email-management.index')]);
        } catch (\Exception $e) {
            return ApiResponse::error('Failed to create email template. ' . $e->getMessage(), 500);
        }
    }

    public function edit($id)
    {       
        $template = EmailTemplate::findOrFail($id);
        return view('email-management.edit', compact('template'));
    }

    public function update(Request $request, $id)
    {   
        $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|in:welcome,notification,promotion',
            'subject' => 'required|string|max:255',
            'content' => 'required|string',
            'status' => 'nullable|boolean',
        ]);
        try {
            EmailTemplate::updateOrCreate(['id'=>$id],[
                'name' => $request->name,
                'type' => $request->type,
                'subject' => $request->subject,
                'content' => $request->content,
                'status' => $request->status,
            ]);
            return ApiResponse::success('Email template updated successfully.', 200, ['redirect' => route('email-management.index')]);
        } catch (\Exception $e) {
            return ApiResponse::error('Failed to update email template. ' . $e->getMessage(), 500);
        }
    }
}
