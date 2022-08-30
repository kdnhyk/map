import styled from "styled-components";

type StyleProps = {
  height: string;
  width: string;
};

const ButtonBlock = styled.button<StyleProps>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};

  font-size: 16px;

  border: none;
`;

type tButton = {
  height: string;
  width: string;
};

export default function Button({ height, width }: tButton) {
  return <ButtonBlock height={height} width={width}></ButtonBlock>;
}
