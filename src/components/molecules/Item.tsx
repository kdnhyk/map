import styled from "styled-components";
import P from "../../components/atoms/P";
import { tItem } from "../../store/Items";

const Style = styled.div({
  height: "260px",
  width: "400px",
  margin: "0px 20px",

  display: "flex",
  flexDirection: "column",

  ".Top": {
    height: "45px",
    padding: "10px 0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // gap: "15px",
    borderBottom: "1px solid lightgrey",
    ".TitleArea": {
      display: "flex",
      flexDirection: "row",
      alignItems: "end",
      gap: "10px",
      ".Type": {
        paddingRop: "5px",
      },
    },
  },
  ".Mid": {
    height: "45px",
  },
  ".ImgSlider": {
    height: "150px",
  },
});

type Props = { Item: tItem };

export default function SearchBar({ Item }: Props) {
  return (
    <Style>
      <div className="Top">
        <div className="TitleArea">
          <P className="Title" fontSize="22" bold={true}>
            {Item.title}
          </P>
          <P className="Type" fontSize="20" color="grey">
            {Item.type}
          </P>
        </div>

        <div className="InfoArea"></div>
      </div>
      <div className="Mid">
        <P fontSize="16">맛있는 커피, 갓나온 디저트 루프탑까지</P>
      </div>
      <div className="ImgSlider">
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
    </Style>
  );
}
