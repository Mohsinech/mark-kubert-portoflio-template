import React from "react";
import { ExpertiseData } from "@/constants/data";
import styles from "./expertise.module.css";
import { ExpertiseUi } from "@/components/ui animation";

const Expertise = () => {
  return (
    <section id="expertise" className={styles.expertise_section}>
      <div className={styles.head_container}>
        <span className={styles.head_label}>
          <sup>/ </sup> Expertise
        </span>
      </div>
      <div className={styles.expertise_flex_col}>
        {ExpertiseData.map((expertise) => (
          <ExpertiseUi key={expertise.label} {...expertise} />
        ))}
      </div>
    </section>
  );
};

export default Expertise;
