const numBtn = document.getElementsByClassName("js-numBtn");
const calBtn = document.getElementsByClassName("js-calBtn");
const resetBtn = document.querySelector(".js-resetBtn");
const equalBtn = document.querySelector(".js-equalBtn");
const printNum = document.querySelector(".js-printNum");

function myNumberhandler(event) {
  const number = event.target.innerText;
  myPrint(number);
}

function init() {
  for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener("click", myNumberhandler, false);
  }
}
init();
