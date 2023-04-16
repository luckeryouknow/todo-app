import { StyledCreateNewNoteModal } from "./StyledCreateNewNoteModal";
import { StyledWrapper } from "./StyledCreateNewNoteModal";
import { StyledInput } from "./StyledCreateNewNoteModal";
import { StyledButtonContainer } from "./StyledCreateNewNoteModal";
import { StyledButton } from "./StyledCreateNewNoteModal";
import { useSelector, useDispatch } from 'react-redux';
import { close, selectModal } from "../CreateNewNoteModal/modalSlice";
import { pushNote } from "../NotesListBlock/notesListSlice";
import { setNoteName } from "../NotesListBlock/notesListSlice";

export default function CreateNewNoteModal () {
  const margin = useSelector(selectModal);
  const dispatch = useDispatch();

  return (
    <StyledCreateNewNoteModal marginProp={margin}>
      <StyledWrapper>
        <StyledInput onChange={(event) => dispatch(setNoteName(event.target.value))} />
        <StyledButtonContainer>
          <StyledButton onClick={() => dispatch(close())}>Close</StyledButton>
          <StyledButton onClick={() => {
            dispatch(close());
            dispatch(pushNote());
            }}>
              Create
          </StyledButton>
        </StyledButtonContainer>
      </StyledWrapper>
    </StyledCreateNewNoteModal>
  );
}