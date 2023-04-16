import React from 'react';
import CreateNewNoteModal from './features/CreateNewNoteModal/CreateNewNoteModal';
import NewNoteBlock from './features/NewNoteBlock/NewNoteBlock';
import NotesListBlock from './features/NotesListBlock/NotesListBlock';
import NoteTextBlock from './features/NoteTextBlock/NoteTextBlock';
import NoteModal from "./features/NoteModal/NoteModal";
import './App.css';

function App() {
  return (
    <div className="App">
      <CreateNewNoteModal />
      <NewNoteBlock />
      <NotesListBlock />
      <NoteTextBlock />
      <NoteModal />
    </div>
  );
}

export default App;
