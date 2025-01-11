"use client";

import React, { useEffect, useRef } from "react";
import styles from "./hero.module.css";
import gsap from "gsap";

const Hero = () => {
  //
  const h1Ref = useRef([]);
  const introRef = useRef();

  //
  useEffect(() => {
    let tl = gsap.timeline();
    tl.to(h1Ref.current, {
      y: 0,
      stagger: 0.1,
    }).to(
      introRef.current,
      {
        opacity: 1,
      },
      "<",
    );
  });

  return (
    <section className={styles.hero_section}>
      <div className={styles.hero_right_col}>
        <div className={styles.h1_div}>
          <h1 className={styles.h1} ref={(el) => (h1Ref.current[0] = el)}>
            Mark
          </h1>
        </div>
        <div className={styles.h1_div}>
          <h1 className={styles.h1} ref={(el) => (h1Ref.current[1] = el)}>
            Kubert.
          </h1>
        </div>
      </div>
      {/*  */}
      <div className={styles.hero_left_col}>
        <h1 className={styles.intro} ref={introRef}>
          &bull; Hi, I&apos;m Mark, a creative full-stack web developer
          passionate about crafting user-friendly and innovative web
          experiences.{" "}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
