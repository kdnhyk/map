import { useState } from "react";
import styled from "styled-components";
import ItemExtension from "./SpotExtension";

const ItemBlock = styled.div`
  height: 200px;
  width: 400px;

  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  .ImgArea {
  }
  .InfoArea {
    width: 200px;
    height: 200px;
    padding: 0px 15px;
    box-sizing: border-box;
    .TitleArea {
      height: fit-content;

      border-bottom: 1px solid grey;

      display: flex;
      flex-direction: column;
      align-items: start;
      .ID {
        height: 16px;
        margin: 0;
        color: grey;
      }
      .Title {
        margin: 0px 15px 0px 0px;
      }
    }
  }
`;

type tItem = {
  title: string;
  type: string;
  onClickItem: () => {};
};

export default function Item() {
  const [isExtension, setIsExtension] = useState(false);
  const goExtention = () => {
    setIsExtension(true);
  };
  const goBack = () => {
    setIsExtension(false);
  };

  return (
    <ItemBlock className="Item">
      <div className="ImgArea">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H200V200H0V0Z" fill="#FF8888" />
        </svg>
      </div>
      <div className="InfoArea">
        <div className="TitleArea" onClick={goExtention}>
          <h3 className="ID">@iemsup</h3>
          <h2 className="Title">GolMok Cafe with golmok</h2>
        </div>
        <div className="DescriptionArea">
          맛있는 커피, 갓 구운 베이커리와 루프탑까지
        </div>
      </div>
    </ItemBlock>
  );
}
