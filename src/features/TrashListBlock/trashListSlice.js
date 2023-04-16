import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentId: 0,
  trashNotesList: [],
};

export const trashNotesListSlice = createSlice({
  name: "trasNotesList",
  initialState,

  reducers: {
    pushTrashNote: (state, action) => {
      state.trashNotesList.push(action.payload);
    },

    setTrashCurrentId: (state, action) => {
      state.currentId = action.payload;
    },

    setTrashNoteText: (state, action) => {
      state.trashNotesList[state.currentId].noteText = action.payload;
    },

    deleteTrashNote: (state) => {
      state.trashNotesList.splice(state.currentId, 1);
      state.currentId = 0;
    }
  },
});

export const { pushTrashNote, setTrashCurrentId, setTrashNoteText, deleteTrashNote } = trashNotesListSlice.actions;

export const selectTrashNotesList = (state) => state.trashNotesList.trashNotesList;
export const selectTrashNotesId = (state) => state.trashNotesList.currentId;

export default trashNotesListSlice.reducer;