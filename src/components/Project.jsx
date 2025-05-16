import React from "react";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

import JobHive from "../assets/jobHive.png";
import mernChat from "../assets/mernChat.png";
import recipeVault from "../assets/recipeVault.png";

const projects = [
  {
    title: "JobHive",
    subtitle: "MERN Stack Job Portal",
    description:
      "Developed a full-stack job portal using the MERN stack, enabling job seekers to find opportunities and recruiters to manage postings. Implemented role-based access, authentication, applicant tracking, and optimized database queries for a seamless user experience.",
    image: JobHive,
    tags: ["MERN", "Job Portal", "MongoDB", "Express", "React", "Node.js"],
    live: "https://jobhive-3.onrender.com/",
    github: "https://github.com/RahulSidar08/JobHive",
  },
  {
    title: "Real-Time Chat",
    subtitle: "MERN + Socket.io Chat App",
    description:
      "Built a real-time chat application using the MERN stack with Socket.io integration for instant messaging. Features include user authentication, private and group chats, message history, and responsive UI for seamless communication across devices.",
    image: mernChat,
    tags: ["MERN", "Socket.io", "Real-Time", "Chat", "Authentication"],
    live: "https://mern-chat-nfyf.onrender.com/",
    github: "https://github.com/RahulSidar08/MERN-CHAT",
  },
  {
    title: "Recipe Vault",
    subtitle: "MERN Stack Recipe Manager",
    description:
      "Designed and developed a recipe management web app using the MERN stack. Users can create, edit, and categorize recipes, with features like ingredient-based search, favorites, and user authentication for personalized vaults.",
    image: recipeVault,
    tags: ["MERN", "Recipes", "Search", "Favorites", "Auth"],
    live: "https://github.com/RahulSidar08/RecipeVault",
    github: "https://github.com/RahulSidar08/RecipeVault",
  },
];

export const Project = () => {
  return (
    <section id="projects" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center my-10">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            🚀 My Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl shadow-md overflow-hidden bg-white transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-500"
            >

              <img
                src={project.image}
                alt={`${project.title} Screenshot`}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 space-y-3">
                <span className="inline-block px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-full">
                  Web App
                </span>
                <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 text-sm px-2 py-1 rounded-md text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-4 flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-medium hover:underline flex items-center"
                  >
                    <AiOutlineLink className="mr-1" />
                    View Site
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black flex items-center"
                  >
                    <AiOutlineGithub className="mr-1" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
