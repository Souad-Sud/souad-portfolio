"use client";
import { workPresentation } from "@/data/work";
import "./work.scss";
import Link from "next/link";

const Work = () => {
  return (
    <div className="workProjects">
      <div className="workProjects__presentation">
        <h2 className="workProjects__title">My Work</h2>
        <p className="workProjects__description">
          Here are a few projects I have worked on. Click on the link to
          discover more.
        </p>
      </div>
      <div className="workProjects__workcontainer">
        <section className="workProjects__worksection">
          <div>
            <h2 className="workProjects__subtitle">Project 1</h2>
            <p className="workProjects__description">
              Blood maiden is a game website uncover the filthy secrets of a
              twisted version of Victorian London ....
            </p>
          </div>
          <div className="workProjects__workcontent">
            <h2 className="workProjects__subt">
              Materials sourcing and curation
            </h2>
            <div className="workProjects__imagecontainer">
              <img src="/projectImages/project1.png" alt="" />
            </div>
          </div>
          <div className="workProjects__arrowWrapper">
            <Link href="/projects" className="workProjects__arrowLink">
              <button>→</button>
            </Link>
          </div>
        </section>

        <section className="workProjects__worksection">
          <div>
            <h2 className="workProjects__subtitle">Project 2</h2>
            <p className="workProjects__description">
              Recipe App is a project focused on fetching data from a recipe
              API.....
            </p>
          </div>
          <div className="workProjects__workcontent">
            <h2 className="workProjects__subt">
              Materials sourcing and curation
            </h2>
            <div className="workProjects__imagecontainer">
              <img src="/projectImages/project2.jpeg" alt="" />
            </div>
          </div>
          <div className="workProjects__arrowWrapper">
            <Link href="/projects" className="workProjects__arrowLink">
              <button>→</button>
            </Link>
          </div>
        </section>
        <section className="workProjects__worksection">
          <div>
            <h2 className="workProjects__subtitle">Project 3</h2>
            <p className="workProjects__description">
              This website is about a game called Thral, a forgotten ghost of a
              fallen tyrant, awakened by a failed ritual beneath ancient
              ruins...
            </p>
          </div>
          <div className="workProjects__workcontent">
            <h2 className="workProjects__subt">
              Materials sourcing and curation
            </h2>
            <div className="workProjects__imagecontainer">
              <img src="/projectImages/project3.png" alt="" />
            </div>
          </div>
          <div className="workProjects__arrowWrapper">
            <Link href="/projects" className="workProjects__arrowLink">
              <button>→</button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Work;
