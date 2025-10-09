<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EmailManagementController extends Controller
{
    public function index()
    {
        return view('email-management.index');
    }

    public function edit()
    {
        return view('email-management.edit');
    }
}
