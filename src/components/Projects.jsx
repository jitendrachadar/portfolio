import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

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

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section className="text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-sky-500 mb-8">Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              project={project}
              key={index}
              onDetailsClick={() => openProjectDetails(project)}
            />
          ))}
        </div>
      </div>

      {/* Render ProjectDetails as a modal */}
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={closeProjectDetails}
        />
      )}
    </section>
  );
};

export default Projects;
