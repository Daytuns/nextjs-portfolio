import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Dayton Baldizón</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
