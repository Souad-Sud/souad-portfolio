'use client'
import Image from "next/image";
import "./globals.scss"
import { useRef } from "react";
import MainIntroduction from "@/components/MainIntroduction";
import Skills from "@/components/Skills";
import SkillsIcon from "@/components/SkillsIcon";

export default function Home() {
    const skillsRef = useRef<HTMLDivElement | null>(null);

  return (
    <main className="homePage">
    <MainIntroduction scrollToRef={skillsRef}  />
    <Skills sectionRef={skillsRef}/>
    <SkillsIcon />
    </main>

  );
}
