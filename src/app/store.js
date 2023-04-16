import { configureStore } from '@reduxjs/toolkit';
import marginReducer from "../features/CreateNewNoteModal/modalSlice";
import notesListReducer from "../features/NotesListBlock/notesListSlice";
import noteModalReducer from "../features/NoteModal/noteModalSlice";
import favoriteNotesListReducer from "../features/FavoriteNotesListBlock/favoriteNotesListSlice";
import newNoteReducer from "../features/NewNoteBlock/newNoteSlice";
import trashListReducer from "../features/TrashListBlock/trashListSlice";

export const store = configureStore({
  reducer: {
    modalMargin: marginReducer,
    notesList: notesListReducer,
    noteModal: noteModalReducer,
    favoriteNotesList: favoriteNotesListReducer,
    newNote: newNoteReducer,
    trashNotesList: trashListReducer
  },
});
