"use client";
import { MapPinSimple } from "@phosphor-icons/react";
import { ReactElement, useState } from "react";
import Image from "next/image";
import "./mainIntroduction.scss";
import SocialMedia from "../SocialMedia";
import CirculeAnimation from "../CirculeAnimation";
import { MapPinSimpleArea } from "@phosphor-icons/react/dist/ssr";

type Props = {
  scrollToSkills: () => void;
};

const MainIntroduction = ({ scrollToSkills }: Props): ReactElement => {
  const [isMoved, setIsMoved] = useState(false);

  const handleScroll = () => {
    setIsMoved(true);
    setTimeout(() => setIsMoved(false), 600);

    scrollToSkills();
  };

  return (
    <>
      <main className="main">
        <div className="main__imageProfil-container">
          <h1 className="main__title">Portfolio</h1>
        </div>
        <div className="main__description">
          <CirculeAnimation />
          <h2 className="main__subtitlename">Souad Taki</h2>
          <h2 className="main__subtitle">--- Front-End Developer ---</h2>

          <p className="main__introduction">
            I design and develop modern, responsive web applications with a
            strong focus on user experience, performance, and clean code.I
            combine creativity and technical expertise to bring ideas to life.
          </p>
          <span className="main__span">
            {" "}
            <MapPinSimpleArea size={32} color="pink" /> in Sweden
          </span>
          <SocialMedia />
        </div>
      </main>
      <div className="scrollDown" onClick={handleScroll}>
        <p className={isMoved ? "circle moved" : "circle"}>↓</p>
      </div>
    </>
  );
};

export default MainIntroduction;
