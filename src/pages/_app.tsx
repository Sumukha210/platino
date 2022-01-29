import Navbar from "@/shared/navbar/navbar";
import type { AppProps } from "next/app";
import "../styles/style.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
