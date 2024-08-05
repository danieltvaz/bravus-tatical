import * as Styled from "./styles";

import { Props } from "./types";

export default function Button(props: Props) {
  if (props.variant === "anchor") {
    return <Styled.Anchor style={{ ...props.style }}>{props.children}</Styled.Anchor>;
  }
  return <Styled.Button style={{ ...props.style }}>{props.children}</Styled.Button>;
}
