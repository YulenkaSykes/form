import React from "react";
import styles from "../styles/header.module.scss";

const Header = () => {
  return (
    <div className={`col centered ${styles.header}`}>
      <img src="/logo.png" alt="" />
      <h1>Sign Up with email</h1>
    </div>
  );
};

export default Header;
