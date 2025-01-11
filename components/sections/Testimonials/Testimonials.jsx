"use client";

import { TestimonialsData } from "@/constants/data";

import { useState } from "react";
import styles from "./testimonials.module.css";
import { TestimonialsUi } from "@/components/ui animation";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className={styles.testimonials_section}>
      <div className={styles.head_container}>
        <span className={styles.head_label}>
          <sup>/ </sup> Testimonials
        </span>
      </div>
      <div className={styles.main_flex_col_container}>
        <p className={styles.main_flex_col_container_p}>
          &bull; Here are some testimonials from my valued clients, showcasing
          the dedication and expertise put into every project. Their feedback
          reflects a commitment to delivering high-quality, results-driven
          solutions.
        </p>
        <div className={styles.testimonials_grid}>
          {TestimonialsData.map((testimonial, index) => (
            <TestimonialsUi
              key={testimonial.name}
              {...testimonial}
              isOpen={activeIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
