import { ButtonWhite, StaggerText } from "@/components/ui animation";

import styles from "./footer.module.css";
import { BackToTop, CurrentTime } from "@/components/ui";

const Footer = ({ lenisRef }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.head_container}>
        <span className={styles.head_label}>
          <sup>/ </sup> Index
        </span>
        <BackToTop lenisRef={lenisRef} />
      </div>
      <div className={styles.footer_content_center}>
        <div className={styles.cta_contact}>
          <h1 className={styles.h1}>Intrested in work together ?</h1>
          <div className={styles.btns_flex_container}>
            <ButtonWhite
              label="Johndoe@gmail.com"
              //  Add you mail here.
              href="mailto:#add_you_mail"
            />
            {/* replace you phonr here. */}
            <ButtonWhite label="+212 123 456 789" href="tel:+212123456789" />
          </div>
        </div>
        <div className={styles.bottom_footer}>
          <div className={styles.first_col}>
            <div className={styles.label_col_content}>
              <h3 className={styles.h3}>Edition</h3>
              <p className={styles.p}>2024</p>
            </div>
            <div className={styles.label_col_content}>
              <h3 className={styles.h3}>Local time</h3>
              <p className={styles.p}>
                <CurrentTime />
              </p>
            </div>
          </div>
          {/* Social links */}
          <div className={styles.social_link_container}>
            <h3 className={styles.h3}>Socials</h3>
            <ul className={styles.social_list}>
              <li>
                <a href="#add-instagram-url">
                  <StaggerText label="Instagram" style={{ color: "white" }} />
                </a>
              </li>
              <li>
                <a href="#add-github-url">
                  <StaggerText label="Github" style={{ color: "white" }} />
                </a>
              </li>
              <li>
                <a href="#add-linkedin-url">
                  <StaggerText label="Linkedin" style={{ color: "white" }} />
                </a>
              </li>{" "}
              <li>
                <a href="#add-twitter-url">
                  <StaggerText label="Twitter" style={{ color: "white" }} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
  MA;
};

export default Footer;
