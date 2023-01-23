import { Outlet } from "react-router-dom";
import Filter from "./components/Filter";

export default function ProductLayout() {
  return (
    <div>
      <Filter></Filter>

      <Outlet></Outlet>
    </div>
  );
}
