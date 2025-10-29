<?php

namespace App\DataTables;

use App\Models\Shop;
use Illuminate\Database\Eloquent\Builder as QueryBuilder;
use Yajra\DataTables\EloquentDataTable;
use Yajra\DataTables\Html\Builder as HtmlBuilder;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Services\DataTable;
use Illuminate\Support\Facades\DB;

class SalonDataTable extends DataTable
{
    /**
     * Build the DataTable class.
     *
     * @param QueryBuilder<Shop> $query Results from query() method.
     */
    public function dataTable(QueryBuilder $query): EloquentDataTable
    {
        return (new EloquentDataTable($query))
            ->addIndexColumn()
            ->addColumn('salon_id', function ($row) {
                return '<a href="' . route('salon.show', $row->id) . '" class="tbuserid">#SAL' . str_pad($row->id, 3, '0', STR_PAD_LEFT) . '</a>';
            })
            ->addColumn('salon_owner', function ($row) {
                $ownerName = $row->owner_name ?? 'N/A';
                $profileUrl = !empty($row->profile) ? asset('storage/' . $row->profile) : asset('assets/img/users/userdummy.png'); 
                return '<a href="' . route('salon.show', $row->id) . '">
                            <div class="tbUserWrap">
                                <div class="media-head me-2">
                                    <div class="avatar avatar-xs avatar-rounded">
                                        <img src="' . $profileUrl . '" alt="' . $row->name . '" class="avatar-img">
                                    </div>
                                </div>
                                <div class="media-body">
                                    <span class="d-block text-high-em">' . $row->name . '</span>
                                    <span class="d-block text-muted">' . $ownerName . '</span>
                                </div>
                            </div>
                        </a>';
            })
            ->addColumn('type', function ($row) {
                return $row->type ?? 'Salon'; 
            })
            ->addColumn('email', function ($row) {
                return $row->shop_email;
            })
            ->addColumn('phone', function ($row) {
                return '+' . ($row->dial_code ?? '') . ' ' . ($row->shop_phone ?? ''); 
            })
            ->addColumn('location', function ($row) {
                $locationParts = array_filter([$row->city, $row->state, $row->country]);
                return ucwords(implode(', ', $locationParts));
            })
            ->addColumn('total_artists', function ($row) {
                return 1; 
            })
            ->addColumn('plan', function ($row) {
                return $row->plan_name ?? 'N/A';
            })
            ->addColumn('revenue', function ($row) {
                return '$' . number_format($row->total_revenue ?? 0, 2);
            })
            ->editColumn('status', function ($row) {
                $statusText = ucfirst($row->status);
                $badgeClass = badgeColor($statusText);
                return '<span class="badge ' . $badgeClass . ' d-inline-flex align-items-center badge-xs">
                            <i class="ti ti-point-filled me-1"></i>' . ucfirst($statusText) . '
                        </span>';
            })
            ->editColumn('created_at', function ($row) {
                return $row->created_at ? $row->created_at->diffForHumans() : ''; 
            })
            ->addColumn('action', function ($row) {
                $showUrl = route('salon.show', $row->id);
                $action = '<div class="d-flex align-items-center ActionDropdown">
                                    <div class="d-flex">
                                        <a class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                            data-bs-toggle="tooltip" data-placement="top" title=""
                                            data-bs-original-title="Salon Details" href="' . $showUrl . '">
                                            <span class="icon"><span class="feather-icon">
                                                    <iconify-icon icon="hugeicons:view"></iconify-icon>
                                                </span></span>
                                        </a>
                                    </div>
                                </div>';
                return $action;
            })
            ->filter(function ($query) {
                if (request()->has('status') && request('status') != '') {
                    $status = request('status');
                    $query->where('shops.status', $status);
                }
                if (request()->has('plan_type') && request('plan_type') != '') {
                    $planType = request('plan_type');
                    $query->where('subscriptions.name', 'like', "%{$planType}%");
                }
                if (request()->has('location') && request('location') != '') {
                    $location = request('location');
                    $query->where(function ($q) use ($location) {
                        $q->where('shops.city', 'like', "%{$location}%")
                            ->orWhere('shops.state', 'like', "%{$location}%")
                            ->orWhere('shops.country', 'like', "%{$location}%");
                    });
                }
                if (request()->has('search') && request('search')['value'] != '') {
                    $search = request('search')['value'];
                    $query->where(function ($q) use ($search) {
                        $q->where('shops.name', 'like', "%{$search}%")
                            ->orWhere('owner.name', 'like', "%{$search}%")
                            ->orWhere('shops.email', 'like', "%{$search}%")
                            ->orWhere('shops.phone', 'like', "%{$search}%")
                            ->orWhere('shops.address', 'like', "%{$search}%")
                            ->orWhere('shops.city', 'like', "%{$search}%")
                            ->orWhere('shops.state', 'like', "%{$search}%")
                            ->orWhere('shops.country', 'like', "%{$search}%");
                    });
                }
            })
            ->setRowId('id')
            ->rawColumns(['salon_id', 'salon_owner', 'status', 'action']);
    }

