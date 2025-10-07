// Available Users dropdown functions
function resetAvailableUsersFilter(dropdown) {
    var checkboxes = dropdown.querySelectorAll('.dropfilter_options input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
        checkbox.parentNode.style.display = "";
    });
    dropdown.querySelector('.availableUsersSearchInput').value = "";
    filterAvailableUsers(dropdown); // Reset filter also clears search results
    updateSelectedCount(dropdown);
}

function applyAvailableUsersFilter(dropdown) {
    var selectedAvailableUsers = [];
    var checkboxes = dropdown.querySelectorAll('.dropfilter_options input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            selectedAvailableUsers.push(checkbox.parentNode.textContent.trim());
        }
    });
    console.log("Selected available users:", selectedAvailableUsers);
    // You can further process the selected available users, like sending them to server or updating UI
    updateSelectedCount(dropdown);
}

function toggleAllAvailableUsers(dropdown) {
    var checkboxes = dropdown.querySelectorAll('.dropfilter_options input[type="checkbox"]');
    var selectAllCheckbox = dropdown.querySelector('.selectAllAvailableUsers');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = selectAllCheckbox.checked;
    });
    updateSelectedCount(dropdown);
}

function filterAvailableUsers(dropdown) {
    var input = dropdown.querySelector('.availableUsersSearchInput');
    var filter = input.value.toUpperCase();
    var inputElements = dropdown.querySelectorAll('.dropfilter_options input[type="checkbox"]');
    var found = false;
    inputElements.forEach(function(element) {
        var txtValue = element.parentNode.textContent || element.parentNode.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            element.parentNode.parentNode.style.display = "";
            found = true;
        } else {
            element.parentNode.parentNode.style.display = "none";
        }
    });
    var noDataMessage = dropdown.querySelector('.noAvailableUsersDataMessage');
    noDataMessage.style.display = found ? "none" : "block";
    updateSelectedCount(dropdown);
}

function updateSelectedCount(dropdown) {
    var checkboxes = dropdown.querySelectorAll('.dropfilter_options input[type="checkbox"]');
    var selectedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
    var dropdownButton = dropdown.parentNode.querySelector('.dropbtn');
    var icon = dropdownButton.querySelector('iconify-icon');
    dropdownButton.textContent = `${selectedCount} properties selected `;
    dropdownButton.appendChild(icon);
}

// Attach event listeners to each dropdown instance
document.querySelectorAll('.availableUsersDropdownWrapper').forEach(function(dropdownWrapper) {
    var dropdown = dropdownWrapper.querySelector('.availableUsersDropdown');
    dropdown.querySelector('.availableUsersSearchInput').addEventListener('keyup', function() {
        filterAvailableUsers(dropdown);
    });
    dropdown.querySelector('.selectAllAvailableUsers').addEventListener('click', function() {
        toggleAllAvailableUsers(dropdown);
    });
    dropdown.querySelector('.resetFilterButton').addEventListener('click', function() {
        resetAvailableUsersFilter(dropdown);
    });
    dropdown.querySelector('.applyFilterButton').addEventListener('click', function() {
        applyAvailableUsersFilter(dropdown);
    });

    // Check all checkboxes by default and update count
    var checkboxes = dropdown.querySelectorAll('.dropfilter_options input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = true;
    });
    updateSelectedCount(dropdown);
});
