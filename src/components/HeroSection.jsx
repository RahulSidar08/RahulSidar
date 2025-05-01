import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
export const HeroSection = () => {
  return (
    <>
<section
  id="home"
  className="bg-gray-100 dark:bg-gray-900 h-[700px] flex items-center px-4 sm:px-6 lg:px-8 py-16"
>
  <div className="max-w-4xl mx-auto text-center md:text-left">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
      Hey, I'm Rahul Sidar 👋
    </h1>
    <p className="text-base sm:text-lg mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto md:mx-0">
      A full-stack web developer specializing in building modern and
      responsive web applications using the MERN stack. Let’s build
      something great together!
    </p>
    <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
      <a
        href="https://drive.google.com/file/d/1qRLkb5s93np5bQKu80E9KTEVqv38CP6N/view?usp=sharing"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
      <a
        href="#contact"
        className="px-6 py-3 border border-gray-700 dark:border-white text-gray-700 dark:text-white rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition"
      >
        Let's Connect
      </a>
    </div>
  </div>
</section>

    </>
  );
};
