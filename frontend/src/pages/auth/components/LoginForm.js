import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { url } from "../../../utils";

export default function LoginForm({ loginHandler, handleChange }) {
  return (
    <>
      <Navbar variant="dark" bg="dark" expand="lg" className="mb-5 ms-5">
        <Navbar.Brand>
          <Link
            to={url("home")}
            style={{ textDecoration: "none", color: "white" }}
          >
            Net TR
          </Link>
        </Navbar.Brand>
      </Navbar>
      <Container
        className="text-white bg-secondary rounded-3 p-5"
        style={{ width: "50%" }}
      >
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
          <Button variant="outline-dark" type="submit">
            Login
          </Button>
        </Form>
        <Card.Body className="mt-5">
          <Card.Text className=" text-decoration-none">
            Wanna Join
            <Link to={url("auth.register")} className="h5 text-white">
              {" "}
              Right Now
            </Link>
          </Card.Text>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Container>
    </>
  );
}
