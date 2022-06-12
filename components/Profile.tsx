import Image from "next/image";
import { HiLocationMarker, HiMail, HiLink } from "react-icons/hi";
import { FaTwitter, FaDribbble, FaLinkedinIn, FaGithub } from "react-icons/fa";

import { IProfileData } from "@graphql/queries/profile.gql";
import { siteMetadata } from "@data/siteMetadata";
import styles from "@styles/profile.module.css";

interface IProps {
  data: IProfileData;
}

const Profile = ({ data }: IProps) => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileDetail}>
        <div className={styles.avatar}>
          <Image
            src={
              "https://gravatar.com/userimage/98782001/2bcfb22c17aba24245956a403b7c9f97.jpg?size=500"
            }
            alt="avatar"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className={styles.username}>
          <span>{data.user.name}</span>
          <a href={data.user.url}>@{data.user.login}</a>
        </div>

        <div className={styles.about}>
          <span>
            <HiLocationMarker size={16} /> &nbsp;&nbsp; {data.user.location}
          </span>
          <span>
            <HiMail size={16} /> &nbsp;&nbsp; {data.user.email}
          </span>
          <span>
            <HiLink size={16} /> &nbsp;&nbsp;{" "}
            <a href={data.user.websiteUrl}>
              {data.user.websiteUrl.replace("https://", "")}
            </a>
          </span>

          <div className={styles.socials}>
            <span>
              <a href={siteMetadata.twitter} aria-label="twitterLink">
                <FaTwitter size={16} />
              </a>
            </span>
            <span>
              <a href={siteMetadata.dribbble} aria-label="dribbbleLink">
                <FaDribbble size={16} />
              </a>
            </span>
            <span>
              <a href={siteMetadata.linkedin} aria-label="linkedinLink">
                <FaLinkedinIn size={16} />
              </a>
            </span>
            <span>
              <a href={siteMetadata.github} aria-label="githubLink">
                <FaGithub size={16} />
              </a>
            </span>
          </div>
        </div>
      </div>

      <Image
        src="/static/images/bg.webp"
        alt="background"
        layout="fill"
        objectFit="cover"
        priority={true}
        sizes="50vw"
        quality={65}
      />
      <div className={styles.bgFilter} />
    </div>
  );
};

export default Profile;
