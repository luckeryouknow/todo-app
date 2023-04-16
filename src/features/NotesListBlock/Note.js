import { StyledNote, StyledNoteName, StyledModalButton } from "./StyledNotesListBlock";
import { useState } from "react";

export default function Note (props) {
  const [modalButtonDisplay, setModalButtonDisplay] = useState("none");

  const onMouseEnterHandler = () => {
    setModalButtonDisplay("block");
  };

  const onMouseLeaveHandler = () => {
    setModalButtonDisplay("none");
  };

  return (
    <StyledNote id={props.noteId} 
      key={props.noteKey} 
      onClick={props.noteClick} 
      onMouseEnter={onMouseEnterHandler} 
      onMouseLeave={onMouseLeaveHandler}
    >
      <StyledNoteName>{props.noteName}</StyledNoteName>
      <StyledModalButton onClick={props.modalButtonOnClick} modalButtonDisplay={modalButtonDisplay}>
          ···
      </StyledModalButton>
    </StyledNote>
  );
}