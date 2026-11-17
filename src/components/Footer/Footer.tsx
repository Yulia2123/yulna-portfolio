import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={`${css.container} container`}>
        <a href="#home" className={css.footerLogo}>
          Yulna
        </a>

        <p>
          © {new Date().getFullYear()} Yulna. Designed & developed with care.
        </p>

        <a href="/" className={css.backToTop}>
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
