<x-app-layout :title="__('Edit Plan')">
    @push('custom_css')
        <style>
            /* Additional styles for preview features */
            .preview-feature {
                display: flex;
                align-items: center;
                margin-bottom: 8px;
                font-size: 14px;
                color: #666;
            }

            .preview-feature .feature-check {
                color: #28a745;
                font-size: 16px;
            }

            .preview-feature-placeholder {
                color: #999;
                font-style: italic;
                font-size: 14px;
                text-align: center;
                padding: 20px 0;
            }

            .badge-success {
                background-color: #28a745;
                color: white;
            }

            .badge-secondary {
                background-color: #6c757d;
                color: white;
            }


            .preview-name {
                font-size: 24px;
                font-weight: 700;
                color: #333;
                margin-bottom: 10px;
            }

            .preview-price-value {
                font-size: 30px;
                font-weight: 800;
                color: #667eea;
            }
        </style>
    @endpush
    <div class="page-wrapper">
        <div class="content">
            <form id="editPlanForm" action="{{ route('subscription.update', $subscription->id) }}" method="POST" class="global-ajax-form">
                @csrf
                @method('PUT')
                <div
                    class="d-md-flex pagetop_headercmntb d-block align-items-center justify-content-between page-breadcrumb ">
                    <div class="pageheaderleft">
                        <a href="{{ route('subscription.index') }}" class="btn btn-ghost btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" data-lucide="arrow-left" class="lucide lucide-arrow-left">
                                <path d="m12 19-7-7 7-7"></path>
                                <path d="M19 12H5"></path>
                            </svg>
                        </a>
                        <div class="my-auto ">
                            <h2 class="mb-1">Edit Plan</h2>
                            <p class="page-subtitle">Modify the subscription plan for your salons</p>
                        </div>
                    </div>

                    <div class="d-flex my-xl-auto right-content align-items-center flex-wrap ">

                        <div class="">
                            <button type="submit" form="editPlanForm"
                                class="btn btn-primary d-flex align-items-center cmnaddbtn">
                                <iconify-icon icon="fluent:save-32-regular"></iconify-icon> Save Changes
                            </button>
                        </div>
                        <div class="head-icons ms-2 headicon_innerpage">
                            <a href="javascript:void(0);" class="" data-bs-toggle="tooltip"
                                data-bs-placement="top" data-bs-original-title="Collapse" id="collapse-header">
                                <i class="ti ti-chevrons-up"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="createplanwrapper">
                    <div class="row">
                        <!-- Main Form -->
                        <div class="col-lg-8">
                            <!-- Basic Information -->
                            <div class="card glass-card mb-4">
                                <div class="card-header">
                                    <h6 class="card-title">
                                        <iconify-icon icon="clarity:dollar-line"></iconify-icon>
                                        Basic Information
                                    </h6>
                                </div>
                                <div class="card-body">

                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Plan Name</label>
                                            <input type="text" class="form-control" id="planName" name="name"
                                                placeholder="e.g., Professional Plan"
                                                value="{{ old('name', $subscription->name) }}">
                                            @error('name')
                                                <div class="text-danger">{{ $message }}</div>
                                            @enderror
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Price</label>
                                            <input type="number" class="form-control" id="planPrice" name="price"
                                                placeholder="99.99" step="0.01"
                                                value="{{ old('price', $subscription->price) }}">
                                            @error('price')
                                                <div class="text-danger">{{ $message }}</div>
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label">Description</label>
                                        <textarea class="form-control" id="planDescription" name="description" rows="3"
                                            placeholder="Describe what this plan offers...">{{ old('description', $subscription->description) }}</textarea>
                                        @error('description')
                                            <div class="text-danger">{{ $message }}</div>
                                        @enderror
                                    </div>
                                </div>
                            </div>

                            <!-- Configuration -->
                            <div class="card glass-card mb-4">
                                <div class="card-header">
                                    <h6 class="card-title">
                                        <iconify-icon icon="quill:clock"></iconify-icon>
                                        Configuration
                                    </h6>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-4 mb-3">
                                            <label class="form-label">Billing Duration</label>

                                            <div class="custom-default-select">
                                                <div class="select-trigger form-control"
                                                    data-value="{{ old('billing_period', $subscription->billing_period) }}">
                                                    <span
                                                        class="selected-text">{{ ucfirst(old('billing_period', $subscription->billing_period)) }}</span>
                                                    <span class="select-arrow">
                                                        <iconify-icon
                                                            icon="iconamoon:arrow-down-2-light"></iconify-icon>
                                                    </span>
                                                </div>
                                                <div class="options">
                                                    <span data-value="monthly">Monthly</span>
                                                    <span data-value="quarterly">Quarterly</span>
                                                    <span data-value="yearly">Yearly</span>
                                                </div>
                                                <input type="hidden" name="billing_period" id="billingPeriodHidden"
                                                    value="{{ old('billing_period', $subscription->billing_period) }}">
                                            </div>
                                            @error('billing_period')
                                                <div class="text-danger">{{ $message }}</div>
                                            @enderror
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <label class="form-label">Max Branches</label>
                                            <input type="number" class="form-control" id="maxSalons"
                                                name="max_branches" placeholder="5"
                                                value="{{ old('max_branches', $subscription->max_branches) }}">
                                            @error('max_branches')
                                                <div class="text-danger">{{ $message }}</div>
                                            @enderror
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <label class="form-label">Max Artists Per Branch</label>
                                            <input type="number" class="form-control" id="maxArtists"
                                                name="max_artists_per_branch" placeholder="10"
                                                value="{{ old('max_artists_per_branch', $subscription->max_artists_per_branch) }}">
                                            @error('max_artists_per_branch')
                                                <div class="text-danger">{{ $message }}</div>
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="setting-item">
                                        <div class="setting-info">
                                            <label class="setting-label">Mark as Popular</label>
                                            <p class="setting-description">Highlight this plan with a popular badge</p>
                                        </div>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="isPopular"
                                                name="is_popular"
                                                {{ old('is_popular', $subscription->is_popular) ? 'checked' : '' }}>
                                        </div>
                                    </div>

                                    <div class="setting-item">
                                        <div class="setting-info">
                                            <label class="setting-label">Active Plan</label>
                                            <p class="setting-description">Available for new subscriptions</p>
                                        </div>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="isActive"
                                                name="is_active" value="1"
                                                {{ old('is_active', $subscription->is_active) ? 'checked' : '' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Features -->
                            <div class="card glass-card">
                                <div class="card-header">
                                    <h6 class="card-title">
                                        <iconify-icon icon="iconoir:star"></iconify-icon>
                                        Plan Features
                                    </h6>
                                </div>
                                <div class="card-body">
                                    <div class="row" id="featuresGrid">
                                        @php
                                            $thisPlanFeatures = $subscription->features ?? [];
                                            $allFeatures = $features?->pluck('name')->toArray();
                                        @endphp
                                        @foreach ($allFeatures as $feature)
                                            <div class="col-md-6 mb-3">
                                                <div class="feature-checkbox">
                                                    <input type="checkbox" id="feature{{ Str::slug($feature) }}"
                                                        class="feature-input" name="features[]"
                                                        value="{{ $feature }}"
                                                        {{ in_array($feature, old('features', $thisPlanFeatures)) ? 'checked' : '' }}>
                                                    <label for="feature{{ Str::slug($feature) }}"
                                                        class="feature-label">{{ $feature }}</label>
                                                </div>
                                            </div>
                                        @endforeach
                                        @error('features')
                                            <div class="text-danger">{{ $message }}</div>
                                        @enderror
                                        @error('features.*')
                                            <div class="text-danger">{{ $message }}</div>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Preview -->
                        <div class="col-lg-4">
                            <div class="card glass-card mb-4">
                                <div class="card-header">
                                    <h6 class="card-title">Preview</h6>
                                </div>
                                <div class="card-body">
                                    <div class="plan-preview" id="planPreview">
                                        <div class="preview-header">
                                            <span class="preview-badge" id="previewBadge"
                                                style="display: {{ old('is_popular', $subscription->is_popular) ? 'inline-block' : 'none' }};">Popular</span>
                                            <h6 class="preview-name" id="previewName">
                                                {{ old('name', $subscription->name) ?: 'Plan Name' }}</h6>
                                            <div class="preview-price">
                                                <span class="preview-price-value"
                                                    id="previewPrice">${{ old('price', number_format($subscription->price, 2)) ?: '0.00' }}</span>
                                                <span class="preview-period"
                                                    id="previewPeriod">/{{ old('billing_period', $subscription->billing_period) ?: 'monthly' }}</span>
                                            </div>
                                            <p class="preview-description" id="previewDescription">
                                                {{ old('description', $subscription->description) ?: 'Plan description will appear here...' }}
                                            </p>
                                        </div>
                                        <div class="preview-features" id="previewFeatures">
                                            <!-- Features will be populated by JavaScript -->
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card glass-card">
                                <div class="card-body">
                                    <div class="preview-details">
                                        <div class="detail-item">
                                            <span class="detail-label">Max Salons:</span>
                                            <span class="detail-value"
                                                id="previewMaxSalons">{{ old('max_branches', $subscription->max_branches) ?: '—' }}</span>
                                        </div>
                                        <div class="detail-item">
                                            <span class="detail-label">Max Artists:</span>
                                            <span class="detail-value"
                                                id="previewMaxArtists">{{ old('max_artists_per_branch', $subscription->max_artists_per_branch) ?: '—' }}</span>
                                        </div>
                                        <div class="detail-item">
                                            <span class="detail-label">Status:</span>
                                            <span
                                                class="badge {{ old('is_active', $subscription->is_active) ? 'badge-success' : 'badge-secondary' }}"
                                                id="previewStatus">{{ old('is_active', $subscription->is_active) ? 'Active' : 'Inactive' }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    @push('scripts')
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                // Get all form elements
                const planNameInput = document.getElementById('planName');
                const planPriceInput = document.getElementById('planPrice');
                const planDescriptionInput = document.getElementById('planDescription');
                const maxSalonsInput = document.getElementById('maxSalons');
                const maxArtistsInput = document.getElementById('maxArtists');
                const isPopularCheckbox = document.getElementById('isPopular');
                const isActiveCheckbox = document.getElementById('isActive');
                const billingDurationSelect = document.querySelector('.custom-default-select');
                const billingPeriodHidden = document.getElementById('billingPeriodHidden');
                const featureCheckboxes = document.querySelectorAll('.feature-input');

                // Get all preview elements
                const previewName = document.getElementById('previewName');
                const previewPrice = document.getElementById('previewPrice');
                const previewPeriod = document.getElementById('previewPeriod');
                const previewDescription = document.getElementById('previewDescription');
                const previewBadge = document.getElementById('previewBadge');
                const previewFeatures = document.getElementById('previewFeatures');
                const previewMaxSalons = document.getElementById('previewMaxSalons');
                const previewMaxArtists = document.getElementById('previewMaxArtists');
                const previewStatus = document.getElementById('previewStatus');

                // Update plan name
                function updatePlanName() {
                    const name = planNameInput.value.trim();
                    previewName.textContent = name || 'Plan Name';
                }

                // Update plan price
                function updatePlanPrice() {
                    const price = planPriceInput.value.trim();
                    if (price && !isNaN(price)) {
                        previewPrice.textContent = '$' + parseFloat(price).toFixed(2);
                    } else {
                        previewPrice.textContent = '$0.00';
                    }
                }

                // Update plan description
                function updatePlanDescription() {
                    const description = planDescriptionInput.value.trim();
                    previewDescription.textContent = description || 'Plan description will appear here...';
                }

                // Update billing period
                function updateBillingPeriod() {
                    const selectTrigger = billingDurationSelect.querySelector('.select-trigger');
                    const selectedValue = selectTrigger.getAttribute('data-value') || 'monthly';
                    let periodText = '/monthly';

                    switch (selectedValue) {
                        case 'quarterly':
                            periodText = '/quarterly';
                            break;
                        case 'yearly':
                            periodText = '/yearly';
                            break;
                        default:
                            periodText = '/monthly';
                    }

                    previewPeriod.textContent = periodText;
                    billingPeriodHidden.value = selectedValue; // Update hidden input
                }

                // Update max salons
                function updateMaxSalons() {
                    const maxSalons = maxSalonsInput.value.trim();
                    previewMaxSalons.textContent = maxSalons || '—';
                }

                // Update max artists
                function updateMaxArtists() {
                    const maxArtists = maxArtistsInput.value.trim();
                    previewMaxArtists.textContent = maxArtists || '—';
                }

                // Update popular badge
                function updatePopularBadge() {
                    if (isPopularCheckbox.checked) {
                        previewBadge.style.display = 'inline-block';
                    } else {
                        previewBadge.style.display = 'none';
                    }
                }

                // Update status
                function updateStatus() {
                    if (isActiveCheckbox.checked) {
                        previewStatus.textContent = 'Active';
                        previewStatus.className = 'badge badge-success';
                    } else {
                        previewStatus.textContent = 'Inactive';
                        previewStatus.className = 'badge badge-secondary';
                    }
                }

                // Update features
                function updateFeatures() {
                    previewFeatures.innerHTML = '';

                    featureCheckboxes.forEach(checkbox => {
                        if (checkbox.checked) {
                            const featureLabel = checkbox.nextElementSibling.textContent;
                            const featureElement = document.createElement('div');
                            featureElement.className = 'preview-feature';
                            featureElement.innerHTML = `
                    <iconify-icon icon="prime:check-circle" class="feature-check"></iconify-icon>
                    <span>${featureLabel}</span>
                `;
                            previewFeatures.appendChild(featureElement);
                        }
                    });

                    // If no features selected, show placeholder
                    if (previewFeatures.children.length === 0) {
                        previewFeatures.innerHTML =
                            '<div class="preview-feature-placeholder">Select features to display here</div>';
                    }
                }

                // Add event listeners
                planNameInput.addEventListener('input', updatePlanName);
                planPriceInput.addEventListener('input', updatePlanPrice);
                planDescriptionInput.addEventListener('input', updatePlanDescription);
                maxSalonsInput.addEventListener('input', updateMaxSalons);
                maxArtistsInput.addEventListener('input', updateMaxArtists);
                isPopularCheckbox.addEventListener('change', updatePopularBadge);
                isActiveCheckbox.addEventListener('change', updateStatus);

                // Add event listener for custom select dropdown - listen for clicks on options
                if (billingDurationSelect) {
                    const options = billingDurationSelect.querySelectorAll('.options span');
                    options.forEach(option => {
                        option.addEventListener('click', function() {
                            const selectedTextSpan = billingDurationSelect.querySelector(
                                '.selected-text');
                            selectedTextSpan.textContent = this.textContent;
                            billingDurationSelect.querySelector('.select-trigger').setAttribute(
                                'data-value', this.dataset.value);
                            updateBillingPeriod();
                        });
                    });
                }

                // Add event listeners for feature checkboxes
                featureCheckboxes.forEach(checkbox => {
                    checkbox.addEventListener('change', updateFeatures);
                });

                // Initialize preview with default values
                updatePlanName();
                updatePlanPrice();
                updatePlanDescription();
                updateBillingPeriod();
                updateMaxSalons();
                updateMaxArtists();
                updatePopularBadge();
                updateStatus();
                updateFeatures();

                // Additional event listener to catch any changes in the custom select
                // This is a backup to ensure billing period updates work
                const observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        if (mutation.type === 'attributes' && mutation.attributeName === 'data-value') {
                            updateBillingPeriod();
                        }
                    });
                });

                // Observe changes to the select trigger's data-value attribute
                const selectTrigger = billingDurationSelect?.querySelector('.select-trigger');
                if (selectTrigger) {
                    observer.observe(selectTrigger, {
                        attributes: true,
                        attributeFilter: ['data-value']
                    });
                }
            });
        </script>
    @endpush

</x-app-layout>
