import AuthWrapper from "@/components/AuthWrapper";
import {AuthProvider} from "@/lib/auth";
import {supabase} from "@/lib/client";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import type {AppProps} from "next/app";

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
        <AuthWrapper>
          <Component {...pageProps} />
        </AuthWrapper>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
