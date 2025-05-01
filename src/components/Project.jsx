import React from "react";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

import JobHive from "../assets/jobHive.png"
import mernChat from "../assets/mernChat.png"
import recipeVault from "../assets/recipeVault.png"

export const Project = () => {
  return (
<section id="projects" className="bg-white dark:bg-gray-900 dark:text-white py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto">
    <div className="text-center my-10">
      <div className="inline-block relative group">
        <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
          Projects
        </h2>
        <span className="absolute left-0 bottom-0 h-1 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
      </div>
    </div>

    <div className="flex flex-col space-y-32">
      {/* Project 1 */}
      <div className="grid md:grid-cols-2 gap-10 items-center px-10">
        <div className="flex flex-col space-y-6">
          <p>
            <strong>JobHive – MERN Stack Job Portal</strong><br />
            Developed a full-stack job portal using the MERN stack, enabling job seekers to find opportunities and recruiters to manage postings. Implemented role-based access, authentication, applicant tracking, and optimized database queries for a seamless user experience.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://jobhive-3.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              <AiOutlineLink className="text-xl mr-2" />
              View Site
            </a>
            <a
              href="https://github.com/RahulSidar08/JobHive"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 border border-gray-400 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <AiOutlineGithub className="text-xl mr-2" />
              GitHub
            </a>
          </div>
        </div>
        <img
          src={JobHive}
          alt="JobHive Project"
          className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full"
        />
      </div>

      {/* Project 2 */}
      <div className="grid md:grid-cols-2 gap-10 items-center px-10">
        <img
          src={mernChat}
          alt="Chat App Project"
          className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full"
        />
        <div className="flex flex-col space-y-6">
          <p>
            <strong>Real-Time Chat Web App</strong><br />
            Built a real-time chat application using the MERN stack with Socket.io integration for instant messaging. Features include user authentication, private and group chats, message history, and responsive UI for seamless communication across devices.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://mern-chat-nfyf.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              <AiOutlineLink className="text-xl mr-2" />
              View Site
            </a>
            <a
              href="https://github.com/RahulSidar08/MERN-CHAT"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 border border-gray-400 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <AiOutlineGithub className="text-xl mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="grid md:grid-cols-2 gap-10 items-center px-10">
        <div className="flex flex-col space-y-6">
          <p>
            <strong>Recipe Vault – MERN Stack Recipe Manager</strong><br />
            Designed and developed a recipe management web app using the MERN stack. Users can create, edit, and categorize recipes, with features like ingredient-based search, favorites, and user authentication for personalized vaults.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/RahulSidar08/RecipeVault"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              <AiOutlineLink className="text-xl mr-2" />
              View Site
            </a>
            <a
              href="https://github.com/RahulSidar08/RecipeVault"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 border border-gray-400 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <AiOutlineGithub className="text-xl mr-2" />
              GitHub
            </a>
          </div>
        </div>
        <img
          src={recipeVault}
          alt="Recipe Vault Project"
          className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full"
        />
      </div>
    </div>
  </div>
</section>

  );
};
