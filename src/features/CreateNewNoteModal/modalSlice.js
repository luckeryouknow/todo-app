import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  margin: "-100%",
}

export const modalSlice = createSlice({
  name: "modalMargin",
  initialState,

  reducers: {
    open: (state) => {
      state.margin = "0%";
    },

    close: (state) => {
      state.margin = "-100%";
    },
  }
});

export const { open, close } = modalSlice.actions;

export const selectModal = (state) => state.modalMargin.margin;
export default modalSlice.reducer;