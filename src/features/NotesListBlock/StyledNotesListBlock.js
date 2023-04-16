import styled from "styled-components";

export const StyledNotesListBlock = styled.div`
  min-width: 300px;
  max-width: 25%;
  background-color: #242424;
  color: white;
  resize: horizontal;
  overflow: auto;
`;

export const StyledNote = styled.div`
  display: flex;
  width: 100%;
  height: 75px;
  border: none;
  background: none;
  color: white;
  text-align: left;
  font-size: 18px;

  &:hover {
    background-color: #414141;
  }
`;

export const StyledNoteName = styled.div`
  margin-top: 27px;
`;

export const StyledModalButton = styled.button`
  display: ${props => props.modalButtonDisplay || "none"};
  margin-left: auto;
  margin-top: 10px;
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: bold;
  background: none;
  color: white;
`;