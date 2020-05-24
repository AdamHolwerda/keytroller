import styled from "styled-components";
import Controller from "./components/controller";

export const StyledTextarea = styled.textarea`
  box-sizing: border-box;
  margin: auto;
  width: 95vw;
  height: 200px;
  font-size: 20px;
  padding: 1em;
  &:focus {
    outline: none;
  }
`;

export const StyledH1 = styled.h1`
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: center;
  font-family: sans-serif;
`;

export const StyledController = styled(Controller)`
  margin: auto;
  margin-top: 30px;
  zoom: 0.75;
`;
