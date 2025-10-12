import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTaskView({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Normal");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Please fill out both title and description!");
      return;
    }

    onAdd({
      title: title.trim(),
      description: description.trim(),
      priority,
    });

    navigate("/"); // go back to home after adding
  };

  return (
    <div className="card shadow-sm w-100" style={{ maxWidth: "600px" }}>
      <div className="card-body">
        <h4 className="mb-3">Add a New Task</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={100}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={300}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Priority</label>
            <select
              className="form-select"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option>Low</option>
              <option>Normal</option>
              <option>High</option>
              <option>Critical</option>
            </select>
          </div>

          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTaskView;