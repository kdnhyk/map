import styled from "styled-components";
import Input from "../Atoms/Input";
import Button, { tButton } from "../Atoms/Button";

const ImgSliderBlock = styled.div`
  height: 150px;
  width: 400px;

  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  overflow-y: auto;
  .ImgArea {
    display: flex;
    flex-direction: row;
    .Img {
      height: 150px;
      width: 150px;
    }
  }
`;

type tImgSlider = {
  source: string[];
};

export default function ImgSlider({ source }: tImgSlider) {
  return (
    <ImgSliderBlock className="ImgSlider">
      <div className="ImgArea">
        {source.map((temp) => (
          <img key="1" className="Img" alt="이미지"></img>
        ))}
      </div>
    </ImgSliderBlock>
  );
}
