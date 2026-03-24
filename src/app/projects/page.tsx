"use client";
import ProjectsWork from "@/components/ProjectsWork";
import Sidebar from "@/components/Sidebar";
import "./project.scss";
import { ReactElement, useState } from "react";
import { Project } from "@/types/type";
import { projects } from "@/data/projects";

const Projects = (): ReactElement => {
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);

  const activeProject: Project | null =
    projects.find((p) => p.id === activeProjectId) ?? null;
  return (
    <div className="sidebarPage">
      <div className="sidebarPage__sidebar">
        <Sidebar
          projects={projects}
          activeProjectId={activeProjectId}
          setActiveProjectId={setActiveProjectId}
        />
      </div>
      <div className="sidebarPage__projectWork">
        <ProjectsWork project={activeProject} />
      </div>
    </div>
  );
};
export default Projects;
