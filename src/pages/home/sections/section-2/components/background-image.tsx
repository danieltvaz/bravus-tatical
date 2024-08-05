import { ReactNode } from "react";
import backgroundImage from "../../../../../assets/background-images/loja.png";
import styled from "styled-components";

const ImageContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 999px) {
  }
`;

const Filter = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #000;
  filter: brightness(30%);
`;

export default function BackgroundImage({ children }: { children?: ReactNode }) {
  return (
    <Filter>
      <ImageContainer>{children}</ImageContainer>
    </Filter>
  );
}
