import { NavLink, Outlet } from "react-router-dom";
import { url } from "../utils";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function HomeLayout() {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand className="h1">Net TR</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          {user && (
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link>
                  <NavLink to={url("home")} className="nav-link">
                    Home
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to={url("home.product")} className="nav-link">
                    Tv Shows
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to={url("home.product")} className="nav-link">
                    Movies
                  </NavLink>
                </Nav.Link>
                <Nav.Link></Nav.Link>
              </Nav>

              <NavDropdown
                id="nav-dropdown"
                title="Dashboard"
                className="text-secondary"
              >
                <NavDropdown.Item>
                  <NavLink className="nav-link" to={url("home.profile")}>
                    Dashboard
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to={url("home.contact")} className="nav-link">
                    Contact
                  </NavLink>
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item>
                  <NavLink to={url("home.contact")} className="nav-link">
                    Contact
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          )}
          {!user && (
            <div className="d-flex justify-content-between">
              <Nav.Link className="me-3">
                <NavLink to={url("auth.login")}>
                  <Button variant="primary">Giriş Yap</Button>
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to={url("auth.register")}>
                  <Button variant="outline-danger">Kayıt Ol</Button>
                </NavLink>
              </Nav.Link>
            </div>
          )}
        </Container>
      </Navbar>

      <Outlet></Outlet>
    </>
  );
}
