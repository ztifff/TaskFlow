import React from "react";

function DeleteTask({ tasks, deleteTask }) {
  if (tasks.length === 0) {
    return <p className="text-muted">No task yet</p>;
  }

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="list-group-item d-flex justify-content-between align-items-start"
        >
          <div>
            <strong>{task.title}</strong>
            {task.description && <p className="mb-0 small">{task.description}</p>}
          </div>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default DeleteTask;
