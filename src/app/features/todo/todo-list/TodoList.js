import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TodoTask from "./todo-task/TodoTask";

function TodoList({
  highPriorities,
  mediumPriorities,
  lowPriorities,
  onDelete,
  onOpenEditModal
}) {
  console.log("highPriorities ==>", highPriorities);
  return (
    <Row>
      <Col xs={12} md={4} lg={4}>
        <h5>High Priority List</h5>
        {highPriorities.map((task, index) => (
          <TodoTask onOpenEditModal={onOpenEditModal} key={index} task={task} onDelete={onDelete} />
        ))}
      </Col>
      <Col xs={12} md={4} lg={4}>
        <h5>Medium Priority List</h5>
        {mediumPriorities.map((task, index) => (
          <TodoTask onOpenEditModal={onOpenEditModal} key={index} task={task} onDelete={onDelete} />
        ))}
      </Col>
      <Col xs={12} md={4} lg={4}>
        <h5>Low Priority List</h5>
        {lowPriorities.map((task, index) => (
          <TodoTask onOpenEditModal={onOpenEditModal} key={index} task={task} onDelete={onDelete} />
        ))}
      </Col>
    </Row>
  );
}

export default TodoList;
