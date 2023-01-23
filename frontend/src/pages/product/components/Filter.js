import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import { url } from "../../../utils";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function Filter() {
  const categories = [
    {
      id: 1,
      text: "action",
      url: "action",
    },
    {
      id: 2,
      text: "horror",
      url: "horror",
    },
  ];

  return (
    <>
      <Navbar className="my-3">
        <Container>
          <Navbar.Brand href="#home">Movies</Navbar.Brand>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Categories
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {categories.map((category) => (
                <Dropdown.Item key={category.id}>
                  <Link
                    to={url("home.product.categories", {
                      id: category.id,
                      url: category.url,
                    })}
                  >
                    {category.text}
                  </Link>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <ButtonGroup>
              <Dropdown>
                <Dropdown.Toggle variant="outline-dark"></Dropdown.Toggle>

                <Dropdown.Menu>
                  {categories.map((category) => (
                    <Dropdown.Item key={category.id}>
                      <Link
                        to={url("home.product.categories", {
                          id: category.id,
                          url: category.url,
                        })}
                      >
                        {category.text}
                      </Link>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle variant="outline-dark"></Dropdown.Toggle>
                <Dropdown.Menu>
                  {categories.map((category) => (
                    <Dropdown.Item key={category.id}>
                      <Link
                        to={url("home.product.categories", {
                          id: category.id,
                          url: category.url,
                        })}
                      >
                        {category.text}
                      </Link>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </ButtonGroup>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
