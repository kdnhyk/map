import { useState } from "react";
import styled from "styled-components";
import SpotExtension from "./SpotExtension";
import ImgSlider from "../Molecules/ImgSlider";
import usePlaces from "../../hooks/usePlaces";

const SpotBlock = styled.div`
  height: 220px;
  width: 440px;

  padding: 15px 20px;
  box-sizing: border-box;
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

type tSpot = {
  title: string;
  type: string;
  item: {
    id: number;
    ID: number;
    title: string;
    // 글은 차후에 추가
  }[];
  onClickSpot: () => {};
};

export default function Spot() {
  const [isExtension, setIsExtension] = useState(false);
  const goExtention = () => {
    setIsExtension(true);
  };
  const goBack = () => {
    setIsExtension(false);
  };

  usePlaces();

  return (
    <>
      {!isExtension ? (
        <SpotBlock className="Spot">
          <div className="TitleArea" onClick={goExtention}>
            <h2 className="Title">GolMok Cafe</h2>
            <h3 className="Type">cafe</h3>
          </div>
          <div className="InfoArea"></div>
          <div className="ImgSliderArea">
            <ImgSlider
              source={[
                "https://images.unsplash.com/photo-1662017047218-680df61eab71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1659535880591-78ed91b35158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1662012963749-30719c792b7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
              ]}
            />
          </div>
        </SpotBlock>
      ) : (
        <SpotExtension title="TITLE" type="cafe" goBack={goBack} />
      )}
    </>
  );
}
