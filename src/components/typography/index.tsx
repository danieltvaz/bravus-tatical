import { CSSProperties, ComponentProps } from "react";

type TypographyProps<T extends keyof JSX.IntrinsicElements> = {
  as?: T;
  color: string;
  fontSize: string;
  fontWeight: string;
  textDecoration?: CSSProperties["textDecoration"];
  fontStyle?: CSSProperties["fontStyle"];
} & ComponentProps<T>;

export default function Typography<ElementType extends keyof JSX.IntrinsicElements>({
  as,
  color,
  fontSize,
  fontWeight,
  textDecoration,
  fontStyle,
  ...props
}: TypographyProps<ElementType>) {
  const Component = as || "span";
  //@ts-ignore
  return <Component style={{ color, fontSize, fontWeight, textDecoration, fontStyle }} {...props} />;
}
