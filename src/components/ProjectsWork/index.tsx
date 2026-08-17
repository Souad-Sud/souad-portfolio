"use client";

import Link from "next/link";

import { Project } from "@/types/type";
import { projectWorkIntroduction } from "@/data/projectWorkIntroduction";

import "./projectsWork.scss";

type ProjectsWorkProps = {
  project: Project | null;
};

const ProjectsWork = ({ project }: ProjectsWorkProps) => {
  if (!project) {
    return (
      <section className="projectCard">
        <h2 className="projectCard__title">
          Welcome to my project page
        </h2>

        <p className="projectCard__description">
          These projects are modern and responsive web applications developed
          using front-end technologies. The main objectives were to create
          user-friendly interfaces with clean designs, smooth interactions,
          and optimized performance across all devices.
        </p>

        <div className="projectCard__gallery">
          {projectWorkIntroduction.images.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Project preview ${index + 1}`}
              className="projectCard__image"
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <article className="projectPresentation">
      <div className="projectPresentation__image-container">
        <img
          src={project.image}
          alt={project.title}
          className="projectPresentation__image"
        />
      </div>

      <div className="projectPresentation__content">
        <h2 className="projectPresentation__title">{project.title}</h2>

        <p className="projectPresentation__description">{project.description}</p>

        <section className="projectPresentation__challenges">
          <h3 className="projectPresentation__challenges-title">
            Challenges and Lessons Learned
          </h3>
          <br/>

          <p className="projectPresentation__challenges-description">
            {project.challengesAndLessons}
          </p>
        </section>

        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="projectPresentation__link"
        >
          View Project
        </Link>
      </div>
    </article>
  );
};

export default ProjectsWork;