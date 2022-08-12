import styled from "styled-components";
import { HTMLInputTypeAttribute } from "react";

export type tinputSize = "SMALL" | "MEDIUM" | "LARGE";

type styledProps = {
  color: string;
  bgColor: string;
  size: tinputSize;
};

const Style = styled.input(
  {
    height: "40px",

    fontSize: "14px",

    color: "#FFFFFF",
    background: "#000000",

    "&:focus": {
      caretColor: "#2F7AEB",
      border: "1px solid #2F7AEB",
      outline: "none",
    },

    "&::-webkit-outer-spin-button": {},
    "&::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      mamrgin: "0",
    },
  },
  ({ color, bgColor, size }: styledProps) => ({
    color: color,
    background: bgColor,
    width: `${
      size === "SMALL" ? "120px" : size === "MEDIUM" ? "160px" : "320px"
    }`,
  })
);

type Props = {
  color: string;
  bgColor: string;
  size: tinputSize;
  className: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  color = "black",
  bgColor = "white",
  size,
  className,
  placeholder,
  value,
  onChange,
}: Props) => {
  return (
    <Style
      color={color}
      bgColor={bgColor}
      size={size}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></Style>
  );
};

export default Input;
