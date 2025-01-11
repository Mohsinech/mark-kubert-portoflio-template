import React from "react";
import Image from "next/image";
import styles from "./website.module.css";

const Project = ({ img, href }) => {
  return (
    <div className={styles.website}>
      <div className={styles.inner_container}>
        <a href={href}>
          <Image
            src={img}
            alt="project"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="duration-500 hover:scale-105"
          />
        </a>
      </div>
    </div>
  );
};

export default Project;
