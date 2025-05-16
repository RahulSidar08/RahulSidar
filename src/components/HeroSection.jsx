import React from "react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white animate-fade-in-up">
            Hey, I'm{" "}
            <span className="text-black">
              Rahul Sidar
            </span>{" "}
            👋
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-xl">
            A Full-Stack Web Developer crafting modern, responsive, and
            scalable applications using the MERN stack. Let’s build something
            amazing together!
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <a
              href="https://drive.google.com/file/d/1kXqR7uVf1RcOa34DPT5MFSQRu4G6Asgt/view"
              className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-700 transition font-medium"
            >
              🤝 Let's Connect
            </a>
          </div>

        </div>

        {/* Right Image
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl">
          <img
            src="https://avatars.githubusercontent.com/u/73930265?v=4" // Replace with your own image URL
            alt="Rahul Sidar"
            className="object-cover w-full h-full"
          />
        </div> */}
      </div>
    </section>
  );
};
