"use client";

import React, { useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import styles from "./back.module.css";

const BackToTop = () => {
  const lenis = useRef(null);

  useEffect(() => {
    lenis.current = new Lenis();

    function raf(time) {
      lenis.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const handleBackToTop = () => {
    if (lenis.current) {
      lenis.current.scrollTo(0, { duration: 1.2, smooth: true });
    }
  };

  return (
    <div
      onClick={handleBackToTop}
      className={`transition-all duration-300 ${styles.back_to_top}`}
      style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
    >
      <span className="text-xl">↑</span>
    </div>
  );
};

export default BackToTop;
