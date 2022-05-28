import "@styles/globals.css";
import "@fontsource/poppins";
import "@fontsource/questrial";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
