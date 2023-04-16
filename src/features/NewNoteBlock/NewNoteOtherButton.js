import { StyledNewNoteOtherButton } from "./StyledNewNoteBlock"

export default function NewNotextOtherButton (props) {
  return (
    <StyledNewNoteOtherButton onClick={props.otherClick}>{props.buttonText}</StyledNewNoteOtherButton>
  )
}