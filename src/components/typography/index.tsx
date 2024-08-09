import { CSSProperties, ComponentProps } from "react";

type TypographyProps<T extends keyof JSX.IntrinsicElements> = {
  as?: T;
  color: string;
  fontSize: string;
  fontWeight: string;
  textDecoration?: CSSProperties["textDecoration"];
  fontStyle?: CSSProperties["fontStyle"];
  textAlign?: CSSProperties["textAlign"];
  maxWidth?: CSSProperties["maxWidth"];
} & ComponentProps<T>;

export default function Typography<ElementType extends keyof JSX.IntrinsicElements>({
  as,
  color,
  fontSize,
  fontWeight,
  textDecoration,
  fontStyle,
  textAlign,
  maxWidth,
  ...props
}: TypographyProps<ElementType>) {
  const Component = as || "span";
  //@ts-ignore
  return (
    //@ts-ignore
    <Component style={{ color, fontSize, fontWeight, textDecoration, fontStyle, textAlign, maxWidth }} {...props} />
  );
}
