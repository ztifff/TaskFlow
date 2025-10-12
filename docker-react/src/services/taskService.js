let tasks = [];

export function getAllTasks() {
  return tasks;
}

export function addTask(task) {
  tasks.push(task);
  return [...tasks];
}

export function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  return [...tasks];
}
