"use client";

import { MapPinSimpleArea } from "@phosphor-icons/react";
import { ReactElement, useEffect, useState } from "react";
import "./mainIntroduction.scss";
import SocialMedia from "../SocialMedia";
import CirculeAnimation from "../CirculeAnimation";

type Props = {
  scrollToSkills: () => void;
};

const MainIntroduction = ({ scrollToSkills }: Props): ReactElement => {
  const roles = [
    "Front-End Developer",
    "React Developer",
    "UI Enthusiast",
    "Creative Coder",
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <main className="main">
      <div className="main__imageProfil-container">
        <h1 className="main__title">
          {"Portfolio".split("").map((letter, index) => (
            <span
              key={index}
              className="main__letter"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>

      <div className="main__description">
        <CirculeAnimation />

        <h2 className="main__subtitlename">Souad Taki</h2>

        <h2 className="main__subtitle">
          <span className="main__role">{roles[currentRole]}</span>
        </h2>

        <p className="main__introduction">
          I design and develop modern, responsive web applications with a strong
          focus on user experience, performance, and clean code. I combine
          creativity and technical expertise to bring ideas to life.
        </p>

        <span className="main__span">
          <MapPinSimpleArea size={32} color="pink" />
          in Sweden
        </span>

        <SocialMedia />
      </div>
    </main>
  );
};

export default MainIntroduction;
