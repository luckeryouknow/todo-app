import { StyledTextBlock } from "./StyledTextBlock";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentId, selectNotesList, setNoteText } from "../NotesListBlock/notesListSlice";
import { selectCurrentTab } from "../NewNoteBlock/newNoteSlice";
import { selectFavoriteNotesList, selectFavoriteNotesId, setFavoriteNoteText } from "../FavoriteNotesListBlock/favoriteNotesListSlice";
import { selectTrashNotesList, selectTrashNotesId, setTrashNoteText } from "../TrashListBlock/trashListSlice";

export default function NoteTextBlock () {
  const notesList = useSelector(selectNotesList);
  const currentId = useSelector(selectCurrentId);
  
  const currentTab = useSelector(selectCurrentTab);
  
  const favoriteNotesList = useSelector(selectFavoriteNotesList);
  const favoriteNotesCurrentId = useSelector(selectFavoriteNotesId);

  const trashNotesList = useSelector(selectTrashNotesList);
  const trashNotesCurrentId = useSelector(selectTrashNotesId);

  const dispatch = useDispatch();

  const textareaHandler = (event) => {
    if (currentTab === "Notes" && notesList.length !== 0) {
      dispatch(setNoteText(event.target.value));
    };

    if (currentTab === "Favorites" && favoriteNotesList.length !== 0) {
      dispatch(setFavoriteNoteText(event.target.value));
    };

    if (currentTab === "Trash" && trashNotesList.length !== 0) {
      dispatch(setTrashNoteText(event.target.value));
    }
  };

  const textareaContentHandler = () => {
    if (currentTab === "Notes" && notesList.length !== 0) {
      return notesList[currentId].noteText;
    } else if (currentTab === "Favorites" && favoriteNotesList.length !== 0) {
      return favoriteNotesList[favoriteNotesCurrentId].noteText;  
    } if (currentTab === "Trash" && trashNotesList.length !== 0) {
      return trashNotesList[trashNotesCurrentId].noteText;
    } else if ((currentTab === "Notes" && notesList.length === 0) || 
              (currentTab === "Favorites" && favoriteNotesList.length === 0) || 
              (currentTab === "Trash" && trashNotesList.length === 0)) {
      return "";
    }
  };

  const currentNote = textareaContentHandler();

  return (
    <StyledTextBlock onChange={textareaHandler} value={currentNote}>

    </StyledTextBlock>
  )
}