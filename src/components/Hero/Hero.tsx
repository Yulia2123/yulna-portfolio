import Link from "next/link";
import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={css.container}>
        <div className={css.content}>
          <p className={css.eyebrow}>FULLSTACK DEVELOPER</p>

          <h1 className={`${css.title} brand-text`}>
            You bring the idea.<span> I'll help make it real.</span>
          </h1>

          <p className={css.description}>
            Hi, I'm Yuliana — a frontend-focused Fullstack Developer who enjoys
            turning ideas into thoughtful, user-friendly digital experiences.
            I'm interested in building products that make information easier to
            access, learning more engaging, and everyday tasks simpler. I value
            clear communication, thoughtful decisions, and working together
            towards a result everyone can be proud of. Have an idea or just want
            to connect? I'd love to hear from you.
          </p>

          <div className={css.actions}>
            <Link href="#projects" className="btn btn-primary">
              Explore my work
              <span aria-hidden="true">↗</span>
            </Link>

            <Link href="#contacts" className="btn btn-secondary">
              Get in touch
            </Link>
          </div>

          <p className={css.availability}>
            <span className={css.statusDot} />
            Open to internship and junior opportunities
          </p>
        </div>

        <div className={css.visual} aria-hidden="true">
          <div className={css.imageBlock}>
            <img
              src="/images"
              alt="My developer workspace"
              className={css.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
