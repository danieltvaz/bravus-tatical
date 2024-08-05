export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  backgroundColor?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  padding?: string;
  fontStyle?: string;
  variant?: "button" | "anchor";
}
