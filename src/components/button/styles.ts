import { Props } from "./types";
import styled from "styled-components";

export const Anchor = styled.a.attrs<Props>((props) => ({
  style: {
    ...props.style,
  },
}))`
  color: #fff;
  font-style: italic;
  font-weight: 600;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Button = styled.button.attrs<Props>((props) => ({
  style: {
    ...props.style,
  },
}))`
  color: #fff;
  font-style: normal;
  border-radius: 12px;
  width: 128px;
  height: 42px;
  padding: 12px;
  font-weight: 700;
  border: none;
  background-color: red;
  cursor: pointer;
`;
