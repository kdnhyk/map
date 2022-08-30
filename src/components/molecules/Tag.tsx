import styled from "styled-components";

type styledProps = {
  color: string;
  bgColor: string;
};

const Style = styled.button<styledProps>(
  {
    height: "20px",
    width: "fit-content",
    fontSize: "14px",

    "&:focus": {
      caretColor: "#2F7AEB",
      border: "1px solid #2F7AEB",
      outline: "none",
    },
  },
  ({ color, bgColor }: styledProps) => ({
    color: `${color}`,
    background: `${bgColor}`,
  })
);

type Props = {
  color: string;
  bgColor: string;
  className: string;
  value: string;
  onClick: () => void;
};

export default function Button({
  color = "black",
  bgColor = "white",
  className,
  value,
  onClick,
}: Props) {
  return (
    <Style
      color={color}
      bgColor={bgColor}
      className={className}
      value={value}
      onClick={onClick}
    ></Style>
  );
}
