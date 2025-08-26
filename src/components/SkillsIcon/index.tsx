"use client";
import { ReactElement } from "react";
import Image from "next/image";
import { iconItems } from "@/data/iconItem";
import "./skillsIcon.scss";
import Work from "../Work";

const SkillsIcon = (): ReactElement => {
  return (
    <div className="skillsIcon">
      {iconItems.map((item, index) => (
        <div className="skillsIcon__square" key={index}>
          <div className="skillsIcon__content">
            <Image
              src={item.image}
              alt={`${item.name} icon`}
              height={40}
              width={40}
              priority
            />
            <h2 className="skillsIcon__subtitle">{item.name}</h2>
          </div>
        </div>
      ))}
      <p className="skillsIcon__descr">
        What excites me most about Frontend Development is the perfect mix of
        creativity and logic—designing interfaces that not only look great but
        also work seamlessly for users. I enjoy animations, responsive layouts,
        and optimizing user experience, and I’m always learning new tools and
        techniques to improve my skills. My goal is to build web applications
        that delight users while continuously growing as a developer. Each
        project I work on is an opportunity to learn, experiment, and create
        something meaningful.
      </p>
      <Work />
    </div>
  );
};

export default SkillsIcon;
