import React from "react";
import "../index.css";

// Files
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import Spotlight from "./ui/Spotlight";
import grid from "../assets/grid.svg";

function Home() {
  return (
    <section id="home">
      <div className="h-[52rem] -z-10 xl:mt-12  text-center flex flex-col justify-center items-center">
        {/* background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="md:block hidden" > <Spotlight /> </div>
        <img src={grid} alt="grid" className="absolute -z-10 w-full h-full top-0 object-cover" />
        </div>
        {/* name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, top: 10 }}
          animate={{ opacity: 1, scale: 1, top: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="lg:text-3xl  md:text-2xl text-2xl pb-3 relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold"
        >
          Hello! I'm Kaushal,
        </motion.div>
        {/* description */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, top: 100 }}
          animate={{ opacity: 1, scale: 1, top: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-white lg:text-3xl md:text-3xl text-2xl font-semibold max-w-[600px]"
        >
          Web Developer Enthusiastic about{" "}
          <span>
            Creating Seamless{" "}
            <span className="bg-gradient-to-tr bg-clip-text text-transparent from-cyan-700 via-blue-500 to-indigo-600">
              Digital Experiences.
            </span>
          </span>
        </motion.div>
        {/* button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, top: 100 }}
          animate={{ opacity: 1, scale: 1, top: 0 }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: "easeInOut",
          }}
          className="mt-7 button-home"
        >
          <a
            href="#projects"
            className="border border-white/30 shadow-[inset_0_0_10px_rgba(255,255,255,0.1)] shadow-white/20 rounded-full 
              backdrop-blur-md hover:shadow-[0_0_12px_rgba(255,255,255,0.15)] text-white w-[12rem] sm:w-[14rem] h-15 
              flex items-center justify-center 
              transition-all duration-300 ease-in-out
              hover:border-white/50 hover:scale-105 hover:bg-white/5"
          >
            <span className="flex items-center transition-transform duration-300 ease-in-out hover:transform hover:translate-x-1">
              Show my work
              <FontAwesomeIcon
                className="pl-2 transition-transform duration-300 group-hover:rotate-45"
                icon={faPaperPlane}
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
