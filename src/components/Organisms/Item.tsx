import styled from "styled-components";

const ItemBlock = styled.div`
  height: 80px;
  width: 440px;

  padding: 15px 20px;
  box-sizing: border-box;
`;

type tItem = {
  width: string;
};

export default function Item({}) {
  return <ItemBlock className="Item"></ItemBlock>;
}
