"use client";
import { ReactElement } from "react";
import Image from "next/image";
import "./projectsWork.scss"
import Link from "next/link";

const ProjectsWork = (): ReactElement => {
  return (
    <div className="projectCard">
      <div className="projectCard__imageContainer">
        <Image
          src="/projectImages/bloodmaiden.jpeg"
          alt=" "
          height={700}
          width={850}
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
        <Link href="https://blood-maiden.vercel.app/" className="projectCard__link" target="_blank">Discover</Link>
      </div>
    </div>
  );
};

export default ProjectsWork;
