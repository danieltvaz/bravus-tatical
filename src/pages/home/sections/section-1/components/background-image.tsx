import { ReactNode } from "react";
import backgroundImage from "../../../../../assets/background-images/montagem_home_secao_1.png";
import styled from "styled-components";

const ImageContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  height: calc(100vh - 36px);

  @media screen and (max-width: 999px) {
  }
`;

export default function BackgroundImage({ children }: { children: ReactNode }) {
  return <ImageContainer>{children}</ImageContainer>;
}
