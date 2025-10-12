import React from "react";
import TaskList from "./TaskList";

function TaskListView({ tasks, onDelete }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <div className="alert alert-info">No tasks available.</div>
      ) : (
        <TaskList tasks={tasks} onDelete={onDelete} />
      )}
    </div>
  );
}

export default TaskListView;

