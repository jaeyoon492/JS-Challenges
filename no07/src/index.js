const numBtn = document.getElementsByClassName("js-numBtn");
const calBtn = document.getElementsByClassName("js-calBtn");
const resetBtn = document.querySelector(".js-resetBtn");
const equalBtn = document.querySelector(".js-equalBtn");
const printNum = document.querySelector(".js-printNum");

let resetFlag = false;
printNum.innerHTML = "";

function letsCalculate(number, calculate, result) {
  calculate = parseInt(calculate);
  if ((calculate = "+")) {
    result = number + result;
    return result;
  } else if ((calculate = "-")) {
    result = number - result;
    return result;
  } else if ((calculate = "/")) {
    result = number / result;
    return result;
  } else if ((calculate = "*")) {
    result = number * result;
    return result;
    console.log(result);
  }
}

//초크형 코드+내 코드(else)
//이 if 증말 모르겠다 근데 이게 있으면 전광판이 0일때 0이 추가 안됨
function myPrint(number) {
  const result = printNum.innerHTML;
  if (0 === parseInt(result) || resetFlag) {
    printNum.innerHTML = number;
    resetFlag = false;
  } else {
    printNum.innerHTML += number;
  }
  letsCalculate(result);
}

function myNumberHandler(event) {
  const number = event.target.innerText;
  myPrint(number);
  letsCalculate(number);
}

function myCalculateHandler(event) {
  const calculate = event.target.innerText;
  letsCalculate(calculate);
}

//스트링내부요소를 배열의 각 인덱스에 부여
for (let i = 0; i < numBtn.length; i++) {
  numBtn[i].addEventListener("click", myNumberHandler, false);
}

//스트링내부요소를 배열의 각 인덱스에 부여
for (let u = 0; u < calBtn.length; u++) {
  calBtn[u].addEventListener("click", myCalculateHandler, false);
}
