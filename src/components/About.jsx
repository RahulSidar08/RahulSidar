import React, { useState } from "react";

export const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section
      id="about"
      className="w-full bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="flex justify-center sm:justify-start">
        <h2 className="group text-3xl mx-auto sm:text-4xl font-semibold mb-6 text-gray-900 dark:text-white inline-block relative cursor-pointer">
          About Me
          <span className="absolute left-0 bottom-0 h-1 w-0 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center sm:items-start justify-center">
        <div className="max-w-3xl w-full text-lg relative">
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? "max-h-[2000px]" : "max-h-[320px]"
            }`}
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide">
              My name is Rahul Sidar, a final-year Computer Science
              student at IIIT Naya Raipur and a passionate Full Stack Web
              Developer specializing in the MERN stack (MongoDB, Express.js,
              React.js, Node.js). <br />I thrive on building robust,
              user-centric web applications and solving real-world problems
              through clean code, scalable architectures, and modern development
              practices. My expertise includes frontend development with
              React.js, Tailwind CSS, and Material UI, as well as backend
              development using Node.js, Express.js, and both SQL and NoSQL
              databases (MySQL, MongoDB). <br />I have experience in designing APIs,
              implementing authentication systems, and managing role-based
              access control. My strong proficiency in C++ allows me to write
              efficient, optimized code for a wide range of software development
              tasks. I also enjoy optimizing performance and ensuring smooth
              user experiences across platforms.
              <br />
              I'm deeply passionate about cloud technologies, AI integration,
              and building intelligent, data-driven systems. I'm also exploring
              DevOps practices, deployment workflows, and tools like docker ,
              Kubernetics. <br /> I’m actively seeking opportunities where I can
              contribute to impactful projects, collaborate with
              forward-thinking teams, and continue growing as a developer in a
              dynamic and fast-paced environment.
              <br />
            </p>

            {!isExpanded && (
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
            )}
          </div>

          <div className="text-center sm:text-left mt-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-600 dark:text-blue-400 font-medium underline hover:no-underline transition"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
