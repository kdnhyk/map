import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";

import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";

const AppBlcok = createGlobalStyle({
  body: {
    margin: "0px",
  },
});

export default function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <AppBlcok />
        <RecoilRoot>
          <Home />
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}
