import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ItemsState } from "../../store/Items";
import Item from "./Item";

const Style = styled.div({
  height: "fit-content",
  width: "440px",
  maxHeight: "calc(100vh - 195px)",
  overflowY: "auto",
  overflowX: "hidden",

  display: "flex",
  flexDirection: "column",
});

export default function SearchBar() {
  const [items, setItems] = useRecoilState(ItemsState);

  return (
    <Style>
      {items.map((item) => {
        return <Item Item={item} />;
      })}
    </Style>
  );
}
