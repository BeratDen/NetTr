import { useRoutes } from "react-router-dom";
import routes from "./Routes";
// import { url } from "./utils";
import { loginHandle } from "./utils";
import "./css/bootstrap.css";

function App() {
  loginHandle(JSON.parse(localStorage.getItem("user")) || false);
  // console.log(generatePath("blog/post/:id/:url", { id: 2, url: "test-url" }));
  // console.log(url("home.product.categories"));

  return useRoutes(routes);
}

export default App;
