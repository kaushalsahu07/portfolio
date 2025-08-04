import React from "react";
import grid from "../assets/grid.svg";
import "../index.css";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <section id="contact">
      <div className="flex justify-center items-center flex-col w-full overflow-hidden relative pb-10">
        <img
          src={grid}
          alt="grid"
          className="absolute w-full h-full top-0 object-cover"
        />
        <div className="text-center flex justify-center items-center flex-col pt-[12rem] sm:pt-40 space-y-6">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold text-4xl">
            Get In Touch !
          </h1>
          <p className="text-20 text-teal-50">
            Feel free to reach out for collaborations, questions, or just to say
            hi.
          </p>
          <a
            href="#projects"
            className="border border-white/30 shadow-[inset_0_0_10px_rgba(255,255,255,0.1)] shadow-white/20 rounded-full 
                      backdrop-blur-md hover:shadow-[0_0_12px_rgba(255,255,255,0.15)] text-white w-[12rem] sm:w-[14rem] h-14 
                      flex items-center justify-center 
                      transition-all duration-300 ease-in-out
                      hover:border-white/50 hover:scale-105 hover:bg-white/5"
          >
            <span className="flex items-center transition-transform duration-300 ease-in-out hover:transform hover:translate-x-1">
             Let's Take {" "}
              <FontAwesomeIcon
                className="pl-2 transition-transform duration-300 group-hover:rotate-45"
                icon={faPaperPlane}
              />
            </span>
          </a>
        </div>
        {/* footer */}
        <div className="w-full lg:w-[80%] flex flex-col sm:flex-row gap-5 justify-between items-center mt-40">
          <div className="flex justify-center items-center">
            <p className="text-white text-sm">©2025 Kaushal Sahu.</p>
          </div>

          <div className="flex justify-center items-center z-10 gap-2">
            <a
              className="w-[2rem] h-[2rem] flex justify-center items-center text-amber-50 border-2 border-amber-50 bg-[var(--color-bg)] rounded-[10px]"
              href="https://github.com/kaushalsahu07"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="w-[2rem] h-[2rem] flex justify-center items-center text-amber-50 border-2 border-amber-50 bg-[var(--color-bg)] rounded-[10px]"
              href="https://www.linkedin.com/in/kaushalsahu07/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              className="w-[2rem] h-[2rem] flex justify-center items-center text-amber-50 border-2 border-amber-50 bg-[var(--color-bg)] rounded-[10px]"
              href="https://www.instagram.com/cd.kaushal/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              className="w-[2rem] h-[2rem] flex justify-center items-center text-amber-50 border-2 border-amber-50 bg-[var(--color-bg)] rounded-[10px]"
              href="https://x.com/kaushalsahu_07"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
