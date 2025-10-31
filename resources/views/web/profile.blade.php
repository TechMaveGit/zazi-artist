@include('web.layouts.header')
<!-- Add Select2 CSS -->
<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
<!-- Data Table CSS -->
<link rel="stylesheet" href="{{ asset('web_assets/datatables/datatables.net-bs5/css/dataTables.bootstrap5.min.css') }}" />
<link rel="stylesheet"
    href="{{ asset('web_assets/datatables/datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css') }}" />
<link rel="stylesheet" href="{{ asset('web_assets/customplugins/buttons.dataTables.min.css') }}">
<link rel="stylesheet" href="{{ asset('web_assets/css/aos.css') }}">
<link rel="stylesheet" href="{{ asset('web_assets/css/modernstyle.css') }}">

<style>
    header {
        background: #000;
    }
</style>
<div class="main-container">
    <!-- Sidebar -->
    <div class="sidebar">
        <div class="sidebar-menu">
            <button class="menu-item active" data-section="profile">
                <i class="fas fa-user"></i>
                Profile Information
            </button>
            <button class="menu-item" data-section="shop">
                <i class="fas fa-store"></i>
                Shop Information
            </button>
            <button class="menu-item" data-section="gallery">
                <i class="fas fa-images"></i>
                Work Gallery
            </button>
            <button class="menu-item" data-section="artists">
                <i class="fas fa-users"></i>
                Our Artists
            </button>
            <button class="menu-item" data-section="subscriptions">
                <i class="fas fa-crown  premium"></i>
                Subscription
            </button>
            <button class="menu-item" data-section="transaction">
                <i class="fas fa-credit-card"></i>
                Transaction
            </button>
            <form action="{{ route('web.logout') }}" method="POST" id="logoutForm"><input type="hidden" name="_token"
                    value="{{ csrf_token() }}">
                <button class="menu-item">
                    <i class="fas fa-credit-card"></i>
                    Logout
                </button>
            </form>
        </div>
    </div>
    <!-- Main Content -->
    <div class="main-content">
        <!-- Profile Information Section -->
        @include('web.profile.profile')
        <!-- Shop Information Section -->
        @include('web.profile.shop')
        <!-- Work Gallery Section -->
        @include('web.profile.work-gallery')
        <!-- Artists Section -->
        @include('web.profile.artist')
        <!-- subscription Section -->
        @include('web.profile.subscription')
        <!-- Transaction Section -->
        @include('web.profile.transaction')
    </div>
</div>

<!-- Toast Container -->
<div class="toast-container" id="toastContainer"></div>
<!-- Fancy Image Popup -->
<div class="fancy-popup-overlay" id="fancyPopup">
    <div class="fancy-popup-content">
        <button class="fancy-popup-close" onclick="closeFancyPopup()">
            <i class="fas fa-times"></i>
        </button>
        <img class="fancy-popup-image" id="fancyPopupImage" src="" alt="">
    </div>
</div>

@include('web.layouts.footer')


<!-- Add Select2 JS -->
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<!-- Datatable JS -->
<script type="text/javascript" src="{{ asset('web_assets/js/jquery.dataTables.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('web_assets/js/dataTables.bootstrap5.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('web_assets/js/contact-data.js') }}"></script>

<!-- Data Table JS -->
<script type="text/javascript" src="{{ asset('web_assets/datatables/datatables.net/js/dataTables.min.js') }}"></script>
<script type="text/javascript"
    src="{{ asset('web_assets/datatables/datatables.net-bs5/js/dataTables.bootstrap5.min.js') }}"></script>
<script type="text/javascript"
    src="{{ asset('web_assets/datatables/datatables.net-select/js/dataTables.select.min.js') }}"></script>

<script type="text/javascript" src="{{ asset('web_assets/customplugins/dataTables.buttons.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('web_assets/customplugins/jszip.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('web_assets/customplugins/pdfmake.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('web_assets/customplugins/vfs_fonts.js') }}"></script>
<script type="text/javascript" src="{{ asset('web_assets/customplugins/buttons.html5.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('web_assets/customplugins/buttons.colVis.min.js') }}"></script>

