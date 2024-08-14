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

const Column = styled.div.attrs((props) => ({ style: { ...props.style } }))`
  display: flex;
  flex-direction: column;
`;

export default function FlexColumn(props: Props) {
  return <Column style={{ ...props }}>{props.children}</Column>;
}
