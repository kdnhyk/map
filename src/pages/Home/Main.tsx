import styled from "styled-components";
import SearchBar from "../../components/Molecules/SearchBar";
import TagsBar from "../../components/Molecules/TagsBar";
import SpotList from "../../components/Organisms/SpotList";
import Map from "../../components/Organisms/Map";

const MainBlock = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: row;

  .Nav {
    height: 100%;
    width: 440px;
    .SearchArea {
      height: 115px;
      background: black;
    }
  }
  .MapArea {
    width: calc(100%-440px);
    height: calc(100%-195px);
  }
`;

export default function Main() {
  return (
    <MainBlock>
      <div className="Nav">
        <div className="SearchArea">
          <SearchBar />
          <TagsBar />
        </div>
        <div className="ListArea">
          <SpotList />
        </div>
      </div>
      <div className="MapArea">
        <Map />
      </div>
    </MainBlock>
  );
}
