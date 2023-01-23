import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function LoginForm({ loginHandler, handleChange }) {
  return (
    <Form id="login-form" onSubmit={loginHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          type="text"
          name="username"
          placeholder="Enter User Name"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          onChange={handleChange}
          name="password"
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
