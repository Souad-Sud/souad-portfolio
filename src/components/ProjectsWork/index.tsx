"use client";
import { ReactElement } from "react";
import Image from "next/image";
import "./projectsWork.scss"

const ProjectsWork = (): ReactElement => {
  return (
    <div className="projectCard">
      <div className="projectCard__imageContainer">
        <Image
          src="/projectImages/zooProject.jpeg"
          alt=" "
          height={300}
          width={300}
          className="projectCard__image"
          priority
        />
      </div>
      <div className="projectCard__descriptionBlog">
        <h2 className="projectCard__title">The australian Zoo</h2>
        <p className="projectCard__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem iusto
          sed rerum labore mollitia voluptate aspernatur .
        </p>
        <button className="projectCard__link">Discover</button>
      </div>
    </div>
  );
};

export default ProjectsWork;
