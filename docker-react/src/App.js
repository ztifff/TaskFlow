import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AddTask from "./components/addTask";
import DeleteTask from "./components/deleteTask";

function Home() {
  return (
    <div>
      <h1>🐳 Docker React App</h1>
      <p>Welcome to your Dockerized React application!</p>
      <p>This app is running in a Docker container with hot reload enabled.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is a sample React app containerized with Docker.</p>
      <p>Features:</p>
      <ul>
        <li>React 18</li>
        <li>React Router</li>
        <li>Hot reload in development</li>
        <li>Production-ready builds</li>
      </ul>
    </div>
  );
}

function Tasks() {
  const [tasks, setTasks] = useState([]);

  const addTask = (name) => {
    const newTask = { id: Date.now(), name };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>📝 Task Manager</h1>
      <AddTask addTask={addTask} />
      <DeleteTask tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
