const silder = document.getElementById("silder");
const MAXNUM = document.getElementById("MaxNum");
const GuessNum = document.getElementById("GuessNum");
const inputNum = document.getElementById("barNum");
const chose = document.querySelector(".js-chose");
const choseText = chose.querySelector("h4");
const winner = document.querySelector(".js-winner");
const winOrLost = winner.querySelector("h3");

function setRandomHandler(min, max) {
  randomNum = Math.floor(Math.random() * (0, silder.value)) + 1;
}

function goToPlayHandler() {
  const h4 = document.createElement("h4");
  choseText.innerText = `You chose:${inputNum.value},the machine chose:${randomNum}.`;

  if (inputNum.value === randomNum) {
    winOrLost.innerText = "You Win!";
  } else {
    winOrLost.innerText = "You Lost!";
  }
}

silder.oninput = function () {
  MAXNUM.innerText = this.value;
};

function init() {
  play.addEventListener("click", setRandomHandler);
  play.addEventListener("click", goToPlayHandler);
}
init();
