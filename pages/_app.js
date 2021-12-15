import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Fonts } from "../components";

const theme = extendTheme({
  fonts: {
    body: "Inter",
  },
});

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
