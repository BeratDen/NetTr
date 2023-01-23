import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div>
      Auth Layout
      <Outlet></Outlet>
    </div>
  );
}
