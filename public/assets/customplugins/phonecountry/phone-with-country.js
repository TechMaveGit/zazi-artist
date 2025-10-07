const selectContainer = document.getElementById("js_pn-select");
const countrySearchInput = document.getElementById("js_search-input");
const noResultListItem = document.getElementById("js_no-results-found");
const dropdownTrigger = document.getElementById("js_trigger-dropdown");
const phoneNumberInput = document.getElementById("js_input-phonenumber");
const dropdownContainer = document.getElementById("js_dropdown");
const selectedPrefix = document.getElementById("js_number-prefix");
const selectedFlag = document.getElementById("js_selected-flag");
const listContainer = document.getElementById("js_list");

let countryList;

const init = async countries => {
  const selectCountry = e => {
    const { flag, prefix } = e.target.closest("li").dataset;
    setNewSelected(prefix, flag);
    closeDropdown();
    addSelectedModifier(flag);
  };

  // -------------- Update the 'Selected country flag' to reflect changes

  const setNewSelected = (prefix, flag) => {
    selectedFlag.src = `https://flagpedia.net/data/flags/icon/36x27/${flag}.png`;
    selectedPrefix.value = `+${prefix}`;
    selectContainer.style.setProperty("--prefix-length", prefix.length);
  };

  // -------------- Removes and adds modifier to selected country

  const addSelectedModifier = flag => {
    const previousSelected = document.getElementsByClassName(
    "pn-list-item--selected")[
    0];
    const newSelected = document.querySelectorAll(
    `.pn-list-item[data-flag=${flag}]`)[
    0];
    previousSelected.classList.remove("pn-list-item--selected");
    newSelected.classList.add("pn-list-item--selected");
  };

  // -------------- Close dropdown

  const closeDropdown = () => {
    selectContainer.classList.remove("pn-select--open");
    listContainer.scrollTop = 0;
    countrySearchInput.value = "";
    countryList.search();
    phoneNumberInput.focus();
    removeDropdownEvents();
  };

  // -------------- Open dropdown

  const openDropdown = () => {
    selectContainer.classList.add("pn-select--open");
    attatchDropdownEvents();
  };

  // -------------- Dropdown event listeners

  let countdown;

  const closeOnMouseLeave = () => {
    // console.log("countdown activated");
    countdown = setTimeout(() => closeDropdown(), 2000);
  };

  const clearTimeOut = () => clearTimeout(countdown);

  const attatchDropdownEvents = () => {
    // console.log("Adding event listeners");
    dropdownContainer.addEventListener("mouseleave", closeOnMouseLeave);
    dropdownContainer.addEventListener("mouseenter", clearTimeOut);
  };

  const removeDropdownEvents = () => {
    // console.log("Removing event listeners and countdown");
    clearTimeout(countdown);
    dropdownContainer.removeEventListener("mouseleave", closeOnMouseLeave);
    dropdownContainer.removeEventListener("mouseenter", clearTimeOut);
  };

  // -------------- Close when clicked outside the dropdown

  document.addEventListener("click", e => {
    if (
    e.target !== selectContainer &&
    !selectContainer.contains(e.target) &&
    selectContainer.classList.contains("pn-select--open"))
    {
      closeDropdown();
    }
  });

  // -------------- Append generated listItems to list element

  const createList = () =>
  new Promise((resolve, _) => {
    countries.forEach((country, index, countries) => {
      const { name, prefix, flag } = country;

      const element = `<li class="pn-list-item ${
      flag === "nl" ? "pn-list-item--selected" : ""
      } js_pn-list-item" data-flag="${flag}" data-prefix="${prefix}" tabindex="0" role="button" aria-pressed="false">
          <img class="pn-list-item__flag" src="https://flagpedia.net/data/flags/icon/36x27/${flag}.png" />
          <span class="pn-list-item__country js_country-name">${name}</span>
          <span class="pn-list-item__prefix js_country-prefix">(+${prefix})</span>
        </li>`;

      listContainer.innerHTML += element;

      if (index === countries.length - 1) {
        resolve();
      }
    });
  });

  // -------------- After all the listItems are created we loop over the items to attach the eventListeners

  const attatchListItemEventListeners = () =>
  new Promise((resolve, _) => {
    const listItems = [...document.getElementsByClassName("js_pn-list-item")];

    listItems.forEach((item, index, listItems) => {
      item.addEventListener("click", event => {
        selectCountry(event);
      });
      // Keydown event listener - https://dev.to/tylerjdev/when-role-button-is-not-enough-dac
      item.addEventListener("keydown", function (e) {
        const keyD = e.key !== undefined ? e.key : e.keyCode;
        if (
        keyD === "Enter" ||
        keyD === 13 ||
        ["Spacebar", " "].indexOf(keyD) >= 0 ||
        keyD === 32)
        {
          e.preventDefault();
          this.click();
        }
      });

      if (index === listItems.length - 1) {
        resolve();
      }
    });
  });

  // -------------- After all the listItems are created we initate list and it's listeners

  const initiateList = () => {
    countryList = new List("js_pn-select", {
      valueNames: ["js_country-name", "js_country-prefix"] });


    // Add 'updated' listener for search results
    countryList.on("updated", list => {
      if (list.matchingItems.length < 5)
      listContainer.classList.toggle("pn-list--no-scroll");

      noResultListItem.style.display =
      list.matchingItems.length > 0 ? "none" : "block";
    });
  };

  await createList();
  await attatchListItemEventListeners();
  initiateList();

  dropdownTrigger.addEventListener("click", () => {
    const isOpen = selectContainer.classList.contains("pn-select--open");
    isOpen ? closeDropdown() : openDropdown();
  });
};

