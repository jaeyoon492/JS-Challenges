const numBtn = document.getElementsByClassName("js-numBtn");
const calBtn = document.getElementsByClassName("js-calBtn");
const resetBtn = document.querySelector(".js-resetBtn");
const equalBtn = document.querySelector(".js-equalBtn");
const printNum = document.querySelector(".js-printNum");

printNum.innerHTML = "";

function myPrint(number) {
  const result = printNum.innerHTML;
  printNum.innerHTML += number;
  calculation(myPrint);
}

function myNumberHandler(event) {
  const number = event.target.innerText;
  myPrint(number);
}

function myCalculateHandler(event) {
  const calculate = event.target.innerText;
}

for (let i = 0; i < numBtn.length; i++) {
  numBtn[i].addEventListener("click", myNumberHandler, false);
}

for (let u = 0; u < calBtn.length; u++) {
  calBtn[u].addEventListener("click", myCalculateHandler, false);
}
