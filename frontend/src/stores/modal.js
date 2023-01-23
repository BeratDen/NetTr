import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: false,
  data: false,
  active: false,
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.name = action.payload.name;
      state.data = action.payload?.data || false;
      state.active = true;
    },
    closeModal: (state) => {
      state.name = false;
      state.data = false;
      state.active = false;
    },
  },
});

export const { openModal, closeModal } = modal.actions;
export default modal.reducer;
