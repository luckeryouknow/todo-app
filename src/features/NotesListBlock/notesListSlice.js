import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentId: 0,
  notesList: [],
  note: {
    noteName: "",
    noteText: ""
  },
};

export const notesListSlice = createSlice({
  name: "notesList",
  initialState,

  reducers: {
    pushNote: (state) => {
      state.notesList.push(state.note);
    },

    setNoteName: (state, action) => {
      state.note.noteName = action.payload;
    },

    setNoteText: (state, action) => {
      state.notesList[state.currentId].noteText = action.payload;
    },

    setCurrentId: (state, action) => {
      state.currentId = action.payload;
    },

    deleteNote: (state) => {
      state.notesList.splice(state.currentId, 1);
      state.currentId = 0;
    },

    pushExternalNote: (state, action) => {
      state.notesList.push(action.payload);
    },
  },
});

export const { pushNote, setNoteName, setNoteText, setCurrentId, setCurrentNoteText, deleteNote, pushExternalNote } = notesListSlice.actions;

export const selectNotesList = (state) => state.notesList.notesList;
export const selectCurrentId = (state) => state.notesList.currentId;

export default notesListSlice.reducer;