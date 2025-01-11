"use client";

import { Button } from "@/components/ui animation";
import styles from "./about.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about_section}>
      <div className={styles.head_container}>
        <span className={styles.head_label}>
          <sup>/ </sup> About
        </span>
      </div>
      <div className={styles.main_content}>
        <div className={styles.right_content}>
          <p className={styles.right_content_p}>
            &bull; As a freelance developer, I build responsive, user-friendly
            websites that blend design with functionality. Specializing in
            React, I deliver clean, scalable code that brings client visions to
            life through seamless digital experiences.
          </p>
          <Button label="Read my cv" href="#read.cv/yourname" />
        </div>
        <div className={styles.left_content}>
          <p className={styles.left_content_p}>
            I deliver high-quality web solutions focused on client needs and
            user experience. Feel free to reach out to learn more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
