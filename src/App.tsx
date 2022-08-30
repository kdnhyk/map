import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";

const AppBlcok = createGlobalStyle({
  body: {
    margin: "0px",
  },
});

export default function App() {
  return (
    <>
      <AppBlcok />
      <Home />
    </>
  );
}
