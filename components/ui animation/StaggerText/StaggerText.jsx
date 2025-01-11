import React from "react";
import styles from "./stagger.module.css";

const StaggerText = ({ label, style }) => {
  return (
    <div className={`group ${styles.stagger_div}`}>
      <span
        className={`translate-y-0 transition duration-300 group-hover:-translate-y-4 ${styles.stagger_div_span}`}
        style={!style ? "" : style}
      >
        {!label ? "Label" : label}
      </span>
      <span
        className={`translate-y-4 transition duration-300 group-hover:translate-y-0 ${styles.stagger_div_absolute}`}
        style={!style ? "" : style}
      >
        {!label ? "Label" : label}
      </span>
    </div>
  );
};

export default StaggerText;
