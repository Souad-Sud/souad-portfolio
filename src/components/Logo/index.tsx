"use client";
import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import "./logo.scss";

const Logo = (): ReactElement => {
  return (
    <div className="logo">
      <Link href="/" className="logo__link">
        <Image
          src="/images/SouadLogo.png"
          alt="logo"
          height={150}
          width={160}
          priority
          className="logo__image"
        />
      </Link>
    </div>
  );
};

export default Logo;
