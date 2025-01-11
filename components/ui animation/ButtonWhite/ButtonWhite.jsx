import styles from "./ButtonWhite.module.css";
import React from "react";

const ButtonWhite = ({ label, href, classes }) => {
  return (
    <a href={href}>
      <div className={!classes ? styles.btn : classes}>
        <span data-text={label}>{!label ? "Button" : label}</span>
      </div>
    </a>
  );
};

export default ButtonWhite;
