import styled from "styled-components";

export const StyledNewNoteBlock = styled.div`
  min-width: 300px;
  max-width: 25%;
  background-color: #2d2d2d;
  color: white;
  resize: horizontal;
  overflow: auto;
`;

export const StyledNewNoteButton = styled.button`
  display: block;
  width: 100%;
  height: 75px;
  margin-bottom: 20px;
  border: none;
  color: white;
  background: none;
  text-align: left;
  font-size: 20px;

  &:hover {
    background-color: #5183f5;
  }
`;

export const StyledNewNoteOtherButton = styled.button`
  display: block;
  width: 100%;
  height: 50px;
  border: none;
  color: white;
  background: none;
  text-align: left;
  font-size: 18px;

  &:hover {
    background-color: #3a3a3a;
  }
`;