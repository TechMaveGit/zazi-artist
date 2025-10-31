<div id="gallery" class="content-section">
    <div class="content-header">
        <div>
            <h2 class="content-title">Work Gallery</h2>
            <p class="content-subtitle">Showcase your pharmaceutical tattoo work</p>
        </div>
        <div class="action-buttons">
            <button class="btn-primary-custom btn-custom" onclick="openGalleryUploadModal()">
                <i class="fas fa-plus"></i>
                Upload Images
            </button>
        </div>
    </div>

    <!-- Modern Gallery Grid -->
    <div class="form-card">
        <div class="modern-gallery-grid" id="modernGalleryGrid">
            @forelse($galleryImages as $image)
                <div class="modern-gallery-card">
                    <img src="{{ $image->image_url }}" alt="Gallery Image" class="modern-gallery-image"
                        onclick="openFancyPopup('{{ $image->image_url }}')">
                    <div class="modern-gallery-actions">
                        <button class="modern-action-btn delete" onclick="deleteGalleryImage({{ $image->id }})"
                            title="Delete">
                            <iconify-icon icon="material-symbols:delete-outline-rounded"></iconify-icon>
                        </button>
                    </div>
                </div>
            @empty
                <p class="text-center" style="color: var(--text-muted); grid-column: 1 / -1;">No images uploaded yet.
                    Click "Upload Images" to add your work.</p>
            @endforelse
        </div>
    </div>
</div>

<!-- Gallery Upload Modal -->
<div class="modal fade" id="galleryUploadModal" tabindex="-1">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Upload Gallery Images</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"><iconify-icon
                        icon="iconoir:cancel"></iconify-icon>
                </button>
            </div>
            <div class="modal-body">
                <div class="modern-upload-area" id="modernUploadArea">
                    <i class="fas fa-cloud-upload-alt upload-icon"></i>
                    <h5>Drag & Drop Images Here</h5>
                    <p>Or click to select multiple images</p>
                    <input type="file" id="galleryImagesInput" class="hidden-file-input" accept="image/*" multiple
                        onchange="handleGalleryImagesUpload(event)">
                </div>
                <div class="upload-preview-grid" id="uploadPreviewGrid">
                    <!-- Preview images will be shown here -->
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn-secondary-custom btn-custom" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn-primary-custom btn-custom" onclick="uploadGalleryImages()">Upload
                    Images</button>
            </div>
        </div>
    </div>
</div>
