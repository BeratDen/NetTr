import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import modal from "./modal";
import product from "./product";

const store = configureStore({
  reducer: {
    auth,
    modal,
    product,
  },
});
export default store;
