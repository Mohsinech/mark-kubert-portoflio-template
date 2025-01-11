import React from "react";
import styles from "./expertise.module.css";

const ExpertiseUi = ({
  label,
  description,
  techone,
  techtwo,
  techthree,
  techfour,
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.head_container}>
          <h1 className={styles.head_container_h1}>
            <sup>/ </sup>
            {label}
          </h1>
          <p className={styles.head_container_p}>&bull; {description}</p>
        </div>
        <div className={styles.flex_col_data}>
          <div className={`animate group ${styles.tech_flex_col}`}>
            <h2
              className={`transition group-hover:text-dark ${styles.tech_label}`}
            >
              {techone}
            </h2>
            <div className={`line ${styles.tech_line}`}></div>
          </div>
          <div className={`animate group ${styles.tech_flex_col}`}>
            <h2
              className={`transition group-hover:text-dark ${styles.tech_label}`}
            >
              {techtwo}
            </h2>
            <div className={`line ${styles.tech_line}`}></div>
          </div>
          <div className={`animate group ${styles.tech_flex_col}`}>
            <h2
              className={`transition group-hover:text-dark ${styles.tech_label}`}
            >
              {techthree}
            </h2>
            <div className={`line ${styles.tech_line}`}></div>
          </div>
          <div className={`animate group ${styles.tech_flex_col}`}>
            <h2
              className={`transition group-hover:text-dark ${styles.tech_label}`}
            >
              {techfour}
            </h2>
            <div className={`line ${styles.tech_line}`}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpertiseUi;
