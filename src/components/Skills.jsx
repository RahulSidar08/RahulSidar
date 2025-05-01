import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
  DiPostgresql,
} from "react-icons/di";
import { BiLogoMongodb } from "react-icons/bi";
import { GrGraphQl } from "react-icons/gr";
import { FaGitAlt, FaBootstrap } from "react-icons/fa";
import { SiMysql, SiExpress, SiTypescript, SiMui } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { SiCplusplus } from "react-icons/si";

const icons = [
  { icon: <DiHtml5 className="text-orange-600" />, name: "HTML5" },
  { icon: <DiCss3 className="text-blue-600" />, name: "CSS3" },
  { icon: <DiJavascript1 className="text-yellow-500" />, name: "JavaScript" },
  { icon: <DiReact className="text-blue-500" />, name: "React.js" },
  { icon: <DiNodejsSmall className="text-green-500" />, name: "Node.js" },
  {
    icon: <SiExpress className="text-gray-800 dark:text-white" />,
    name: "Express.js",
  },
  { icon: <BiLogoMongodb className="text-green-600" />, name: "MongoDB" },
  { icon: <SiMysql className="text-blue-500" />, name: "MySQL" },
  { icon: <DiPostgresql className="text-blue-700" />, name: "PostgreSQL" },
  {
    icon: <RiNextjsFill className="text-black dark:text-white" />,
    name: "Next.js",
  },
  { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
  { icon: <GrGraphQl className="text-pink-500" />, name: "GraphQL" },
  { icon: <FaGitAlt className="text-orange-500" />, name: "Git" },
  { icon: <FaBootstrap className="text-purple-600" />, name: "Bootstrap" },
  { icon: <RiTailwindCssFill className="text-sky-400" />, name: "Tailwind" },
  { icon: <SiMui className="text-blue-600" />, name: "Material UI" },
  { icon: <SiCplusplus className="text-white bg-blue-700" />, name: "C++" },


];

const Skills = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 p-8" id="skills">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-center relative inline-block group my-10">
          <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
            Tech Stacks
          </h2>
          <span className="absolute left-0 bottom-0 h-1 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className=" ml-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center"
        >
          {icons.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center space-y-2 text-5xl"
            >
              {item.icon}
              <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                {item.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
