"use client";

import { useEffect } from "react";
import Image from "next/image";
import { iconItems } from "@/data/iconItem";
import "./newskills.scss";

const NewSkills = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".skill-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills">
      <h2 className="skills__subtitle">--My skills</h2>
      <p className="skills__paragra">
        As a front-end developer, my skill set typically covers a combination of
        languages, frameworks, tools, and practices used to build user
        interfaces and improve user experience.
      </p>

      <div className="skills__content">
        {iconItems.map((iconItem, i) => (
          <div
            key={i}
            className="skill-item"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <Image
              src={iconItem.image}
              alt={iconItem.name}
              className="skills-image"
              height={90}
              width={100}
            />
            <h2 className="skills__skillsubtitle">{iconItem.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewSkills;
