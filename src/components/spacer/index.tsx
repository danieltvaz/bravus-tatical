import * as Styled from "./styles";

type Props = {
  orientation: "vertical" | "horizontal";
  size: string;
};

export default function Spacer(props: Props) {
  return <Styled.Spacer {...props} />;
}
