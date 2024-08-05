import * as Styled from "./styles";

import { ComponentProps, ReactNode } from "react";

export default function SectionContainer({ children, ...props }: ComponentProps<"section"> & { children: ReactNode }) {
  return <Styled.Container {...props}>{children}</Styled.Container>;
}
