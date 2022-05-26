import { FaCodeBranch, FaStar, FaCircle } from "react-icons/fa";

import { IPinnedData } from "../graphql/queries/repo.gql";
import styles from "../styles/work.module.css";

interface IProps {
  data: IPinnedData;
}

const Work = ({ data }: IProps) => {
  return (
    <div className={styles.work}>
      <h1>Work.</h1>
      <div className={styles.projects}>
        {data.user.pinnedItems.edges.map((item) => (
          <a key={item.node.id} href={item.node.url}>
            <div className={styles.sectionTitle}>{item.node.name}</div>
            <div className={styles.aboutSection}>
              <span>{item.node.description}</span>
            </div>
            <div className={styles.bottomSection}>
              <span>
                <FaCircle
                  color={item.node.languages.nodes[0].color}
                  size={14}
                />
                &nbsp; {item.node.languages.nodes[0].name}
              </span>
              <span>
                <FaStar size={14} />
                &nbsp; {item.node.stargazerCount}
              </span>
              <span>
                <FaCodeBranch size={14} />
                &nbsp; {item.node.forkCount}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Work;
