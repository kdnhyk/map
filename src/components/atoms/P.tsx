import styled from "styled-components";

type styledProps = {
  color: string;
  bgColor: string;
  fontSize: string;
  bold: boolean;
};

const Style = styled.p(
  {
    "&:focus": {
      caretColor: "#2F7AEB",
      border: "1px solid #2F7AEB",
      outline: "none",
    },
  },
  ({ color, bgColor, fontSize, bold }: styledProps) => ({
    color: `${color}`,
    background: `${bgColor}`,
    fontSize: `${fontSize}`,
    fontWeight: `${bold ? "bold" : "normal"}`,
  })
);

type Props = {
  color?: string;
  bgColor?: string;
  fontSize: string;
  bold?: boolean;
  className?: string;
  children: string;
};

export default function P({
  color = "black",
  bgColor = "white",
  fontSize,
  bold = false,
  className,
  children,
}: Props) {
  return (
    <Style
      color={color}
      bgColor={bgColor}
      fontSize={fontSize + "px"}
      bold={bold}
      className={className}
    >
      {children}
    </Style>
  );
}
