import styled from "styled-components";
import Item from "./Item";

const SpotExtensionBlock = styled.div`
  height: fit-content;
  width: 440px;

  padding: 15px 20px;
  box-sizing: border-box;
  .BackButton {
    width: 40px;
    height: 40px;
    position: absolute;
    left: 440px;
    top: 195px;
    border: 1px solid grey;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .TitleArea {
    height: 45px;

    margin-bottom: 15px;
    border-bottom: 1px solid grey;

    display: flex;
    flex-direction: row;
    align-items: center;
    .Title {
      margin: 0px 15px 0px 0px;
    }
    .Type {
      height: 16px;
      margin: 0;
      color: grey;
    }
  }
  .ImgSliderArea {
    margin-top: 15px;
  }
`;

type tSpotExtension = {
  title: string;
  type: string;
  goBack: () => void;
};

export default function SpotExtension({ title, type, goBack }: tSpotExtension) {
  return (
    <SpotExtensionBlock className="SpotExtension">
      <div className="BackButton" onClick={goBack}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 2L22 22M22 2L2 22" stroke="black" stroke-width="3" />
        </svg>
      </div>
      <div className="TitleArea">
        <h2 className="Title">GolMok Cafe</h2>
        <h3 className="Type">cafe</h3>
      </div>
      <div className="InfoArea"></div>
      <div className="ItemList">
        <Item />
        <Item />
      </div>
    </SpotExtensionBlock>
  );
}
