import React from "react";
import "../index.css";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollDirection } from "./ui/AnimatePresence";
import GlassSurface from "./ui/GlassSurface";

function Navbar() {
  const scrollDirection = useScrollDirection();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: 1,
          y: scrollDirection === "down" ? -100 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <nav
          className="nav flex justify-center items-center pl-3 pr-3 rounded-xl mt-10 mx-1.5"
          role="navigation"
        >
          <GlassSurface width={700} height={75}>
            <ul className="flex flex-wrap gap-6 text-white">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </GlassSurface>
        </nav>
      </motion.div>
    </AnimatePresence>
  );
}

export default Navbar;
