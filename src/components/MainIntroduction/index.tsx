"use client";
import { ReactElement, useState } from "react";
import Image from "next/image";
import "./mainIntroduction.scss";
import SocialMedia from "../SocialMedia";

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
          <div className="main__flipcontainer">
            <div className="main__flippimg">
              <Image
                src="/profilImage/profile-image.png"
                alt="profile-image"
                height={600}
                width={500}
                className="main__profilimg front"
              />
              <Image
                src="/profilImage/profile-image-fliped.png"
                alt="profile-image"
                height={600}
                width={500}
                className="main__profilimg back"
              />
            </div>
          </div>
        </div>
        <div className="main__description">
          <h2 className="main__subtitlename">Souad</h2>
          <h2 className="main__subtitle">---- Front-end developer</h2>
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