    /**
     * Get the query source of dataTable.
     *
     * @return QueryBuilder<Shop>
     */
    public function query(Shop $model): QueryBuilder
    {
        return $model->newQuery()
            ->leftJoin('users as owner', 'shops.user_id', '=', 'owner.id')
            ->leftJoin('user_subscriptions', 'owner.id', '=', 'user_subscriptions.user_id')
            ->leftJoin('subscriptions', 'user_subscriptions.subscription_id', '=', 'subscriptions.id')
            ->leftJoin('bookings', 'shops.id', '=', 'bookings.shop_id')
            ->select(
                'shops.id',
                'shops.name',
                'shops.email as shop_email', 
                'shops.dial_code',
                'shops.phone as shop_phone', 
                'shops.address',
                'shops.lat',
                'shops.lng',
                'shops.country',
                'shops.state',
                'shops.city',
                'shops.zipcode',
                'shops.description',
                'shops.banner_img',
                'shops.created_at',
                'shops.updated_at',
                'shops.status', 
                'owner.name as owner_name',
                'owner.email as owner_email',
                'owner.phone_code',
                'owner.phone',
                'owner.profile',
                'subscriptions.name as plan_name',
                DB::raw('SUM(bookings.total_amount) as total_revenue')
            )
            ->groupBy(
                'shops.id',
                'shops.name',
                'shop_email',
                'shops.dial_code',
                'shop_phone',
                'shops.address',
                'shops.lat',
                'shops.lng',
                'shops.country',
                'shops.state',
                'shops.city',
                'shops.zipcode',
                'shops.description',
                'shops.banner_img',
                'shops.created_at',
                'shops.updated_at',
                'shops.status',
                'owner.name',
                'owner.email',
                'owner.profile',
                'owner.phone_code',
                'owner.phone',
                'plan_name'
            );
    }

    /**
     * Optional method if you want to use the html builder.
     */
    public function html(): HtmlBuilder
    {
        return $this->builder()
            ->setTableId('global-datatable')
            ->addTableClass('table common-datatable nowrap w-100')
            ->columns($this->getColumns())
            ->pagingType('simple_numbers')
            ->lengthMenu([[10, 25, 50, 100, -1], [10, 25, 50, 100, 'All']])
            ->minifiedAjax()
            ->orderBy(1, 'asc')
            ->language([
                'search' => '',
                'searchPlaceholder' => 'Search here...',
                'info' => '_START_ - _END_ of _TOTAL_',
                'sLengthMenu' => 'View  _MENU_',
                'paginate' => [
                    'next' => '<i class="ri-arrow-right-s-line"></i>',
                    'previous' => '<i class="ri-arrow-left-s-line"></i>'
                ]
            ])
            ->parameters([
                'dom' => '<"row"<"col-7 mb-3 contact-toolbar-left0"><"col-5 mb-3 contact-toolbar-right"flip>>' .
                    '<"row"<"col-sm-12"tr>>' .
                    '<"row"<"col-sm-12 col-md-5"i><"col-sm-12 col-md-7"p>>',
                'initComplete' => 'function(settings, json) {
                    const tableInstance = this.api();
                    setupCustomUI(tableInstance, 0);
                }',
                'drawCallback' => <<<JS
            function(settings) {
                $('#joborder-table_wrapper .pagination')
                    .addClass('custom-pagination pagination-simple justify-content-end');
            }
        JS,
            ])
            ->buttons([
                Button::make('excel'),
                Button::make('csv'),
                Button::make('pdf'),
            ]);
    }

    /**
     * Get the dataTable columns definition.
     */
    public function getColumns(): array
    {
        return [
            Column::make('salon_id')->title('Salon ID'),
            Column::make('salon_owner')->title('Salon / Owner'),
            Column::make('type')->title('Type'),
            Column::make('email')->title('Email'),
            Column::make('phone')->title('Phone'),
            Column::make('location')->title('Location'),
            Column::make('total_artists')->title('Total Artists'),
            Column::make('plan')->title('Plan'),
            Column::make('revenue')->title('Revenue'),
            Column::make('status')->title('Status'),
            Column::make('created_at')->title('Joined'),
            Column::computed('action')
                ->exportable(false)
                ->printable(false)
                ->width(60)
                ->addClass('text-center'),
        ];
    }

    /**
     * Get the filename for export.
     */
    protected function filename(): string
    {
        return 'Salon_' . date('YmdHis');
    }
}
