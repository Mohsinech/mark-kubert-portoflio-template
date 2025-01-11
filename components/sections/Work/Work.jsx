"use client";

import React, { useState, useEffect, useRef } from "react";
import { Projects } from "@/constants/data";
import { Project } from "@/components/layouts";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import styles from "./work.module.css";

const Work = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  const containerRef = useRef(null);

  const cursorSize = 50;
  const smoothness = 0.03;

  useEffect(() => {
    const container = containerRef.current;
    const centerX = container.offsetWidth / 2 - cursorSize / 2;
    const centerY = container.offsetHeight / 2 - cursorSize / 2;
    setCursorPos({ x: centerX, y: centerY });

    const handleMouseMove = (e) => {
      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();

      if (
        e.clientX >= containerRect.left &&
        e.clientX <= containerRect.right &&
        e.clientY >= containerRect.top &&
        e.clientY <= containerRect.bottom
      ) {
        setCursorPos({
          x: e.clientX - containerRect.left - cursorSize / 2,
          y: e.clientY - containerRect.top - cursorSize / 2,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    let currentPos = { x: cursor.offsetLeft, y: cursor.offsetTop };

    const smoothCursor = () => {
      currentPos.x = gsap.utils.interpolate(
        currentPos.x,
        cursorPos.x,
        smoothness,
      );
      currentPos.y = gsap.utils.interpolate(
        currentPos.y,
        cursorPos.y,
        smoothness,
      );

      gsap.to(cursor, {
        left: currentPos.x,
        top: currentPos.y,
        duration: 0,
        ease: "none",
        overwrite: true,
      });

      requestAnimationFrame(smoothCursor);
    };

    smoothCursor();
  }, [cursorPos]);

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
      <div ref={containerRef} className={styles.project_container}>
        {Projects.map((project) => (
          <Project key={project.href} {...project} />
        ))}
        {/* Custom Cursor */}
        <div ref={cursorRef} className={styles.custom_cursor}>
          <p className={styles.cursor_text}>Browse Site</p>
        </div>
      </div>
    </section>
  );
};

export default Work;
