document.addEventListener("DOMContentLoaded", function () {
    const desktopTab = document.getElementById("desktopTab");
    const productTab = document.getElementById("productTab");
    const mobileTab = document.getElementById("mobileTab");
    const desktopView = document.getElementById("desktopView");
    const productView = document.getElementById("productView");
    const mobileView = document.getElementById("mobileView");
    const desktopBanner = document.getElementById("desktopBanner");
    const productBanner = document.getElementById("productBanner");
    const mobileBanner = document.getElementById("mobileBanner");
    const desktopPreview = document.getElementById("desktopPreview");
    const productPreview = document.getElementById("productPreview");
    const mobilePreview = document.getElementById("mobilePreview");
    const desktopUpload = document.getElementById("desktopUpload");
    const productUpload = document.getElementById("productUpload");
    const mobileUpload = document.getElementById("mobileUpload");
    const desktopFooter = document.getElementById("desktopFooter");
    const productFooter = document.getElementById("productFooter");
    const mobileFooter = document.getElementById("mobileFooter");
    const desktopProgressBar = document.getElementById("desktopProgressBar");
    const productProgressBar = document.getElementById("productProgressBar");
    const mobileProgressBar = document.getElementById("mobileProgressBar");
    const desktopProgressBarInner = desktopProgressBar.querySelector('.progress-bar-inner');
    const productProgressBarInner = productProgressBar.querySelector('.progress-bar-inner');
    const mobileProgressBarInner = mobileProgressBar.querySelector('.progress-bar-inner');

    // Required dimensions for each tab
    const requiredDimensions = {
        desktop: { width: 1200, height: 400 },
        product: { width: 1200, height: 300 },
        mobile: { width: 335, height: 168 },
    };

    // Tab switching
    desktopTab.addEventListener("click", () => {
        desktopTab.classList.add("active");
        productTab.classList.remove("active");
        mobileTab.classList.remove("active");
        desktopView.classList.add("active");
        productView.classList.remove("active");
        mobileView.classList.remove("active");
    });

    productTab.addEventListener("click", () => {
        productTab.classList.add("active");
        desktopTab.classList.remove("active");
        mobileTab.classList.remove("active");
        productView.classList.add("active");
        desktopView.classList.remove("active");
        mobileView.classList.remove("active");
    });

    mobileTab.addEventListener("click", () => {
        mobileTab.classList.add("active");
        desktopTab.classList.remove("active");
        productTab.classList.remove("active");
        mobileView.classList.add("active");
        desktopView.classList.remove("active");
        productView.classList.remove("active");
    });

    // Trigger file input on click
    desktopUpload.addEventListener("click", () => desktopBanner.click());
    productUpload.addEventListener("click", () => productBanner.click());
    mobileUpload.addEventListener("click", () => mobileBanner.click());

    // Image preview and upload handling
    const handleFileUpload = (file, previewElement, container, footerElement, progressBar, progressBarInner, requiredWidth, requiredHeight) => {
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                previewElement.src = event.target.result;
                previewElement.style.display = "block";
                container.querySelector("p").style.display = "none";
            };
            reader.readAsDataURL(file);

            // Get image dimensions
            const image = new Image();
            image.onload = () => {
                const dimensions = `${image.width}x${image.height}px`;
                const fileName = file.name;
                const fileSize = (file.size / 1024).toFixed(2) + " KB";

                // Validate dimensions
                if (image.width !== requiredWidth || image.height !== requiredHeight) {
                    footerElement.innerHTML = `<p style="color: red;">Error: Image dimensions must be ${requiredWidth}x${requiredHeight}px.</p>`;
                    footerElement.style.display = "block";
                    previewElement.style.display = "none"; // Hide preview
                    container.querySelector("p").style.display = "block"; // Show "Click to upload" message
                    progressBar.style.display = "none"; // Hide progress bar
                    return; // Stop further execution if dimensions are invalid
                }

                // Update footer with file details
                footerElement.innerHTML = `<p>File Name: ${fileName}</p>
                                           <p>File Size: ${fileSize}</p>
                                           <p>Dimensions: ${dimensions}</p>`;
                footerElement.style.display = "block"; // Show footer

                // Show progress bar
                progressBar.style.display = "block";

                // Simulate upload progress
                let progress = 0;
                const interval = setInterval(() => {
                    progress += 10;
                    progressBarInner.style.width = `${progress}%`;
                    if (progress >= 100) {
                        clearInterval(interval);
                    }
                }, 300);
            };
            image.src = URL.createObjectURL(file);
        }
    };

    // Update event listeners for Desktop, Product, and Mobile
    desktopBanner.addEventListener("change", (e) => {
        handleFileUpload(
            e.target.files[0],
            desktopPreview,
            desktopUpload,
            desktopFooter,
            desktopProgressBar,
            desktopProgressBarInner,
            requiredDimensions.desktop.width,
            requiredDimensions.desktop.height
        );
    });

    productBanner.addEventListener("change", (e) => {
        handleFileUpload(
            e.target.files[0],
            productPreview,
            productUpload,
            productFooter,
            productProgressBar,
            productProgressBarInner,
            requiredDimensions.product.width,
            requiredDimensions.product.height
        );
    });

    mobileBanner.addEventListener("change", (e) => {
        handleFileUpload(
            e.target.files[0],
            mobilePreview,
            mobileUpload,
            mobileFooter,
            mobileProgressBar,
            mobileProgressBarInner,
            requiredDimensions.mobile.width,
            requiredDimensions.mobile.height
        );
    });

    // Drag-and-drop functionality
    const addDragAndDrop = (container, inputElement, previewElement, footerElement, progressBar, progressBarInner, requiredWidth, requiredHeight) => {
        container.addEventListener("dragover", (e) => {
            e.preventDefault();
            container.classList.add("dragover");
        });

        container.addEventListener("dragleave", () => {
            container.classList.remove("dragover");
        });

        container.addEventListener("drop", (e) => {
            e.preventDefault();
            container.classList.remove("dragover");
            const file = e.dataTransfer.files[0];
            inputElement.files = e.dataTransfer.files; // Update the input element with the dropped file
            handleFileUpload(file, previewElement, container, footerElement, progressBar, progressBarInner, requiredWidth, requiredHeight);
        });
    };

    // Apply drag-and-drop to Desktop, Product, and Mobile
    addDragAndDrop(desktopUpload, desktopBanner, desktopPreview, desktopFooter, desktopProgressBar, desktopProgressBarInner, requiredDimensions.desktop.width, requiredDimensions.desktop.height);
    addDragAndDrop(productUpload, productBanner, productPreview, productFooter, productProgressBar, productProgressBarInner, requiredDimensions.product.width, requiredDimensions.product.height);
    addDragAndDrop(mobileUpload, mobileBanner, mobilePreview, mobileFooter, mobileProgressBar, mobileProgressBarInner, requiredDimensions.mobile.width, requiredDimensions.mobile.height);
});