import { StyledNotesListBlock } from "./StyledNotesListBlock";
import { selectNotesList, setCurrentId } from "./notesListSlice";
import { openNoteModal } from "../NoteModal/noteModalSlice";
import { useDispatch, useSelector } from 'react-redux';
import Note from "./Note";
import { selectCurrentTab } from "../NewNoteBlock/newNoteSlice";
import { selectFavoriteNotesList, setFavoriteCurrentId } from "../FavoriteNotesListBlock/favoriteNotesListSlice";
import { selectTrashNotesList, setTrashCurrentId } from "../TrashListBlock/trashListSlice";

export default function NotesListBlock () {
  const notesList = useSelector(selectNotesList);
  let currentTab = useSelector(selectCurrentTab);
  const favoriteNotesList = useSelector(selectFavoriteNotesList);

  const trashNotesList = useSelector(selectTrashNotesList);

  const dispatch = useDispatch();
  
  const noteButtonHandler = (event) => {
    let id = event.currentTarget.id;
    dispatch(setCurrentId(id));
  };

  const favoriteButtonHandler = (event) => {
    let id = event.currentTarget.id;
    dispatch(setFavoriteCurrentId(id));
  };

  const trashButtonHandler = (event) => {
    let id = event.currentTarget.id;
    dispatch(setTrashCurrentId(id));
  }

  const noteModalHandler = () => {
    dispatch(openNoteModal());
  };

  const handleTabs = () => {
    if (currentTab === "Notes") {
      return notesList.map((note, index) => {
        return (
          <Note 
            noteId={index}
            noteKey={`${currentTab} ${index}`}
            noteClick={noteButtonHandler}
            noteName={note.noteName}
            modalButtonOnClick={noteModalHandler}
          />
        );
      });
    } else if (currentTab === "Favorites") {
      return favoriteNotesList.map((note, index) => {
        return (
          <Note 
            noteId={index}
            noteKey={`${currentTab} ${index}`}
            noteClick={favoriteButtonHandler}
            noteName={note.noteName}
            modalButtonOnClick={noteModalHandler}
          />
        );
      });
    } else if (currentTab === "Trash") {
      return trashNotesList.map((note, index) => {
        return (
          <Note 
            noteId={index}
            noteKey={`${currentTab} ${index}`}
            noteClick={trashButtonHandler}
            noteName={note.noteName}
            modalButtonOnClick={noteModalHandler}
          />
        );
      })
    }
  }

  return (
    <StyledNotesListBlock>
      {handleTabs()}   
    </StyledNotesListBlock>
  )
}