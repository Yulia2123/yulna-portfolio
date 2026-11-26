"use client";

import { useState } from "react";
import css from "./Skills.module.css";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description:
      "Building responsive, interactive and user-friendly interfaces.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="3"
          y="4"
          width="18"
          height="15"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M3 9h18M8 14l-2 2 2 2M12 18l2-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js"],
    details: [
      "Responsive and adaptive layouts",
      "Flexbox and CSS styling",
      "Reusable components and React state",
      "Forms and event handling",
      "Routing and API integration",
      "Performance optimization",
    ],
  },
  {
    number: "02",
    title: "Backend",
    description: "Developing server-side functionality and working with data.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <ellipse
          cx="12"
          cy="5"
          rx="8"
          ry="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    skills: ["Node.js", "Express", "REST API", "MongoDB"],
    details: [
      "Building REST API endpoints",
      "Working with databases",
      "Data validation and filtering",
      "Sorting and pagination",
      "User authentication",
      "Email and image handling",
    ],
  },
  {
    number: "03",
    title: "Tools & Concepts",
    description: "Tools and techniques for efficient development and teamwork.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3 21 8v8l-9 5-9-5V8l9-5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="m3.5 8.5 8.5 5 8.5-5M12 13.5V21M8 5.2l9 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    skills: ["Git", "GitHub", "Vite", "TanStack Query", "Formik", "Zustand"],
    details: [
      "Version control and team collaboration",
      "Managing server state with TanStack Query",
      "Client-side state management",
      "Form handling and validation",
      "Asynchronous JavaScript and Promises",
      "HTTP requests and browser storage",
    ],
  },
];

export default function Skills() {
  const [flippedCards, setFlippedCards] = useState<string[]>([]);

  const toggleCard = (number: string) => {
    setFlippedCards((prev) =>
      prev.includes(number)
        ? prev.filter((item) => item !== number)
        : [...prev, number]
    );
  };

  return (
    <section className={`${css.skills} section`} id="skills">
      <div className={`${css.container} container`}>
        <div className={css.skillsIntro}>
          <h2>
            Technologies
            <span>I work with.</span>
          </h2>
          <p>
            The tools I use to turn ideas into functional digital experiences.
          </p>
        </div>

        <div className={css.skillsGroups}>
          {skillGroups.map((group) => {
            const isFlipped = flippedCards.includes(group.number);

            return (
              <button
                type="button"
                className={`${css.skillCard} ${isFlipped ? css.flipped : ""}`}
                key={group.number}
                onClick={() => toggleCard(group.number)}
                aria-pressed={isFlipped}
                aria-label={`${group.title}: ${
                  isFlipped ? "show technologies" : "show details"
                }`}
              >
                <span className={css.cardInner}>
                  <span className={css.cardFront}>
                    <span className={css.cardTop}>
                      <span className={css.cardIcon}>{group.icon}</span>
                      <span className={css.cardNumber}>{group.number}</span>
                    </span>

                    <span className={css.cardContent}>
                      <span className={css.cardTitle}>{group.title}</span>
                      <span className={css.cardDescription}>
                        {group.description}
                      </span>
                    </span>

                    <span className={css.cardLine} />

                    <span className={css.skillList}>
                      {group.skills.map((skill) => (
                        <span className={css.skillTag} key={skill}>
                          {skill}
                        </span>
                      ))}
                    </span>

                    <span className={css.cardHint}>Click here ↗</span>
                  </span>

                  <span className={css.cardBack}>
                    <span className={css.cardNumber}>
                      {group.number} / DETAILS
                    </span>
                    <span className={css.backTitle}>What I can do</span>

                    <span className={css.backList}>
                      {group.details.map((detail) => (
                        <span className={css.backItem} key={detail}>
                          <span className={css.backDot}>✦</span>
                          {detail}
                        </span>
                      ))}
                    </span>

                    <span className={css.cardHint}>Click to go back ↩</span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
