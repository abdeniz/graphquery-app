import type {AppProps} from "next/app";
import {ChakraProvider} from "@chakra-ui/react";
import {extendTheme} from "@chakra-ui/react";
import {AuthProvider} from "@/lib/auth";
import {supabase} from "@/lib/client";

const theme = extendTheme({
  fonts: {
    heading: `'Red Hat Display', sans-serif`,
    body: `'Red Hat Display', sans-serif`,
  },
});

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider supabase={supabase}>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
