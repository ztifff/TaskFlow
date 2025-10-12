const STORAGE_KEY = "taskflow_tasks";

function loadTasks() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

let tasks = loadTasks();

export function getAllTasks() {
  return tasks;
}

export function addTask(task) {
  tasks.push(task);
  saveTasks(tasks);
  return [...tasks];
}

export function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks(tasks);
  return [...tasks];
}
