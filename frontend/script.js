const API_URL = "http://localhost:5000/tasks";

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Fetch tasks
async function fetchTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span class="task-text" id="text-${task.id}">${task.task}</span>
      <div class="actions" id="actions-${task.id}">
        <i class="fa-solid fa-pen edit-icon" onclick="enableEdit(${task.id})"></i>
        <i class="fa-solid fa-trash delete-icon" onclick="confirmDelete(${task.id})"></i>
      </div>
    `;

    taskList.appendChild(li);
  });
}

// Add task
async function addTask() {
  const task = taskInput.value.trim();
  if (!task) return;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task }),
  });

  taskInput.value = "";
  fetchTasks();
}

// Enable inline edit
function enableEdit(id) {
  const textSpan = document.getElementById(`text-${id}`);
  const actionsDiv = document.getElementById(`actions-${id}`);
  const oldText = textSpan.innerText;

  textSpan.outerHTML = `
    <input 
      type="text" 
      id="input-${id}" 
      class="edit-input" 
      value="${oldText}"
    />
  `;

  actionsDiv.innerHTML = `
    <i class="fa-solid fa-check save-icon" onclick="saveTask(${id})"></i>
  `;
}

// Save updated task
async function saveTask(id) {
  const input = document.getElementById(`input-${id}`);
  const updatedTask = input.value.trim();
  if (!updatedTask) return;

  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task: updatedTask }),
  });

  fetchTasks();
}

// Ask delete confirmation
function confirmDelete(id) {
  const actionsDiv = document.getElementById(`actions-${id}`);

  actionsDiv.innerHTML = `
    <i class="fa-solid fa-check confirm-icon" onclick="deleteTask(${id})"></i>
    <i class="fa-solid fa-xmark cancel-icon" onclick="fetchTasks()"></i>
  `;
}

// Delete task
async function deleteTask(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  fetchTasks();
}

// Events
addBtn.addEventListener("click", addTask);
fetchTasks();
