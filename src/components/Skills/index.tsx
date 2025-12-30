"use client";

import { RefObject } from "react";
import "./skills.scss";

type Props = {
  sectionRef: RefObject<HTMLDivElement | null>;
};

export default function Skills({ sectionRef }: Props) {
  return (
    <section ref={sectionRef} className="skills">
      <h2 className="skills__subtitle">--My skills</h2>
      <p className="skills__paragra">
        As a front-end developer, my skill set typically covers a combination of
        languages, frameworks, tools, and practices used to build user
        interfaces and improve user experience. Here's a structured breakdown of
        your core front-end developer skills:
      </p>
      {/* Your skills content here */}
    </section>
  );
}
