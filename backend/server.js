const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const FILE_PATH = "./tasks.json";

app.use(cors());
app.use(express.json());

// helper function to read tasks
const readTasks = () => {
  const data = fs.readFileSync(FILE_PATH);
  return JSON.parse(data);
};

// helper function to write tasks
const writeTasks = (tasks) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2));
};

// GET all tasks
app.get("/tasks", (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

// ADD a task
app.post("/tasks", (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ message: "Task is required" });
  }

  const tasks = readTasks();
  const newTask = {
    id: Date.now(),
    task,
  };

  tasks.push(newTask);
  writeTasks(tasks);

  res.status(201).json(newTask);
});

// UPDATE a task
app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  const tasks = readTasks();
  const index = tasks.findIndex((t) => t.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks[index].task = task;
  writeTasks(tasks);

  res.json(tasks[index]);
});

// DELETE a task
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const tasks = readTasks();
  const filteredTasks = tasks.filter((t) => t.id != id);

  writeTasks(filteredTasks);
  res.json({ message: "Task deleted" });
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
