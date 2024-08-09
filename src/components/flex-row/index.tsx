import styled, { CSSProperties } from "styled-components";

import { ReactNode } from "react";

type Props = {
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
  height?: CSSProperties["height"];
  width?: CSSProperties["width"];
  children?: ReactNode;
};

const Row = styled.div.attrs((props) => ({ style: { ...props.style } }))`
  display: flex;
`;

export default function FlexRow(props: Props) {
  return <Row style={{ ...props }}>{props.children}</Row>;
}
