import styled from "styled-components";
import { HTMLInputTypeAttribute } from "react";

const Style = styled.input({
  width: "100%",
  height: "40px",

  fontSize: "14px",

  color: "#FFFFFF",
  background: "#000000",

  "&:focus": {
    caretColor: "#2F7AEB",
    border: "1px solid #2F7AEB",
    outline: "none"
  },

  "&::-webkit-outer-spin-button": {},
  "&::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
    mamrgin: "0"
  }
})

export const size = {
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
}

type Props = {
  color: string;
  bgColor: string;
  size,
  className,
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  color = 'black',
  bgColor = 'white',
  size = 
  placeholder,
  value,
  onChange,
}: Props)=> {
  return (
    <Style
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      value={value}
      theme={theme}
    ></Style>
  );
};

export default Input;
