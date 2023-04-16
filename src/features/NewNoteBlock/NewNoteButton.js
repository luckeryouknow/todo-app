import { StyledNewNoteButton } from "./StyledNewNoteBlock";
import { useDispatch } from 'react-redux';
import { open } from "../CreateNewNoteModal/modalSlice";

export default function NewNoteButton () {
  const dispatch = useDispatch();

  return (
    <StyledNewNoteButton onClick={() => dispatch(open())}>New Note</StyledNewNoteButton>
  );
}