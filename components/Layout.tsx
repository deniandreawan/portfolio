import React, { Fragment, ReactNode } from "react";
import Head from "next/head";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </Fragment>
  );
};

export default Layout;