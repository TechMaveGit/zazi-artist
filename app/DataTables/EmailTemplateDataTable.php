<?php

namespace App\DataTables;

use App\Models\EmailTemplate;
use Illuminate\Database\Eloquent\Builder as QueryBuilder;
use Yajra\DataTables\EloquentDataTable;
use Yajra\DataTables\Html\Builder as HtmlBuilder;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Html\Editor\Editor;
use Yajra\DataTables\Html\Editor\Fields;
use Yajra\DataTables\Services\DataTable;

class EmailTemplateDataTable extends DataTable
{
    /**
     * Build the DataTable class.
     *
     * @param QueryBuilder<EmailTemplate> $query Results from query() method.
     */
    public function dataTable(QueryBuilder $query): EloquentDataTable
    {
        return (new EloquentDataTable($query))
            ->addIndexColumn()
            ->editColumn('created_at', function ($row) {
                return $row->created_at ? $row->created_at->format('d M Y') : '';
            })
            ->editColumn('type', function ($row) {
                $badgeClass = badgeColor($row->type);
                return '<span class="badge ' . $badgeClass . '">' . ucfirst($row->type) . '</span>';
            }   )
            ->editColumn('status', function ($row) {
                $row->status= $row->status ? 'Active' : 'Inactive';
                $badgeClass = badgeColor($row->status);
                return '<span class="badge ' . $badgeClass . '">' . ucfirst($row->status) . '</span>';
            }   )
            ->addColumn('action', function ($row) {
                $editUrl = route('email-management.edit', $row->id);
                $deleteUrl = route('email-management.destroy', $row->id);
                $action = '<div class="d-flex align-items-center ActionDropdown">
                                    <div class="d-flex">
                                        <a class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                            href="' . $editUrl . '">
                                            <span class="icon"><span class="feather-icon">
                                                    <iconify-icon icon="fluent:edit-20-regular"></iconify-icon>
                                                </span></span>
                                        </a>
                                        <button
                                            class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button"
                                          data-id="' . $row->id . '" data-table="email_templates">
                                            <span class="icon"><span class="feather-icon">
                                                    <iconify-icon icon="fluent:delete-16-regular"></iconify-icon>
                                                </span></span>
                                        </button>

                                    </div>
                                </div>';
                return $action;
            })
            ->filter(function ($query) {
                if (request()->has('status') && request('status') !== '') {
                    $status = request('status');
                    $query->where('status', $status);
                }
                if (request()->has('template_type') && request('template_type') !== '') {
                    $type = request('template_type');
                    $query->where('type', $type);
                }
            })
            ->setRowId('id')
            ->rawColumns(['action','type','status']);
    }

    /**
     * Get the query source of dataTable.
     *
     * @return QueryBuilder<EmailTemplate>
     */
    public function query(EmailTemplate $model): QueryBuilder
    {
        return $model->newQuery();
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
                // Button::make('print'),
                // Button::make('reset'),
                // Button::make('reload')
            ]);
    }

    /**
     * Get the dataTable columns definition.
     */
    public function getColumns(): array
    {
        return [
            Column::make('name')->title('Template Name'),
            Column::make('type'),
            Column::make('status'),
            Column::make('created_at')->title('Created On'),
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
        return 'EmailTemplate_' . date('YmdHis');
    }
}
