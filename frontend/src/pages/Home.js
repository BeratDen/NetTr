import { Link } from "react-router-dom";
import { url } from "../utils";
import Row from "react-bootstrap/Row";
import ProductCard from "./components/ProductCard";
import Recomended from "./components/Recomended";

export default function Home() {
  const products = [
    {
      id: 1,
      title: "Product - 1",
      url: "product-1",
      text: "product text that explain product",
    },
    {
      id: 2,
      title: "Product - 2",
      url: "product-2",
      text: "product text that explain product",
    },
    {
      id: 3,
      title: "Product - 3",
      url: "product-3",
      text: "product text that explain product",
    },
    {
      id: 4,
      title: "Product - 4",
      url: "product-4",
      text: "product text that explain product",
    },
    {
      id: 5,
      title: "Product - 5",
      url: "product-5",
      text: "product text that explain product",
    },
  ];
  return (
    <div>
      <Recomended></Recomended>
      <Row xs={1} md={5} className="">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            link={product.url}
            title={product.title}
            text={product.text}
          ></ProductCard>
        ))}
      </Row>
    </div>
  );
}
