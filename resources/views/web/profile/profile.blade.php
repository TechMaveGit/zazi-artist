<div id="profile" class="content-section active">
    <div class="content-header">
        <div>
            <h2 class="content-title">Profile Information</h2>
            <p class="content-subtitle">View and manage your personal details</p>
        </div>
        <div class="action-buttons">
            <button class="btn-primary-custom btn-custom" onclick="openProfileModal()">
                <i class="fas fa-edit"></i>
                Edit Profile
            </button>
        </div>
    </div>

    <!-- Profile View Mode -->
    <div class="view-mode-card">
        <div class="view-mode-header">
            <h5 class="view-mode-title">Personal Information</h5>
        </div>
        <div class="view-mode-body">
            <div class="profileBox" style="">
                <div id="profileAvatarView" class="{{ empty($user?->profile_url) ? 'view-mode-avatar-placeholder' : '' }}">
                    @if ($user?->profile_url)
                        <img src="{{ $user?->profile_url }}" alt="Profile" class="view-mode-avatar">
                    @else
                        <i class="fas fa-user"></i>
                    @endif
                </div>
                <div class="view-mode-grid" style="flex: 1;">
                    <div class="view-mode-item">
                        <span class="view-mode-label">Full Name</span>
                        <span class="view-mode-value" id="profileNameView">{{ $user?->name ?? 'Not set' }}</span>
                    </div>
                    <div class="view-mode-item">
                        <span class="view-mode-label">Email</span>
                        <span class="view-mode-value" id="profileEmailView">{{ $user?->email ?? 'Not set' }}</span>
                    </div>
                    <div class="view-mode-item">
                        <span class="view-mode-label">Phone</span>
                        <span class="view-mode-value"
                            id="profilePhoneView">{{ ($user?->dial_code ?? '') . ' ' . ($user?->phone ?? '') ?? 'Not set' }}</span>
                    </div>
                </div>
            </div>
            <div class="view-mode-item">
                <span class="view-mode-label">Bio / Experience</span>
                <span class="view-mode-value" id="profileBioView">{{ $user?->about ?? 'Not set' }}</span>
            </div>

        </div>

    </div>

    <!-- Address View -->
    <div class="view-mode-card">
        <div class="view-mode-header">
            <h5 class="view-mode-title">Address Information</h5>
        </div>
        <div class="view-mode-body">
            <div class="view-mode-grid">
                <div class="view-mode-item">
                    <span class="view-mode-label">Address</span>
                    <span class="view-mode-value"
                        id="profileAddressView">{{ ($user?->address?->address_line1 ?? '') . ($user?->address?->address_line2 ? ', ' . $user?->address?->address_line2 : '') ?? 'Not set' }}</span>
                </div>
                <div class="view-mode-item">
                    <span class="view-mode-label">City</span>
                    <span class="view-mode-value" id="profileCityView">{{ $user?->address?->city ?? 'Not set' }}</span>
                </div>
                <div class="view-mode-item">
                    <span class="view-mode-label">State</span>
                    <span class="view-mode-value"
                        id="profileStateView">{{ $user?->address?->state ?? 'Not set' }}</span>
                </div>
                <div class="view-mode-item">
                    <span class="view-mode-label">Zip Code</span>
                    <span class="view-mode-value"
                        id="profileZipView">{{ $user?->address?->postal_code ?? 'Not set' }}</span>
                </div>
            </div>

        </div>

    </div>
</div>

<!-- Profile Edit Modal -->
<div class="modal fade" id="profileModal" tabindex="-1">
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Edit Profile Information</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"><iconify-icon
                        icon="iconoir:cancel"></iconify-icon></button>
            </div>
            <div class="modal-body">
                <!-- Profile Image Section -->
                <div class="form-group">
                    <label class="form-label">Profile Picture</label>
                    <div class="profile-image-section">
                        <div class="profile-image-container">
                            <div class="profile-image-placeholder" id="profileImagePreview">
                                @if ($user?->profile_url)
                                    <img src="{{ $user?->profile_url }}" alt="Profile" class="profile-image">
                                @else
                                    <i class="fas fa-user"></i>
                                @endif
                            </div>
                            <div class="image-upload-btn"
                                onclick="document.getElementById('profileImageInput').click()">
                                <i class="fas fa-camera"></i>
                            </div>
                            <input type="file" id="profileImageInput" class="hidden-file-input" accept="image/*"
                                onchange="handleProfileImageUpload(event)">
                        </div>
                        <div class="image-upload-info">
                            <h6>Upload Profile Picture</h6>
                            <p>Choose a professional photo that represents you</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="form-label">Full Name *</label>
                            <input type="text" class="form-control" id="fullName" placeholder="Enter your full name"
                                value="{{ $user?->name ?? '' }}">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="form-label">Email Address *</label>
                            <input type="email" class="form-control" disabled id="email"
                                placeholder="Enter your email" value="{{ $user?->email ?? '' }}">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="form-label">Phone Number *</label>
                            <input type="tel" class="form-control" id="phone"
                                placeholder="Enter your phone number"
                                value="{{ ($user?->dial_code ?? '') . ' ' . ($user?->phone ?? '') }}">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Bio / Experience</label>
                    <textarea class="form-control" id="bio" rows="4"
                        placeholder="Tell us about your experience and expertise...">{{ $user?->about ?? '' }}</textarea>
                </div>

                <!-- Address Information -->
                <h6 style="margin-top: 2rem; margin-bottom: 1rem; color: var(--text-primary);">Address Information</h6>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="form-label">Address Line 1 *</label>
                            <input type="text" class="form-control" id="address1" placeholder="Street address"
                                value="{{ $user?->address?->address_line1 ?? '' }}">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="form-label">Address Line 2</label>
                            <input type="text" class="form-control" id="address2"
                                placeholder="Apartment, suite, etc."
                                value="{{ $user?->address?->address_line2 ?? '' }}">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="form-label">City *</label>
                            <input type="text" class="form-control" id="city" placeholder="City"
                                value="{{ $user?->address?->city ?? '' }}">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="form-label">State *</label>
                            <input type="text" class="form-control" id="state" placeholder="State"
                                value="{{ $user?->address?->state ?? '' }}">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="form-label">Zip Code *</label>
                            <input type="text" class="form-control" id="zipCode" placeholder="Zip Code"
                                value="{{ $user?->address?->postal_code ?? '' }}">
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn-secondary-custom btn-custom"
                    data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn-primary-custom btn-custom" onclick="saveProfile()">Save
                    Profile</button>
            </div>
        </div>
    </div>
</div>

