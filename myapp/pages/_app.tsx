import "../styles/globals.css";
import "../styles/fonts.css";
import Layout from "../components/Layout";
import type { AppProps } from "next/app";
import React from "react";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;


