import React, { useState } from "react";
import profileImage from "../assets/rahulSidar.jpg"; // Replace with correct path to your image

export const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section
      id="about"
      className="w-full bg-white text-black py-16 px-4 sm:px-6 lg:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={profileImage}
            alt="Workstation with code"
            className="rounded-lg shadow-lg object-cover w-full max-w-md"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-black mb-6 leading-relaxed">
            I am a web developer with a dedication to creating interactive and responsive web applications. I have a background in front-end technologies like JavaScript, React, Redux, Bootstrap, HTML, and CSS. On the back-end, my knowledge includes , Node.js, Nest.js. Continuously seeking to expand my knowledge and skill set. I am excited to collaborate with others to create amazing applications.
          </p>

          {/* Tabs */}
          <div className="flex space-x-6 border-b border-gray-700 mb-4">
            {["Skills", "Education", "Other Skills"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`pb-2 text-lg font-semibold ${
                  activeTab === tab.toLowerCase()
                    ? "border-b-2 border-purple-500 text-black"
                    : "text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="text-black space-y-2">
            {activeTab === "skills" && (
              <ul className="list-disc pl-5 space-y-1">
                <li>React</li>
                <li>NextJS</li>
                <li>Bootstrap</li>
                <li>Tailwind</li>
                <li>JavaScript</li>
              </ul>
            )}

            {activeTab === "education" && (
              <div>
                <p><strong>🎓 IIIT Naya Raipur</strong> — B.Tech in Computer Science & Engineering </p>
                <p>• Final year student with strong focus on software development.</p>
              </div>
            )}

            {activeTab === "other skills" && (
              <div>
                <p><strong>Other Tools:</strong> Git, Docker, Kubernetes, Postman</p>
                <p><strong>Languages:</strong> JavaScript, C++, SQL</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
