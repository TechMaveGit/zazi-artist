"use strict";

$(document).ready(function () {
  // Update the count of selected options
  function updateSelectedCount(dropdownWrapper) {
    var selectedCount = dropdownWrapper.find(".individual-option:checked").length;
    var selectedCountElement = dropdownWrapper.find(".selected-count");

    if (selectedCount === 0) {
      selectedCountElement.text("Select Location");
    } else if (selectedCount === 1) {
      selectedCountElement.text("1 selected");
    } else {
      selectedCountElement.text("".concat(selectedCount, " selected"));
    }
  } // Handle Select All checkbox


  $(".select-all-available-users").on("change", function () {
    var dropdownWrapper = $(this).closest(".available-users-dropdown-wrapper");
    var isChecked = $(this).prop("checked");
    dropdownWrapper.find(".individual-option").prop("checked", isChecked);
    updateSelectedCount(dropdownWrapper);
  }); // Handle individual option selection

  $(".individual-option").on("change", function () {
    var dropdownWrapper = $(this).closest(".available-users-dropdown-wrapper");
    var totalOptions = dropdownWrapper.find(".individual-option").length;
    var selectedOptions = dropdownWrapper.find(".individual-option:checked").length; // Toggle the Select All checkbox

    dropdownWrapper.find(".select-all-available-users").prop("checked", totalOptions === selectedOptions);
    updateSelectedCount(dropdownWrapper);
  }); // Reset Filter button

  $(".reset-filter").on("click", function () {
    var dropdownWrapper = $(this).closest(".available-users-dropdown-wrapper");
    dropdownWrapper.find(".individual-option").prop("checked", false);
    dropdownWrapper.find(".select-all-available-users").prop("checked", false);
    updateSelectedCount(dropdownWrapper);
  }); // Apply Filter button

  $(".apply-filter").on("click", function () {
    var dropdownWrapper = $(this).closest(".available-users-dropdown-wrapper");
    var selectedItems = dropdownWrapper.find(".individual-option:checked").map(function () {
      return $(this).parent().text().trim();
    }).get();
    console.log("Selected Items:", selectedItems);
  }); // Filter search functionality

  $(".available-users-search").on("keyup", function () {
    var dropdownWrapper = $(this).closest(".available-users-dropdown-wrapper");
    var searchTerm = $(this).val().toLowerCase();
    var options = dropdownWrapper.find(".mainoptionContainer");
    options.filter(function () {
      $(this).toggle($(this).text().toLowerCase().includes(searchTerm));
    });
    var noDataMessage = dropdownWrapper.find(".no-data");
    noDataMessage.toggle(options.filter(":visible").length === 0);
  });
});