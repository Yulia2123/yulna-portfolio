"use client";

import css from "./Projects.module.css";
import { useState } from "react";

const projects = [
  {
    title: "Nature's Wonders",
    type: "Travel & Community Platform",
    contribution:
      "Frontend development, API integration, authentication, story management and category filtering.",
    description: "Travel platform with stories, travellers and categories.",
    image: "/images/projects/tandem.png",
    technologies: ["Next.js", "TypeScript", "React Query"],
    link: "https://tandem-front-git-dev-hw-2.vercel.app/",
  },
  {
    title: "NMT.in.ua",
    type: "Educational Platform",
    contribution:
      "Frontend development, interface improvements, bug fixing and responsive layouts.",
    description: "Educational platform for NMT exam preparation.",
    image: "/images/projects/nmt.png",
    technologies: ["Next.js", "TypeScript", "MongoDB"],
    link: "https://nmt.in.ua/",
  },
  {
    title: "Paw Hut",
    description: "Wellness and yoga landing page.",
    image: "/images/projects/pawhut.png",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://yulia2123.github.io/prime-force/",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section
      className={`${css.projects} section`}
      id="projects"
      onClick={(event) => {
        const target = event.target as HTMLElement;

        if (
          !target.closest(`.${css.projectCard}`) &&
          !target.closest("a, button")
        ) {
          setActiveProject(null);
        }
      }}
    >
      <div className={`${css.container} container`}>
        <div className={css.projectsLayout}>
          <div className={css.projectsGallery}>
            {projects.map((project, index) => {
              const isActive = activeProject === index;

              return (
                <article
                  key={project.title}
                  className={`${css.projectCard} ${
                    activeProject === index ? css.active : ""
                  }`}
                >
                  <button
                    type="button"
                    className={css.cardTrigger}
                    onClick={() =>
                      setActiveProject(activeProject === index ? null : index)
                    }
                    aria-expanded={activeProject === index}
                    aria-label={`Show details for ${project.title}`}
                  >
                    <div className={css.projectImage}>
                      <img src={project.image} alt={project.title} />
                    </div>

                    <span className={css.cardShade} />
                    <span className={css.cardHeading}>{project.title}</span>
                  </button>

                  {activeProject === index && (
                    <div className={css.cardDetails}>
                      <h3 className={css.cardDetailsTitle}>{project.title}</h3>
                      <p>{project.description}</p>
                      <p>{project.contribution}</p>

                      <div className={css.projectTechnologies}>
                        {project.technologies.map((technology) => (
                          <span key={technology}>{technology}</span>
                        ))}
                      </div>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={css.githubLink}
                      >
                        Visit live website ↗
                      </a>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <div className={css.projectsVisual}>
            <div className={css.projectsIntro}>
              <span className="section-label">PROJECTS</span>

              <h2>
                Featured projects.
                <span>Real experience..</span>
              </h2>

              <p>
                These are some of the projects I've worked on. Each one helped
                me grow as a developer
              </p>

              <a
                href="https://github.com/Yulia2123"
                target="_blank"
                rel="noopener noreferrer"
                className={css.githubLink}
              >
                Explore GitHub ↗
              </a>
            </div>

            <div className={css.visualImage}>
              <img
                src="/images/projects/projects-visual.png"
                alt="Creative portfolio visual"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
