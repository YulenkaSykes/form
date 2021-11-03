import React from "react";
import styles from "../styles/link.module.scss";

const Link = () => {
  return (
    <div className={`${styles.allLinks} col centered`}>
      <div className={`${styles.links}`}>
        Already have an account?
        <a className={`${styles.link}`} href="/">
          &nbsp;Log In
        </a>
      </div>
      <div className={`${styles.links}`}>
        Review privacy and disclosures
        <a className={`${styles.link}`} href="/">
          &nbsp;here
        </a>
      </div>
    </div>
  );
};

export default Link;
