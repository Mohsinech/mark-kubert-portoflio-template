"use client";

import React, { useEffect, useRef } from "react";
import styles from "./hero.module.css";
import { motion } from "framer-motion";

const DURATION = 1;
const STAGGER = 0.2;

const Hero = () => {
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero_right_col}>
        <div className={styles.h1_div}>
          <h1 className={styles.h1}>Mark</h1>
        </div>
        <div className={styles.h1_div}>
          <h1 className={styles.h1}>Kubert.</h1>
        </div>
      </div>
      {/*  */}
      <div className={styles.hero_left_col}>
        <h1 className={styles.intro}>
          &bull; Hi, I&apos;m Mark, a creative full-stack web developer
          passionate about crafting user-friendly and innovative web
          experiences.
        </h1>
      </div>
    </section>
  );
};

export default Hero;
