<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CommonController extends Controller
{
    public function deleteRecord(Request $request)
    {
        $table = $request->input('table');
        $id = $request->input('id');

        if (!$table || !$id) {
            return response()->json(['status' => 'error', 'message' => 'Invalid parameters.'], 400);
        }

        try {
            DB::table($table)->where('id', $id)->delete();
            return response()->json(['status' => 'success', 'message' => 'Record deleted successfully.']);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => 'Failed to delete record. ' . $e->getMessage()], 500);
        }
    }
}
