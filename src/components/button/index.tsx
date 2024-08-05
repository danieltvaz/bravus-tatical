import * as Styled from "./styles";

import { Props } from "./types";

export default function Button(props: Props) {
  return <Styled.ButtonLink {...props}>{props.children}</Styled.ButtonLink>;
}
