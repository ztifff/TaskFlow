import React from "react";
import { Card, Button } from "react-bootstrap";

const TaskListView = ({ tasks, deleteTask }) => {
  if (!tasks || tasks.length === 0) {
    return <p className="text-center">No tasks available. Add a new task!</p>;
  }

  return (
    <div className="container">
      {tasks.map((task) => (
        <Card key={task.id} className="mb-3">
          <Card.Body>
            <Card.Title>{task.title}</Card.Title>
            <Card.Text>{task.description}</Card.Text>
            <Card.Text><strong>Priority:</strong> {task.priority}</Card.Text>
            <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TaskListView;
