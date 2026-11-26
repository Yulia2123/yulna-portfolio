"use client";

import { useEffect, useState } from "react";
import css from "./Header.module.css";
import { useLanguage } from "@/context/LanguageContext";

type Theme = "light" | "dark";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      document.documentElement.dataset.theme = savedTheme;
    }
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contacts"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);
  };

  const { language, setLanguage, t } = useLanguage();

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

        <nav
          className={css.desktopNav}
          aria-label={t.navigation.mainNavigation}
        >
          <a
            href="#home"
            className={activeSection === "home" ? css.active : ""}
          >
            {t.navigation.home}
          </a>

          <a
            href="#projects"
            className={activeSection === "projects" ? css.active : ""}
          >
            {t.navigation.projects}
          </a>

          <a
            href="#skills"
            className={activeSection === "skills" ? css.active : ""}
          >
            {t.navigation.skills}
          </a>

          <a
            href="#about"
            className={activeSection === "about" ? css.active : ""}
          >
            {t.navigation.about}
          </a>

          <a
            href="#contacts"
            className={activeSection === "contacts" ? css.active : ""}
          >
            {t.navigation.contacts}
          </a>
        </nav>

        <div className={css.actions}>
          <div
            className={css.languageSwitch}
            role="group"
            aria-label={t.navigation.chooseLanguage}
          >
            <span
              className={`${css.languageIndicator} ${
                language === "ua" ? css.languageIndicatorUa : ""
              }`}
            />

            <button
              type="button"
              className={`${css.languageOption} ${
                language === "en" ? css.languageActive : ""
              }`}
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>

            <button
              type="button"
              className={`${css.languageOption} ${
                language === "ua" ? css.languageActive : ""
              }`}
              onClick={() => setLanguage("ua")}
              aria-pressed={language === "ua"}
            >
              UA
            </button>
          </div>

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
            {t.navigation.contactMe}
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
          <a
            href="#home"
            className={activeSection === "home" ? css.active : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>

          <a
            href="#projects"
            className={activeSection === "projects" ? css.active : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>

          <a
            href="#skills"
            className={activeSection === "skills" ? css.active : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </a>

          <a
            href="#about"
            className={activeSection === "about" ? css.active : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>

          <a
            href="#contacts"
            className={activeSection === "contacts" ? css.active : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
