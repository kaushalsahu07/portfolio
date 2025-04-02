import React from "react";
import "../index.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

// Images
import b2Image from "../assets/b1.svg";
import bgImage from "../assets/bg.png";
import grid from "../assets/grid.svg";

function About() {
  return (
    <section id="about">
      <div className="flex-col xl:flex-row flex justify-center items-center gap-5 mt-1">
        {/* box 1 */}
        <div className="w-full min-h-[30rem] sm:h-[40rem] md:h-[38rem] lg:h-[41rem] md:w-[30rem] lg:w-[35rem] xl:w-[40rem] rainbow-border flex justify-center items-center">
          <div className="w-[39.9rem] h-full bg-[var(--color-bg)] rounded-[10px] text-center flex flex-col items-center p-4">
            <img src={bgImage} className="absolute left-0 top-0" />
            <div className="mt-15 mb-20 text-amber-50 gap-5 flex flex-col justify-center items-center">
              <h1>Hey there! I'm Kaushal,</h1>
              <p className="w-[80%]">
                A web development enthusiast from India. I have a solid
                foundation in HTML, CSS, and JavaScript, which are the building
                blocks of the web. I’m also skilled in Tailwind CSS, a
                utility-first framework that makes designing sleek and
                responsive interfaces a breeze. Currently, I’m expanding my
                skill set by learning React, a powerful JavaScript library for
                building user interfaces. My goal is to become a full-fledged
                web developer, crafting seamless and dynamic web experiences.
                While I’m still on my learning journey.
              </p>
            </div>
            <img
              src={b2Image}
              className="w-[15rem] lg:w-[24rem] xl:w-[25rem] md:w-[20rem] absolute bottom-0 right-0"
              alt="img"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-5">
          {/* box 2 */}
          <div className="w-full min-h-[20rem] sm:h-[20rem] md:w-[30rem] lg:w-[35rem] xl:w-[40rem] rainbow-border flex justify-center items-center">
            <div className="w-full h-full bg-[var(--color-bg)] rounded-[10px] flex flex-col justify-center items-center gap-5 md:gap-8 p-4">
              <img src={grid} className="absolute w-full h-full top-0 object-cover" />
              <div className="text-center mt-5 md:mt-0">
                <h3 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
                  These are my skill sets,
                </h3>
                <h2 className="text-amber-50">
                  I am continuously working to expand them.
                </h2>
              </div>
              {/* skills */}
              <div className="flex flex-wrap justify-center items-center gap-3 z-10">
                <div className="w-[7.5rem] h-[4rem] flex justify-center items-center text-amber-50 bg-[var(--color-second)] text-[15px] rounded-[10px]">
                  React
                </div>
                <div className="w-[7.5rem] h-[4rem] flex justify-center items-center text-amber-50 bg-[var(--color-second)] text-[15px] rounded-[10px]">
                  Javascript
                </div>
                <div className="w-[7.5rem] h-[4rem] flex justify-center items-center text-amber-50 bg-[var(--color-second)] text-[15px] rounded-[10px]">
                  HTML
                </div>
                <div className="w-[7.5rem] h-[4rem] flex justify-center items-center text-amber-50 bg-[var(--color-second)] text-[15px] rounded-[10px]">
                  CSS
                </div>
                <div className="w-[7.5rem] h-[4rem] flex justify-center items-center text-amber-50 bg-[var(--color-second)] text-[15px] rounded-[10px]">
                  Tailwindcss
                </div>
                <div className="w-[7.5rem] h-[4rem] flex justify-center items-center text-amber-50 bg-[var(--color-second)] text-[15px] rounded-[10px]">
                  Sass
                </div>
              </div>
            </div>
          </div>
          {/* box 3 */}
          <div className="w-full min-h-[20rem] sm:h-[20rem] md:w-[30rem] lg:w-[35rem] xl:w-[40rem] rainbow-border flex justify-center items-center">
            <div className="w-full min-h-[20rem] bg-[var(--color-bg)] rounded-[10px] flex flex-col justify-center items-center p-4">
              <img src={bgImage} className="absolute left-0 top-0" />
              <h1 className="text-[20px] text-teal-50 font-sans font-semibold text-center">
                Feel free to connect with me on social media.
              </h1>

              <div className="flex flex-wrap justify-center gap-2.5 mt-5 z-10">
                <a
                  className="w-[8rem] h-[4rem] flex justify-center items-center text-amber-50 border-2 border-amber-50 bg-[var(--color-bg)] rounded-[10px]"
                  href="https://github.com/kaushalsahu07"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  className="w-[8rem] h-[4rem] flex justify-center items-center text-amber-50 border-2 border-amber-50 bg-[var(--color-bg)] rounded-[10px]"
                  href="https://www.linkedin.com/in/kaushalsahu07/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  className="w-[8rem] h-[4rem] flex justify-center items-center text-amber-50 border-2 border-amber-50 bg-[var(--color-bg)] rounded-[10px]"
                  href="https://www.instagram.com/cd.kaushal/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  className="w-[8rem] h-[4rem] flex justify-center items-center text-amber-50 border-2 border-amber-50 bg-[var(--color-bg)] rounded-[10px]"
                  href="https://x.com/kaushalsahu_07"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
