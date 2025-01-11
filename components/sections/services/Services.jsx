"use client";

import React, { useState } from "react";
import { ServicesData } from "@/constants/data";
import { Button, ServicesUi } from "@/components/ui animation";
import styles from "./service.module.css";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className={styles.service_section}>
      <div className={styles.head_container}>
        <span className={styles.head_label}>
          <sup>/ </sup> Services
        </span>
      </div>
      <div className={styles.main_container}>
        <div className={styles.left_container}>
          <h1 className={styles.left_container_h1}>
            &bull; I help businesses grow by crafting user-centered digital
            experiences that enhance engagement, streamline functionality, bring
            visions to life, create lasting impacts in the digital landscape,
            and empower companies to thrive in a rapidly evolving online world.
          </h1>
          <h1 className={styles.left_container_h1}>
            &bull; my work focuses on blending creativity and technology to
            build solutions that drive success.
          </h1>
          {/* Replace href with you phone */}
          <Button label="Book a free call" href="tel:+123456789" />
        </div>
        <div className={styles.right_container}>
          <p className={styles.right_head_container}>
            <sup>/ </sup>What can i offer:
          </p>
          <ul className={styles.service_list}>
            {ServicesData.map((service, index) => (
              <ServicesUi
                key={service.label}
                {...service}
                isOpen={activeIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
