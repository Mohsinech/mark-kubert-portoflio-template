"use client";

import React from "react";
import styles from "./back.module.css";
const BackToTop = ({ lenisRef }) => {
  const handleBackToTop = () => {
    if (lenisRef?.current) {
      lenisRef.current.scrollTo(0, { duration: 1.2, smooth: true });
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
