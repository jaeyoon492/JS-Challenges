const toDoForm = document.querySelector(".js-Tasks");
const toDoInput = toDoForm.querySelector("input");
const PendingList = document.querySelector(".js-PendingList");

const PENDING_LS = "PENDING";
const FINISHED_LS = "FINISHED";

const pending = [];
const finished = [];

function saveToDos() {
  localStorage.setItem(PENDING_LS, JSON.stringify(pending));
  localStorage.setItem(FINISHED_LS, JSON.stringify(finished));
}

/* input에 입력한 내용을 리스트화 하는 펑션 */
function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = Date.now();
  delBtn.innerHTML = "❌";
  checkBtn.innerHTML = "✅";
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

/* input에 내용을 리스트로 보내는 펑션 */
/* toDoInput.value = ""; === input에 내용이 남아있지 않도록 한다. */
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

/* 로컬스토리지에서 불러오는 함수 */
function loadToDos() {
  const loadedPending = localStorage.getItem(PENDING_LS);
  const loadedFinished = localStorage.getItem(FINISHED_LS);
  if (loadedPending !== null) {
    const parsedPending = JSON.parse(loadedPending);
    parsedPending.forEach(function (potato) {
      paintToDo(potato.text);
    });
  }

  if (loadedFinished !== null) {
    const parsedFinished = JSON.parse(loadedFinished);
    parsedFinished.forEach(function (goguma) {
      console.log(goguma.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
