"use client";
import Image from "next/image";
import "./circuleAnimation.scss";

const CirculeAnimation = () => {
  return (
    <div className="circular-wrapper">
      {/* Rotating text */}
      <div className="circular-text">
        <svg viewBox="0 0 200 200">
          <defs>
            <path
              id="circlePath"
              d="M 100,100
                 m -75,0
                 a 75,75 0 1,1 150,0
                 a 75,75 0 1,1 -150,0"
            />
          </defs>

          <text>
            <textPath href="#circlePath">
              SOUAD * PORTFOLIO * FRONTEND  *  DEVELOPER *
            </textPath>
          </text>
        </svg>
      </div>

      <div className="circular-image">
        <Image
          src="/profilImage/profile-edit-image.png"
          alt="image profile"
          width={200}
          height={200}
          priority
        />
      </div>
    </div>
  );
};

export default CirculeAnimation;
