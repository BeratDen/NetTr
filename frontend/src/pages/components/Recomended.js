import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

export default function Recomended() {
  const show = {};

  return (
    <Card
      className="bg-dark text-white my-3 rounded-0"
      style={{ borderBottom: "5px solid gray" }}
    >
      <Card.Img src="https://picsum.photos/1920/1080" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
      <div className="buttonHolder">
        <Button variant="danger" className="trailer">
          Trailer
        </Button>
        <Button variant="dark" className="myList">
          +My List
        </Button>
      </div>
    </Card>
  );
}
