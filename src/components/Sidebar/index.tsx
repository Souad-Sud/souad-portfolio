'use client';

import { ProjectorScreenChart } from "@phosphor-icons/react";
import { Project } from "@/types/type";
import "./sidebar.scss";

type SidebarProps = {
  projects: Project[];
  activeProjectId: number | null;
  setActiveProjectId: (id: number) => void;
};

const Sidebar = ({
  projects,
  activeProjectId,
  setActiveProjectId,
}: SidebarProps) => {
  return (
    <aside className="aside">
      <h2 className="aside__title">PROJECTS</h2>

      <ul className="aside__list">
        {projects.map((project) => (
          <li
            key={project.id}
            className={`aside__items ${
              activeProjectId === project.id ? "is-active" : ""
            }`}
            onClick={() => setActiveProjectId(project.id)}
          >
            <ProjectorScreenChart
              size={32}
              weight={
                activeProjectId === project.id ? "bold" : "regular"
              }
              className="aside__icon"
            />
            <span className="aside__tooltip">{project.title}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
