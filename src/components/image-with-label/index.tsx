import * as Styled from "./styles";

import { ReactNode } from "react";

type Props = {
  maxWidth: string;
  maxHeight: string;
  src: string;
  label: ReactNode;
};

export default function ImageWithLabel(props: Props) {
  return (
    <Styled.Wrapper>
      <Styled.OverlayWrapper>{props.label}</Styled.OverlayWrapper>
      <Styled.ImageWrapper>
        <Styled.Image style={{ ...props }} src={props.src} />
      </Styled.ImageWrapper>
    </Styled.Wrapper>
  );
}
