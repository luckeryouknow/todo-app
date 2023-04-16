import { StyledNewNoteBlock } from "./StyledNewNoteBlock"
import NewNoteButton from "./NewNoteButton";
import NewNoteOtherButton from "./NewNoteOtherButton";
import { useDispatch } from "react-redux";
import { openNotesTab, openFavoritesTab, openTrashTab } from "./newNoteSlice";

export default function NewNoteBlock () {
  const dispatch = useDispatch();

  return (
    <StyledNewNoteBlock>
      <NewNoteButton />

      <NewNoteOtherButton buttonText={"Notes"} otherClick={() => dispatch(openNotesTab())} />
      <NewNoteOtherButton buttonText={"Favorites"} otherClick={() => dispatch(openFavoritesTab())} />
      <NewNoteOtherButton buttonText={"Trash"} otherClick={() => dispatch(openTrashTab())} />
    </StyledNewNoteBlock>
  )
}