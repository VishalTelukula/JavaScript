const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

document.addEventListener("DOMContentLoaded", loadTasks);

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `${taskText} <button class="delete">X</button>`;

  li.querySelector(".delete").addEventListener("click", removeTask);

  taskList.appendChild(li);

  saveTaskToLocalStorage(taskText);

  taskInput.value = "";
}

function removeTask(event) {
  const taskItem = event.target.parentElement;
  taskItem.remove();

  removeTaskFromLocalStorage(taskItem.textContent.replace("X", "").trim());
}

function saveTaskToLocalStorage(task) {
  let tasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  let tasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `${task} <button class="delete">X</button>`;

    li.querySelector(".delete").addEventListener("click", removeTask);

    taskList.appendChild(li);
  });
}

function removeTaskFromLocalStorage(taskText) {
  let tasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  tasks = tasks.filter((task) => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
