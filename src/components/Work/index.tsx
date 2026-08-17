"use client";

import "./work.scss";
import Link from "next/link";
import { projectsPresentation } from "@/data/projectpresentation";

const Work = () => {
  return (
    <section className="workProjects">
      <div className="workProjects__presentation">
        <span className="workProjects__eyebrow">MY PROJECTS</span>

        <h2 className="workProjects__title">My Work</h2>

        <p className="workProjects__description">
          Here are a few projects I have worked on. Explore each project to
          discover more.
        </p>
      </div>

      <div className="workProjects__workcontainer">
        {projectsPresentation.map((project, index) => (
          <article
            className="workProjects__worksection"
            key={project.id}
            style={{
              animationDelay: `${index * 0.15}s`,
            }}
          >
            <div className="workProjects__number">0{project.id}</div>

            <div className="workProjects__top">
              <h2 className="workProjects__subtitle">{project.title}</h2>

              <span className="workProjects__line" />
            </div>

            <div className="workProjects__imagecontainer">
              <img src={project.image} alt={project.subtitle} />

              <div className="workProjects__imageOverlay">
                <Link
                  href="projects"
                  className="workProjects__viewLink"
                  aria-label={`View ${project.title}`}
                >
                  VIEW PROJECT
                </Link>
              </div>
            </div>

            <div className="workProjects__content">
              <h3 className="workProjects__subt">{project.subtitle}</h3>

              <p className="workProjects__projectDescription">
                {project.description}
              </p>

              <Link
                href="/projects"
                className="workProjects__arrowLink"
                aria-label={`View ${project.title}`}
              >
                <span>Explore</span>
                <span className="workProjects__arrow">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Work;
