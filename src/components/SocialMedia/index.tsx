"use client";
import Image from "next/image";
import React from "react";
import "./socialMedia.scss";
import Link from "next/link";
import "./socialMedia.scss";

const SocialMedia = () => {
  return (
    <div className="socialMedia">
      <div>
        <Link href="https://github.com/Souad-Sud" target="_blank">
          <Image
            src="/images/glogo.jpg"
            alt="logo"
            height={35}
            width={35}
            priority
            className="socialMedia__link"
          />
        </Link>
      </div>
      <div>
        <Link
          href="https://www.linkedin.com/in/souad-rondelet-b18873184/"
          target="_blank"
        >
          <Image
            src="/images/LinkdLogo.png"
            alt="logo"
            height={35}
            width={35}
            priority
             className="socialMedia__link"
          />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
