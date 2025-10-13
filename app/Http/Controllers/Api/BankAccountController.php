<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BankAccount;
use App\Models\User;
use App\Traits\ApiResponse;
use App\Http\Requests\CreateBankAccountRequest;
use App\Http\Requests\UpdateBankAccountRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class BankAccountController extends Controller
{
    use ApiResponse;

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $bankAccounts = BankAccount::where('user_id', Auth::id())->get();
            return $this->success('Bank accounts retrieved successfully.', 200, $bankAccounts);
        } catch (\Exception $e) {
            Log::error('Error retrieving bank accounts: ' . $e->getMessage());
            return $this->error('Failed to retrieve bank accounts.', 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateBankAccountRequest $request)
    {
        try {
            $validatedData = $request->validated();
            $validatedData['user_id'] = Auth::id();

            if (isset($validatedData['is_default']) && $validatedData['is_default']) {
                BankAccount::where('user_id', Auth::id())->update(['is_default' => false]);
            }

            $bankAccount = BankAccount::create($validatedData);

            return $this->success('Bank account created successfully.', 201, $bankAccount);
        } catch (\Exception $e) {
            Log::error('Error creating bank account: ' . $e->getMessage());
            return $this->error('Failed to create bank account.', 500, $e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $bankAccount = BankAccount::with('user')->where('user_id', Auth::id())->findOrFail($id);

            return $this->success('Bank account retrieved successfully.', 200, $bankAccount);
        } catch (\Exception $e) {
            Log::error('Error retrieving bank account: ' . $e->getMessage());
            return $this->error('Failed to retrieve bank account.', 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBankAccountRequest $request, string $id)
    {
        try {
            $bankAccount = BankAccount::where('user_id', Auth::id())->findOrFail($id);

            $validatedData = $request->validated();

            if (isset($validatedData['is_default']) && $validatedData['is_default']) {
                BankAccount::where('user_id', Auth::id())->update(['is_default' => false]);
            }

            $bankAccount->update($validatedData);

            return $this->success('Bank account updated successfully.', 200, $bankAccount);
        } catch (\Exception $e) {
            Log::error('Error updating bank account: ' . $e->getMessage());
            return $this->error('Failed to update bank account.', 500, $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $bankAccount = BankAccount::where('user_id', Auth::id())->findOrFail($id);

            $bankAccount->delete();

            return $this->success('Bank account deleted successfully.', 200);
        } catch (\Exception $e) {
            Log::error('Error deleting bank account: ' . $e->getMessage());
            return $this->error('Failed to delete bank account.', 500);
        }
    }
}
