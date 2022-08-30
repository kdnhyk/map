import styled from "styled-components";
import SearchBar from "../../components/Molecules/SearchBar";

const MainBlock = styled.div`
  height: 100%;
  width: 100%;

  .Nav {
    height: 100%;
    width: 440px;
    .SearchArea {
      height: 115px;
      background: black;
    }
  }
`;

export default function Main() {
  return (
    <MainBlock>
      <div className="Nav">
        <div className="SearchArea">
          <SearchBar />
        </div>
        <div className="ListArea"></div>
      </div>
      <div className="Map"></div>
    </MainBlock>
  );
}
