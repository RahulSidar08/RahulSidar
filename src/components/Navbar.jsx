import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/#about" },
    { label: "Skills", to: "/#skills" },
    { label: "Projects", to: "/#projects" },
    { label: "Contact", to: "/#contact" },
  ];
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 dark:bg-gray-950 dark:text-white">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 pl-0  dark:text-white">
          Rahul Sidar
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-12 text-lg">
          <Link
            to="/"
            onClick={() => {
              setTimeout(() => {
                const section = document.getElementById("home");
                section?.scrollIntoView({ behavior: "smooth" });
              }, 0);
            }}
          >
            Home
          </Link>
          <Link
            to="/"
            onClick={() => {
              setTimeout(() => {
                const section = document.getElementById("about");
                section?.scrollIntoView({ behavior: "smooth" });
              }, 0);
            }}
          >
            About
          </Link>
          <Link
            to="/"
            onClick={() => {
              setTimeout(() => {
                const section = document.getElementById("skills");
                section?.scrollIntoView({ behavior: "smooth" });
              }, 0);
            }}
          >
            Skills
          </Link>
          <Link
            to="/"
            onClick={() => {
              setTimeout(() => {
                const section = document.getElementById("projects");
                section?.scrollIntoView({ behavior: "smooth" });
              }, 0);
            }}
          >
            Project
          </Link>
          <Link
            to="/"
            onClick={() => {
              setTimeout(() => {
                const section = document.getElementById("contact");
                section?.scrollIntoView({ behavior: "smooth" });
              }, 0);
            }}
          >
            Contact
          </Link>
        </nav>
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-gray-700"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 right-4 w-64 bg-white dark:bg-gray-900 shadow-lg rounded-lg z-50 border dark:border-gray-800">
          <div className="flex flex-col px-6 py-4 space-y-4">

            {["home", "about", "skills", "Project", "contact"].map(
              (sectionId) => (
                <Link
                  key={sectionId}
                  to="/"
                  onClick={() => {
                    setIsOpen(false);
                    setTimeout(() => {
                      const section = document.getElementById(sectionId);
                      section?.scrollIntoView({ behavior: "smooth" });
                    }, 0);
                  }}
                  className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
};
