import React from "react";
import { Button } from "@/components/ui animation";
import styles from "./toggle.module.css";

const ToggleOpen = ({ handleOpen }) => {
  return (
    <div onClick={handleOpen}>
      <Button label="Menu" classes={styles.toggle} />
    </div>
  );
};

export default ToggleOpen;
