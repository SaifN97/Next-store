import "@assets/main.css";
import { FunctionComponent } from "react";
import { AppProps } from "next/app";

const Noop: FunctionComponent = ({ children }) => <>{children}</>;

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FunctionComponent } }) {
  const Layout = Component.Layout ?? Noop;
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
