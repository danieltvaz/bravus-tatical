import { Props } from "./types";
import styled from "styled-components";

export const ButtonLink = styled.button.attrs<Props>((props) => ({
  style: {
    ...props,
  },
}))`
  color: #fff;
  font-style: italic;
  font-weight: 600;
  border: none;
  background-color: transparent;
`;
