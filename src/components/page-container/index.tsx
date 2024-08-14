import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default function PageContainer({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}
