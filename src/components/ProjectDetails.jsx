import React, { useState } from "react";

const ProjectDetails = ({ project, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? project.project_gallery.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === project.project_gallery.length - 1 ? 0 : prev + 1
    );
  };

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
      <div className="bg-gray-900 text-gray-100 rounded-lg w-11/12 md:w-3/4 lg:w-1/2 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-100"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-sky-500 mb-4">
          {project.project_title}
        </h2>

        {/* Image Slider */}
        <div className="relative">
          <img
            src={project.project_gallery[currentSlide].image_url}
            alt={project.project_gallery[currentSlide].alt_text}
            className="w-full h-80 object-contain rounded-lg mb-4"
          />
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-70 rounded-full p-2 text-gray-100"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-70 rounded-full p-2 text-gray-100"
          >
            ›
          </button>
        </div>

        {/* Project Details */}
        <div>
          <p className="text-gray-400 mb-4">
            {project.description.join(" ")}
          </p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Visit Project Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
