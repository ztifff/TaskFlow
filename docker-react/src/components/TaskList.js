import React from "react";

function TaskList({ tasks, onDelete }) {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="card mb-3 shadow-sm">
          <div className="card-body d-flex justify-content-between align-items-start">
            <div>
              <h5 className="card-title mb-1">{task.title}</h5>
              <p className="card-text mb-2">{task.description}</p>
              <small className="text-muted">Priority: {task.priority}</small>
              <div>
                <small className="text-muted">
                  • {task.createdAt ? new Date(task.createdAt).toLocaleString() : "No date"}
                </small>
              </div>
            </div>

            <div className="ms-3">
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => {
                  if (window.confirm("Are you sure you want to delete this task?")) {
                    onDelete(task.id);
                  }
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
