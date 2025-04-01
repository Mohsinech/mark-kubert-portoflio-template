"use client";

import React from "react";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero_right_col}>
        <div className={styles.h1_div}>
          <h1 className={styles.h1}>Mia</h1>
        </div>
        <div className={styles.h1_div}>
          <h1 className={styles.h1}>Kubert.</h1>
        </div>
      </div>
      {/*  */}
      <div className={styles.hero_left_col}>
        <h1 className={styles.intro}>
          &bull; Hi, I&apos;m Mia, a creative full-stack web developer
          passionate about crafting user-friendly and innovative web
          experiences.
        </h1>
      </div>
    </section>
  );
};

export default Hero;
