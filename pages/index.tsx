import type { NextPage, GetStaticProps } from "next";

import client from "@graphql/client";
import {
  IPinnedData,
  IPinnedTotalCount,
  IPinnedTotalCountVars,
  IPinnedVars,
  REPO_PINNED_QUERY,
  REPO_PINNED_TOTAL_QUERY,
} from "@graphql/queries/repo.gql";
import {
  IProfileData,
  IProfileVars,
  PROFILE_QUERY,
} from "@graphql/queries/profile.gql";
import { siteMetadata } from "@data/siteMetadata";
import { Layout, Profile, Work, Footer } from "@components/index";
import styles from "@styles/home.module.css";

interface IProps {
  pinnedData: IPinnedData;
  profileData: IProfileData;
}

const Home: NextPage<IProps> = ({ pinnedData, profileData }) => {
  return (
    <Layout>
      <Profile data={profileData} />
      <div className={styles.display}>
        <Work data={pinnedData} />
        <Footer />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: profileData } = await client.query<IProfileData, IProfileVars>({
    query: PROFILE_QUERY,
    variables: {
      username: siteMetadata.username,
    },
  });

  const { data: totalData } = await client.query<
    IPinnedTotalCount,
    IPinnedTotalCountVars
  >({
    query: REPO_PINNED_TOTAL_QUERY,
    variables: {
      username: siteMetadata.username,
    },
  });

  const { data: pinnedData } = await client.query<IPinnedData, IPinnedVars>({
    query: REPO_PINNED_QUERY,
    variables: {
      username: siteMetadata.username,
      totalCount: totalData && totalData.user.pinnedItems.totalCount,
    },
  });

  if (!profileData && !totalData && !pinnedData) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        pinnedData,
        profileData,
      },
      revalidate: 1,
    };
  }
};

export default Home;
