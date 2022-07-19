import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: "ct1WzdxM0OksWz1DM6PeVwtt",
  use: [apiPlugin]
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to demo!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
