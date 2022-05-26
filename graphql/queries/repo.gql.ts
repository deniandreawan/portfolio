import { gql } from "@apollo/client";

export const REPO_PINNED_TOTAL_QUERY = gql`
  query ($username: String!) {
    user(login: $username) {
      pinnedItems {
        totalCount
      }
    }
  }
`;

export const REPO_PINNED_QUERY = gql`
  query ($username: String!, $totalCount: Int!) {
    user(login: $username) {
      pinnedItems(first: $totalCount) {
        totalCount
        edges {
          node {
            ... on Repository {
              id
              name
              description
              url
              forkCount
              stargazerCount
              languages(first: 1, orderBy: { direction: DESC, field: SIZE }) {
                nodes {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
  }
`;

export interface IPinnedData {
  user: TPinnedItems;
}

export interface IPinnedVars {
  username: string;
  totalCount: number;
}

export interface IPinnedTotalCount {
  user: TPinnedTotalCount;
}

export interface IPinnedTotalCountVars {
  username: string;
}

type TPinnedTotalCount = {
  pinnedItems: {
    totalCount: number;
  };
};

type TPinnedItems = {
  pinnedItems: {
    edges: TPinnedDetails[];
  };
};

type TPinnedDetails = {
  node: {
    id: string;
    name: string;
    description: string;
    url: string;
    forkCount: number;
    stargazerCount: number;
    languages: {
      nodes: ILanguange[];
    };
  };
};

interface ILanguange {
  name: string;
  color: string;
}
