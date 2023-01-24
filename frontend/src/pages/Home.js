import { Link } from "react-router-dom";
import { url } from "../utils";
import Row from "react-bootstrap/Row";
import ProductCard from "./components/ProductCard";
import Recomended from "./components/Recomended";
import { useSelector } from "react-redux";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";

export default function Home() {
  const { items } = useSelector((state) => state.product);
  console.log(items);

  return (
    <div>
      <Recomended></Recomended>
      <Row xs={1} md={5} className="">
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            link={product.path}
            title={product.title}
            text={product.body}
          ></ProductCard>
        ))}
      </Row>
      <Jumbotron></Jumbotron>
      <Jumbotron></Jumbotron>
      <Jumbotron></Jumbotron>

      <Footer></Footer>
    </div>
  );
}
