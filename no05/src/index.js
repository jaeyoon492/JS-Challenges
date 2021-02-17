// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const toDoForm = document.querySelector(".js-Tasks");
const toDoInput = toDoForm.querySelector("input");
const PendingList = document.querySelector(".js-PendingList");
const FinishedList = document.querySelector(".js-FinishedList");

const PENDING_LS = "PENDING";
const FINISHED_LS = "FINISHED";

let pending = [];
let finished = [];

/* PendingList의 항목을 지우는 함수 */
function deletePendingHandle(event) {
  const btn = event.target;
  const li = btn.parentNode;
  PendingList.removeChild(li);
  const cleanPending = pending.filter(function (potato) {
    return potato.id !== parseInt(li.id);
  });
  pending = cleanPending;
  saveToDos();
}

/* FinishedList의 항목을 지우는 함수 */
function deleteFinishedHandle(event) {
  const btn = event.target;
  const li = btn.parentNode;
  FinishedList.removeChild(li);
  const cleanfinished = finished.filter(function (goguma) {
    return goguma.id !== parseInt(li.id);
  });
  finished = cleanfinished;
  saveToDos();
}

/* JSON.stringify()는 값이나 객체를 JSON 문자열로 변환합니다*/
function saveToDos() {
  localStorage.setItem(PENDING_LS, JSON.stringify(pending));
  localStorage.setItem(FINISHED_LS, JSON.stringify(finished));
}

/* PendingList */
function pushToPending(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = pending.length + 1;
  delBtn.innerHTML = "❌";
  delBtn.addEventListener("click", deletePendingHandle);
  checkBtn.innerHTML = "✅";
  checkBtn.addEventListener("click", goToFinishedHandle);
  checkBtn.addEventListener("click", deletePendingHandle);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  li.id = newId;
  PendingList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  pending.push(toDoObj);
  saveToDos();
}

/* FinishedList */
function pushToFinished(text) {
  const li = document.createElement("li");
  const delFinishedBtn = document.createElement("button");
  const backBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = finished.length + 1;
  delFinishedBtn.innerHTML = "❌";
  delFinishedBtn.addEventListener("click", deleteFinishedHandle);
  backBtn.innerHTML = "⏪";
  backBtn.addEventListener("click", backToPendingHandle);
  backBtn.addEventListener("click", deleteFinishedHandle);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delFinishedBtn);
  li.appendChild(backBtn);
  li.id = newId;
  FinishedList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  finished.push(toDoObj);
  saveToDos();
}

/* input에 내용을 리스트로 보내는 펑션 */
/* toDoInput.value = ""; === input에 내용이 남아있지 않도록 한다. */
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  pushToPending(currentValue);
  toDoInput.value = "";
}

/* FinishedList로 이동시키는 함수 */
/* pendingValue는 li로 적용시킬때 span만 li에 추가 하기 위해서이다 */
/* span은 li parentNode의 첫번째 아이다. */
function goToFinishedHandle(event) {
  const pendingValue = event.target.parentNode.firstChild.innerText;
  pushToFinished(pendingValue);
}

/* PendingList로 이동시키는 함수 */
function backToPendingHandle(event) {
  const finishedValue = event.target.parentNode.firstChild.innerText;
  pushToPending(finishedValue);
}

/* 로컬스토리지에서 불러오는 함수 */
/* JSON.parse는 (문자열 형태의 오브젝트)를 (오브젝트형태)로 바꿔주는 메서드이다.*/
function loadToDos() {
  const loadedPending = localStorage.getItem(PENDING_LS);
  const loadedFinished = localStorage.getItem(FINISHED_LS);
  if (loadedPending !== null) {
    const parsedPending = JSON.parse(loadedPending);
    parsedPending.forEach(function (potato) {
      pushToPending(potato.text);
    });
  }

  if (loadedFinished !== null) {
    const parsedFinished = JSON.parse(loadedFinished);
    parsedFinished.forEach(function (goguma) {
      pushToFinished(goguma.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
