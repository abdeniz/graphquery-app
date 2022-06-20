import AuthWrapper from "@/components/AuthWrapper";
import {AuthProvider} from "@/lib/auth";
import {supabase} from "@/lib/client";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import type {AppProps} from "next/app";
import "@fontsource/red-hat-display";

const theme = extendTheme({
  fonts: {
    heading: `'Red Hat Display', sans-serif`,
    body: `'Red Hat Display', sans-serif`,
  },
  textStyles: {
    h1: {
      fontSize: ["24px"],
      fontWeight: "900",
      lineHeight: "110%",
    },
    h2: {
      fontSize: ["20px"],
    },
    h3: {
      fontSize: ["16px"],
      fontWeight: 600,
    },
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
