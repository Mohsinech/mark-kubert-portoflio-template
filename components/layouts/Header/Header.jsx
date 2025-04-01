import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/assets/images/me.jpg"
          alt="Mia kubert"
          layout="fill"
          className={styles.image}
        />
      </Link>
      <Link
        href="mailto:#"
        className={`animate group ${styles.scrolling_div_line}`}
      >
        <span className={`${styles.mail} group-hover:text-dark`}>
          miakubert@contact.com
        </span>
        <div className={`line ${styles.animated_line}`}></div>
      </Link>
    </header>
  );
};

export default Header;
