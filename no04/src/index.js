const select = document.querySelector("select");

const COUNTRY = "country";

function savecountry(value) {
  localStorage.setItem(COUNTRY, select.value);
}

function selecter(event) {
  console.log(event.target.value);
  const loadcountry = localStorage.getItem(COUNTRY);
  if (loadcountry === null) {
    savecountry();
  }
}

select.addEventListener("change", selecter);
