@extends('layouts.main')
@section('main-content')

    <div class="page-wrapper">
        <div class="content">
            <div class="d-md-flex pagetop_headercmntb d-block align-items-center justify-content-between page-breadcrumb ">
                <div class="pageheaderleft">
                    <a href="email-management.php" class="btn btn-ghost btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            data-lucide="arrow-left" class="lucide lucide-arrow-left">
                            <path d="m12 19-7-7 7-7"></path>
                            <path d="M19 12H5"></path>
                        </svg>
                    </a>
                    <div class="my-auto ">
                        <h2 class="mb-1">Edit Email Template</h2>
                        <p class="page-subtitle">Modify email template for customer communication</p>
                    </div>
                </div>

                <div class="d-flex my-xl-auto right-content align-items-center flex-wrap ">

                    <div class="head-icons ms-2 headicon_innerpage">
                        <a href="javascript:void(0);" class="" data-bs-toggle="tooltip" data-bs-placement="top"
                            data-bs-original-title="Collapse" id="collapse-header">
                            <i class="ti ti-chevrons-up"></i>
                        </a>
                    </div>
                </div>
            </div>

            <form action="email-management.php" method="post">
                <div class="email-template-wrapper">
                    <div class="row">
                        <!-- Main Form -->
                        <div class="col-lg-8">
                            <!-- Basic Information -->
                            <div class="card email-template-glass-card mb-4">
                                <div class="card-header">
                                    <h6 class="card-title">
                                        <iconify-icon icon="material-symbols:info-outline"></iconify-icon>
                                        Template Information
                                    </h6>
                                </div>
                                <div class="card-body">
                                    <form id="editTemplateForm">
                                        <div class="row">
                                            <div class="col-md-6 mb-3">
                                                <label class="email-template-form-label">Template Name</label>
                                                <input type="text" class="form-control" id="templateName"
                                                    placeholder="e.g., Welcome Email" value="Welcome Email Template">
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label class="email-template-form-label">Template Type</label>
                                                <input type="text" class="form-control" id="templateType"
                                                    placeholder="e.g., Welcome, Notification, Promotion" value="Welcome">
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-12 mb-3">
                                                <label class="email-template-form-label">Subject Line</label>
                                                <input type="text" class="form-control" id="templateSubject"
                                                    placeholder="e.g., Welcome to BeautyPro!"
                                                    value="Welcome to BeautyPro - Let's Get Started!">
                                            </div>
                                        </div>

                                        <div class="email-template-setting-item">
                                            <div class="email-template-setting-info">
                                                <label class="email-template-setting-label">Active Template</label>
                                                <p class="email-template-setting-description">Available for sending to
                                                    customers</p>
                                            </div>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" id="isTemplateActive"
                                                    checked>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <!-- Email Content -->
                            <div class="card email-template-glass-card mb-4">
                                <div class="card-header">
                                    <h6 class="card-title">
                                        <iconify-icon icon="material-symbols:edit-outline"></iconify-icon>
                                        Email Content
                                    </h6>
                                </div>
                                <div class="card-body">
                                    <!-- Content Source Options -->
                                    <div class="email-template-content-source mb-4">
                                        <label class="email-template-form-label">Content Source</label>
                                        <div class="email-template-source-tabs">
                                            <button type="button" class="email-template-source-tab active"
                                                data-source="editor">
                                                <iconify-icon icon="material-symbols:edit-outline"></iconify-icon>
                                                Text Editor
                                            </button>
                                            <button type="button" class="email-template-source-tab" data-source="upload">
                                                <iconify-icon icon="material-symbols:upload-file-outline"></iconify-icon>
                                                Upload Word File
                                            </button>
                                        </div>
                                    </div>

                                    <!-- Text Editor Section -->
                                    <div class="email-template-content-section active" id="editorSection">
                                        <div class="mb-3">
                                            <label class="email-template-form-label">Email Body</label>
                                            <div class="email-template-editor-toolbar">
                                                <button type="button" class="email-template-toolbar-btn" data-action="bold">
                                                    <iconify-icon icon="material-symbols:format-bold"></iconify-icon>
                                                </button>
                                                <button type="button" class="email-template-toolbar-btn"
                                                    data-action="italic">
                                                    <iconify-icon icon="material-symbols:format-italic"></iconify-icon>
                                                </button>
                                                <button type="button" class="email-template-toolbar-btn"
                                                    data-action="underline">
                                                    <iconify-icon icon="material-symbols:format-underlined"></iconify-icon>
                                                </button>
                                                <div class="email-template-toolbar-divider"></div>
                                                <button type="button" class="email-template-toolbar-btn"
                                                    data-action="insertOrderedList">
                                                    <iconify-icon
                                                        icon="material-symbols:format-list-numbered"></iconify-icon>
                                                </button>
                                                <button type="button" class="email-template-toolbar-btn"
                                                    data-action="insertUnorderedList">
                                                    <iconify-icon
                                                        icon="material-symbols:format-list-bulleted"></iconify-icon>
                                                </button>
                                                <div class="email-template-toolbar-divider"></div>
                                                <button type="button" class="email-template-toolbar-btn"
                                                    data-action="createLink">
                                                    <iconify-icon icon="material-symbols:link"></iconify-icon>
                                                </button>
                                            </div>
                                            <div class="email-template-editor" id="emailEditor" contenteditable="true">
                                                <h2>Welcome to BeautyPro!</h2>
                                                <p>Dear salon_name,</p>
                                                <p>We're thrilled to welcome you to the BeautyPro platform! Your journey to
                                                    streamlined salon management starts here.</p>
                                                <h3>What's Next?</h3>
                                                <ul>
                                                    <li>Complete your salon profile</li>
                                                    <li>Add your team members</li>
                                                    <li>Upload your service gallery</li>
                                                    <li>Start accepting online bookings</li>
                                                </ul>
                                                <p>If you have any questions, our support team is here to help at <a
                                                        href="mailto:support@beautypro.com">support@beautypro.com</a></p>
                                                <p>Best regards,<br><strong>The BeautyPro Team</strong></p>
                                            </div>
                                        </div>


                                    </div>

                                    <!-- File Upload Section -->
                                    <div class="email-template-content-section" id="uploadSection">
                                        <div class="mb-3">
                                            <label class="email-template-form-label">Upload Word Document</label>
                                            <div class="email-template-file-upload" id="fileUploadArea">
                                                <input type="file" id="wordFileInput" accept=".doc,.docx"
                                                    style="display: none;">
                                                <div class="email-template-upload-content">
                                                    <iconify-icon
                                                        icon="material-symbols:upload-file-outline"></iconify-icon>
                                                    <p>Drag and drop your Word document here or <span
                                                            class="email-template-upload-link">browse files</span></p>
                                                    <small class="email-template-upload-note">Supports .doc and .docx
                                                        files</small>
                                                </div>
                                            </div>
                                            <div class="email-template-file-info" id="fileInfo" style="display: none;">
                                                <div class="email-template-file-details">
                                                    <iconify-icon
                                                        icon="material-symbols:description-outline"></iconify-icon>
                                                    <div class="email-template-file-text">
                                                        <div class="email-template-file-name" id="fileName"></div>
                                                        <div class="email-template-file-size" id="fileSize"></div>
                                                    </div>
                                                    <button type="button" class="email-template-file-remove"
                                                        id="removeFile">
                                                        <iconify-icon icon="material-symbols:close"></iconify-icon>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <!-- Preview -->
                        <div class="col-lg-4">
                            <div class="card email-template-glass-card email-template-sticky">
                                <div class="card-header">
                                    <h6 class="card-title">Email Preview</h6>
                                </div>
                                <div class="card-body">
                                    <div class="email-template-preview" id="emailPreview">
                                        <div class="email-template-preview-header">
                                            <div class="email-template-preview-from">
                                                <strong>From:</strong> BeautyPro <noreply@beautypro.com>
                                            </div>
                                            <div class="email-template-preview-to">
                                                <strong>To:</strong> salon@example.com
                                            </div>
                                            <div class="email-template-preview-subject">
                                                <strong>Subject:</strong> <span id="previewSubject">Welcome to BeautyPro -
                                                    Let's Get Started!</span>
                                            </div>
                                        </div>
                                        <div class="email-template-preview-divider"></div>
                                        <div class="email-template-preview-body" id="previewBody">
                                            <h2>Welcome to BeautyPro!</h2>
                                            <p>Dear Glamour Studio,</p>
                                            <p>We're thrilled to welcome you to the BeautyPro platform! Your journey to
                                                streamlined salon management starts here.</p>
                                            <h3>What's Next?</h3>
                                            <ul>
                                                <li>Complete your salon profile</li>
                                                <li>Add your team members</li>
                                                <li>Upload your service gallery</li>
                                                <li>Start accepting online bookings</li>
                                            </ul>
                                            <p>If you have any questions, our support team is here to help at <a
                                                    href="mailto:support@beautypro.com">support@beautypro.com</a></p>
                                            <p>Best regards,<br><strong>The BeautyPro Team</strong></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="email-template-preview-info">
                                        <div class="email-template-info-item">
                                            <span class="email-template-info-label">Type:</span>
                                            <span class="email-template-info-value" id="previewType">Welcome</span>
                                        </div>
                                        <div class="email-template-info-item">
                                            <span class="email-template-info-label">Status:</span>
                                            <span class="email-template-badge email-template-badge-success"
                                                id="previewStatus">Active</span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div class="FormSubmit_fix_container">
                    <div class="buttonsHJI">

                        <a href="email-management.php" class="btn commonCancleButton">
                            Cancel
                        </a>

                        <button type="submit" class="btn btn-primary commonUpdateButton">
                            <iconify-icon icon="lucide:save">
                            </iconify-icon> Save Changes
                        </button>
                    </div>
                </div>
            </form>



        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            // Get all form elements
            const templateNameInput = document.getElementById('templateName');
            const templateSubjectInput = document.getElementById('templateSubject');
            const templateTypeInput = document.getElementById('templateType');
            const isTemplateActiveCheckbox = document.getElementById('isTemplateActive');
            const emailEditor = document.getElementById('emailEditor');
            const wordFileInput = document.getElementById('wordFileInput');
            const fileUploadArea = document.getElementById('fileUploadArea');
            const fileInfo = document.getElementById('fileInfo');
            const sourceTabs = document.querySelectorAll('.email-template-source-tab');
            const contentSections = document.querySelectorAll('.email-template-content-section');
            const saveTemplateBtn = document.getElementById('saveTemplateBtn');

            // Get all preview elements
            const previewSubject = document.getElementById('previewSubject');
            const previewBody = document.getElementById('previewBody');
            const previewType = document.getElementById('previewType');
            const previewStatus = document.getElementById('previewStatus');

            // Content source switching
            sourceTabs.forEach(tab => {
                tab.addEventListener('click', function () {
                    const source = this.getAttribute('data-source');

                    // Update active tab
                    sourceTabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');

                    // Update active section
                    contentSections.forEach(section => {
                        section.classList.remove('active');
                    });

                    if (source === 'editor') {
                        document.getElementById('editorSection').classList.add('active');
                    } else if (source === 'upload') {
                        document.getElementById('uploadSection').classList.add('active');
                    }
                });
            });

            // File upload functionality
            fileUploadArea.addEventListener('click', function () {
                wordFileInput.click();
            });

            fileUploadArea.addEventListener('dragover', function (e) {
                e.preventDefault();
                this.classList.add('email-template-dragover');
            });

            fileUploadArea.addEventListener('dragleave', function (e) {
                e.preventDefault();
                this.classList.remove('email-template-dragover');
            });

            fileUploadArea.addEventListener('drop', function (e) {
                e.preventDefault();
                this.classList.remove('email-template-dragover');
                const files = e.dataTransfer.files;
                if (files.length > 0) {
                    handleFileUpload(files[0]);
                }
            });

            wordFileInput.addEventListener('change', function (e) {
                if (e.target.files.length > 0) {
                    handleFileUpload(e.target.files[0]);
                }
            });

            document.getElementById('removeFile').addEventListener('click', function () {
                wordFileInput.value = '';
                fileInfo.style.display = 'none';
                fileUploadArea.style.display = 'block';
                emailEditor.innerHTML = '<p>Content from uploaded file will appear here...</p>';
                updateBodyPreview();
            });

            function handleFileUpload(file) {
                if (!file.name.match(/\.(doc|docx)$/)) {
                    alert('Please upload a valid Word document (.doc or .docx)');
                    return;
                }

                // Show file info
                document.getElementById('fileName').textContent = file.name;
                document.getElementById('fileSize').textContent = formatFileSize(file.size);
                fileInfo.style.display = 'block';
                fileUploadArea.style.display = 'none';

                // Simulate file processing and content extraction
                setTimeout(() => {
                    const sampleContent = `
                    <h2>Welcome to BeautyPro!</h2>
                    <p>Dear salon_name,</p>
                    <p>We're excited to have you join our platform and look forward to helping you grow your business.</p>
                    <h3>Getting Started</h3>
                    <ul>
                        <li>Set up your salon profile</li>
                        <li>Add your services and pricing</li>
                        <li>Invite your team members</li>
                        <li>Configure your booking settings</li>
                    </ul>
                    <p>Our team is here to support you every step of the way. Contact us at <a href="mailto:support@beautypro.com">support@beautypro.com</a></p>
                    <p>Welcome aboard!<br><strong>The BeautyPro Team</strong></p>
                `;
                    emailEditor.innerHTML = sampleContent;
                    updateBodyPreview();
                }, 1500);
            }

            function formatFileSize(bytes) {
                if (bytes === 0) return '0 Bytes';
                const k = 1024;
                const sizes = ['Bytes', 'KB', 'MB'];
                const i = Math.floor(Math.log(bytes) / Math.log(k));
                return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
            }

            // Update subject preview
            function updateSubjectPreview() {
                const subject = templateSubjectInput.value.trim();
                previewSubject.textContent = subject || 'Email Subject';
            }

            // Update body preview
            function updateBodyPreview() {
                const content = emailEditor.innerHTML;
                // Replace variables with sample data for preview
                let previewContent = content
                    .replace(/\{\{salon_name\}\}/g, 'Glamour Studio')
                    .replace(/\{\{owner_name\}\}/g, 'Sarah Johnson')
                    .replace(/\{\{plan_name\}\}/g, 'Professional Plan')
                    .replace(/\{\{expiry_date\}\}/g, 'January 15, 2025')
                    .replace(/\{\{amount\}\}/g, '$99.99')
                    .replace(/\{\{due_date\}\}/g, 'December 25, 2024');

                previewBody.innerHTML = previewContent;
            }

            // Update template type preview
            function updateTypePreview() {
                const typeValue = templateTypeInput.value.trim();
                previewType.textContent = typeValue || 'Template Type';
            }

            // Update status preview
            function updateStatusPreview() {
                if (isTemplateActiveCheckbox.checked) {
                    previewStatus.textContent = 'Active';
                    previewStatus.className = 'email-template-badge email-template-badge-success';
                } else {
                    previewStatus.textContent = 'Draft';
                    previewStatus.className = 'email-template-badge email-template-badge-secondary';
                }
            }

            // Save template function
            function saveTemplate() {
                // Show loading state
                saveTemplateBtn.innerHTML = '<iconify-icon icon="eos-icons:loading"></iconify-icon>Saving...';
                saveTemplateBtn.disabled = true;

                // Simulate save operation
                setTimeout(() => {
                    // Show success message
                    saveTemplateBtn.innerHTML = '<iconify-icon icon="prime:check-circle"></iconify-icon>Saved!';
                    saveTemplateBtn.classList.add('btn-success');
                    saveTemplateBtn.classList.remove('btn-primary');

                    // Reset button after 2 seconds
                    setTimeout(() => {
                        saveTemplateBtn.innerHTML = '<iconify-icon icon="fluent:save-20-regular"></iconify-icon>Save Changes';
                        saveTemplateBtn.classList.remove('btn-success');
                        saveTemplateBtn.classList.add('btn-primary');
                        saveTemplateBtn.disabled = false;
                    }, 2000);
                }, 1500);
            }

            // Add event listeners
            templateSubjectInput.addEventListener('input', updateSubjectPreview);
            templateTypeInput.addEventListener('input', updateTypePreview);
            emailEditor.addEventListener('input', updateBodyPreview);
            isTemplateActiveCheckbox.addEventListener('change', updateStatusPreview);
            saveTemplateBtn.addEventListener('click', saveTemplate);

            // Editor toolbar functionality
            const toolbarButtons = document.querySelectorAll('.email-template-toolbar-btn');
            toolbarButtons.forEach(button => {
                button.addEventListener('click', function (e) {
                    e.preventDefault();
                    const action = this.getAttribute('data-action');

                    if (action === 'createLink') {
                        const url = prompt('Enter URL:');
                        if (url) {
                            document.execCommand('createLink', false, url);
                        }
                    } else {
                        document.execCommand(action, false, null);
                    }

                    emailEditor.focus();
                    updateBodyPreview();
                });
            });

            // Variable insertion functionality
            const variableTags = document.querySelectorAll('.email-template-variable-tag');
            variableTags.forEach(tag => {
                tag.addEventListener('click', function () {
                    const variable = this.getAttribute('data-variable');

                    // Insert variable at cursor position
                    const selection = window.getSelection();
                    if (selection.rangeCount > 0) {
                        const range = selection.getRangeAt(0);
                        if (emailEditor.contains(range.commonAncestorContainer)) {
                            const textNode = document.createTextNode(variable);
                            range.insertNode(textNode);
                            range.setStartAfter(textNode);
                            range.setEndAfter(textNode);
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                    } else {
                        // If no selection, append to end
                        emailEditor.innerHTML += variable;
                    }

                    emailEditor.focus();
                    updateBodyPreview();
                });
            });

            // Initialize preview
            updateSubjectPreview();
            updateBodyPreview();
            updateTypePreview();
            updateStatusPreview();
        });
    </script>

    <style>
        /* Email Template Styles */
        .email-template-wrapper {
            padding: 0;
            margin-top: 10px;
        }

        .email-template-glass-card {
            background: rgba(255, 255, 255, 0.95);
            border: 1px solid #f0f2f5;
            border-radius: 12px;
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
            transition: all 0.3s ease;
        }

        .email-template-glass-card:hover {
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
        }

        .email-template-sticky {
            position: sticky;
            top: 20px;
        }

        .card-title {
            font-size: 16px;
            font-weight: 700;
            color: #1f2937;
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 0;
        }

        .card-title iconify-icon {
            font-size: 18px;
            color: #6b7280;
        }

        .email-template-form-label {
            font-size: 14px;
            font-weight: 600;
            color: #374151;
            margin-bottom: 8px;
            display: block;
        }

        .form-control {
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 12px 16px;
            font-size: 14px;
            transition: all 0.3s ease;
            width: 100%;
        }

        .form-control:focus {
            border-color: #6366f1;
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
            outline: none;
        }

        /* Setting Item */
        .email-template-setting-item {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding: 20px 0;
            border-top: 1px solid #f3f4f6;
        }

        .email-template-setting-info {
            flex: 1;
        }

        .email-template-setting-label {
            font-size: 14px;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 4px;
            display: block;
        }

        .email-template-setting-description {
            font-size: 13px;
            color: #6b7280;
            margin: 0;
            line-height: 1.4;
        }

        /* Content Source Tabs */
        .email-template-content-source {
            border-bottom: 1px solid #f3f4f6;
            padding-bottom: 16px;
        }

        .email-template-source-tabs {
            display: flex;
            gap: 8px;
            margin-top: 8px;
        }

        .email-template-source-tab {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 16px;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            background: white;
            color: #6b7280;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .email-template-source-tab:hover {
            border-color: #d1d5db;
            background: #f9fafb;
        }

        .email-template-source-tab.active {
            border-color: #6366f1;
            background: #eff6ff;
            color: #6366f1;
        }

        .email-template-source-tab iconify-icon {
            font-size: 16px;
        }

        /* Content Sections */
        .email-template-content-section {
            display: none;
        }

        .email-template-content-section.active {
            display: block;
        }

        /* File Upload Styles */
        .email-template-file-upload {
            border: 2px dashed #d1d5db;
            border-radius: 12px;
            padding: 40px 20px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            background: #fafbfc;
        }

        .email-template-file-upload:hover {
            border-color: #6366f1;
            background: #f8faff;
        }

        .email-template-file-upload.email-template-dragover {
            border-color: #6366f1;
            background: #eff6ff;
            transform: scale(1.02);
        }

        .email-template-upload-content iconify-icon {
            font-size: 48px;
            color: #9ca3af;
            margin-bottom: 16px;
        }

        .email-template-upload-content p {
            font-size: 14px;
            color: #6b7280;
            margin-bottom: 8px;
        }

        .email-template-upload-link {
            color: #6366f1;
            font-weight: 600;
            text-decoration: underline;
        }

        .email-template-upload-note {
            font-size: 12px;
            color: #9ca3af;
        }

        /* File Info Styles */
        .email-template-file-info {
            margin-top: 16px;
        }

        .email-template-file-details {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 16px;
            background: #f9fafb;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
        }

        .email-template-file-details iconify-icon {
            font-size: 24px;
            color: #6366f1;
            flex-shrink: 0;
        }

        .email-template-file-text {
            flex: 1;
            min-width: 0;
        }

        .email-template-file-name {
            font-size: 14px;
            font-weight: 600;
            color: #374151;
            margin-bottom: 2px;
        }

        .email-template-file-size {
            font-size: 12px;
            color: #6b7280;
        }

        .email-template-file-remove {
            background: none;
            border: none;
            color: #9ca3af;
            cursor: pointer;
            padding: 4px;
            border-radius: 4px;
            transition: all 0.2s ease;
            flex-shrink: 0;
        }

        .email-template-file-remove:hover {
            background: #fee2e2;
            color: #ef4444;
        }

        /* Editor Styles */
        .email-template-editor-toolbar {
            display: flex;
            align-items: center;
            gap: 4px;
            padding: 8px 12px;
            background: #f9fafb;
            border: 1px solid #e5e7eb;
            border-bottom: none;
            border-radius: 8px 8px 0 0;
        }

        .email-template-toolbar-btn {
            background: none;
            border: none;
            padding: 6px 8px;
            border-radius: 4px;
            cursor: pointer;
            color: #6b7280;
            transition: all 0.2s ease;
            font-size: 16px;
        }

        .email-template-toolbar-btn:hover {
            background-color: #e5e7eb;
            color: #374151;
        }

        .email-template-toolbar-divider {
            width: 1px;
            height: 20px;
            background-color: #e5e7eb;
            margin: 0 4px;
        }

        .email-template-editor {
            min-height: 300px;
            border: 1px solid #e5e7eb;
            border-radius: 0 0 8px 8px;
            padding: 16px;
            font-size: 14px;
            line-height: 1.6;
            color: #374151;
            background: white;
        }

        .email-template-editor:focus {
            outline: none;
            border-color: #6366f1;
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .email-template-editor p {
            margin-bottom: 12px;
        }

        .email-template-editor p:last-child {
            margin-bottom: 0;
        }

        .email-template-editor h2 {
            font-size: 20px;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 16px;
        }

        .email-template-editor h3 {
            font-size: 16px;
            font-weight: 600;
            color: #374151;
            margin-bottom: 12px;
            margin-top: 20px;
        }

        .email-template-editor ul {
            margin-bottom: 16px;
            padding-left: 20px;
        }

        .email-template-editor li {
            margin-bottom: 6px;
        }

        /* Variables Section */
        .email-template-variables {
            margin-top: 24px;
            padding-top: 24px;
            border-top: 1px solid #f3f4f6;
        }

        .email-template-variable-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 12px;
        }

        .email-template-variable-tag {
            background: #f3f4f6;
            color: #6366f1;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            font-family: 'Courier New', monospace;
        }

        .email-template-variable-tag:hover {
            background: #6366f1;
            color: white;
            transform: translateY(-1px);
        }

        .email-template-variable-help {
            font-size: 12px;
            color: #9ca3af;
            margin: 0;
            font-style: italic;
        }

        /* Statistics Section */
        .email-template-stat-item {
            text-align: center;
            padding: 16px;
            background: #f8f9fa;
            border-radius: 8px;
            margin-bottom: 16px;
        }

        .email-template-stat-value {
            font-size: 24px;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 4px;
        }

        .email-template-stat-label {
            font-size: 12px;
            color: #6b7280;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-weight: 600;
        }

        /* Activity List */
        .email-template-activity-list {
            max-height: 300px;
            overflow-y: auto;
        }

        .email-template-activity-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 16px;
            padding-bottom: 16px;
            border-bottom: 1px solid #f0f0f0;
        }

        .email-template-activity-item:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }

        .email-template-activity-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            margin-right: 12px;
            margin-top: 6px;
            flex-shrink: 0;
        }

        .email-template-activity-dot.email-template-success {
            background-color: #10b981;
        }

        .email-template-activity-dot.email-template-primary {
            background-color: #6366f1;
        }

        .email-template-activity-dot.email-template-warning {
            background-color: #f59e0b;
        }

        .email-template-activity-content {
            flex: 1;
        }

        .email-template-activity-title {
            font-weight: 600;
            color: #374151;
            font-size: 14px;
            margin-bottom: 2px;
        }

        .email-template-activity-subtitle {
            font-size: 12px;
            color: #6b7280;
        }

        /* Preview Styles */
        .email-template-preview {
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            overflow: hidden;
        }

        .email-template-preview-header {
            background: #f9fafb;
            padding: 16px;
            border-bottom: 1px solid #e5e7eb;
        }

        .email-template-preview-from,
        .email-template-preview-to,
        .email-template-preview-subject {
            font-size: 12px;
            margin-bottom: 6px;
            color: #6b7280;
        }

        .email-template-preview-from:last-child,
        .email-template-preview-to:last-child,
        .email-template-preview-subject:last-child {
            margin-bottom: 0;
        }

        .email-template-preview-divider {
            height: 1px;
            background: #e5e7eb;
        }

        .email-template-preview-body {
            padding: 16px;
            font-size: 14px;
            line-height: 1.6;
            color: #374151;
            min-height: 200px;
        }

        .email-template-preview-body p {
            margin-bottom: 12px;
        }

        .email-template-preview-body p:last-child {
            margin-bottom: 0;
        }

        .email-template-preview-body h2 {
            font-size: 18px;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 16px;
        }

        .email-template-preview-body h3 {
            font-size: 16px;
            font-weight: 600;
            color: #374151;
            margin-bottom: 12px;
            margin-top: 20px;
        }

        .email-template-preview-body ul {
            margin-bottom: 16px;
            padding-left: 20px;
        }

        .email-template-preview-body li {
            margin-bottom: 6px;
        }

        /* Preview Info */
        .email-template-preview-info {
            padding: 12px 16px;
            background: #f9fafb;
            border-top: 1px solid #e5e7eb;
        }

        .email-template-info-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
        }

        .email-template-info-item:last-child {
            margin-bottom: 0;
        }

        .email-template-info-label {
            font-size: 12px;
            color: #6b7280;
            font-weight: 500;
        }

        .email-template-info-value {
            font-size: 12px;
            color: #374151;
            font-weight: 600;
        }

        /* Badge Styles */
        .email-template-badge {
            display: inline-block;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .email-template-badge-success {
            background-color: #ecfdf5;
            color: #10b981;
        }

        .email-template-badge-secondary {
            background-color: #f3f4f6;
            color: #6b7280;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .email-template-sticky {
                position: static;
            }

            .email-template-variable-tags {
                justify-content: center;
            }

            .email-template-editor-toolbar {
                flex-wrap: wrap;
                gap: 2px;
            }

            .email-template-toolbar-btn {
                padding: 4px 6px;
                font-size: 14px;
            }

            .email-template-source-tabs {
                flex-direction: column;
                gap: 8px;
            }
        }

        @media (max-width: 480px) {
            .email-template-editor {
                min-height: 250px;
                padding: 12px;
            }

            .email-template-preview-header,
            .email-template-preview-body {
                padding: 12px;
            }
        }

        /* Button States */
        .btn-success {
            background-color: #10b981;
            border-color: #10b981;
            color: white;
        }

        .btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
    </style>
    <!-- Edit category end -->

@endsection