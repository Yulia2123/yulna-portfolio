"use client";

import css from "./Projects.module.css";
import { useState } from "react";

const projects = [
  {
    title: "Nature's Wonders",
    type: "Travel & Community Platform",
    contribution:
      "Team Lead and Fullstack Developer. Coordinated the frontend team's work, distributed tasks, developed website layouts and implemented user authentication and registration.",
    description:
      "A travel and community platform where users can share travel stories, explore destinations, discover other travellers and save interesting articles. Developed the website's main pages and visual layouts, implemented registration, login and logout functionality, and connected the frontend to the backend API.",
    image: "/images/projects/tandem.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Zustand",
      "TanStack Query",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    link: "https://tandem-front-git-dev-hw-2.vercel.app/",
  },
  {
    title: "NMT.in.ua",
    type: "Educational Platform",
    contribution:
      "Frontend Developer. Developed an interactive NMT exam simulator and continue maintaining the platform, fixing bugs and improving its functionality.",
    description:
      "An educational platform that helps students prepare for the Ukrainian National Multi-Subject Test (NMT) through practice materials and an interactive exam simulator.",
    image: "/images/projects/nmt.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "MySQL",
      "REST API",
    ],
    link: "https://nmt.in.ua/",
  },
  {
    title: "Paw Hut",
    description:
      "Developed the Paw Hut animal shelter website as part of a team project. Independently implemented the About Us section with a responsive Swiper slider, navigation, and pagination. As Team Lead, coordinated the frontend team's workflow, distributed tasks, supported teammates, and helped the team overcome challenges and meet the project deadline.",
    image: "/images/projects/pawhut.png",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "Vite",
      "Axios",
      "Swiper",
      "Accordion.js",
    ],
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
