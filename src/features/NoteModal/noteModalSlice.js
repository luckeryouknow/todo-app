import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  margin: "-100%",
}

export const noteModalSlice = createSlice({
  name: "noteModal",
  initialState,

  reducers: {
    openNoteModal: (state) => {
      state.margin = "0%";
    },

    closeNoteModal: (state) => {
      state.margin = "-100%";
    },
  }
});

export const { openNoteModal, closeNoteModal } = noteModalSlice.actions;

export const selectNoteModalMargin = (state) => state.noteModal.margin;
export default noteModalSlice.reducer;