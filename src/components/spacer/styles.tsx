import styled from "styled-components";

export const Spacer = styled.div<{ orientation: "vertical" | "horizontal"; size: string }>`
  min-width: ${({ orientation, size }) => (orientation === "horizontal" ? size : null)};
  min-height: ${({ orientation, size }) => (orientation === "vertical" ? size : null)};
`;
