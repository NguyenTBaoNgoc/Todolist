// src/pages/_app.tsx

import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
  appTitle?: string;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const appTitle = Component.appTitle ?? "My App";

  return getLayout(
    <>
      <Head>
        <title>{appTitle}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
