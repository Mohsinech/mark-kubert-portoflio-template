import React from "react";
import styles from "./stagger.module.css";

const StaggerHeading = ({ label }) => {
  return (
    <div className={`group ${styles.stagger_div}`}>
      <span
        className={`translate-y-0 transition duration-300 group-hover:-translate-y-10 ${styles.stagger_div_span}`}
      >
        {!label ? "Label" : label}
      </span>
      <span
        className={`translate-y-10 transition duration-300 group-hover:translate-y-0 ${styles.stagger_div_absolute}`}
      >
        {!label ? "Label" : label}
      </span>
    </div>
  );
};

export default StaggerHeading;
