const select = document.querySelector("select");
const option = select.querySelector("option");
const COUNTRY = "country";

function saveCountryHandler() {
  localStorage.setItem(COUNTRY, select.value);
}

select.addEventListener("change", saveCountryHandler);

function loadCountry() {
  const currentCountry = localStorage.getItem(COUNTRY);
  select.value = currentCountry;
}

function init() {
  loadCountry();
}
init();
