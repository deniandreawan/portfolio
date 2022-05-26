import Image from "next/image";
import { HiLocationMarker, HiMail, HiLink } from "react-icons/hi";
import { FaTwitter, FaDribbble, FaLinkedinIn, FaMediumM } from "react-icons/fa";

import { IProfileData } from "../graphql/queries/profile.gql";
import background from "../assets/bg.webp";
import styles from "../styles/profile.module.css";

interface IProps {
  data: IProfileData;
}

const Profile = ({ data }: IProps) => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileDetail}>
        <div className={styles.avatar}>
          <Image
            src={data.user.avatarUrl}
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
              <a href="https://www.twitter.com/deniandrwan">
                <FaTwitter size={16} />
              </a>
            </span>
            <span>
              <a href="https://www.dribbble.com/deniandreawan">
                <FaDribbble size={16} />
              </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/deniandreawan">
                <FaLinkedinIn size={16} />
              </a>
            </span>
            <span>
              <a href="https://www.medium.com/deniandreawan">
                <FaMediumM size={16} />
              </a>
            </span>
          </div>
        </div>
      </div>

      <Image
        src={background}
        alt="background"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className={styles.bgFilter} />
    </div>
  );
};

export default Profile;
