import { StyledNoteModal, StyledWrapper, StyledButton } from "./StyledNoteModal";
import { useDispatch, useSelector } from "react-redux";
import { selectNoteModalMargin, closeNoteModal } from "./noteModalSlice";
import { selectNotesList, selectCurrentId, deleteNote, pushExternalNote } from "../NotesListBlock/notesListSlice";
import { selectCurrentTab } from "../NewNoteBlock/newNoteSlice";
import { selectFavoriteNotesList, selectFavoriteNotesId, pushFavoriteNote, deleteFavoriteNote } from "../FavoriteNotesListBlock/favoriteNotesListSlice";
import { selectTrashNotesList, selectTrashNotesId, pushTrashNote, deleteTrashNote } from "../TrashListBlock/trashListSlice";

export default function NoteModal () {

  const dispatch = useDispatch();

  const noteModalMargin = useSelector(selectNoteModalMargin);
  const currentTab = useSelector(selectCurrentTab);

  const notesList = useSelector(selectNotesList);
  const currentId = useSelector(selectCurrentId);

  const favoriteNotesList = useSelector(selectFavoriteNotesList);
  const favoriteNotesId = useSelector(selectFavoriteNotesId);

  const trashList = useSelector(selectTrashNotesList);
  const trashCurrentId = useSelector(selectTrashNotesId);
  
  const closeButtonHandler = () => {
    dispatch(closeNoteModal());
  };

  const addToFavoriteHandler = () => {
    dispatch(pushFavoriteNote(notesList[currentId]));
    dispatch(deleteNote());
    dispatch(closeNoteModal());
  };

  const favoriteNoteHandler = () => {
    dispatch(pushExternalNote(favoriteNotesList[favoriteNotesId]));
    dispatch(deleteFavoriteNote());
    dispatch(closeNoteModal());
  };

  const favoriteNoteDeleteHandler = () => {
    dispatch(pushTrashNote(favoriteNotesList[favoriteNotesId]));
    dispatch(deleteFavoriteNote());
    dispatch(closeNoteModal());
  };

  const noteDeleteHandler = () => {
    dispatch(pushTrashNote(notesList[currentId])); 
    dispatch(deleteNote());
    dispatch(closeNoteModal());
  };

  const trashNoteMoveToNotes = () => {
    dispatch(pushExternalNote(trashList[trashCurrentId]));
    dispatch(deleteTrashNote());
    dispatch(closeNoteModal());
  };

  const trashNoteDeleteHandler = () => {
    dispatch(deleteTrashNote());
    dispatch(closeNoteModal());
  };

  const NoteModalHandler = () => {
    if (currentTab === "Notes") {
      return (
        <StyledWrapper>
          <StyledButton onClick={addToFavoriteHandler}>Mark as favorite</StyledButton>
          <StyledButton background={"#ee484c"} border={"#ee484c"} color={"white"} onClick={noteDeleteHandler}>Move to trash</StyledButton>
          <StyledButton onClick={closeButtonHandler}>Close</StyledButton>
        </StyledWrapper>
      );
    } else if (currentTab === "Favorites") {
      return (
        <StyledWrapper>
          <StyledButton onClick={favoriteNoteHandler}>Delete from favorite</StyledButton>
          <StyledButton onClick={favoriteNoteDeleteHandler} background={"#ee484c"} border={"#ee484c"} color={"white"}>Move to trash</StyledButton>
          <StyledButton onClick={closeButtonHandler}>Close</StyledButton>
        </StyledWrapper>
      );
    } else if (currentTab === "Trash") {
      return (
        <StyledWrapper>
          <StyledButton onClick={trashNoteMoveToNotes}>Move back to notes</StyledButton>
          <StyledButton onClick={trashNoteDeleteHandler} background={"#ee484c"} border={"#ee484c"} color={"white"}>Delete permanently</StyledButton>
          <StyledButton onClick={closeButtonHandler}>Close</StyledButton>
        </StyledWrapper>
      );
    }
  };

  return (
    <StyledNoteModal noteModalMargin={noteModalMargin}>
      {NoteModalHandler()}
    </StyledNoteModal>
  );
}