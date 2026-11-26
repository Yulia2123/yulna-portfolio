import css from "./About.module.css";

const workSteps = [
  {
    number: "01",
    label: "DISCUSS",
    title: "Getting to know the project",
    description:
      "We discuss your idea, goals and expectations. If you already have a design, Figma file or technical brief, we go through it, clarify the details and agree on the scope of work.",
  },
  {
    number: "02",
    label: "AGREE & START",
    title: "Setting clear expectations",
    description:
      "We agree on the project scope, timeline and budget. Once everything is confirmed, an upfront payment secures the project and development can begin.",
  },
  {
    number: "03",
    label: "BUILD",
    title: "Bringing the design to life",
    description:
      "I turn the approved design into a functional interface, focusing on responsiveness, interactivity and thoughtful details. I'll keep you updated on the progress along the way.",
  },
  {
    number: "04",
    label: "REVIEW & DELIVER",
    title: "Final checks and handover",
    description:
      "We review the finished work, test the interface, make agreed adjustments and finalize the project. The remaining payment is completed before the final handover.",
  },
];

export default function About() {
  return (
    <section className={`${css.about} section`} id="about">
      <div className={`${css.container} container`}>
        <div className={css.aboutContent}>
          <p className={css.eyebrow}>A LITTLE ABOUT ME</p>

          <h2>
            A little about me
            <span>and what I love building.</span>
          </h2>

          <p>
            I don't like treating development as simply putting pieces of code
            together. There's always room to explore, rethink and make something
            a little more interesting.
          </p>

          <p>
            I like exploring ideas, solving problems, noticing details and
            experimenting with ways to make interfaces more intuitive and
            engaging. I'm always curious to learn something new and turn that
            curiosity into practical, creative solutions.
          </p>
        </div>

        <div className={css.process}>
          <div className={css.processHeader}>
            <div>
              <p className={css.eyebrow}>WORKING TOGETHER</p>
              <h3>
                From the first idea
                <span>to the final detail.</span>
              </h3>
            </div>
          </div>

          <div className={css.timeline}>
            {workSteps.map((step) => (
              <article className={css.workItem} key={step.number}>
                <div className={css.stepNumber}>{step.number}</div>

                <div className={css.stepContent}>
                  <span className={css.stepLabel}>{step.label}</span>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
