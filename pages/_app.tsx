import type {AppProps} from "next/app";
import {ChakraProvider} from "@chakra-ui/react";
import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Red Hat Display', sans-serif`,
    body: `'Red Hat Display', sans-serif`,
  },
});

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
