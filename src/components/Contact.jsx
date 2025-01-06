import React from "react";

const Contact = () => {
  return (
    <section className="mt-8">
      <div className="container mx-auto">
        <h2 className="font-bold text-yellow-400 mb-4">Get In Touch</h2>
        <p className=" text-gray-400 mb-4">
          I’m open to freelance work and collaborative projects. Let’s connect!
        </p>

        {/* Contact Information */}
        <div className="flex flex-col gap-2">
          {/* Gmail */}
          <div className="flex flex-row items-center gap-2">
            <img
              src="/images/gmail-logo.png"
              alt="Gmail Logo"
              className="w-6 h-6"
            />
            <a href="mailto:jitendrachadar.jc@gmail.com">
              <h3 className="text-lg font-semibold text-gray-100">Email Me</h3>
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-row items-center gap-2">
            <img
              src="/images/linkedin-logo.png"
              alt="LinkedIn Logo"
              className="w-6 h-6"
            />
            <a
              href="https://www.linkedin.com/in/jitendrachadar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-lg font-semibold text-gray-100">
                Connect on LinkedIn
              </h3>
            </a>
          </div>

          {/* GitHub */}
          <div className="flex flex-row items-center gap-2">
            <img
              src="/images/github-logo.png"
              alt="GitHub Logo"
              className="w-6 h-6"
            />
            <a
              href="https://github.com/jitendrachadar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-lg font-semibold text-gray-100">
                Follow on GitHub
              </h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
