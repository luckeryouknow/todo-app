import styled from "styled-components";

export const StyledCreateNewNoteModal = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  margin-top: ${props => props.marginProp};
  position: absolute;
  background-color: #2d2d2d;
  transition: 0.75s;
`;

export const StyledWrapper = styled.div`
  display: block;
  width: 50%;
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 25%;
  right: 25%;
`;

export const StyledInput = styled.input`
  display: block;
  width: 400px;
  margin: 0 auto;
  border: none;
  border-bottom: 1px solid white;
  background: none;
  color: white;
  outline: none;
  font-size: 18px;
  text-align: center;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  width: 400px;
  margin: 50px auto 0 auto;
`;

export const StyledButton = styled.button`
  width: 125px;
  height: 50px;
  margin: 0 auto;
  background: none;
  border: 1px solid white;
  color: white;
  font-size: 16px;
  transition: 0.75s;

  &:hover {
    background: white;
    color: #2d2d2d;
  }
`;