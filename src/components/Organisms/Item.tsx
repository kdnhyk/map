import styled from "styled-components";

const ItemBlock = styled.div`
  height: 220px;
  width: 440px;

  padding: 15px 20px;
  box-sizing: border-box;
  .TitleArea {
    height: 45px;

    border-bottom: 1px solid grey;

    display: flex;
    flex-direction: row;
    align-items: center;
    h2 {
      margin: 0px 15px 0px 0px;
    }
    h3 {
      height: 16px;
      margin: 0;
      color: grey;
    }
  }
  .ImgSliderArea {
    margin-top: 15px;
  }
`;

type tItem = {
  title: string;
  type: string;
};

export default function Item({}) {
  return (
    <ItemBlock className="Item">
      <div className="TitleArea">
        <h2 className="Title">GolMok Cafe</h2>
        <h3 className="Type">cafe</h3>
      </div>
      <div className="InfoArea"></div>
      <div className="ImgSliderArea">
        <svg
          width="400"
          height="150"
          viewBox="0 0 400 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H400V150H0V0Z" fill="#FFD6D6" />
          <path
            d="M0 12C0 5.37258 5.37258 0 12 0H150V150H12C5.37258 150 0 144.627 0 138V12Z"
            fill="#FF8888"
          />
          <path d="M150 0H300V150H150V0Z" fill="#A7BAFF" />
          <path d="M300 0H400V150H300V0Z" fill="#A9FFA7" />
        </svg>
      </div>
    </ItemBlock>
  );
}
