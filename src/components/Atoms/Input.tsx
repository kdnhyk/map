import { useState } from "react";
import styled from "styled-components";

const InputBlock = styled.input`
  height: 40px;
  width: ${({ width }) => width};

  font-size: 18px;

  border: none;
`;

type tInput = {
  width: string;
  type: React.HTMLInputTypeAttribute;
};

export default function Input({ width, type }: tInput) {
  const [value, setValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <InputBlock
      width={width}
      type={type}
      value={value}
      onChange={onChange}
    ></InputBlock>
  );
}
