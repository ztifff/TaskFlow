import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeRoute from "./routes/HomeRoute";
import AddTaskRoute from "./routes/AddTaskRoute";
import { getAllTasks, addTask, deleteTask } from "./services/taskService";

function App() {
  const [tasks, setTasks] = useState(getAllTasks());

  const handleAddTask = (taskDetails) => {
    const newTask = {
      id: Date.now().toString(),
      title: taskDetails.title,
      description: taskDetails.description,
      priority: taskDetails.priority,
      createdAt: new Date().toISOString(),
    };
    const updated = addTask(newTask); 
    setTasks(updated);
  };

  const handleDeleteTask = (taskId) => {
    const updated = deleteTask(taskId);
    setTasks(updated);
  };

  return (
    <div>
      <Header count={tasks.length} />

      <main className="container my-4">
        <Routes>
          <Route
            path="/"
            element={<HomeRoute tasks={tasks} onDelete={handleDeleteTask} />}
          />
          <Route
            path="/add"
            element={<AddTaskRoute onAdd={handleAddTask} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
