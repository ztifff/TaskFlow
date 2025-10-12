import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = ({ addTask }) => {
  const navigate = useNavigate();

  // form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Normal");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!title.trim()) e.title = "Title is required";
    if (!description.trim()) e.description = "Description is required";
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    addTask({ title: title.trim(), description: description.trim(), priority });
    // optional: show toast or message (not implemented). Then navigate back.
    navigate("/", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          className={`form-control ${errors.title ? "is-invalid" : ""}`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={100}
        />
        {errors.title && <div className="invalid-feedback">{errors.title}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className={`form-control ${errors.description ? "is-invalid" : ""}`}
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={500}
        />
        {errors.description && (
          <div className="invalid-feedback">{errors.description}</div>
        )}
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

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddTask;