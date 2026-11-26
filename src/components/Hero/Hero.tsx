"use client";

import Link from "next/link";
import css from "./Hero.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className={css.hero} id="home">
      <div className={css.container}>
        <div className={css.content}>
          <p className={css.eyebrow}>FULLSTACK DEVELOPER</p>

          <h1 className={`${css.title} brand-text`}>
            {t.hero.title}
            <span> {t.hero.titleAccent}</span>
          </h1>

          <p className={css.description}>{t.hero.description}</p>

          <div className={css.actions}>
            <Link href="#projects" className="btn btn-primary">
              {t.hero.exploreWork}
              <span aria-hidden="true">↗</span>
            </Link>

            <Link href="#contacts" className="btn btn-secondary">
              {t.hero.getInTouch}
            </Link>
          </div>

          <p className={css.availability}>
            <span className={css.statusDot} />
            {t.hero.availability}
          </p>
        </div>

        <div className={css.visual} aria-hidden="true">
          <div className={css.imageBlock}>
            <img
              src="/images/hero-image.jpg"
              alt="My developer workspace"
              className={css.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
