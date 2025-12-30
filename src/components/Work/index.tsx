"use client";
import { workPresentation } from "@/data/work";
import "./work.scss";
// import { useRouter } from 'next/router';
import Link from "next/link";

const Work = () => {
  return (
    <div className="workProjects">
      <div className="workProjects__presentation">
        <h2 className="workProjects__title">My Work</h2>
        <p className="workProjects__description">
          Here are a few projects I have worked on. Click on the link to
          discover more
        </p>
      </div>

      <div className="workProjects__imgsContainer">
        {workPresentation.map((link) => (
          <div className="workProjects__imgComtainer" key={link.image}>
            <Link href={link.link} target="_blank" >
              <img src={link.image} alt="project img"  />
            </Link>
          </div>
        ))}
      </div>
      <div className="workProjects__btncontainer">
        <Link href="/projects">
          <button className="workProjects__btn">Discover more</button>
        </Link>
      </div>
    </div>
  );
};

export default Work;
