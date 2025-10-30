<?php

namespace App\DataTables;

use App\Models\SubscriptionInvoice;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Html\Editor\Editor;
use Yajra\DataTables\Html\Editor\Fields;
use Yajra\DataTables\Services\DataTable;

class TransactionDataTable extends DataTable
{
    /**
     * Build DataTable class.
     *
     * @param mixed $query Results from query() method.
     * @return \Yajra\DataTables\DataTableAbstract
     */
    public function dataTable($query)
    {
        return datatables()
            ->eloquent($query)
            ->editColumn('grand_total', function ($invoice) {
                return '$' . number_format($invoice->grand_total, 2);
            })
            ->editColumn('status', function ($invoice) {
                $badgeClass = '';
                switch ($invoice->status) {
                    case 'paid':
                        $badgeClass = 'badge-soft-success';
                        break;
                    case 'pending':
                        $badgeClass = 'badge-soft-warning';
                        break;
                    case 'failed':
                        $badgeClass = 'badge-soft-danger';
                        break;
                    default:
                        $badgeClass = 'badge-soft-secondary';
                        break;
                }
                return '<span class="badge ' . $badgeClass . ' d-inline-flex align-items-center badge-xs">
                            <i class="ti ti-point-filled me-1"></i>' . ucfirst($invoice->status) .
                    '</span>';
            })
            ->editColumn('date', function ($invoice) {
                return $invoice->date->format('d M, Y');
            })
            ->addColumn('salon_name', function (SubscriptionInvoice $invoice) {
                return $invoice->userSubscription->user->shop->first()->name ?? 'N/A';
            })
            ->addColumn('plan_name', function (SubscriptionInvoice $invoice) {
                return $invoice->userSubscription->subscription->name ?? 'N/A';
            })
            ->addColumn('payment_method', function ($invoice) {
                return $invoice->userSubscription->payment_method ?? 'N/A';
            })
            ->addColumn('action', 'transactions.action')
            ->rawColumns(['action', 'status'])
            ->filter(function ($query) {
                if ($this->request()->has('status') && $this->request()->get('status') != '') {
                    $query->where('status', $this->request()->get('status'));
                }

                if ($this->request()->has('plan_type') && $this->request()->get('plan_type') != '') {
                    $planType = $this->request()->get('plan_type');
                    $query->whereHas('userSubscription.subscription', function ($q) use ($planType) {
                        $q->where('name', $planType);
                    });
                }

                if ($this->request()->has('date_range') && $this->request()->get('date_range') != '') {
                    $dateRange = explode(' - ', $this->request()->get('date_range'));
                    if (count($dateRange) == 2) {
                        $startDate = \Carbon\Carbon::createFromFormat('m/d/Y', $dateRange[0])->format('Y-m-d');
                        $endDate = \Carbon\Carbon::createFromFormat('m/d/Y', $dateRange[1])->format('Y-m-d');
                        $query->whereBetween('date', [$startDate, $endDate]);
                    }
                }
            });
    }

    /**
     * Get query source of dataTable.
     *
     * @param \App\Models\SubscriptionInvoice $model
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function query(SubscriptionInvoice $model)
    {
        $query = $model->newQuery()
            ->with(['userSubscription.user.shop', 'userSubscription.subscription'])
            ->select('subscription_invoices.*');

        return $query;
    }

    /**
     * Optional method if you want to use html builder.
     *
     * @return \Yajra\DataTables\Html\Builder
     */
    public function html()
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
                // Button::make('print'),
                // Button::make('reset'),
                // Button::make('reload')
            ]);
    }

    /**
     * Get columns.
     *
     * @return array
     */
    protected function getColumns()
    {
        return [
            Column::make('invoice_number')->title('Transaction ID'),
            Column::make('salon_name')->title('Salon Name')->orderable(false)->searchable(false),
            Column::make('plan_name')->title('Plan')->orderable(false)->searchable(false),
            Column::make('grand_total')->title('Amount'),
            Column::make('status')->title('Status'),
            Column::make('date')->title('Date'),
            Column::make('payment_method')->title('Payment Method'),
            Column::computed('action')
                ->exportable(false)
                ->printable(false)
                ->width(60)
                ->addClass('text-center'),
        ];
    }

    /**
     * Get filename for export.
     *
     * @return string
     */
    protected function filename(): string
    {
        return 'Transaction_' . date('YmdHis');
    }
}