<script>
    let currentProfileImage = null;
    let currentShopBanner = null;
    let currentArtistImage = null;
    let uploadPreviewImages = [];
    let locationScheduleItems = [];
    let currentEditLocationId = null;
    let currentEditArtistId = null;
    let currentArtistData = null;

    // Initialize the application
    document.addEventListener('DOMContentLoaded', function() {
        initializeApp();
    });

    function initializeApp() {
        $('select').select2({
            minimumResultsForSearch: -1
        });

        // Set up menu navigation
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                switchSection(this.dataset.section);
                setActiveMenuItem(this);
            });
        });

        setupDragAndDrop();
        clearFilters();
    }

    function switchSection(sectionId) {
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => section.classList.remove('active'));
        document.getElementById(sectionId).classList.add('active');
    }

    function setActiveMenuItem(activeItem) {
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => item.classList.remove('active'));
        activeItem.classList.add('active');
    }

    function clearFilters() {
        document.getElementById('dateRange').value = 'month';
        document.getElementById('transactionType').value = 'all';
        document.getElementById('transactionStatus').value = 'all';
        document.getElementById('amountRange').value = 'all';
        // Reset Select2
        $('#dateRange, #transactionType, #transactionStatus, #amountRange').select2({
            minimumResultsForSearch: -1
        });
    }

    // Profile functions
    function openProfileModal() {

        const modal = new bootstrap.Modal(document.getElementById('profileModal'));
        modal.show();
    }

    function handleProfileImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = async function(e) {
                currentProfileImage = e.target.result;
                const preview = document.getElementById('profileImagePreview');
                preview.innerHTML = `<img src="${e.target.result}" alt="Profile" class="profile-image">`;

                // Upload image to backend
                const formData = new FormData();
                formData.append('image', currentProfileImage);
                formData.append('_token', document.querySelector('meta[name="csrf-token"]').content);

                try {
                    const response = await fetch("{{ route('web.profile.update.picture') }}", {
                        method: 'POST',
                        headers: {
                            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                            'Content-Type': 'application/json', // Important for JSON body
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify({
                            image: currentProfileImage
                        })
                    });
                    const data = await response.json();

                    if (response.ok) {
                        profileData.profileImage = data.path;
                        updateProfileView();
                        showToast('Success', data.message, 'success');
                    } else {
                        showToast('Error', data.message || 'Failed to upload profile picture.', 'error');
                    }
                } catch (error) {
                    console.error('Error uploading profile picture:', error);
                    showToast('Error', 'An error occurred while uploading profile picture.', 'error');
                }
            };
            reader.readAsDataURL(file);
        }
    }

    async function saveProfile(e) {
        const formData = new FormData();
        formData.append('fullName', document.getElementById('fullName').value);
        formData.append('phone', document.getElementById('phone').value);
        formData.append('bio', document.getElementById('bio').value);
        formData.append('address1', document.getElementById('address1').value);
        formData.append('address2', document.getElementById('address2').value);
        formData.append('city', document.getElementById('city').value);
        formData.append('state', document.getElementById('state').value);
        formData.append('zipCode', document.getElementById('zipCode').value);
        if (currentProfileImage) {
            formData.append('profileImage', currentProfileImage);
        }
        formData.append('_token', document.querySelector('meta[name="csrf-token"]').content);
        formData.append('_method', 'PATCH');

        if (!formData.get('fullName') || !formData.get('phone') || !formData.get('address1') || !formData.get(
                'city') || !formData.get('state') || !formData.get('zipCode')) {
            showToast('Validation Error', 'Please fill in all required fields', 'error');
            return;
        }

        console.log(formData);
        try {
            const response = await fetch("{{ route('web.profile.update') }}", {
                method: 'POST',
                body: formData,
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
                }
            });
            const data = await response.json();

            if (response.ok) {
                showToast('Success', data.message, 'success');
                const modal = bootstrap.Modal.getInstance(document.getElementById('profileModal'));
                modal.hide();
                setTimeout(() => {
                    location.reload();
                }, 2000);
            } else {
                showToast('Error', data.message || 'Failed to update profile.', 'error');
            }
        } catch (error) {
            console.error('Error saving profile:', error);
            showToast('Error', 'An error occurred while saving profile.', 'error');
        }
    }

    // Shop functions
    function openShopModal() {
        const modal = new bootstrap.Modal(document.getElementById('shopModal'));
        modal.show();
    }

    function handleShopBannerUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                currentShopBanner = file;
                const preview = document.getElementById('shopBannerPreview');
                preview.innerHTML = `<img src="${e.target.result}" alt="Shop Banner">`;
            };
            reader.readAsDataURL(file);
        }
    }

    // Location functions
    function openLocationModal() {
        currentEditLocationId = null;
        document.getElementById('locationModalTitle').textContent = 'Add Shop Location';
        // Clear form
        document.getElementById('locationName').value = '';
        document.getElementById('locationPhone').value = '';
        document.getElementById('locationAddress').value = '';
        document.getElementById('locationCity').value = '';
        document.getElementById('locationStatus').value = 'active';
        document.getElementById('locationLat').value = '';
        document.getElementById('locationLng').value = '';
        locationScheduleItems = [];
        renderLocationScheduleItems();

        const modal = new bootstrap.Modal(document.getElementById('locationModal'));
        modal.show();

        $('#locationStatus').select2({
            minimumResultsForSearch: -1
        });
    }

    async function editLocation(id) {
        currentEditLocationId = id;
        document.getElementById('locationModalTitle').textContent = 'Edit Shop Location';

        try {
            let url = "{{ route('web.shop_locations.show', ':id') }}".replace(':id', id);
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
                }
            });
            const location = await response.json();
            if (response.ok) {
                document.getElementById('locationName').value = location.name;
                document.getElementById('locationPhone').value = location.phone;
                document.getElementById('locationAddress').value = location.address;
                document.getElementById('locationCity').value = location.city;
                document.getElementById('locationStatus').value = location.status;
                document.getElementById('locationLat').value = location.lat || '';
                document.getElementById('locationLng').value = location.lng || '';
                locationScheduleItems = location.schedules.map(schedule => ({
                    id: schedule.id,
                    day: schedule.day,
                    openTime: schedule.opening_time.substring(0, 5),
                    closeTime: schedule.closing_time.substring(0, 5),
                    is_closed: schedule.is_closed
                }));
                let form = $('#locationModal').find('form');
                let token = document.querySelector('meta[name="csrf-token"]').content;

                form.attr('method', 'POST');
                form.attr('action', "{{ route('web.shop_locations.update', ':id') }}".replace(':id', id));

                // Remove old _method + _token inputs to avoid duplicates
                form.find('input[name="_method"]').remove();
                form.find('input[name="_token"]').remove();

                form.prepend(`
                    <input type="hidden" name="_token" value="${token}">
                    <input type="hidden" name="_method" value="PUT">
                `);
                renderLocationScheduleItems();

                const modal = new bootstrap.Modal(document.getElementById('locationModal'));
                modal.show();

                $('#locationStatus').select2({
                    minimumResultsForSearch: -1
                });
                $('.location-schedule-day').select2({
                    minimumResultsForSearch: -1
                });
            } else {
                showToast('Error', 'Location not found.', 'error');
            }
        } catch (error) {
            console.error('Error fetching location:', error);
            showToast('Error', 'An error occurred while fetching location.', 'error');
        }
    }

    function addLocationScheduleItem() {
        if (locationScheduleItems.length >= 7) {
            showToast('Validation Error', 'You cannot add more than 7 schedule items.', 'error');
            return;
        }
        const newSchedule = {
            id: Date.now(),
            day: '',
            openTime: '09:00',
            closeTime: '17:00',
            is_closed: false
        };
        locationScheduleItems.push(newSchedule);
        renderLocationScheduleItems();
    }

    function removeLocationScheduleItem(id) {
        locationScheduleItems = locationScheduleItems.filter(item => item.id !== id);
        renderLocationScheduleItems();
    }

    function updateLocationScheduleItem(id, field, value) {
        const item = locationScheduleItems.find(item => item.id === id);
        if (item) {
            item[field] = value;
        }
        if (field === 'is_closed') {
            toggleScheduleTimeInputs(id, value);
        }
    }

    function renderLocationScheduleItems() {
        const scheduleList = document.getElementById('locationScheduleList');
        scheduleList.innerHTML = '';

        const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        const selectedDays = locationScheduleItems.map(item => item.day).filter(day => day);

        locationScheduleItems.forEach(item => {
            const scheduleDiv = document.createElement('div');
            scheduleDiv.className = 'schedule-item';
            scheduleDiv.innerHTML = `
                <div class="selectBox">
                    <select class="form-control location-schedule-day" onchange="updateLocationScheduleItem(${item.id}, 'day', this.value)" name="schedule[${item.id}][day]">
                        <option value="">Select Day</option>
                        ${daysOfWeek.map(day => `<option value="${day}" ${item.day === day ? 'selected' : ''} ${selectedDays.includes(day) && item.day !== day ? 'disabled' : ''}>${day.charAt(0).toUpperCase() + day.slice(1)}</option>`).join('')}
                    </select>
                </div>
                <div class="schedule-time">
                    <input type="time" class="form-control" value="${item.openTime}" name="schedule[${item.id}][openTime]"  onchange="updateLocationScheduleItem(${item.id}, 'openTime', this.value)" ${item.is_closed ? 'disabled' : ''}>
                    <span>to</span>
                    <input type="time" class="form-control" value="${item.closeTime}" name="schedule[${item.id}][closeTime]" onchange="updateLocationScheduleItem(${item.id}, 'closeTime', this.value)" ${item.is_closed ? 'disabled' : ''}>
                </div>
                <div class="schedule-actions">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" name="schedule[${item.id}][is_closed]" value="1" onchange="updateLocationScheduleItem(${item.id}, 'is_closed', this.checked)" ${item.is_closed ? 'checked' : ''}> Closed
                    </label>
                    <button type="button" class="btn-remove-schedule" onclick="removeLocationScheduleItem(${item.id})">
                        <iconify-icon icon="material-symbols:delete-outline-rounded"></iconify-icon>
                    </button>
                </div>
            `;
            scheduleList.appendChild(scheduleDiv);
        });

        $('.location-schedule-day').select2({
            minimumResultsForSearch: -1
        });
    }

    function toggleScheduleTimeInputs(id, isClosed) {
        const scheduleItem = Array.from(document.querySelectorAll('.schedule-item')).find(item =>
            item.querySelector(`select[onchange*="updateLocationScheduleItem(${id}"]`)
        );
        if (scheduleItem) {
            const timeInputs = scheduleItem.querySelectorAll('input[type="time"]');
            timeInputs.forEach(input => {
                input.disabled = isClosed;
                if (isClosed) {
                    input.value = '';
                }
            });
        }
    }


    async function deleteLocation(id) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {

                    const response = await fetch(`{{ url('shop-locations') }}/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')
                                .content,
                            'Accept': 'application/json'
                        }
                    });
                    const data = await response.json();
                    if (response.ok) {
                        showToast('Success', data.message, 'success');
                        location.reload();
                    } else {
                        showToast('Error', data.message || 'Failed to delete location.', 'error');
                    }
                } catch (error) {
                    console.error('Error deleting location:', error);
                    showToast('Error', 'An error occurred while deleting location.', 'error');
                }
            }
        });
    }

    // Gallery functions
    function setupDragAndDrop() {
        const uploadArea = document.getElementById('modernUploadArea');

        uploadArea.addEventListener('click', () => {
            document.getElementById('galleryImagesInput').click();
        });

        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('dragover');
        });

        uploadArea.addEventListener('dragleave', () => {
            uploadArea.classList.remove('dragover');
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('dragover');
            const files = Array.from(e.dataTransfer.files);
            handleMultipleImageUpload(files);
        });
    }

    function openGalleryUploadModal() {
        uploadPreviewImages = [];
        document.getElementById('uploadPreviewGrid').innerHTML = '';
        document.getElementById('galleryImagesInput').value = '';
        const modal = new bootstrap.Modal(document.getElementById('galleryUploadModal'));
        modal.show();
    }

    function handleGalleryImagesUpload(event) {
        const files = Array.from(event.target.files);
        handleMultipleImageUpload(files);
    }

    function handleMultipleImageUpload(files) {
        files.forEach(file => {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    uploadPreviewImages.push({
                        id: Date.now() + Math.random(),
                        src: e.target.result,
                        file: file
                    });
                    renderUploadPreview();
                };
                reader.readAsDataURL(file);
            }
        });
    }

    function renderUploadPreview() {
        const previewGrid = document.getElementById('uploadPreviewGrid');
        previewGrid.innerHTML = '';

        uploadPreviewImages.forEach(image => {
            const previewItem = document.createElement('div');
            previewItem.className = 'upload-preview-item';
            previewItem.innerHTML = `
                <img src="${image.src}" alt="Preview" class="upload-preview-image">
                <button class="upload-preview-remove" onclick="removeUploadPreview('${image.id}')">
                    <i class="fas fa-times"></i>
                </button>
            `;
            previewGrid.appendChild(previewItem);
        });
    }

    function removeUploadPreview(id) {
        uploadPreviewImages = uploadPreviewImages.filter(img => img.id !== id);
        renderUploadPreview();
    }

    async function uploadGalleryImages() {
        if (uploadPreviewImages.length === 0) {
            showToast('Validation Error', 'Please select at least one image', 'error');
            return;
        }

        const formData = new FormData();
        uploadPreviewImages.forEach((image, index) => {
            formData.append(`images[${index}]`, image.file);
        });
        formData.append('_token', document.querySelector('meta[name="csrf-token"]').content);

        try {
            const response = await fetch("gallery/store", {
                method: 'POST',
                body: formData,
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
                }
            });
            const data = await response.json();

            if (response.ok) {
                showToast('Success', `${uploadPreviewImages.length} image(s) uploaded successfully!`,
                    'success');
                const modal = bootstrap.Modal.getInstance(document.getElementById('galleryUploadModal'));
                modal.hide();
                location.reload();
            } else {
                showToast('Error', data.message || 'Failed to upload images.', 'error');
            }
        } catch (error) {
            console.error('Error uploading images:', error);
            showToast('Error', 'An error occurred while uploading images.', 'error');
        }
    }

    async function deleteGalleryImage(id) {
        if (!confirm('Are you sure you want to delete this image?')) {
            return;
        }

        try {
            const response = await fetch(`{{ url('gallery') }}/${id}`, {
                method: 'DELETE',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                    'Accept': 'application/json'
                }
            });
            const data = await response.json();

            if (response.ok) {
                showToast('Success', data.message || 'Image deleted successfully!', 'success');
                location.reload();
            } else {
                showToast('Error', data.message || 'Failed to delete image.', 'error');
            }
        } catch (error) {
            console.error('Error deleting image:', error);
            showToast('Error', 'An error occurred while deleting image.', 'error');
        }
    }

    function openFancyPopup(imageSrc) {
        document.getElementById('fancyPopupImage').src = imageSrc;
        document.getElementById('fancyPopup').classList.add('active');
    }

    function closeFancyPopup() {
        document.getElementById('fancyPopup').classList.remove('active');
    }

    // Artist functions
    function openArtistModal() {
        currentEditArtistId = null;
        document.getElementById('artistModalTitle').textContent = 'Add Artist';
        // Clear form
        document.getElementById('artistName').value = '';
        document.getElementById('artistEmail').value = '';
        document.getElementById('artistPhone').value = '';
        document.getElementById('artistExperience').value = '';
        document.getElementById('artistExpertise').value = '';
        document.getElementById('artistBio').value = '';
        document.getElementById('artistImageInput').value = '';
        document.getElementById('artistImagePreview').innerHTML = '<i class="fas fa-user"></i>';
        currentArtistImage = null;
        currentArtistData = null;

        const modal = new bootstrap.Modal(document.getElementById('artistModal'));
        modal.show();
    }

    async function editArtist(id) {
        currentEditArtistId = id;
        document.getElementById('artistModalTitle').textContent = 'Edit Artist';

        try {
            const response = await fetch(`{{ url('artists') }}/${id}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
                }
            });
            const artist = await response.json();

            if (response.ok) {
                document.getElementById('artistName').value = artist.name;
                document.getElementById('artistEmail').value = artist.email;
                document.getElementById('artistPhone').value = artist.phone;
                document.getElementById('artistExperience').value = artist.experience;
                document.getElementById('artistExpertise').value = artist.expertise;
                document.getElementById('artistBio').value = artist.bio;
                if (artist.image_url) {
                    document.getElementById('artistImagePreview').innerHTML =
                        `<img src="${artist.image_url}" alt="Artist" class="profile-image">`;
                    currentArtistImage = artist.image_url;
                }
                currentArtistData = artist;

                const modal = new bootstrap.Modal(document.getElementById('artistModal'));
                modal.show();
            } else {
                showToast('Error', 'Artist not found.', 'error');
            }
        } catch (error) {
            console.error('Error fetching artist:', error);
            showToast('Error', 'An error occurred while fetching artist.', 'error');
        }
    }

    function handleArtistImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                currentArtistImage = file;
                const preview = document.getElementById('artistImagePreview');
                preview.innerHTML = `<img src="${e.target.result}" alt="Artist" class="profile-image">`;
            };
            reader.readAsDataURL(file);
        }
    }

    async function saveArtist() {
        const formData = new FormData();
        formData.append('name', document.getElementById('artistName').value);
        formData.append('email', document.getElementById('artistEmail').value);
        formData.append('phone', document.getElementById('artistPhone').value);
        formData.append('experience', document.getElementById('artistExperience').value);
        formData.append('expertise', document.getElementById('artistExpertise').value);
        formData.append('bio', document.getElementById('artistBio').value);
        if (currentArtistImage && currentArtistImage instanceof File) {
            formData.append('image', currentArtistImage);
        }
        formData.append('_token', document.querySelector('meta[name="csrf-token"]').content);
        if (currentEditArtistId) {
            formData.append('_method', 'PUT');
        }

        if (!formData.get('name') || !formData.get('email') || !formData.get('phone') || !formData.get(
                'experience') || !formData.get('expertise')) {
            showToast('Validation Error', 'Please fill in all required fields', 'error');
            return;
        }

        const url = currentEditArtistId ? `{{ url('artists') }}/${currentEditArtistId}` : "artist/store";
        const method = currentEditArtistId ? 'POST' : 'POST';

        try {
            const response = await fetch(url, {
                method,
                body: formData,
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
                }
            });
            const data = await response.json();

            if (response.ok) {
                showToast('Success', data.message || (currentEditArtistId ? 'Artist updated successfully!' :
                    'Artist added successfully!'), 'success');
                const modal = bootstrap.Modal.getInstance(document.getElementById('artistModal'));
                modal.hide();
                location.reload();
            } else {
                showToast('Error', data.message || 'Failed to save artist.', 'error');
            }
        } catch (error) {
            console.error('Error saving artist:', error);
            showToast('Error', 'An error occurred while saving artist.', 'error');
        }
    }

    async function deleteArtist(id) {
        if (!confirm('Are you sure you want to delete this artist?')) {
            return;
        }

        try {
            const response = await fetch(`{{ url('artists') }}/${id}`, {
                method: 'DELETE',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                    'Accept': 'application/json'
                }
            });
            const data = await response.json();

            if (response.ok) {
                showToast('Success', data.message || 'Artist deleted successfully!', 'success');
                location.reload();
            } else {
                showToast('Error', data.message || 'Failed to delete artist.', 'error');
            }
        } catch (error) {
            console.error('Error deleting artist:', error);
            showToast('Error', 'An error occurred while deleting artist.', 'error');
        }
    }

    // Toast notification system
    function showToast(title, message, type = 'success') {
        const toastContainer = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast-notification toast-${type}`;

        const iconMap = {
            success: 'fas fa-check',
            error: 'fas fa-times',
            info: 'fas fa-info'
        };

        toast.innerHTML = `
            <div class="toast-icon">
                <i class="${iconMap[type] || 'fas fa-info'}"></i>
            </div>
            <div class="toast-content">
                <div class="toast-title">${title}</div>
                <div class="toast-message">${message}</div>
            </div>
            <button class="toast-close" onclick="this.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        `;

        toastContainer.appendChild(toast);

        setTimeout(() => toast.classList.add('show'), 100);

        setTimeout(() => {
            if (toast.parentElement) {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 300);
            }
        }, 5000);
    }

    // Close fancy popup on outside click or escape
    document.getElementById('fancyPopup').addEventListener('click', function(e) {
        if (e.target === this) {
            closeFancyPopup();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeFancyPopup();
        }
    });
</script>
