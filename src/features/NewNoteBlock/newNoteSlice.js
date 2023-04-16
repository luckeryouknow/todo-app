import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTab: "Notes",
};

export const newNoteSlice = createSlice({
  name: "newNote",
  initialState,

  reducers: {
    openNotesTab: (state) => {
      state.currentTab = "Notes";
    },

    openFavoritesTab: (state) => {
      state.currentTab = "Favorites";
    },

    openTrashTab: (state) => {
      state.currentTab = "Trash";
    }
  },
});

export const { openNotesTab, openFavoritesTab, openTrashTab } = newNoteSlice.actions;

export const selectCurrentTab = (state) => state.newNote.currentTab;
export default newNoteSlice.reducer;