import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 48px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
`;

export default function TopHeader(props: { children: ReactNode }) {
  return <Container>{props.children}</Container>;
}
