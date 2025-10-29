<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateProfileRequest;
use App\Models\Booking;
use App\Models\User;
use App\Traits\ApiResponse;
use App\Traits\UploadFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    use ApiResponse, UploadFile;
    public function profile(Request $request)
    {
        return ApiResponse::success("User profile", 200, [
            'user' => $request->user()
        ]);
    }

    public function updateProfile(UpdateProfileRequest $request)
    {
        DB::beginTransaction();
        try {
            $user = $request->user();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->phone = $request->phone;
            $user->about = $request->about;
            $user->categories = $request->categories;
            $user->location = $request->location;

            if ($request->hasFile('profile')) {
                $user->profile = UploadFile::uploadFile($request->file('profile'), 'profile');
            }
            $user->save();
            return ApiResponse::success("User profile updated", 200, [
                'user' => $user
            ]);
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }

    public function customers(Request $request)
    {
        if (empty($request->shop_id)) {
            return ApiResponse::error("Shop id is required", 400);
        }

        $shopId = $request->shop_id;
        $query = User::whereHas('roles', function ($q) {
            $q->where('name', 'customer');
        })
            ->whereHas('bookings', function ($q) use ($shopId) {
                $q->where('shop_id', $shopId);
            });


        $filters = $request->filters;
        // --- 3. Applying Filters ---
        // 3.1. Service Type Filters (from first image)
        // Assuming 'Hair Services', 'Color Treatments', etc. are fields/values
        // related to the bookings/services a customer has utilized.
        // This requires a many-to-many relationship (bookings have services) or a direct service column on bookings.
        // We'll use a placeholder structure for the `service_type` filter.
        if (!empty($filters['service_type'])) {
            $query->whereHas('bookings.bookingServices.service', function ($q) use ($filters) {
                $q->whereIn('name', $filters['service_type']);
            });
        }

        // 3.2. Customer Status (Active/Inactive)
        // This often relies on the last booking date. 'Inactive (6+ months)' means no booking in the last 6 months.
        if (!empty($filters['customer_status'])) {
            $query->where(function ($q) use ($filters) {
                if (in_array('active', $filters['customer_status'])) {
                    $q->orWhereHas('bookings', function ($bookingQuery) {
                        $bookingQuery->where('created_at', '>=', now()->subMonths(6));
                    });
                }
                if (in_array('inactive', $filters['customer_status'])) {
                    $q->orWhereDoesntHave('bookings', function ($bookingQuery) {
                        $bookingQuery->where('created_at', '>=', now()->subMonths(6));
                    });
                }
            });
        }

        // 3.3. Total Spending
        // This requires calculating the sum of relevant bookings for the shop.
        if (!empty($filters['total_spending'])) {
            $spendingConditions = $this->getSpendingHavingClause($filters['total_spending']);
            if (!empty($spendingConditions)) {
                $query->whereIn('id', function ($subQuery) use ($shopId, $spendingConditions) {
                    $subQuery->select('user_id')
                        ->from('bookings')
                        ->where('shop_id', $shopId)
                        ->groupBy('user_id')
                        ->havingRaw($spendingConditions);
                });
            }
        }

        // 3.4. Visit Frequency (New/Regular/Frequent/VIP)
        // This requires counting the number of bookings.
        if (!empty($filters['visit_frequency'])) {
            $query->whereIn('id', function ($subQuery) use ($shopId, $filters) {
                $subQuery->select('user_id')
                    ->from('bookings')
                    ->where('shop_id', $shopId)
                    ->groupBy('user_id')
                    ->havingRaw($this->getVisitFrequencyHavingClause($filters['visit_frequency']));
            });
        }

        // 3.5. Last Visit
        // Filters based on the `created_at` or `appointment_date` of the latest booking.
        if (!empty($filters['last_visit'])) {
            $query->whereHas('bookings', function ($q) use ($filters) {
                $q->orderByDesc('created_at')->limit(1);
                $this->applyLastVisitDateFilters($q, $filters['last_visit']);
            });
        }

        $users = $query->paginate($request->get('per_page', 10));

        if ($users->isEmpty()) {
            return ApiResponse::error("No customers found matching the filters", 400);
        }

        $users->getCollection()->transform(function ($user) {
            $user->total_visits = $user->bookings->count();
            $user->last_visit = optional($user->bookings->first())->created_at;
            $user->total_spent = $user->bookings->sum('total_amount');
            unset($user->bookings); // optional: hide raw bookings data
            return $user;
        });

        return ApiResponse::success("Customers", 200, $users);
    }

    /**
     * Helper function to generate the HAVING clause for Total Spending filter.
     */
    private function getSpendingHavingClause(array $spendingFilters): string
    {
        $conditions = [];
        foreach ($spendingFilters as $filter) {
            switch ($filter) {
                case '50':
                    $conditions[] = 'SUM(total_amount) < 50';
                    break;
                case '50-100':
                    $conditions[] = 'SUM(total_amount) >= 50 AND SUM(total_amount) <= 100';
                    break;
                case '100-200':
                    $conditions[] = 'SUM(total_amount) >= 50 AND SUM(total_amount) <= 100';
                    break;
                case '200-500':
                    $conditions[] = 'SUM(total_amount) >= 50 AND SUM(total_amount) <= 100';
                    break;
                case '500':
                    $conditions[] = 'SUM(total_amount) > 500';
                    break;
            }
        }
        return 'COUNT(user_id) > 0 AND (' . implode(' OR ', $conditions) . ')';
    }

    /**
     * Helper function to generate the HAVING clause for Visit Frequency filter.
     */
    private function getVisitFrequencyHavingClause(array $frequencyFilters): string
    {
        $conditions = [];
        foreach ($frequencyFilters as $filter) {
            switch ($filter) {
                case 'new':
                    $conditions[] = 'COUNT(id) BETWEEN 1 AND 2';
                    break;
                case 'regular':
                    $conditions[] = 'COUNT(id) BETWEEN 3 AND 10';
                    break;
                case 'frequent':
                    $conditions[] = 'COUNT(id) BETWEEN 11 AND 20';
                    break;
                case 'vip':
                    $conditions[] = 'COUNT(id) >= 20';
                    break;
            }
        }
        return 'COUNT(user_id) > 0 AND (' . implode(' OR ', $conditions) . ')';
    }

    /**
     * Helper function to apply date range filters for Last Visit.
     */
    private function applyLastVisitDateFilters($query, array $dateFilters)
    {
        $query->where(function ($q) use ($dateFilters) {
            if (in_array('today', $dateFilters)) {
                $q->orWhereDate('created_at', today());
            }
            if (in_array('this_week', $dateFilters)) {
                $q->orWhereBetween('created_at', [now()->startOfWeek(), now()->endOfWeek()]);
            }
            if (in_array('this_month', $dateFilters)) {
                $q->orWhereBetween('created_at', [now()->startOfMonth(), now()->endOfMonth()]);
            }
            if (in_array('last_3_months', $dateFilters)) {
                $q->orWhere('created_at', '>=', now()->subMonths(3));
            }
            if (in_array('more_than_6_months', $dateFilters)) {
                $q->orWhere('created_at', '<', now()->subMonths(6));
            }
        });
    }

    public function customerDetails(Request $request)
    {
        if (empty($request->shop_id)) {
            return ApiResponse::error("Shop id is required", 400);
        }
        if (empty($request->id)) {
            return ApiResponse::error("Customer id is required", 400);
        }
        $user = User::with(['bookings', 'bookings.bookingServices', 'bookings.bookingServices.bookingServiceSessions'])
            ->whereHas('bookings', function ($query) use ($request) {
                $query->where('shop_id', $request->shop_id);
            })
            ->where('id', $request->id)
            ->first();
        if (empty($user)) {
            return ApiResponse::error("Customer not found", 400);
        }
        $user->total_visits = $user?->bookings?->count();
        $user->last_visit = $user?->bookings?->last()?->created_at;
        $user->total_spent = $user?->bookings?->sum('total_amount');
        return ApiResponse::success("Customers", 200, $user);
    }
}
