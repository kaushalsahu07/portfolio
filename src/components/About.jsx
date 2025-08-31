import React from "react";
import "../index.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faXTwitter,
  faReact,
  faJs,
  faHtml5,
  faCss,
  faSass
} from "@fortawesome/free-brands-svg-icons";

// Images
import b2Image from "../assets/b1.svg";
import bgImage from "../assets/bg.png";
import grid from "../assets/grid.svg";
import SpotlightCard from "./ui/SpotlightCard";

function About() {
  return (
    <section id="about">
      <div className="flex-col xl:flex-row flex justify-center items-center gap-5">
        {/* box 1 */}
        <div className="w-full min-h-[30rem] sm:h-[40rem] md:h-[38rem] lg:h-[41rem] md:w-[30rem] lg:w-[35rem] xl:w-[40rem] relative flex justify-center items-center">
          <SpotlightCard
            className="h-full"
            spotlightColor="rgba(17, 25, 45, 1)"
          >
            <div className="w-full max-w-[40rem] h-full rounded-[10px] text-center flex flex-col justify-center items-center p-4">
              <img src={bgImage} alt="BgImage" className="absolute left-0 top-0" />
              <div className="max-w-[30rem]mt-15 mb-20 text-center text-amber-50 gap-5 flex flex-col justify-center items-center">
                <h1>Hey there! I'm Kaushal,</h1>
                <p>
                  A web development enthusiast from India. I have a solid
                  foundation in HTML, CSS, and JavaScript, which are the
                  building blocks of the web. I’m also skilled in Tailwind CSS,
                  a utility-first framework that makes designing sleek and
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
                alt="BgImage"
              />
            </div>
          </SpotlightCard>
        </div>

        <div className="flex flex-col justify-center items-center gap-5">
          {/* box 2 */}
          <div className="w-full min-h-[20rem] sm:h-[20rem] md:w-[30rem] lg:w-[35rem] xl:w-[40rem] relative flex justify-center items-center">
            <SpotlightCard
              className="h-full"
              spotlightColor="rgba(17, 25, 45, 1)"
            >
              <div className="w-full h-full bg-[var(--color-bg)] rounded-[10px] flex flex-col justify-center items-center gap-5 md:gap-8 p-4">
                <img
                  src={grid}
                  alt="grid"
                  className="absolute w-full h-full top-0 object-cover"
                />
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
                  <div className="w-[7.5rem] h-[4rem] gap-1 flex justify-center items-center text-amber-50 bg-[var(--color-second)] text-[15px] rounded-[10px]">
                    <FontAwesomeIcon icon={faReact} /> React
                  </div>
                  <div className="w-[7.5rem] h-[4rem] gap-1 flex justify-center items-center text-amber-50 bg-[var(--color-second)] text-[15px] rounded-[10px]">
                    <FontAwesomeIcon icon={faJs} /> Javascript
                  </div>
                  <div className="w-[7.5rem] h-[4rem] gap-1 flex justify-center items-center text-amber-50 bg-[var(--color-second)] text-[15px] rounded-[10px]">
                    <FontAwesomeIcon icon={faHtml5} /> HTML
                  </div>
                  <div className="w-[7.5rem] h-[4rem] gap-1 flex justify-center items-center text-amber-50 bg-[var(--color-second)] text-[15px] rounded-[10px]">
                   <FontAwesomeIcon icon={faCss} /> CSS
                  </div>
                  <div className="w-[7.5rem] h-[4rem] gap-1 flex justify-center items-center text-amber-50 bg-[var(--color-second)] text-[15px] rounded-[10px]">
                    Tailwindcss
                  </div>
                  <div className="w-[7.5rem] h-[4rem] gap-1 flex justify-center items-center text-amber-50 bg-[var(--color-second)] text-[15px] rounded-[10px]">
                   <FontAwesomeIcon icon={faSass} />Sass
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>
          {/* box 3 */}
          <div className="w-full min-h-[20rem] sm:h-[20rem] md:w-[30rem] lg:w-[35rem] xl:w-[40rem] relative flex justify-center items-center">
            <SpotlightCard
              className="h-full"
              spotlightColor="rgba(17, 25, 45, 1)"
            >
              <div className="w-full min-h-[20rem] bg-[var(--color-bg)] rounded-[10px] flex flex-col justify-center items-center p-4">
                <img src={bgImage} alt="BgImage" className="absolute left-0 top-0" />
                <h1 className="text-[20px] text-teal-50 font-sans font-semibold text-center">
                  Feel free to connect with me on social media.
                </h1>

                <div className="flex flex-wrap justify-center gap-2.5 mt-5 z-10">
                  <a
                    className="github-link w-[8rem] h-[4rem] flex justify-center items-center text-amber-50 border-2 border-amber-50 bg-[var(--color-bg)] rounded-[10px]"
                    href="https://github.com/kaushalsahu07"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon className="pr-1.5" icon={faGithub} /> GitHub
                  </a>
                  <a
                    className="w-[8rem] h-[4rem] flex justify-center items-center text-amber-50 border-2 border-amber-50 bg-[var(--color-bg)] rounded-[10px]"
                    href="https://www.linkedin.com/in/kaushalsahu07/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon className="pr-1.5" icon={faLinkedin} /> LinkedIn
                  </a>
                  <a
                    className="instagram-link w-[8rem] h-[4rem] flex justify-center items-center text-amber-50 border-2 border-amber-50 bg-[var(--color-bg)] rounded-[10px]"
                    href="https://www.instagram.com/cd.kaushal/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon className="pr-1.5" icon={faInstagram} /> Instagram
                  </a>
                  <a
                    className="twitter-link w-[8rem] h-[4rem] flex justify-center items-center text-amber-50 border-2 border-amber-50 bg-[var(--color-bg)] rounded-[10px]"
                    href="https://x.com/kaushalsahu_07"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon className="pr-1.5" icon={faXTwitter} /> Twitter
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
