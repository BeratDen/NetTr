import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import { url } from "../../utils";

export default function ProductCard({ id, title, text, link }) {
  return (
    <Col style={{ margin: 0 }}>
      <Link
        to={url("home.product.detail", {
          id: id,
          url: link,
        })}
      >
        <Card>
          <Card.Img variant="top" src="https://picsum.photos/1920/1080" />
          <Card.ImgOverlay></Card.ImgOverlay>
        </Card>
      </Link>
    </Col>
  );
}
