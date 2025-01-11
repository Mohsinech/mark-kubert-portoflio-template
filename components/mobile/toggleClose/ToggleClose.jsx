import React from "react";
import { ButtonWhite } from "@/components/ui animation";
import styles from "./toggle.module.css";

const ToggleClose = ({ handleClose }) => {
  return (
    <div onClick={handleClose}>
      <ButtonWhite label="Close" classes={styles.toggle} />
    </div>
  );
};

export default ToggleClose;
