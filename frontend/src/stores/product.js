import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchOptions from "./fetchOptions";
import isTokenNotValid from "./isTokenNotValid";
import validateJWTToken from "./validateJWTToken";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const endPoint = `${process.env.REACT_APP_API_URL}products/`;
    const options = fetchOptions();
    // validateJWTToken();

    // const response = await fetch(endPoint, options)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     const validData = isTokenNotValid(data);
    //     if (validData) {
    //       console.log("true");
    //       return data;
    //     }
    //   });
    // return response;

    const response = await axios.get(endPoint, options);
    console.log(response.data.results);
    return response?.data?.results;
  }
);

const product = createSlice({
  name: "products",
  initialState,
  reducers: {
    //TODO: create, delete,update products dispatchers
  },
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      // immer
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "success";
      console.log(action.payload);
      console.log(state.status);
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export const {} = product.actions;
export default product.reducer;
