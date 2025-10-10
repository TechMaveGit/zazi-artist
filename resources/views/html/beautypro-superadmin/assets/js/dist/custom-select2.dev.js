"use strict";

(function () {
  "use strict";
  /* basic select2 */
  // Initialize Select2 for normal page

  $(".select2").select2({}).on('select2:open', function () {
    $('.select2-search__field').attr('placeholder', 'Search...');
  }); // Ensure Select2 is initialized when the modal is shown

  $('.custombottm_modalStyle').on('shown.bs.modal', function () {
    // Initialize Select2 for Select2 elements inside this Offcanvas
    $(this).find('.select2').select2({
      dropdownParent: $(this)
    }).on('select2:open', function () {
      $('.select2-search__field').attr('placeholder', 'Search...');
    });
    $(this).find(".input_tags").select2({
      tags: true,
      tokenSeparators: [',', ' ']
    });
  }); // Handle Offcanvas shown event for any offcanvas with the common class

  $('.commonoffcanvas_style').on('shown.bs.offcanvas', function () {
    // Initialize Select2 for Select2 elements inside this Offcanvas
    $(this).find('.select2').select2({
      dropdownParent: $(this)
    }).on('select2:open', function () {
      $('.select2-search__field').attr('placeholder', 'Search...');
    });
    $(this).find(".input_tags").select2({
      tags: true,
      tokenSeparators: [',', ' ']
    });
  }); // Close Select2 dropdown when clicking outside of it

  $(document).on('click', function (event) {
    // Normal page Select2
    if (!$(event.target).closest('.select2-container').length && $('.select2').data('select2')) {
      $('.select2').select2('close');
    }
  }); // Handle clicks inside the offcanvas specifically

  $('.custombottm_offcanvasStyle').on('click', function (event) {
    if (!$(event.target).closest('.select2-container').length && $(this).find('.select2').data('select2')) {
      $(this).find('.select2').select2('close');
    }
  });
  /* multiple select */

  $('.js-example-basic-multiple').select2(); // Single Select Placeholder

  $("#select2-with-placeholder").select2({
    placeholder: "Select a state",
    allowClear: true,
    dir: "ltr"
  });
  /* single select with placeholder */

  $("#select2-placeholder-single").select2({
    placeholder: "Select a state",
    allowClear: true,
    dir: "ltr"
  });
  /* multiple select with placeholder */

  $(".js-example-placeholder-multiple").select2({
    placeholder: "Select"
  });
  /* templating */

  function formatState(state) {
    if (!state.id) {
      return state.text;
    }

    var baseUrl = "../assets/images/faces/select2";
    var $state = $('<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.jpg" class="img-flag" /> ' + state.text + '</span>');
    return $state;
  }

  ;
  $(".js-example-templating").select2({
    templateResult: formatState,
    placeholder: "Choose Customer"
  });
  /* with images */

  function selectClient(client) {
    if (!client.id) {
      return client.text;
    }

    var $client = $('<span><img src="../assets/images/faces/select2/' + client.element.value.toLowerCase() + '.jpg" /> ' + client.text + '</span>');
    return $client;
  }

  ;
  $(".select2-client-search").select2({
    templateResult: selectClient,
    templateSelection: selectClient,
    placeholder: "Choose Client",
    escapeMarkup: function escapeMarkup(m) {
      return m;
    }
  });
  /* max selections limiting */

  $(".js-example-basic-multiple-limit-max").select2({
    maximumSelectionLength: 3,
    placeholder: "Choose Person"
  });
  /* Disablind select 2 controls */

  $(".js-example-disabled").select2();
  $(".js-example-disabled-multi").select2();
  $(".js-programmatic-enable").on("click", function () {
    $(".js-example-disabled").prop("disabled", false);
    $(".js-example-disabled-multi").prop("disabled", false);
  });
  $(".js-programmatic-disable").on("click", function () {
    $(".js-example-disabled").prop("disabled", true);
    $(".js-example-disabled-multi").prop("disabled", true);
  });
})();