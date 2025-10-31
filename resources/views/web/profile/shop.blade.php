 <div id="shop" class="content-section">
     <div class="content-header">
         <div>
             <h2 class="content-title">Shop Information</h2>
             <p class="content-subtitle">View and manage your shop details</p>
         </div>
         <div class="d-flex">
             <div class="action-buttons mr-2">
                 <button class="btn-primary-custom btn-custom" onclick="openShopModal()">
                     <i class="fas fa-edit"></i>
                     Edit Shop Info
                 </button>
             </div>
             <div class="action-buttons">
                 <button class="btn-primary-custom btn-custom" onclick="openLocationModal()">
                     <i class="fas fa-plus"></i>
                     Add Location
                 </button>
             </div>
         </div>
     </div>

     <!-- Shop Banner View -->
     <div class="view-mode-card">
         <div class="view-mode-header">
             <h5 class="view-mode-title">Shop Banner</h5>
         </div>
         <div id="shopBannerView"
             style="width: 100%; height: 200px; background: var(--background-color); border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; color: var(--text-muted);">
             @if ($shop?->banner_img_url)
                 <img src="{{ $shop?->banner_img_url }}" alt="Shop Banner"
                     style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius-lg);">
             @else
                 No banner uploaded
             @endif
         </div>
     </div>

     <!-- Shop Details View -->
     <div class="view-mode-card">
         <div class="view-mode-header">
             <h5 class="view-mode-title">Shop Details</h5>
         </div>
         <div class="view-mode-body">
             <div class="view-mode-grid">
                 <div class="view-mode-item">
                     <span class="view-mode-label">Shop Name</span>
                     <span class="view-mode-value" id="shopNameView">{{ $shop?->name ?? 'Not set' }}</span>
                 </div>
                 <div class="view-mode-item">
                     <span class="view-mode-label">Email</span>
                     <span class="view-mode-value" id="shopEmailView">{{ $shop?->email ?? 'Not set' }}</span>
                 </div>
                 <div class="view-mode-item">
                     <span class="view-mode-label">Phone</span>
                     <span class="view-mode-value" id="shopPhoneView">{{ $shop?->phone ?? 'Not set' }}</span>
                 </div>

             </div>
             <div class="view-mode-item mt-3">
                 <span class="view-mode-label">Description</span>
                 <span class="view-mode-value" id="shopDescriptionView">{{ $shop?->description ?? 'Not set' }}</span>
             </div>

         </div>

     </div>

     <div>
         <div class="modern-artist-grid" id="modernLocationGrid">
             @forelse($shopLocations as $location)
                 <div class="modern-artist-card">
                     <div class="modern-artist-actions">
                         <button class="modern-action-btn edit" onclick="editLocation({{ $location->id }})"
                             title="Edit Location">
                             <iconify-icon icon="cuida:edit-outline"></iconify-icon>
                         </button>
                         <button class="modern-action-btn delete" onclick="deleteLocation({{ $location->id }})"
                             title="Delete Location">
                             <iconify-icon icon="material-symbols:delete-outline-rounded"></iconify-icon>
                         </button>
                     </div>
                     <div class="modern-artist-header">
                         <div class="modern-artist-avatar-placeholder"><i class="fas fa-map-marker-alt"></i></div>
                         <div class="modern-artist-info">
                             <h3>{{ $location->name }}</h3>
                             <div class="modern-artist-experience">
                                 <span
                                     class="badge badge-soft-{{ $location->status === 'active' ? 'success' : 'danger' }}">{{ ucfirst($location->status) }}</span>
                             </div>
                         </div>
                     </div>
                     <div class="modern-artist-details">
                         <div class="modern-artist-detail">
                             <span class="modern-artist-label">Address</span>
                             <span class="modern-artist-value">{{ $location->address }}, {{ $location->city }}</span>
                         </div>
                         <div class="modern-artist-detail">
                             <span class="modern-artist-label">Phone</span>
                             <span class="modern-artist-value">{{ $location->phone }}</span>
                         </div>
                         <div class="modern-artist-detail">
                             <span class="modern-artist-label">Schedule</span>
                             <div class="modern-artist-value location-schedule-view">
                                 @if ($location->schedules && $location->schedules->count() > 0)
                                     @foreach ($location->schedules as $schedule)
                                         <div class="schedule-item-view">
                                             <span>{{ ucfirst($schedule->day) }}</span>
                                             @if (!$schedule->is_closed)
                                                 <span>{{ substr($schedule->opening_time, 0, 5) }} -
                                                     {{ substr($schedule->closing_time, 0, 5) }}</span>
                                             @else
                                                 <span>Closed</span>
                                             @endif
                                         </div>
                                     @endforeach
                                 @else
                                     <p class="text-muted">No schedule set</p>
                                 @endif
                             </div>
                         </div>
                     </div>
                 </div>
             @empty
                 <div class="form-card">
                     <p class="text-center" style="color: var(--text-muted); grid-column: 1 / -1;">No locations added
                         yet. Click "Add Location" to add your first shop location.</p>
                 </div>
             @endforelse
         </div>
     </div>
 </div>

 <!-- Shop Edit Modal -->
 <div class="modal fade" id="shopModal" tabindex="-1">
     <div class="modal-dialog modal-lg modal-dialog-scrollable">
         <div class="modal-content">
             <form action="{{ route('web.shop.update', $shop->id) }}" method="POST" class="global-ajax-form">
                 @csrf
                 @method('PUT')
                 <div class="modal-header">
                     <h5 class="modal-title">Edit Shop Information</h5>
                     <button type="button" class="btn-close" data-bs-dismiss="modal"><iconify-icon
                             icon="iconoir:cancel"></iconify-icon></button>
                 </div>
                 <div class="modal-body">
                     <!-- Shop Banner Upload -->
                     <div class="form-group">
                         <label class="form-label">Shop Banner</label>
                         <div class="shop-banner-section">
                             <div class="shop-banner-preview" id="shopBannerPreview"
                                 onclick="document.getElementById('shopBannerInput').click()">
                                 @if ($shop?->banner)
                                     <img src="{{ $shop?->banner_img }}" alt="Shop Banner">
                                 @else
                                     <div class="shop-banner-placeholder">
                                         <i class="fas fa-image"></i>
                                         <h6>Upload Shop Banner</h6>
                                         <p>Click to upload banner image (Recommended: 1200x400px)</p>
                                     </div>
                                 @endif
                             </div>
                             <input type="file" id="shopBannerInput" name="banner_img" class="hidden-file-input"
                                 accept="image/*" onchange="handleShopBannerUpload(event)">
                         </div>
                     </div>

                     <div class="row">
                         <div class="col-md-4">
                             <div class="form-group">
                                 <label class="form-label">Shop Name *</label>
                                 <input type="text" class="form-control" id="shopName"
                                     placeholder="Enter shop name" name="name" value="{{ $shop?->name ?? '' }}">
                             </div>
                         </div>
                         <div class="col-md-4">
                             <div class="form-group">
                                 <label class="form-label">Shop Email *</label>
                                 <input type="email" class="form-control" id="shopEmail"
                                     placeholder="Enter shop email" name="email" readonly
                                     value="{{ $shop?->email ?? '' }}">
                             </div>
                         </div>
                         <div class="col-md-4">
                             <div class="form-group">
                                 <label class="form-label">Shop Phone *</label>
                                 <input type="tel" class="form-control" id="shopPhone"
                                     placeholder="Enter shop phone number" name="phone"
                                     value="{{ $shop?->phone ?? '' }}">
                             </div>
                         </div>
                     </div>

                     <div class="form-group">
                         <label class="form-label">Shop Description</label>
                         <textarea class="form-control" id="shopDescription" name="description" rows="3"
                             placeholder="Describe your shop and services...">{{ $shop?->description ?? '' }}</textarea>
                     </div>
                 </div>
                 <div class="modal-footer">
                     <button type="button" class="btn-secondary-custom btn-custom"
                         data-bs-dismiss="modal">Cancel</button>
                     <button type="submit" class="btn-primary-custom btn-custom">Save Shop
                         Info</button>
                 </div>
             </form>
         </div>
     </div>
 </div>

 <!-- Shop Location Modal -->
 <div class="modal fade" id="locationModal" tabindex="-1">
     <form action="{{ route('web.shop_locations.store') }}" method="POST" class="global-ajax-form">
         @csrf
         <div class="modal-dialog modal-lg modal-dialog-scrollable">
             <div class="modal-content">
                 <div class="modal-header">
                     <h5 class="modal-title" id="locationModalTitle">Add Shop Location</h5>
                     <button type="button" class="btn-close" data-bs-dismiss="modal"><iconify-icon
                             icon="iconoir:cancel"></iconify-icon></button>
                 </div>
                 <div class="modal-body">
                     <div class="row">
                         <div class="col-md-6">
                             <div class="form-group">
                                 <label class="form-label">Location Name *</label>
                                 <input type="text" class="form-control" id="locationName"
                                     placeholder="Enter location name" name="name">
                             </div>
                         </div>
                         <div class="col-md-6">
                             <div class="form-group">
                                 <label class="form-label">Phone Number *</label>
                                 <input type="tel" class="form-control" id="locationPhone"
                                     placeholder="Enter phone number" name="phone">
                             </div>
                         </div>
                     </div>

                     <div class="form-group">
                         <label class="form-label">Address *</label>
                         <textarea class="form-control" id="locationAddress" name="address" rows="3" placeholder="Enter complete location address"></textarea>
                     </div>
                     <div class="row">
                         <div class="col-md-6">
                             <div class="form-group">
                                 <label class="form-label">City *</label>
                                 <input type="text" class="form-control" id="locationCity"
                                     placeholder="Enter city" name="city">
                             </div>
                         </div>
                         <div class="col-md-6">
                             <div class="form-group">
                                 <label class="form-label">Status *</label>
                                 <select class="form-control" id="locationStatus" name="status">
                                     <option value="active">Active</option>
                                     <option value="inactive">Inactive</option>
                                 </select>
                             </div>
                         </div>
                     </div>
                     <div class="row">
                         <div class="col-md-6">
                             <div class="form-group">
                                 <label class="form-label">Latitude</label>
                                 <input type="text" class="form-control" name="lat" id="locationLat"
                                     placeholder="Enter latitude">
                             </div>
                         </div>
                         <div class="col-md-6">
                             <div class="form-group">
                                 <label class="form-label">Longitude</label>
                                 <input type="text" class="form-control" name="lng" id="locationLng"
                                     placeholder="Enter longitude">
                             </div>
                         </div>
                     </div>

                     <h6 style="margin-top: 2rem; margin-bottom: 1rem; color: var(--text-primary);">Availability
                         Schedule
                     </h6>
                     <div class="schedule-container">
                         <div id="locationScheduleList">
                             <!-- Schedule items will be added here -->
                         </div>
                         <button type="button" class="btn-schedule btn-add-schedule"
                             onclick="addLocationScheduleItem()">
                             <i class="fas fa-plus"></i> Add Schedule
                         </button>
                     </div>
                 </div>
                 <div class="modal-footer">
                     <button type="button" class="btn-secondary-custom btn-custom"
                         data-bs-dismiss="modal">Cancel</button>
                     <button type="submit" class="btn-primary-custom btn-custom">Save
                         Location</button>
                 </div>
             </div>
         </div>
     </form>
 </div>
