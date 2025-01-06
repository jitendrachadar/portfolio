import React, { useState } from "react";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const skills = [
    "Java",
    "Spring Boot",
    "Web Development",
    "PLSQL",
    "Python",
    "Chrome Extensions",
  ];
  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="app-container flex h-screen">
      {/* Sidebar for Personal Info */}
      <div
        className={`transition-all duration-500 bg-gray-900 text-white p-8 overflow-y-auto
          ${activeSection === "home" ? "flex w-full items-center" : "w-1/4"}`}
      >
        <div className="flex flex-col max-w-2xl mx-auto justify-center">
          <img
            src="/images/profile-pic.png"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold text-center text-gray-100">
            Jitendra Chadar
          </h1>
          <p className="text-lg mt-2 text-center text-gray-400">
            Software Developer
          </p>
          <p className="text-gray-400 text-center mt-6">
            I'm a software developer with 5+ years of experience in Java backend
            development, database maintenance with PLSQL, and a passion for
            building productivity tools and Chrome extensions.
          </p>

          <div className="flex mt-6 rounded-full border border-yellow-400 bg-gray-800">
            <button
              className={`w-full py-2 text-white hover:bg-yellow-400 hover:text-black rounded-l-full transition-colors duration-100 ${
                activeSection === "projects" ? "bg-yellow-400 text-black" : ""
              }`}
              onClick={() => handleNavigation("projects")}
            >
              Projects
            </button>
            <button
              className={`w-full py-2 text-white border-l border-gray-700 hover:bg-yellow-400 hover:text-black rounded-r-full transition-colors duration-100 ${
                activeSection === "about" ? "bg-yellow-400 text-black" : ""
              }`}
              onClick={() => handleNavigation("about")}
            >
              More About Me
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {skills.map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="border border-gray-600 text-gray-300 px-4 py-2 rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
          </div>

          <Contact activeSection={activeSection} />
        </div>
      </div>

      {/* Main Content Area */}
      <div
        className={`transition-all duration-500 bg-slate-800 px-8 overflow-y-auto
          ${activeSection === "home" ? "hidden" : "flex-1"}`}
      >
        {activeSection === "projects" && <Projects />}
        {activeSection === "about" && <About />}
      </div>
    </div>
  );
};

export default App;
