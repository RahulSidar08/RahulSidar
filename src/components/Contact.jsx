import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <div className="w-full bg-white dark:bg-gray-900">
        <section id="contact" className="px-16 max-w-7xl mx-auto py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: About Me */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl font-bold text-gray-800 dark:text-white mb-5">
                Get in <span className="text-purple-600">Touch</span>
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-justify leading-7 mb-6">
                I'm always looking to connect with people who are passionate
                about technology, creativity, and making an impact. Whether
                you're a developer, designer, entrepreneur, or just someone who
                loves turning ideas into reality — I’d love to hear from you.
                Let’s exchange thoughts, collaborate on meaningful projects, or
                simply chat about what excites us in this fast-moving digital
                world. If you're into building cool things, learning new stuff,
                or just connecting with curious minds — you're in the right
                place. Feel free to reach out!
              </p>
              <div className="flex gap-6 mt-4">
                <a
                  href="https://www.linkedin.com/in/rahul-sidar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-6xl text-blue-600 hover:scale-110 transition-transform"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  href="https://github.com/rahulsidar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-6xl text-gray-800 dark:text-white hover:scale-110 transition-transform"
                >
                  <AiFillGithub />
                </a>
                <a
                  href="https://www.instagram.com/rahul_sidar__/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-6xl text-[#E1306C] hover:scale-110 transition-transform"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://x.com/SidarRahul_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-6xl text-black hover:scale-110 transition-transform"
                >
                  <FaXTwitter />
                </a>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.form
              action="https://getform.io/f/azywvlxb"
              method="POST"
              className="space-y-4 bg-white dark:bg-gray-800 shadow-xl p-8 rounded-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Drop a Message!
              </h3>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 rounded-md text-white font-semibold bg-purple-600 hover:bg-purple-700 transition"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
