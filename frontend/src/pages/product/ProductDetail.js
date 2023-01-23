import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id, url } = useParams();
  console.log(url);

  return (
    <div>
      Product page = {id} {url}
    </div>
  );
}
