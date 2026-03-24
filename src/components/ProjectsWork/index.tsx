"use client";

import { Project } from "@/types/type";
import "./projectsWork.scss";
import Link from "next/link";
import { img } from "framer-motion/client";
import { projectWorkIntroduction } from "@/data/projectWorkIntroduction";

type ProjectsWorkProps = {
  project: Project | null;
};

const ProjectsWork = ({ project }: ProjectsWorkProps) => {
  if (!project) {
    return (
      <div className="projectCard">
        <h1 className="projectCard__title">Welcome to my project page</h1>
        <p className="projectCard__description">
          These projects are modern and responsive web applications developed
          using front-end technologies. The main objectives were to create
          user-friendly interfaces with clean designs, smooth interactions, and
          optimized performance across all devices.
        </p>
        <div className="projectCard__imageContainers">
          {projectWorkIntroduction.images.map((src, index) => (
            <img 
            key={index}
            src={src}
            alt={`Project image ${index + 1}`}
            className="projectCard__image"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="projectContent">
      <h1 className="projectContent__title">{project.title}</h1>
      <div className="projectContent__projectContentContainer">
        <div className="projectContent__imageContainer">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="projectContent__descriptionContainer">
          <p className="projectContent__description">{project.description}</p>
          <Link
            href={project.link}
            target="_blank"
            className="projectContent__link"
          >
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsWork;
