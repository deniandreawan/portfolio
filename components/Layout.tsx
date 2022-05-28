import React, { Fragment, ReactNode } from "react";
import Head from "next/head";
import { siteMetadata } from "@data/siteMetadata";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <Fragment>
      <Head>
        <title>{siteMetadata.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={siteMetadata.description} />
        <meta property="og:url" content={siteMetadata.siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:title" content={siteMetadata.title} />
        <meta
          property="og:image"
          content={siteMetadata.socialBanner}
          key={siteMetadata.socialBanner}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteMetadata.twitter} />
        <meta name="twitter:title" content={siteMetadata.title} />
        <meta name="twitter:description" content={siteMetadata.description} />
        <meta name="twitter:image" content={siteMetadata.socialBanner} />
      </Head>

      {children}
    </Fragment>
  );
};

export default Layout;
