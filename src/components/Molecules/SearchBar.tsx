import styled from "styled-components";
import Input from "../Atoms/Input";
import Button, { tButton } from "../Atoms/Button";

const SearchBarBlock = styled.div`
  height: 80px;
  width: 440px;

  padding: 15px 20px;
  box-sizing: border-box;

  .SearchBarWrapper {
    background: white;
    margin-bottom: 15px;

    display: flex;
    flex-direction: row;
    align-items: center;
    .SearchIcon {
      height: 50px;
      width: 50px;
      padding: 15px 20px;
      margin-right: 10px;
      box-sizing: border-box;
    }
  }
`;

type tSearchBar = {
  width: string;
};

export default function SearchBar({}) {
  return (
    <SearchBarBlock className="SearchBar">
      <div className="SearchBarWrapper">
        <div className="SearchIcon">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="8.01504"
              cy="8.01504"
              r="7.01504"
              stroke="black"
              stroke-width="2"
            />
            <path
              d="M12.5264 12.5263L22.0001 22"
              stroke="black"
              stroke-width="2"
            />
          </svg>
        </div>
        <Input></Input>
      </div>
      <div className="TagsWrapper">
        <Button height="SMALL" width="FIT_CONTENT">
          음식
        </Button>
      </div>
    </SearchBarBlock>
  );
}
