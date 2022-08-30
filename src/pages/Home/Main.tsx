import styled from "styled-components";
import SearchBar from "../../components/molecules/SearchBar";
import ItemList from "../../components/molecules/ItemList";

const Style = styled.div({
  width: "100%",
  ".Nav": {
    width: "440px",
    ".SearchArea": {
      height: "115px",
      color: "white",
      background: "black",
      ".SearchBarWrapper": {
        padding: "15px 20px",
      },
    },
    ".ListArea": {},
  },
});

function Main() {
  return (
    <Style>
      <div className="Nav">
        <div className="SearchArea">
          <div className="SearchBarWrapper">
            <SearchBar className="SearchBar" size="LARGE" />
          </div>
          <div className="SearchTagsWrapper"></div>
        </div>
        <div className="ListArea">
          <ItemList />
        </div>
      </div>
      <div className="Map"></div>
    </Style>
  );
}

export default Main;
