"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var desktopTab = document.getElementById("desktopTab");
  var productTab = document.getElementById("productTab");
  var mobileTab = document.getElementById("mobileTab");
  var desktopView = document.getElementById("desktopView");
  var productView = document.getElementById("productView");
  var mobileView = document.getElementById("mobileView");
  var desktopBanner = document.getElementById("desktopBanner");
  var productBanner = document.getElementById("productBanner");
  var mobileBanner = document.getElementById("mobileBanner");
  var desktopPreview = document.getElementById("desktopPreview");
  var productPreview = document.getElementById("productPreview");
  var mobilePreview = document.getElementById("mobilePreview");
  var desktopUpload = document.getElementById("desktopUpload");
  var productUpload = document.getElementById("productUpload");
  var mobileUpload = document.getElementById("mobileUpload");
  var desktopFooter = document.getElementById("desktopFooter");
  var productFooter = document.getElementById("productFooter");
  var mobileFooter = document.getElementById("mobileFooter");
  var desktopProgressBar = document.getElementById("desktopProgressBar");
  var productProgressBar = document.getElementById("productProgressBar");
  var mobileProgressBar = document.getElementById("mobileProgressBar");
  var desktopProgressBarInner = desktopProgressBar.querySelector('.progress-bar-inner');
  var productProgressBarInner = productProgressBar.querySelector('.progress-bar-inner');
  var mobileProgressBarInner = mobileProgressBar.querySelector('.progress-bar-inner'); // Required dimensions for each tab

  var requiredDimensions = {
    desktop: {
      width: 1920,
      height: 600
    },
    product: {
      width: 1920,
      height: 400
    },
    mobile: {
      width: 1080,
      height: 1920
    }
  }; // Tab switching

  desktopTab.addEventListener("click", function () {
    desktopTab.classList.add("active");
    productTab.classList.remove("active");
    mobileTab.classList.remove("active");
    desktopView.classList.add("active");
    productView.classList.remove("active");
    mobileView.classList.remove("active");
  });
  productTab.addEventListener("click", function () {
    productTab.classList.add("active");
    desktopTab.classList.remove("active");
    mobileTab.classList.remove("active");
    productView.classList.add("active");
    desktopView.classList.remove("active");
    mobileView.classList.remove("active");
  });
  mobileTab.addEventListener("click", function () {
    mobileTab.classList.add("active");
    desktopTab.classList.remove("active");
    productTab.classList.remove("active");
    mobileView.classList.add("active");
    desktopView.classList.remove("active");
    productView.classList.remove("active");
  }); // Trigger file input on click

  desktopUpload.addEventListener("click", function () {
    return desktopBanner.click();
  });
  productUpload.addEventListener("click", function () {
    return productBanner.click();
  });
  mobileUpload.addEventListener("click", function () {
    return mobileBanner.click();
  }); // Image preview and upload handling

  var handleFileUpload = function handleFileUpload(file, previewElement, container, footerElement, progressBar, progressBarInner, requiredWidth, requiredHeight) {
    if (file) {
      var reader = new FileReader();

      reader.onload = function (event) {
        previewElement.src = event.target.result;
        previewElement.style.display = "block";
        container.querySelector("p").style.display = "none";
      };

      reader.readAsDataURL(file); // Get image dimensions

      var image = new Image();

      image.onload = function () {
        var dimensions = "".concat(image.width, "x").concat(image.height, "px");
        var fileName = file.name;
        var fileSize = (file.size / 1024).toFixed(2) + " KB"; // Validate dimensions

        if (image.width !== requiredWidth || image.height !== requiredHeight) {
          footerElement.innerHTML = "<p style=\"color: red;\">Error: Image dimensions must be ".concat(requiredWidth, "x").concat(requiredHeight, "px.</p>");
          footerElement.style.display = "block";
          previewElement.style.display = "none"; // Hide preview

          container.querySelector("p").style.display = "block"; // Show "Click to upload" message

          progressBar.style.display = "none"; // Hide progress bar

          return; // Stop further execution if dimensions are invalid
        } // Update footer with file details


        footerElement.innerHTML = "<p>File Name: ".concat(fileName, "</p>\n                                           <p>File Size: ").concat(fileSize, "</p>\n                                           <p>Dimensions: ").concat(dimensions, "</p>");
        footerElement.style.display = "block"; // Show footer
        // Show progress bar

        progressBar.style.display = "block"; // Simulate upload progress

        var progress = 0;
        var interval = setInterval(function () {
          progress += 10;
          progressBarInner.style.width = "".concat(progress, "%");

          if (progress >= 100) {
            clearInterval(interval);
          }
        }, 300);
      };

      image.src = URL.createObjectURL(file);
    }
  }; // Update event listeners for Desktop, Product, and Mobile


  desktopBanner.addEventListener("change", function (e) {
    handleFileUpload(e.target.files[0], desktopPreview, desktopUpload, desktopFooter, desktopProgressBar, desktopProgressBarInner, requiredDimensions.desktop.width, requiredDimensions.desktop.height);
  });
  productBanner.addEventListener("change", function (e) {
    handleFileUpload(e.target.files[0], productPreview, productUpload, productFooter, productProgressBar, productProgressBarInner, requiredDimensions.product.width, requiredDimensions.product.height);
  });
  mobileBanner.addEventListener("change", function (e) {
    handleFileUpload(e.target.files[0], mobilePreview, mobileUpload, mobileFooter, mobileProgressBar, mobileProgressBarInner, requiredDimensions.mobile.width, requiredDimensions.mobile.height);
  }); // Drag-and-drop functionality

  var addDragAndDrop = function addDragAndDrop(container, inputElement, previewElement, footerElement, progressBar, progressBarInner, requiredWidth, requiredHeight) {
    container.addEventListener("dragover", function (e) {
      e.preventDefault();
      container.classList.add("dragover");
    });
    container.addEventListener("dragleave", function () {
      container.classList.remove("dragover");
    });
    container.addEventListener("drop", function (e) {
      e.preventDefault();
      container.classList.remove("dragover");
      var file = e.dataTransfer.files[0];
      inputElement.files = e.dataTransfer.files; // Update the input element with the dropped file

      handleFileUpload(file, previewElement, container, footerElement, progressBar, progressBarInner, requiredWidth, requiredHeight);
    });
  }; // Apply drag-and-drop to Desktop, Product, and Mobile


  addDragAndDrop(desktopUpload, desktopBanner, desktopPreview, desktopFooter, desktopProgressBar, desktopProgressBarInner, requiredDimensions.desktop.width, requiredDimensions.desktop.height);
  addDragAndDrop(productUpload, productBanner, productPreview, productFooter, productProgressBar, productProgressBarInner, requiredDimensions.product.width, requiredDimensions.product.height);
  addDragAndDrop(mobileUpload, mobileBanner, mobilePreview, mobileFooter, mobileProgressBar, mobileProgressBarInner, requiredDimensions.mobile.width, requiredDimensions.mobile.height);
});