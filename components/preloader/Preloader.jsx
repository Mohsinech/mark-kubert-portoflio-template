import React, { useEffect, useState, useRef } from "react";
import styles from "./preloader.module.css";
import gsap from "gsap";

const Preloader = ({ onComplete }) => {
  const preloaderRef = useRef();
  const percRef = useRef();
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let tl = gsap.timeline({
      onComplete: () => {
        // Once the animation completes, notify parent component
        onComplete();
      },
    });

    tl.to(percRef.current, {
      y: 0,
      ease: "circ.inOut",
    })
      .to(
        { perc: 0 },
        {
          perc: 100,
          duration: 5,
          ease: "circ.inOut",
          onUpdate: function () {
            setPercentage(Math.floor(this.targets()[0].perc));
          },
        },
      )
      .to(percRef.current, {
        delay: 1,
        y: -100,
        ease: "circ.inOut",
      })
      .to(
        preloaderRef.current,
        {
          height: 0,
          ease: "circ.inOut",
          duration: 1.5,
        },
        "<",
      );
  }, [onComplete]);

  return (
    <main className={styles.preloader} ref={preloaderRef}>
      <div className={styles.percentage}>
        <span className={styles.perc} ref={percRef}>
          {percentage}%
        </span>
      </div>
    </main>
  );
};

export default Preloader;
