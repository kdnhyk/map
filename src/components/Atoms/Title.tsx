import { error } from "console";
import styled from "styled-components";

type heightSize = "SMALL" | "MEDIEM" | "LARGE";
type widthSize = "SMALL" | "MEDIEM" | "LARGE" | "FIT_CONTENT";

type StyleProps = {
  height: heightSize;
  width: widthSize;
};

const TitleBlock = styled.h1<StyleProps>`
  height: ${({ height }) =>
    height === "SMALL"
      ? "20px"
      : height === "MEDIEM"
      ? "40px"
      : height === "LARGE"
      ? "80px"
      : null};
  width: ${({ width }) =>
    width === "SMALL"
      ? "20px"
      : width === "MEDIEM"
      ? "40px"
      : width === "LARGE"
      ? "80px"
      : width === "FIT_CONTENT"
      ? "fit-content"
      : null};

  font-size: 16px;

  border: none;
  border-radius: 2px;
`;

export type tTitle = {
  children: string;
  height: heightSize;
  width: widthSize;
};

export default function Title({ children, height, width }: tTitle) {
  return (
    <TitleBlock height={height} width={width}>
      {children}
    </TitleBlock>
  );
}
