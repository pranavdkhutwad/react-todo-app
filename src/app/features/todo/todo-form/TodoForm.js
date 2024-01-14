import { useForm, Controller } from "react-hook-form";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function TodoForm({ onAdd }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      desc: "",
      priority: "",
    },
  });

  const handleAdd = (data) => {
    onAdd(data);
    reset();
  };

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit(handleAdd)}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Task name</Form.Label>
            <Controller
              name="name"
              control={control}
              rules={{ required: true, minLength: 3 }}
              render={({ field }) => (
                <Form.Control {...field} type="text" placeholder="Task name" />
              )}
            />
            {errors.name?.type === "required" && (
              <small className="text-danger">Field is required</small>
            )}
            {errors.name?.type === "minLength" && (
              <small className="text-danger">
                At-least 3 characters are required
              </small>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="desc">
            <Form.Label>Task description</Form.Label>
            <Controller
              name="desc"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Form.Control
                  {...field}
                  as="textarea"
                  rows={3}
                  placeholder="Task description"
                />
              )}
            />
            {errors.desc?.type === "required" && (
              <small className="text-danger">Field is required</small>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="priority">
            <Form.Label>Task priority</Form.Label>
            <Controller
              name="priority"
              control={control}
              rules={{ required: true, pattern: /[1-3]/ }}
              render={({ field }) => (
                <Form.Control
                  {...field}
                  type="number"
                  placeholder="Task priority"
                />
              )}
            />
            {errors.priority?.type === "required" && (
              <small className="text-danger">Field is required</small>
            )}
            {errors.priority?.type === "pattern" && (
              <small className="text-danger">Only 1, 2 or 3 are allowed</small>
            )}
          </Form.Group>
          <div className="d-grid">
            <Button type="submit" variant="success">
              Add
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default TodoForm;
