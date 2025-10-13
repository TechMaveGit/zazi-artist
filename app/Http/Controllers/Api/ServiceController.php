<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateShopServiceRequest;
use App\Http\Requests\UpdateShopServiceRequest;
use App\Models\Category;
use App\Models\ShopService;
use App\Traits\ApiResponse;
use App\Traits\UploadFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class ServiceController extends Controller
{
    use ApiResponse, UploadFile;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $shopId = $request->input('shop_id');
            if (!$shopId) {
                return $this->error('Shop ID is required.', 400);
            }
            $query = ShopService::withCount('serviceSessions')->where('shop_id', $shopId);
            $services = $query->paginate(10);

            return $this->success('Shop services retrieved successfully.', 200, $services);
        } catch (\Exception $e) {
            Log::error('Error retrieving shop services: ' . $e->getMessage());
            return $this->error('Failed to retrieve shop services.', 500);
        }
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateShopServiceRequest $request)
    {
        DB::beginTransaction();
        try {
            $validatedData = $request->validated();

            if ($request->hasFile('cover_img')) {
                $validatedData['cover_img'] = $this->uploadFile($request->file('cover_img'), 'shop_services');
            }

            $service = ShopService::create([
                'shop_id' => $validatedData['shop_id'],
                'category_id' => $validatedData['category_id'],
                'name' => $validatedData['name'],
                'description' => $validatedData['description'],
                'service_duration' => $validatedData['service_duration'],
                'service_price' => $validatedData['service_price'],
                'booking_price' => $validatedData['booking_price'],
                'cover_img' => $validatedData['cover_img'],
            ]);
            if ($request->has('sessions')) {
                $service->serviceSessions()->createMany($request->input('sessions'));
            }

            DB::commit();
            $service->load('serviceSessions');
            return $this->success('Shop service created successfully.', 200, $service);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error creating shop service: ' . $e->getMessage());
            return self::error('Failed to create shop service.', 500, $e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $service = ShopService::with(['serviceSessions', 'category'])->findOrFail($id);

            if (!$service) {
                return $this->error('Shop service not found.', 404);
            }

            return $this->success('Shop service retrieved successfully.', 200, $service);
        } catch (\Exception $e) {
            Log::error('Error retrieving shop service: ' . $e->getMessage());
            return $this->error('Failed to retrieve shop service.', 500);
        }
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateShopServiceRequest $request, string $id)
    {
        DB::beginTransaction();
        try {
            $service = ShopService::find($id);

            if (!$service) {
                return $this->error('Shop service not found.', 404);
            }

            $validatedData = $request->validated();

            if ($request->hasFile('cover_img')) {
                // Delete old image if exists
                if ($service->cover_img) {
                    $this->deleteFile($service->cover_img);
                }
                $validatedData['cover_img'] = $this->uploadFile($request->file('cover_img'), 'shop_services');
            }

            if ($request->has('sessions')) {
                $service->serviceSessions()->delete();
                $service->serviceSessions()->createMany($request->input('sessions'));
            }

            DB::commit();
            $service->load('serviceSessions');
            return $this->success('Shop service updated successfully.', 200, $service);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error updating shop service: ' . $e->getMessage());
            return $this->error('Failed to update shop service.', 500, $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $service = ShopService::find($id);

            if (!$service) {
                return $this->error('Shop service not found.', 404);
            }

            // Delete cover image if exists
            if ($service->cover_img) {
                $this->deleteFile($service->cover_img);
            }

            $service->delete();

            return $this->success('Shop service deleted successfully.', 200);
        } catch (\Exception $e) {
            Log::error('Error deleting shop service: ' . $e->getMessage());
            return $this->error('Failed to delete shop service.', 500);
        }
    }

    /**
     * Update the status of the specified resource in storage.
     */
    public function updateStatus(Request $request, string $id)
    {
        try {
            $service = ShopService::find($id);
            if (!$service) {
                return $this->error('Shop service not found.', 404);
            }
            $status = $service->status == 'publish' ? 'draft' : 'publish';
            $service->update(['status'  => $status]);

            $message = $service->status == 'publish' ? 'published' : 'drafted';
            return $this->success('Shop service ' . $message . ' successfully.', 200, $service);
        } catch (\Exception $e) {
            Log::error('Error updating shop service status: ' . $e->getMessage());
            return $this->error('Failed to update shop service status.', 500);
        }
    }

    /**
     * All Service categories.
     */
    public function allCategories()
    {
        try {
            $categories = Category::all();
            return $this->success('Categories retrieved successfully.', 200, $categories);
        } catch (\Exception $e) {
            Log::error('Error retrieving categories: ' . $e->getMessage());
            return $this->error('Failed to retrieve categories.', 500);
        }
    }
}
