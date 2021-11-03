import React from "react";
import styles from "../styles/select.module.scss";

const Select = () => {
  const genders = ["Male", "Female", "Other"];
  return (
    <div className={`${styles.selects_wrapper} col centered`}>
      <h2>Gender</h2>
      <div className={`row centered ${styles.selects}`}>
        {genders.map((gender) => (
          <div className={`${styles.select} centered col`}>
            <img src={`${gender}.png`} alt="" />
            <span>{gender}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
