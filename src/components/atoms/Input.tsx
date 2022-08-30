import React, { useState } from "react";
import styled from "styled-components";

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
    // focus시 파란색
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
    color: `${color}`,
    background: `${bgColor}`,
    width: `${
      size === "SMALL" ? "120px" : size === "MEDIUM" ? "160px" : "320px"
    }`,
    outline: "none",
  })
);

type Props = {
  color: string;
  bgColor: string;
  size: tinputSize;
  className: string;
  placeholder: string;
};

export default function Input({
  color = "black",
  bgColor = "white",
  size,
  className,
  placeholder,
}: Props) {
  const [value, setValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Style
    // color={color}
    // bgColor={bgColor}
    // size={size}
    // className={className}
    // placeholder={placeholder}
    // value={value}
    // onChange={onChange}
    ></Style>
  );
}
