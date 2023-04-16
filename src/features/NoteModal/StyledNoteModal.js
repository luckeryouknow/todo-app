import styled from "styled-components";

export const StyledNoteModal = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  margin-top: ${props => props.noteModalMargin};
  position: absolute;
  background-color: #2d2d2d;
  transition: 0.75s;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  position: absolute;
  right: 25%;
  left: 25%;
  top: calc(50% - 75px);
  vertical-align: center;
`;

export const StyledButton = styled.button`
  widht: 100%;
  height: 50px;
  margin-top: 25px;
  background: none;
  border: 1px solid white;
  color: white;
  font-size: 16px;
  text-align: center;
  transition: 0.75s;

  &:hover {
    background: ${props => props.background || "white"};
    color: ${props => props.color || "#2d2d2d"};
    border: ${props => props.border || "white"};
  }
`;