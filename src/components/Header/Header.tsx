"use client";

import { useEffect, useState } from "react";
import css from "./Header.module.css";

type Theme = "light" | "dark";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      document.documentElement.dataset.theme = savedTheme;
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);
  };

  return (
    <header className={css.header}>
      <div className={css.container}>
        <div className={css.brand}>
          <div className={css.logoPlaceholder} aria-hidden="true" />

          <a
            href="/"
            className={`${css.logo} brand-text`}
            aria-label="Yulna home"
          >
            Yulna
          </a>
        </div>

        <div className={css.actions}>
          <button
            type="button"
            className={`${css.language} brand-text`}
            aria-label="Select language"
          >
            EN
          </button>

          <button
            type="button"
            className={css.themeToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === "dark" ? "light" : "dark"
            } theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <span
              className={`${css.themeOption} ${
                theme === "light" ? css.themeOptionActive : ""
              }`}
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
              </svg>
            </span>

            <span
              className={`${css.themeOption} ${
                theme === "dark" ? css.themeOptionActive : ""
              }`}
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20.2 15.3A8.5 8.5 0 0 1 8.7 3.8 8.5 8.5 0 1 0 20.2 15.3Z" />
                <path d="M16.5 3v4M14.5 5h4" />
              </svg>
            </span>
          </button>

          <a href="#contacts" className="btn btn-primary brand-text">
            Contact me
          </a>

          <button
            type="button"
            className={`${css.menuButton} ${
              isMenuOpen ? css.menuButtonOpen : ""
            }`}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="main-navigation"
          className={css.menu}
          aria-label="Main navigation"
        >
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>
            Projects
          </a>
          <a href="#contacts" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
