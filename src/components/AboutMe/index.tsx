"use client";
import Link from "next/link";
import SocialMedia from "../SocialMedia";
import { useEffect } from "react";
import "./about.scss";
const AboutMe = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".aboutPage__sectioncontainer p"  
      );

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if(entry.isIntersecting) {
              entry.target.classList.add("show");
            }
          });
        },
        {threshold: 0.3}
      );
      elements.forEach((el) => observer.observe(el));
      return()=> observer.disconnect();
  }, [])
  return (
    <div className="aboutPage">
      <section className="aboutPage__section sectionOne">
        <div className="aboutPage__sectioncontainer">
          <h1 className="aboutPage__title">Welcome to my page</h1>
          <p className="aboutPage__paragraph">
            Here you can learn more about me as a person and about my projects
          </p>
          <div className="aboutPage__buttons">
            <Link
              href="/Resume-frontenddeveloper-SouadTaki.pdf"
              target="_blank"
              className="aboutPage__resumebutton"
            >
              RESUME
            </Link>
            <Link href="/projects" className="aboutPage__projectbutton">
              PROJECTS
            </Link>
          </div>
          <p>
            I'm a passionate Front-End Developer who loves building modern,
            responsive and user-friendly web applications. I enjoy transforming
            ideas into interactive digital experiences using clean code and
            thoughtful design.
          </p>
        </div>
      </section>
      <section className="aboutPage__section sectiontwo">
        <div className="aboutPage__sectioncontainer">
          <h2 className="aboutPage__title">My Journey</h2>
          <p>
            My journey into web development started with a curiosity about how
            websites work. What began as experimentation quickly turned into a
            passion for problem-solving and creating interactive user
            experiences. Over time, I developed strong skills in JavaScript,
            React, and modern CSS techniques, continuously improving through
            personal projects and learning new technologies.
          </p>
        </div>
      </section>
      <section className="aboutPage__section sectionfour">
        <div className="aboutPage__sectioncontainer">
          <h2 className="aboutPage__title">My skills</h2>
          <p>
            I work mainly with React, Next.js, and TypeScript to build scalable
            front-end applications. I also focus heavily on responsive design,
            accessibility, and performance optimization. I am highly adaptable
            and always motivated to learn new programming languages and expand
            my technical expertise.
          </p>
        </div>
      </section>
      <section className="aboutPage__section sectionfive">
        <div className="aboutPage__sectioncontainer">
          <h2 className="aboutPage__title">What Drives Me</h2>
          <p>
            I believe great applications are not just functional — they are
            intuitive and enjoyable to use. I pay attention to details, write
            maintainable code, and constantly seek to improve both technically
            and creatively.
          </p>
        </div>
      </section>
      <section className="aboutPage__section sectionsix">
        <div className="aboutPage__sectioncontainer">
          <h2 className="aboutPage__title">My Goals</h2>
          <p>
            My goal is to grow as a front-end engineer, contribute to meaningful
            projects, and collaborate with teams that value innovation and
            quality. I'm always open to learning new technologies and expanding
            my skill set.
          </p>
        </div>
      </section>
      <section className="aboutPage__section sectiontree">
        <div className="aboutPage__sectiontwocontainer">
          <div className="aboutPage__image"></div>
          <h2 className="aboutPage__subtitle">Souad Taki</h2>

          <h3 className="aboutPage__undersubtitle">Front-end developer</h3>
          <div className="aboutPage__socialmediaabout">
            <SocialMedia />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
