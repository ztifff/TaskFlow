import React from "react";
import TaskListView from "../components/TaskListView";
import { Link } from "react-router-dom";

function HomeRoute({ tasks, onDelete, onToggle }) {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">My Tasks</h2>
        <Link to="/add" className="btn btn-outline-primary">
          + Add Task
        </Link>
      </div>

      <TaskListView tasks={tasks} onDelete={onDelete} onToggle={onToggle} />
    </div>
  );
}

export default HomeRoute;
