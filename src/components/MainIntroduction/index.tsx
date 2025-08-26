"use client";
import { ReactElement, RefObject, useState } from "react";
import Image from "next/image";
import "./mainIntroduction.scss";
import SocialMedia from "../SocialMedia";

type Props = {
  scrollToRef: RefObject<HTMLDivElement | null>;
};

const MainIntroduction = ({ scrollToRef }: Props): ReactElement => {
  const [isMoved, setIsMoved] = useState(false);

  
  const handleScroll = () => {
    // trigger animation
    setIsMoved(true);
    // set the time in 0.4s animation
    setTimeout(() => {
      setIsMoved(false);

    }, 600);

    scrollToRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main className="main">
        <div className="main__imageProfil-container">
          <h1 className="main__title">Portfolio</h1>
          <Image
            src="/images/profil-picture.png"
            alt="logo"
            height={650}
            width={400}
            priority
            className="main__imag-profil"
          />
        </div>
        <div className="main__description">
          <h2 className="main__subtitle">-- Front-end developer</h2>
          <p className="main__introduction">
            Hello, my name is Souad Taki. I’m a passionate front-end developer
            and designer based in Sweden.
          </p>
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
