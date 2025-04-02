import React from "react";
import "../index.css";

// Files
import { motion } from "framer-motion";
import { BackgroundLines } from "@/components/ui/background-lines";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

function Home() {
  return (
    <section id="home">
      <div className="h-[52rem] -z-10 xl:mt-12  text-center flex flex-col justify-center items-center">
        {/* background */}
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          {/* name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, top: 10 }}
            animate={{ opacity: 1, scale: 1, top: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="lg:text-3xl md:text-2xl text-2xl pb-3 relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold"
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
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="a"
              href="#projects"
              className="bg-[var(--color-bg)] text-white w-[12rem] sm:w-[14rem] h-12 flex items-center justify-center space-x-2"
            >
              <span>
                Show my work{" "}
                <FontAwesomeIcon className="pl-2" icon={faPaperPlane} />{" "}
              </span>
            </HoverBorderGradient>
          </motion.div>
        </BackgroundLines>
      </div>
    </section>
  );
}

export default Home;
