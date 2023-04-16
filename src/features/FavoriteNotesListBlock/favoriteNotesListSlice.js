import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentId: 0,
  favoriteNotesList: [],
};

export const favoriteNotesListSlice = createSlice({
  name: "favoriteNotesList",
  initialState,

  reducers: {
    pushFavoriteNote: (state, action) => {
      state.favoriteNotesList.push(action.payload);
    },

    setFavoriteNoteText: (state, action) => {
      state.favoriteNotesList[state.currentId].noteText = action.payload;
    },

    setFavoriteCurrentId: (state, action) => {
      state.currentId = action.payload;
    },

    deleteFavoriteNote: (state) => {
      state.favoriteNotesList.splice(state.currentId, 1);
      state.currentId = 0;
    },

    moveToTrashFavoriteNote: (state, action) => {
      state.favoriteNotesList.splice(action.payload, 1);
    },
  },
});

export const { pushFavoriteNote, setFavoriteNoteText, setFavoriteCurrentId, deleteFavoriteNote, moveToTrashFavoriteNote } = favoriteNotesListSlice.actions;

export const selectFavoriteNotesList = (state) => state.favoriteNotesList.favoriteNotesList;
export const selectFavoriteNotesId = (state) => state.favoriteNotesList.currentId;

export default favoriteNotesListSlice.reducer;