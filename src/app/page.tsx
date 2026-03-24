"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import MainIntroduction from "@/components/MainIntroduction";
import Work from "@/components/Work";
import "./globals.scss";
import NewSkills from "@/components/NewSkills";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  // Refs for scroll targets
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const workRef = useRef<HTMLDivElement | null>(null);

  // For animation on SkillsIcon arrow
  const [isMoved, setIsMoved] = useState(false);

  // Scroll to Skills section and update URL to /skills
  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", "/skills");
  };

  // Scroll to Work section (or SkillsIcon section)
  const scrollToWork = () => {
    setIsMoved(true);
    setTimeout(() => setIsMoved(false), 600);
    workRef.current?.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", "/work");
  };

  // On mount or route change: if path is /skills, scroll there automatically
  useEffect(() => {
    if (pathname === "/skills") {
      skillsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <div className="app">
      <main className="homePage">
        <MainIntroduction scrollToSkills={scrollToSkills} />
        {/* Skills section with ref */}
        <div ref={skillsRef}>
          <NewSkills />
        </div>
        <div ref={workRef}>
          <Work />
        </div>
      </main>
    </div>
  );
}
