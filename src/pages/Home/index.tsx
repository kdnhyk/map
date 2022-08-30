import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";

const HomeBlock = styled.div`
  height: 100%;
  width: 100%;
`;

export default function Home() {
  return (
    <HomeBlock>
      <Header />
      <Main />
    </HomeBlock>
  );
}
