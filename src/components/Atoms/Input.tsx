import { useState } from "react";
import styled from "styled-components";

const InputBlock = styled.input`
  height: 40px;
  width: 320px;

  font-size: 18px;

  border: none;
`;

type tInput = {
  width: string;
};

export default function Input({}) {
  const [value, setValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <InputBlock value={value} onChange={onChange}></InputBlock>;
}
