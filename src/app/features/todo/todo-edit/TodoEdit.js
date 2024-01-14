import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";

function TodoEdit({ task, show, onClose, onUpdate }) {
  const [newTask, setNewTask] = useState({
    name: "",
    desc: "",
    priority: "",
  });

  useEffect(() => {
    setNewTask(task);
  }, [task]);

  const handleNameChange = (e) =>
    setNewTask({ ...newTask, name: e.target.value });
  const handleDescChange = (e) =>
    setNewTask({ ...newTask, desc: e.target.value });
  const handlePriorityChange = (e) =>
    setNewTask({ ...newTask, priority: e.target.value });

  const handleUpdateTask = () => {
    onUpdate({ ...newTask, id: task.id });
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Task name</Form.Label>
            <Form.Control
              value={newTask.name}
              onChange={handleNameChange}
              type="text"
              placeholder="Task name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="desc">
            <Form.Label>Task description</Form.Label>
            <Form.Control
              value={newTask.desc}
              onChange={handleDescChange}
              as="textarea"
              rows={3}
              placeholder="Task description"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="priority">
            <Form.Label>Task priority</Form.Label>
            <Form.Control
              value={newTask.priority}
              onChange={handlePriorityChange}
              type="number"
              placeholder="Task priority"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleUpdateTask}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TodoEdit;
