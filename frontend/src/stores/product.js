import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: false,
  title: false,
  url: false,
};

const product = createSlice({
  name: "products",
  initialState,
  reducers: {
    //TODO: create, delete,update products dispatchers
  },
});

export const {} = product.actions;
export default product.reducer;
