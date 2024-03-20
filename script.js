const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", addTodo);
listContainer.addEventListener("click", handleListClick);

function addTodo() {
  const todoText = inputBox.value.trim();
  if (todoText === "") {
    alert("Please enter a task!");
    return;
  }

  const newLi = document.createElement("li");
  newLi.textContent = todoText;
  const span = document.createElement("span");
  span.innerHTML = "\u00d7";
  newLi.appendChild(span);
  listContainer.appendChild(newLi);

  inputBox.value = "";
  saveData();
}

function handleListClick(e) {
  const target = e.target;
  const parent = target.parentElement;

  if (target.tagName === "LI") {
    target.classList.toggle("checked");
  } else if (target.tagName === "SPAN") {
    parent.remove();
  }

  saveData();
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data") || "";
}

showTask();