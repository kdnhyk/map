import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";

const Style = styled.div({});

function Home() {
  return (
    <Style>
      <Header />
      <Main />
    </Style>
  );
}

export default Home;