const countries = [
  { name: "Austria", prefix: 43, flag: "at" },
  { name: "Belgium", prefix: 32, flag: "be" },
  { name: "Bulgaria", prefix: 359, flag: "bg" },
  { name: "Croatia", prefix: 385, flag: "hr" },
  { name: "Cyprus", prefix: 357, flag: "cy" },
  { name: "Czech Republic", prefix: 420, flag: "cz" },
  { name: "Denmark", prefix: 45, flag: "dk" },
  { name: "Estonia", prefix: 372, flag: "ee" },
  { name: "Finland", prefix: 358, flag: "fi" },
  { name: "France", prefix: 33, flag: "fr" },
  { name: "Germany", prefix: 49, flag: "de" },
  { name: "Greece", prefix: 30, flag: "gr" },
  { name: "Hungary", prefix: 36, flag: "hu" },
  { name: "Iceland", prefix: 354, flag: "is" },
  { name: "Republic of Ireland", prefix: 353, flag: "ie" },
  { name: "Italy", prefix: 39, flag: "it" },
  { name: "Latvia", prefix: 371, flag: "lv" },
  { name: "Liechtenstein", prefix: 423, flag: "li" },
  { name: "Lithuania", prefix: 370, flag: "lt" },
  { name: "Luxembourg", prefix: 352, flag: "lu" },
  { name: "Malta", prefix: 356, flag: "mt" },
  { name: "Netherlands", prefix: 31, flag: "nl" },
  { name: "Norway", prefix: 47, flag: "no" },
  { name: "Poland", prefix: 48, flag: "pl" },
  { name: "Portugal", prefix: 351, flag: "pt" },
  { name: "Romania", prefix: 40, flag: "ro" },
  { name: "Slovakia", prefix: 421, flag: "sk" },
  { name: "Slovenia", prefix: 386, flag: "si" },
  { name: "Spain", prefix: 34, flag: "es" },
  { name: "Sweden", prefix: 46, flag: "se" },
  { name: "Afghanistan", prefix: 93, flag: "af" },
  { name: "Albania", prefix: 355, flag: "al" },
  { name: "Algeria", prefix: 213, flag: "dz" },
  { name: "Andorra", prefix: 376, flag: "ad" },
  { name: "Angola", prefix: 244, flag: "ao" },
  { name: "Antigua and Barbuda", prefix: 1, flag: "ag" },
  { name: "Argentina", prefix: 54, flag: "ar" },
  { name: "Armenia", prefix: 374, flag: "am" },
  { name: "Australia", prefix: 61, flag: "au" },
  { name: "Bahamas", prefix: 1, flag: "bs" },
  { name: "Bahrain", prefix: 973, flag: "bh" },
  { name: "Bangladesh", prefix: 880, flag: "bd" },
  { name: "Barbados", prefix: 1, flag: "bb" },
  { name: "Belize", prefix: 501, flag: "bz" },
  { name: "Benin", prefix: 229, flag: "bj" },
  { name: "Bhutan", prefix: 975, flag: "bt" },
  { name: "Bolivia", prefix: 591, flag: "bo" },
  { name: "Bosnia and Herzegovina", prefix: 387, flag: "ba" },
  { name: "Botswana", prefix: 267, flag: "bw" },
  { name: "Brazil", prefix: 55, flag: "br" },
  { name: "Brunei Darussalam", prefix: 673, flag: "bn" },
  { name: "Burkina Faso", prefix: 226, flag: "bf" },
  { name: "Burundi", prefix: 257, flag: "bi" },
  { name: "Cambodia", prefix: 855, flag: "kh" },
  { name: "Cameroon", prefix: 237, flag: "cm" },
  { name: "Canada", prefix: 1, flag: "ca" },
  { name: "Central African Republic", prefix: 236, flag: "cf" },
  { name: "Chad", prefix: 235, flag: "td" },
  { name: "Chile", prefix: 56, flag: "cl" },
  { name: "Colombia", prefix: 57, flag: "co" },
  { name: "Comoros", prefix: 269, flag: "km" },
  { name: "Congo", prefix: 242, flag: "cg" },
  { name: "Congo, Democratic Republic of the", prefix: 243, flag: "cd" },
  { name: "Costa Rica", prefix: 506, flag: "cr" },
  { name: "Cote d'Ivoire", prefix: 225, flag: "ci" },
  { name: "Croatia", prefix: 385, flag: "hr" },
  { name: "Cuba", prefix: 53, flag: "cu" },
  { name: "Cyprus", prefix: 357, flag: "cy" },
  { name: "Djibouti", prefix: 253, flag: "dj" },
  { name: "Dominica", prefix: 1, flag: "dm" },
  { name: "Dominican Republic", prefix: 1, flag: "do" },
  { name: "Ecuador", prefix: 593, flag: "ec" },
  { name: "Egypt", prefix: 20, flag: "eg" },
  { name: "El Salvador", prefix: 503, flag: "sv" },
  { name: "Equatorial Guinea", prefix: 240, flag: "gq" },
  { name: "Eritrea", prefix: 291, flag: "er" },
  { name: "Estonia", prefix: 372, flag: "ee" },
  { name: "Eswatini", prefix: 268, flag: "sz" },
  { name: "Ethiopia", prefix: 251, flag: "et" },
  { name: "Fiji", prefix: 679, flag: "fj" },
  { name: "Gabon", prefix: 241, flag: "ga" },
  { name: "Gambia", prefix: 220, flag: "gm" },
  { name: "Georgia", prefix: 995, flag: "ge" },
  { name: "Ghana", prefix: 233, flag: "gh" },
  { name: "Grenada", prefix: 1, flag: "gd" },
  { name: "Guatemala", prefix: 502, flag: "gt" },
  { name: "Guinea", prefix: 224, flag: "gn" },
  { name: "Guinea-Bissau", prefix: 245, flag: "gw" },
  { name: "Guyana", prefix: 592, flag: "gy" },
  { name: "Haiti", prefix: 509, flag: "ht" },
  { name: "Honduras", prefix: 504, flag: "hn" },
  { name: "Hungary", prefix: 36, flag: "hu" },
  { name: "Iceland", prefix: 354, flag: "is" },
  { name: "India", prefix: 91, flag: "in" },
  { name: "Indonesia", prefix: 62, flag: "id" },
  { name: "Iran", prefix: 98, flag: "ir" },
  { name: "Iraq", prefix: 964, flag: "iq" },
  { name: "Ireland", prefix: 353, flag: "ie" },
  { name: "Israel", prefix: 972, flag: "il" },
  { name: "Italy", prefix: 39, flag: "it" },
  { name: "Jamaica", prefix: 1, flag: "jm" },
  { name: "Japan", prefix: 81, flag: "jp" },
  { name: "Jordan", prefix: 962, flag: "jo" },
  { name: "Kazakhstan", prefix: 7, flag: "kz" },
  { name: "Kenya", prefix: 254, flag: "ke" },
  { name: "Kiribati", prefix: 686, flag: "ki" },
  { name: "Korea, North", prefix: 850, flag: "kp" },
  { name: "Korea, South", prefix: 82, flag: "kr" },
  { name: "Kuwait", prefix: 965, flag: "kw" },
  { name: "Kyrgyzstan", prefix: 996, flag: "kg" },
  { name: "Laos", prefix: 856, flag: "la" },
  { name: "Latvia", prefix: 371, flag: "lv" },
  { name: "Lebanon", prefix: 961, flag: "lb" },
  { name: "Lesotho", prefix: 266, flag: "ls" },
  { name: "Liberia", prefix: 231, flag: "lr" },
  { name: "Libya", prefix: 218, flag: "ly" },
  { name: "Liechtenstein", prefix: 423, flag: "li" },
  { name: "Lithuania", prefix: 370, flag: "lt" },
  { name: "Luxembourg", prefix: 352, flag: "lu" },
  { name: "Madagascar", prefix: 261, flag: "mg" },
  { name: "Malawi", prefix: 265, flag: "mw" },
  { name: "Malaysia", prefix: 60, flag: "my" },
  { name: "Maldives", prefix: 960, flag: "mv" },
  { name: "Mali", prefix: 223, flag: "ml" },
  { name: "Malta", prefix: 356, flag: "mt" },
  { name: "Marshall Islands", prefix: 692, flag: "mh" },
  { name: "Mauritania", prefix: 222, flag: "mr" },
  { name: "Mauritius", prefix: 230, flag: "mu" },
  { name: "Mexico", prefix: 52, flag: "mx" },
  { name: "Micronesia", prefix: 691, flag: "fm" },
  { name: "Moldova", prefix: 373, flag: "md" },
  { name: "Monaco", prefix: 377, flag: "mc" },
  { name: "Mongolia", prefix: 976, flag: "mn" },
  { name: "Montenegro", prefix: 382, flag: "me" },
  { name: "Morocco", prefix: 212, flag: "ma" },
  { name: "Mozambique", prefix: 258, flag: "mz" },
  { name: "Myanmar", prefix: 95, flag: "mm" },
  { name: "Namibia", prefix: 264, flag: "na" },
  { name: "Nauru", prefix: 674, flag: "nr" },
  { name: "Nepal", prefix: 977, flag: "np" },
  { name: "Netherlands", prefix: 31, flag: "nl" },
  { name: "New Zealand", prefix: 64, flag: "nz" },
  { name: "Nicaragua", prefix: 505, flag: "ni" },
  { name: "Niger", prefix: 227, flag: "ne" },
  { name: "Nigeria", prefix: 234, flag: "ng" },
  { name: "North Macedonia", prefix: 389, flag: "mk" },
  { name: "Norway", prefix: 47, flag: "no" },
  { name: "Oman", prefix: 968, flag: "om" },
  { name: "Pakistan", prefix: 92, flag: "pk" },
  { name: "Palau", prefix: 680, flag: "pw" },
  { name: "Palestine", prefix: 970, flag: "ps" },
  { name: "Panama", prefix: 507, flag: "pa" },
  { name: "Papua New Guinea", prefix: 675, flag: "pg" },
  { name: "Paraguay", prefix: 595, flag: "py" },
  { name: "Peru", prefix: 51, flag: "pe" },
  { name: "Philippines", prefix: 63, flag: "ph" },
  { name: "Poland", prefix: 48, flag: "pl" },
  { name: "Portugal", prefix: 351, flag: "pt" },
  { name: "Qatar", prefix: 974, flag: "qa" },
  { name: "Romania", prefix: 40, flag: "ro" },
  { name: "Russia", prefix: 7, flag: "ru" },
  { name: "Rwanda", prefix: 250, flag: "rw" },
  { name: "Saint Kitts and Nevis", prefix: 1, flag: "kn" },
  { name: "Saint Lucia", prefix: 1, flag: "lc" },
  { name: "Saint Vincent and the Grenadines", prefix: 1, flag: "vc" },
  { name: "Samoa", prefix: 685, flag: "ws" },
  { name: "San Marino", prefix: 378, flag: "sm" },
  { name: "Sao Tome and Principe", prefix: 239, flag: "st" },
  { name: "Saudi Arabia", prefix: 966, flag: "sa" },
  { name: "Senegal", prefix: 221, flag: "sn" },
  { name: "Serbia", prefix: 381, flag: "rs" },
  { name: "Seychelles", prefix: 248, flag: "sc" },
  { name: "Sierra Leone", prefix: 232, flag: "sl" },
  { name: "Singapore", prefix: 65, flag: "sg" },
  { name: "Slovakia", prefix: 421, flag: "sk" },
  { name: "Slovenia", prefix: 386, flag: "si" },
  { name: "Solomon Islands", prefix: 677, flag: "sb" },
  { name: "Somalia", prefix: 252, flag: "so" },
  { name: "South Africa", prefix: 27, flag: "za" },
  { name: "South Sudan", prefix: 211, flag: "ss" },
  { name: "Spain", prefix: 34, flag: "es" },
  { name: "Sri Lanka", prefix: 94, flag: "lk" },
  { name: "Sudan", prefix: 249, flag: "sd" },
  { name: "Suriname", prefix: 597, flag: "sr" },
  { name: "Sweden", prefix: 46, flag: "se" },
  { name: "Switzerland", prefix: 41, flag: "ch" },
  { name: "Syria", prefix: 963, flag: "sy" },
  { name: "Taiwan", prefix: 886, flag: "tw" },
  { name: "Tajikistan", prefix: 992, flag: "tj" },
  { name: "Tanzania", prefix: 255, flag: "tz" },
  { name: "Thailand", prefix: 66, flag: "th" },
  { name: "Timor-Leste", prefix: 670, flag: "tl" },
  { name: "Togo", prefix: 228, flag: "tg" },
  { name: "Tonga", prefix: 676, flag: "to" },
  { name: "Trinidad and Tobago", prefix: 1, flag: "tt" },
  { name: "Tunisia", prefix: 216, flag: "tn" },
  { name: "Turkey", prefix: 90, flag: "tr" },
  { name: "Turkmenistan", prefix: 993, flag: "tm" },
  { name: "Tuvalu", prefix: 688, flag: "tv" },
  { name: "Uganda", prefix: 256, flag: "ug" },
  { name: "Ukraine", prefix: 380, flag: "ua" },
  { name: "United Arab Emirates", prefix: 971, flag: "ae" },
  { name: "United Kingdom", prefix: 44, flag: "gb" },
  { name: "United States", prefix: 1, flag: "us" },
  { name: "Uruguay", prefix: 598, flag: "uy" },
  { name: "Uzbekistan", prefix: 998, flag: "uz" },
  { name: "Vanuatu", prefix: 678, flag: "vu" },
  { name: "Vatican City", prefix: 379, flag: "va" },
  { name: "Venezuela", prefix: 58, flag: "ve" },
  { name: "Vietnam", prefix: 84, flag: "vn" },
  { name: "Yemen", prefix: 967, flag: "ye" },
  { name: "Zambia", prefix: 260, flag: "zm" },
  { name: "Zimbabwe", prefix: 263, flag: "zw" },
];

init(countries);