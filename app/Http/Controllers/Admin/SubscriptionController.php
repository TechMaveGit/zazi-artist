<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    public function index(Request $request)
    {
        return view('subscriptions.index');
    }

    public function create(Request $request)
    {
        return view('subscriptions.create');
    }

    public function edit(Request $request)
    {
        return view('subscriptions.edit');
    }
}
