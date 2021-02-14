const select = document.querySelector("select");
const COUNTRY = "country";

function saveCountryHandler() {
  localStorage.setItem(COUNTRY, select.value);
}

function loadCountry() {
  const currentCountry = localStorage.getItem(COUNTRY);
  if (currentCountry !== null) {
    select.value = currentCountry;
  }
}

function init() {
  loadCountry();
  select.addEventListener("change", saveCountryHandler);
}
init();
