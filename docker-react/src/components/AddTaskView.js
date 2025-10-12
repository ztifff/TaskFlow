import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function AddTaskView({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Normal');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask({ title, description, priority });
    setTitle('');
    setDescription('');
    setPriority('Normal');
  };

  return (
    <Form onSubmit={handleSubmit} className="add-task-form mb-4">
      <Form.Group>
        <Form.Label>Task Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Label>Priority</Form.Label>
        <Form.Select
          value={priority}
          onChange={e => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Normal</option>
          <option>High</option>
        </Form.Select>
      </Form.Group>
      <Button type="submit" className="mt-4 w-100">Add Task</Button>
    </Form>
  );
}

export default AddTaskView;
