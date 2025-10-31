 <div id="artists" class="content-section">
     <div class="content-header">
         <div>
             <h2 class="content-title">Our Artists</h2>
             <p class="content-subtitle">Manage your team of pharmaceutical tattoo artists</p>
         </div>
         <div class="action-buttons">
             <button class="btn-primary-custom btn-custom" onclick="openArtistModal()">
                 <i class="fas fa-plus"></i>
                 Add Artist
             </button>
         </div>
     </div>

     <div class="modern-artist-grid" id="modernArtistGrid">

         @forelse($artists as $artist)
             <div class="modern-artist-card" data-artist-id="{{ $artist->id ?? '' }}">
                 <div class="modern-artist-actions">
                     <button class="modern-action-btn edit" onclick="editArtist({{ $artist->id ?? '' }})"
                         title="Edit Artist">
                         <iconify-icon icon="cuida:edit-outline"></iconify-icon>
                     </button>
                     <button class="modern-action-btn delete" onclick="deleteArtist({{ $artist->id ?? '' }})"
                         title="Delete Artist">
                         <iconify-icon icon="material-symbols:delete-outline-rounded"></iconify-icon>
                     </button>
                 </div>
                 <div class="modern-artist-header">
                     @if ($artist->profile ?? '')
                         <img src="{{ asset($artist->profile ?? '') }}" alt="{{ $artist->name }}"
                             class="modern-artist-avatar">
                     @else
                         <div class="modern-artist-avatar-placeholder"><i class="fas fa-user"></i></div>
                     @endif
                     <div class="modern-artist-info">
                         <h3>{{ $artist->name ?? '' }}</h3>
                         <div class="modern-artist-experience">{{ $artist->experience ?? '' }} years experience</div>
                     </div>
                 </div>
                 <div class="modern-artist-details">
                     <div class="modern-artist-detail">
                         <span class="modern-artist-label">Email</span>
                         <span class="modern-artist-value">{{ $artist->email ?? '' }}</span>
                     </div>
                     <div class="modern-artist-detail">
                         <span class="modern-artist-label">Phone</span>
                         <span class="modern-artist-value">{{ $artist->phone ?? '' }}</span>
                     </div>
                     <div class="modern-artist-detail">
                         <span class="modern-artist-label">Bio</span>
                         <span class="modern-artist-value">{{ $artist->about ?? '' }}</span>
                     </div>
                     <div class="modern-artist-detail">
                         <span class="modern-artist-label">Services Offered</span>
                         <span class="modern-artist-value">
                             @foreach ($artist->categories() as $eachCat)
                                 <span class="badge bg-dark">{{ $eachCat->name ?? '' }}</span>
                             @endforeach
                         </span>
                     </div>
                     <div class="modern-artist-detail">
                         <span class="modern-artist-label">Working Location's and Days</span>
                         <div class="card">
                             @forelse($artist->staffSchedules as $location)
                                 <div class="list-group-item small d-flex justify-content-between">
                                     <span>{{ ucfirst($location?->shopLocation?->name) ?? '' }}</span>
                                     <span>
                                         @foreach ($location->working_days as $workingDay)
                                             <span class="badge bg-info">{{ ucfirst($workingDay ?? '') }}</span>
                                         @endforeach
                                     </span>
                                 </div>
                             @empty
                             @endforelse
                         </div>
                     </div>
                 </div>
             </div>
         @empty
             <div class="form-card">
                 <p class="text-center" style="color: var(--text-muted);">No artists added yet. Click "Add Artist" to
                     add your first team member.</p>
             </div>
         @endforelse
     </div>
 </div>

 <!-- Artist Modal -->
 <div class="modal fade" id="artistModal" tabindex="-1">
     <form action="{{ route('web.staff.store') }}" method="POST" class="global-ajax-form"
         enctype="multipart/form-data">
         @csrf
         <input type="hidden" name="_method" value="POST" id="artistFormMethod">
         <input type="hidden" name="artist_id" id="artistId">
         <div class="modal-dialog modal-lg modal-dialog-scrollable">
             <div class="modal-content">
                 <div class="modal-header">
                     <h5 class="modal-title" id="artistModalTitle">Add Artist</h5>
                     <button type="button" class="btn-close" data-bs-dismiss="modal"><iconify-icon
                             icon="iconoir:cancel"></iconify-icon></button>
                 </div>
                 <div class="modal-body">
                     <!-- Artist Image Upload -->
                     <div class="form-group">
                         <label class="form-label">Artist Photo</label>
                         <div class="profile-image-section">
                             <div class="profile-image-container">
                                 <div class="profile-image-placeholder" id="artistImagePreview">
                                     <i class="fas fa-user"></i>
                                 </div>
                                 <div class="image-upload-btn"
                                     onclick="document.getElementById('artistImageInput').click()">
                                     <i class="fas fa-camera"></i>
                                 </div>
                                 <input type="file" id="artistImageInput" class="hidden-file-input" accept="image/*"
                                     name="profile_image" onchange="handleArtistImageUpload(event)">
                             </div>
                             <div class="image-upload-info">
                                 <h6>Upload Artist Photo</h6>
                                 <p>Choose a professional photo of the artist</p>
                             </div>
                         </div>
                         <div class="form-check mt-2 d-none" id="removeProfileImageContainer">
                             <input class="form-check-input" type="checkbox" value="1"
                                 id="removeProfileImageCheckbox" name="remove_profile_image">
                             <label class="form-check-label" for="removeProfileImageCheckbox">
                                 Remove current photo
                             </label>
                         </div>
                     </div>

                     <div class="row">
                         <div class="col-md-6">
                             <div class="form-group">
                                 <label class="form-label">Services Category *</label>
                                 <select class="select2" multiple id="artistCategory" name="categories[]"
                                     placeholder="Select category">
                                     @foreach ($serviceCategorys as $category)
                                         <option value="{{ $category->id }}">{{ $category->name }}</option>
                                     @endforeach
                                 </select>
                             </div>
                         </div>
                         <div class="col-md-6">
                             <div class="form-group">
                                 <label class="form-label">Artist Name *</label>
                                 <input type="text" class="form-control" id="artistName"
                                     placeholder="Enter artist name" name="name">
                             </div>
                         </div>
                         <div class="col-md-6">
                             <div class="form-group">
                                 <label class="form-label">Email *</label>
                                 <input type="email" class="form-control" id="artistEmail"
                                     placeholder="Enter artist email" name="email">
                             </div>
                         </div>
                         <div class="col-md-6">
                             <div class="form-group">
                                 <label class="form-label">Phone *</label>
                                 <input type="tel" class="form-control" id="artistPhone"
                                     placeholder="Enter phone number" name="phone">
                             </div>
                         </div>
                     </div>
                     <div class="form-group">
                         <label class="form-label">Bio</label>
                         <textarea class="form-control" id="artistBio" name="about" rows="3" placeholder="Artist biography..."></textarea>
                     </div>
                     <!-- New Section: Working Locations and Days -->
                     <div class="form-group">
                         <label class="form-label">Working Locations and Days *</label>
                         <small class="form-text text-muted">Assign locations to the staff member and select the days
                             they work at each.
                             Add multiple entries for staff working across locations.</small>
                         <div id="workingScheduleContainer">
                             <!-- loaded by addScheduleRow() -->
                         </div>
                         @if ($shopLocations->count() > 1)
                             <button type="button" class="btn btn-outline-secondary btn-sm mt-2"
                                 onclick="addScheduleRow()">
                                 <i class="fas fa-plus"></i> Add Another Location Schedule
                             </button>
                         @endif
                     </div>
                 </div>
                 <div class="modal-footer">
                     <button type="button" class="btn-secondary-custom btn-custom"
                         data-bs-dismiss="modal">Cancel</button>
                     <button type="submit" class="btn-primary-custom btn-custom">Save
                         Artist</button>
                 </div>
             </div>
         </div>
     </form>
 </div>
