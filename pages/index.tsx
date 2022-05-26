import type { NextPage } from "next";

import client from "../graphql/client";
import {
  IPinnedData,
  IPinnedTotalCount,
  IPinnedTotalCountVars,
  IPinnedVars,
  REPO_PINNED_QUERY,
  REPO_PINNED_TOTAL_QUERY,
} from "../graphql/queries/repo.gql";
import {
  IProfileData,
  IProfileVars,
  PROFILE_QUERY,
} from "../graphql/queries/profile.gql";

import Layout from "../components/Layout";
import Profile from "../components/Profile";
import Work from "../components/Work";
import styles from "../styles/home.module.css";
import Footer from "../components/Footer";

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

export async function getServerSideProps() {
  const { data: profileData } = await client.query<IProfileData, IProfileVars>({
    query: PROFILE_QUERY,
    variables: {
      username: process.env.GITHUB_USERNAME,
    },
  });

  const { data: totalData } = await client.query<
    IPinnedTotalCount,
    IPinnedTotalCountVars
  >({
    query: REPO_PINNED_TOTAL_QUERY,
    variables: {
      username: process.env.GITHUB_USERNAME,
    },
  });

  const { data: pinnedData } = await client.query<IPinnedData, IPinnedVars>({
    query: REPO_PINNED_QUERY,
    variables: {
      username: process.env.GITHUB_USERNAME,
      totalCount: totalData && totalData.user.pinnedItems.totalCount,
    },
  });

  return {
    props: {
      pinnedData,
      profileData,
    },
  };
}

export default Home;
