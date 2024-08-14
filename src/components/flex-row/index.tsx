import styled, { CSSProperties } from "styled-components";

import { ReactNode } from "react";

type Props = {
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
  minHeight?: CSSProperties["minHeight"];
  minWidth?: CSSProperties["width"];
  children?: ReactNode;
  zIndex?: CSSProperties["zIndex"];
  position?: CSSProperties["position"];
  top?: CSSProperties["top"];
  left?: CSSProperties["left"];
};

const Row = styled.div.attrs((props) => ({ style: { ...props.style } }))`
  display: flex;
  flex-wrap: wrap;
`;

export default function FlexRow(props: Props) {
  return <Row style={{ ...props }}>{props.children}</Row>;
}
