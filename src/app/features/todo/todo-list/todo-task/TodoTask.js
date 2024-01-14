import Card from "react-bootstrap/Card";
import { getBorderClass } from "../../utils/utils";
import { Pencil, Trash } from "react-bootstrap-icons";

import "./TodoTask.css";

function TodoTask({ task, onOpenEditModal, onDelete }) {
  return (
    <Card className={`mb-3 ${getBorderClass(task.priority)}`}>
      <Card.Header className="d-flex justify-content-between">
        <div>{task.name}</div>
        <div>
          <Pencil
            onClick={() => onOpenEditModal(task)}
            className="me-3 text-info task-icon"
          />
          <Trash
            onClick={() => onDelete(task.id)}
            className="text-danger task-icon"
          />
        </div>
      </Card.Header>
      <Card.Body>{task.desc}</Card.Body>
    </Card>
  );
}

export default TodoTask;
