"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./testimonials.module.css";

const TestimonialsUi = ({ name, location, feedback, isOpen, onClick }) => {
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
      <li className={`animate group ${styles.testimonial_container_li}`}>
        <h2
          className={`transition active:text-dark group-hover:text-dark ${styles.li_h2}`}
        >
          <sup>/ </sup>
          {name}
        </h2>
        <p className={styles.li_location}>{location}</p>
        <div className={`line ${styles.testimonial_container_line}`}></div>
      </li>
      <div ref={contentRef} className={`${styles.content}`}>
        <p className={styles.content_p}>&bull; {feedback}</p>
      </div>
    </div>
  );
};

export default TestimonialsUi;
