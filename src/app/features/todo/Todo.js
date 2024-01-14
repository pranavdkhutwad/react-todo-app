import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TodoForm from "./todo-form/TodoForm";
import TodoList from "./todo-list/TodoList";
import TodoEdit from "./todo-edit/TodoEdit";
import { useSelector, useDispatch } from "react-redux";
import {
  updateTitle,
  fetchTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../../redux/slices/todoSlice";

function Todo() {
  const [show, setShow] = useState(false);
  const [task, setTask] = useState({
    name: "",
    desc: "",
    priority: "",
  });
  const { title, highPriorityList, mediumPriorityList, lowPriorityList } =
    useSelector((state) => state.todo);

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTasks()), []);

  const handleAdd = (task) => dispatch(createTask(task));
  const handleDelete = (id) => dispatch(deleteTask(id));
  const handleEdit = (newTask) => dispatch(updateTask(newTask));
  const handleChangeTitle = () => dispatch(updateTitle("New title"));

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEditModal = (task) => {
    setTask(task);
    handleShow();
  };

  return (
    <>
      <h1>{title}</h1>
      <button onClick={handleChangeTitle}>Change title</button>
      <TodoEdit
        onUpdate={handleEdit}
        task={task}
        show={show}
        onClose={handleClose}
      />
      <Row>
        <Col xs={12} md={4} lg={4}>
          <TodoForm onAdd={handleAdd} />
        </Col>
        <Col xs={12} md={8} lg={8}>
          <TodoList
            highPriorities={highPriorityList}
            mediumPriorities={mediumPriorityList}
            lowPriorities={lowPriorityList}
            onDelete={handleDelete}
            onOpenEditModal={handleEditModal}
          />
        </Col>
      </Row>
    </>
  );
}

export default Todo;
