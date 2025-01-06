import React from "react";

const Contact = ({ activeSection }) => {
  const contactDetails = [
    {
      image_url: "/images/gmail-logo.png",
      title: "Email Me",
      image_atl_text: "Gmail Logo",
    },
    {
      image_url: "/images/linkedin-logo.png",
      title: "Connect on LinkedIn",
      image_atl_text: "LinkedIn Logo",
    },
    {
      image_url: "/images/github-logo.png",
      title: "Follow on GitHub",
      image_atl_text: "GitHub Logo",
    },
  ];
  return (
    <section className="mt-8">
      <div
        className={`container mx-auto ${
          activeSection === "home" ? "text-center" : ""
        }`}
      >
        <h2
          className={`font-bold text-yellow-400 mb-4 ${
            activeSection === "home" ? "text-2xl mt-6" : ""
          }`}
        >
          Get In Touch
        </h2>
        <p className=" text-gray-400 mb-4">
          I’m open to freelance work and collaborative projects. Let’s connect!
        </p>

        {/* Contact Information */}
        <div
          className={`flex ${
            activeSection === "home"
              ? "mt-8 flex-row justify-between"
              : "flex-col"
          } gap-2`}
        >
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex flex-row items-center gap-2">
              <img
                src={detail.image_url}
                alt={detail.image_atl_text}
                className="w-6 h-6"
              />
              <a href="mailto:jitendrachadar.jc@gmail.com">
                <h3 className="text-lg font-semibold text-gray-100">
                  {detail.title}
                </h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
