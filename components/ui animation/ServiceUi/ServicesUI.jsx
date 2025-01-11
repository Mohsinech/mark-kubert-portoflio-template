"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./service.module.css";

const ServicesUi = ({ label, description, isOpen, onClick }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        duration: 0.5,
        opacity: 1,
        visibility: "visible",
        height: "auto",
        ease: "circ.out",
      });
    } else {
      gsap.to(contentRef.current, {
        duration: 0.5,
        opacity: 0,
        visibility: "hidden",
        height: 0,
        ease: "circ.out",
      });
    }
  }, [isOpen]);

  return (
    <div onClick={onClick} className="cursor-pointer">
      <li className={`animate group ${styles.li_flex_col}`}>
        <h2
          className={`transition active:text-dark group-hover:text-dark ${styles.li_flex_col_h2}`}
        >
          {label}
        </h2>
        <div className={`line ${styles.li_flex_col_line}`}></div>
      </li>
      <div ref={contentRef} className={`${styles.content}`}>
        <p className={styles.content_p}>&bull; {description}</p>
      </div>
    </div>
  );
};

export default ServicesUi;
