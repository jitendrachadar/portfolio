import React, { useEffect, useState } from "react";
import DetailCard from "./DetailCard";

const About = () => {
  const [aboutMe, setAboutMe] = useState([]);

  useEffect(() => {
    // Load about-me data from the JSON file
    const fetchAboutMe = async () => {
      try {
        const response = await import("../data/about-me.json");
        setAboutMe(response.default);
      } catch (error) {
        console.error("Error loading about-me data:", error);
      }
    };
    fetchAboutMe();
  }, []);

  return (
    <section className="bg-slate-800 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-8">
          More About Me
        </h2>

        {aboutMe.map((section, index) => (
          <div key={index} className="mb-10">
            {/* Section Title */}
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              {section.title}
            </h3>

            {/* Section Details */}
            <div className="flex flex-col gap-6">
              {section.details.map((detail, idx) => (
                <DetailCard
                  key={idx}
                  title={detail.position || detail.degree || detail.level}
                  subtitle={detail.company || detail.institution}
                  duration={detail.duration}
                  points={detail.responsibilities || detail.details}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
