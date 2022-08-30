import styled from "styled-components";

export type tbuttonSize = "SMALL" | "MEDIUM" | "LARGE";

type styledProps = {
  color: string;
  bgColor: string;
  size: tbuttonSize;
};

const Style = styled.button(
  {
    height: "40px",
    fontSize: "14px",

    "&:focus": {
      caretColor: "#2F7AEB",
      border: "1px solid #2F7AEB",
      outline: "none",
    },
  },
  ({ color, bgColor, size }: styledProps) => ({
    color: `${color}`,
    background: `${bgColor}`,
    width: `${
      size === "SMALL" ? "120px" : size === "MEDIUM" ? "160px" : "320px"
    }`,
  })
);

type Props = {
  color: string;
  bgColor: string;
  size: tbuttonSize;
  className: string;
  value: string;
  onClick: () => void;
};

export default function Button({
  color = "black",
  bgColor = "white",
  size,
  className,
  value,
  onClick,
}: Props) {
  return (
    <Style
      color={color}
      bgColor={bgColor}
      size={size}
      className={className}
      value={value}
      onClick={onClick}
    ></Style>
  );
}
