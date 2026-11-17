import css from "./About.module.css";

const qualities = [
  {
    icon: "♧",
    title: "Team player",
    description:
      "I value open communication, shared ideas, and growing together.",
  },
  {
    icon: "♡",
    title: "Problem solver",
    description:
      "I enjoy exploring challenges, anticipating potential issues, and finding practical solutions.",
  },
  {
    icon: "✧",
    title: "Product thinker",
    description:
      "I look beyond the requirements to spot missing details and opportunities to improve the user experience.",
  },
];

export default function About() {
  return (
    <section className={`${css.about} section`} id="about">
      <div className={`${css.container} container`}>
        <div className={css.aboutContent}>
          <span className="section-label">ABOUT ME</span>

          <h2>
            A little about me
            <span>and my journey.</span>
          </h2>

          <p>
            I’m interested not only in how a website is built, but also in the
            product behind it — the idea, the people who use it, and the
            experience it creates. I like looking beyond the initial
            requirements: thinking about what users might need, noticing missing
            details, anticipating potential issues, and finding opportunities to
            make a product more intuitive and thoughtful. I believe these small
            considerations can make a real difference in how a website feels and
            works. I’m especially interested in educational platforms,
            content-driven websites, and digital services. I enjoy exploring
            ideas, finding practical solutions, and understanding how different
            parts of a product work together. For me, good development is about
            more than making things function. It’s about building something
            useful, considering the bigger picture, and continuously looking for
            ways to make the experience better.
          </p>

          <div className={css.qualities}>
            {qualities.map((item) => (
              <div className={css.quality} key={item.title}>
                <span className={css.qualityIcon}>{item.icon}</span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={css.aboutCard}>
          <h3>How I work</h3>

          <div className={css.workItem}>
            <span>01</span>
            <div>
              <h4>Understand</h4>
              <p>
                I start by understanding the idea, its purpose, and the people
                it's built for..
              </p>
            </div>
          </div>

          <div className={css.workItem}>
            <span>02</span>
            <div>
              <h4>Think ahead</h4>
              <p>
                I look beyond the obvious, consider potential issues, and notice
                what could make the product better.
              </p>
            </div>
          </div>

          <div className={css.workItem}>
            <span>03</span>
            <div>
              <h4>Build & refine</h4>
              <p>
                I turn ideas into functional solutions, pay attention to
                details, and improve them through feedback and testing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
