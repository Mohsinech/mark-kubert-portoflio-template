import styles from "./Button.module.css";

export default function Button({ label, href, onClick, classes }) {
  return (
    <a href={href} onClick={onClick}>
      <div className={!classes ? styles.btn : classes}>
        <span data-text={label}>{!label ? "Button" : label}</span>
      </div>
    </a>
  );
}
