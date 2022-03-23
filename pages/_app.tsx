import "@assets/main.css";
import "keen-slider/keen-slider.min.css";
import { FunctionComponent } from "react";
import { AppProps } from "next/app";
import UIProvider from "@components/ui/context";

const Noop: FunctionComponent = ({ children }) => <>{children}</>;

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FunctionComponent } }) {
  const Layout = Component.Layout ?? Noop;
  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
}

export default MyApp;
