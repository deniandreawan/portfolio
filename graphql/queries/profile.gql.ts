import { gql } from "@apollo/client";

export const PROFILE_QUERY = gql`
  query ($username: String!) {
    user(login: $username) {
      avatarUrl
      email
      login
      name
      url
      websiteUrl
      location
    }
  }
`;

export interface IProfileData {
  user: IProfileDetails;
}

export interface IProfileVars {
  username: string;
}

interface IProfileDetails {
  avatarUrl: string;
  email: string;
  location: string;
  login: string;
  name: string;
  url: string;
  websiteUrl: string;
}
