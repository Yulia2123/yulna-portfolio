import css from "./Projects.module.css";

const projects = [
  {
    title: "Nature's Wonders",
    description: "Travel platform with stories, travellers and categories.",
    image: "/images/projects/tandem.png",
    technologies: ["Next.js", "TypeScript", "React Query"],
    link: "https://tandem-front-git-dev-hw-2.vercel.app/",
  },
  {
    title: "NMT.in.ua",
    description: "Educational platform for NMT exam preparation.",
    image: "/images/projects/nmt.png",
    technologies: ["Next.js", "TypeScript", "MongoDB"],
    link: "https://nmt.in.ua/",
  },
  {
    title: "Paw Hut",
    description: "Wellness and yoga landing page.",
    image: "/images/projects/yogabloom.png",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://yulia2123.github.io/prime-force/",
  },
];

export default function Projects() {
  return (
    <section className={`${css.projects} section`} id="projects">
      <div className={`${css.container} container`}>
        <div className={css.projectsHeading}>
          <div>
            <span className="section-label">PROJECTS</span>

            <h2>
              Featured projects.
              <span>Real experience.</span>
            </h2>

            <p>
              These are some of the projects I've worked on. Each one helped me
              grow as a developer.
            </p>
          </div>

          <a
            href="https://github.com/Yulia2123"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub →
          </a>
        </div>

        <div className={css.projectsList}>
          {projects.map((project) => (
            <article className={css.projectCard} key={project.title}>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className={css.projectImage}
                aria-label={`View ${project.title}`}
              >
                <img src={project.image} alt={project.title} />
              </a>

              <div className={css.projectInfo}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className={css.projectTechnologies}>
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className={css.projectLink}
                >
                  View project →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
