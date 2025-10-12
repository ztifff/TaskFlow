import React from "react";
import AddTaskView from "../components/AddTaskView";

function AddTaskRoute({ onAdd }) {
  return (
    <div className="d-flex justify-content-center">
      <AddTaskView onAdd={onAdd} />
    </div>
  );
}

export default AddTaskRoute;
