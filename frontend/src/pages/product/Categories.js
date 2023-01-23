import { useParams } from "react-router-dom";

export default function Categories() {
  const { id } = useParams();
  return <div>{id}</div>;
}
