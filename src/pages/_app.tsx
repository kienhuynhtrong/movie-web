import '../styles/globals.css'
import 'tailwindcss/tailwind.css';

import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from './../component/Layout/Navbar'
import Footer from './../component/Layout/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
      </Head>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}

export default MyApp;
