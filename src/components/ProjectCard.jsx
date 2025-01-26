import React from "react";

const ProjectCard = ({ project, onDetailsClick }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700">
      {project.project_logo.URL && (
        <div className="flex justify-center p-4">
          <img
            src={project.project_logo.URL}
            alt={project.project_logo.alt_text}
            className="h-16"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{project.project_title}</h3>
        <p className="text-gray-400 mb-4">{project.description[0]}</p>

        <div className="flex flex-wrap gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-600 text-black font-bold py-2 px-4 rounded hover:bg-sky-700"
            >
              Visit Website
            </a>
          )}
          <button
            onClick={onDetailsClick}
            className="border border-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
          >
            More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
