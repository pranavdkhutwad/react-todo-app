import { useForm, Controller } from "react-hook-form";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { data } = await axios.get("http://localhost:3300/auth");
    const token = data.token;

    localStorage.setItem("x-token", token);
    navigate("/todo");
  };

  return (
    <Row>
      <Col xs={12} md={6} lg={6}>
        <Card>
          <Card.Body>
            <Form onSubmit={handleSubmit(handleLogin)}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Username</Form.Label>
                <Controller
                  name="username"
                  control={control}
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      type="text"
                      placeholder="Username"
                    />
                  )}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="priority">
                <Form.Label>Password</Form.Label>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      type="password"
                      placeholder="Password"
                    />
                  )}
                />
              </Form.Group>
              <div className="d-grid">
                <Button type="submit" variant="success">
                  Sign In
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Login;
