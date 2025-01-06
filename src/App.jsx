import React, { useState } from "react";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="app-container flex h-screen">
      {/* Sidebar for Personal Info */}
      <div
        className={`transition-all duration-500 bg-gray-900 text-white p-8 
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
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <span className="border border-gray-600 text-gray-300 px-4 py-2 rounded-lg text-sm hover:shadow-lg hover:shadow-yellow-100 transition-shadow duration-100">
              Java
            </span>
            <span className="border border-gray-600 text-gray-300 px-4 py-2 rounded-lg text-sm">
              Spring Boot
            </span>
            <span className="border border-gray-600 text-gray-300 px-4 py-2 rounded-lg text-sm">
              Web Development
            </span>
            <span className="border border-gray-600 text-gray-300 px-4 py-2 rounded-lg text-sm">
              PLSQL
            </span>
            <span className="border border-gray-600 text-gray-300 px-4 py-2 rounded-lg text-sm">
              Python
            </span>
            <span className="border border-gray-600 text-gray-300 px-4 py-2 rounded-lg text-sm">
              Chrome Extensions
            </span>
          </div>
          <div className="mt-6">
            <button
              className="block w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-md text-white mb-2"
              onClick={() => handleNavigation("projects")}
            >
              Projects
            </button>
            <button
              className="block w-full bg-green-600 hover:bg-green-700 py-2 rounded-md text-white"
              onClick={() => handleNavigation("about")}
            >
              More About Me
            </button>
          </div>

          <Contact />
        </div>
      </div>

      {/* Main Content Area */}
      <div
        className={`transition-all duration-500 bg-slate-800 overflow-y-auto
          ${activeSection === "home" ? "hidden" : "flex-1"}`}
      >
        {activeSection === "projects" && <Projects />}
        {activeSection === "about" && <About />}
      </div>
    </div>
  );
};

export default App;
