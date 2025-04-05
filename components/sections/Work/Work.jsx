"use client";

import React from "react";
import { Projects } from "@/constants/data";
import { Project } from "@/components/layouts";
import Marquee from "react-fast-marquee";
import styles from "./work.module.css";
import { motion } from "framer-motion";
const Work = () => {
  return (
    <section className={styles.work_section}>
      <div className={styles.head_container}>
        <span className={styles.head_label}>
          <sup>/ </sup> Work
        </span>
      </div>
      <div>
        <Marquee className={styles.marquee}>
          <h1 className={styles.featured_work}>
            Featured Work &bull; Featured Work &bull;
          </h1>
        </Marquee>
      </div>

      <div className={styles.project_container}>
        {Projects.map((project) => (
          <Project key={project.href} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Work;
