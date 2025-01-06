import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Load project data from the JSON file
    const fetchProjects = async () => {
      try {
        const response = await import("../data/projects.json");
        setProjects(response.default);
      } catch (error) {
        console.error("Error loading project data:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section className="text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-8">Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
