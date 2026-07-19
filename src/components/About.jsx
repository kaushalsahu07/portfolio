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
import b2Image from "../assets/b1-optimized.svg";
import bgImageWebp from "../assets/bg.webp";
import bgImageAvif from "../assets/bg.avif";
import grid from "../assets/grid.svg";

// UI Components
import SpotlightCard from "./ui/SpotlightCard";
import SkillsGrid from "./ui/SkillsGrid";

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
              <picture>
                <source srcSet={bgImageAvif} type="image/avif" />
                <source srcSet={bgImageWebp} type="image/webp" />
                <img
                  src={bgImageWebp}
                  alt="BgImage"
                  className="absolute left-0 top-0"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div className="max-w-[30rem] mt-15 mb-20 text-center text-amber-50 gap-5 flex flex-col justify-center items-center">
                <h1>Hey there! I'm Kaushal,</h1>
                <p>
                  BCA student and self-taught developer from Mumbai who fell in love with building things for the web. I specialize in React and TypeScript, and I'm currently deepening my skills across the stack with Node.js and MongoDB. <br />
                  When I'm not coding, I'm usually exploring new tools, refining side projects, or looking for ways to sharpen my craft.
                </p>
              </div>
              <img
                src={b2Image}
                className="w-[15rem] lg:w-[24rem] xl:w-[25rem] md:w-[20rem] absolute bottom-0 right-0"
                alt="BgImage"
                loading="lazy"
                decoding="async"
              />
            </div>
          </SpotlightCard>
        </div>

        <div className="flex flex-col justify-center items-center gap-5">
          {/* box 2 - Skills */}
          <div className="w-full min-h-[20rem] md:h-[22rem] sm:h-[20rem] md:w-[30rem] lg:w-[35rem] xl:w-[40rem] relative flex justify-center items-center">
            <SpotlightCard
              className="h-full"
              spotlightColor="rgba(17, 25, 45, 1)"
            >
              <div className="w-full h-full bg-[var(--color-bg)] rounded-[10px] flex flex-col justify-center items-center gap-5 md:gap-8 p-6">
                <img
                  src={grid}
                  alt="grid"
                  className="absolute w-full h-full top-0 object-cover opacity-60"
                  loading="lazy"
                  decoding="async"
                />
                <div className="text-center mt-5 md:mt-0 z-10">
                  <h3 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
                    These are my skill sets,
                  </h3>
                  <h2 className="text-amber-50">
                    I am continuously working to expand them.
                  </h2>
                </div>
                {/* skills */}
                <SkillsGrid />
              </div>
            </SpotlightCard>
          </div>
          {/* box 3 - Social */}
          <div className="w-full min-h-[20rem] sm:h-[20rem] md:w-[30rem] lg:w-[35rem] xl:w-[40rem] relative flex justify-center items-center">
            <SpotlightCard
              className="h-full"
              spotlightColor="rgba(17, 25, 45, 1)"
            >
              <div className="w-full min-h-[20rem] bg-[var(--color-bg)] rounded-[10px] flex flex-col justify-center items-center p-4">
                <picture>
                  <source srcSet={bgImageAvif} type="image/avif" />
                  <source srcSet={bgImageWebp} type="image/webp" />
                  <img
                    src={bgImageWebp}
                    alt="BgImage"
                    className="absolute left-0 top-0"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <h1 className="text-[20px] text-teal-50 font-sans font-semibold text-center z-10">
                  Feel free to connect with me on social media.
                </h1>

                <div className="flex flex-wrap justify-center gap-3 mt-6 z-10">
                  <a
                    className="group w-[8.5rem] h-[3.5rem] flex items-center justify-center gap-2 text-amber-50/80 border border-neutral-800 bg-[var(--color-second)] rounded-xl text-sm font-medium transition-all duration-300 hover:border-[#6e5494] hover:text-white hover:shadow-[0_0_20px_rgba(110,84,148,0.2)]"
                    href="https://github.com/kaushalsahu07"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon className="text-lg transition-transform duration-300 group-hover:scale-110" icon={faGithub} />
                    GitHub
                  </a>
                  <a
                    className="group w-[8.5rem] h-[3.5rem] flex items-center justify-center gap-2 text-amber-50/80 border border-neutral-800 bg-[var(--color-second)] rounded-xl text-sm font-medium transition-all duration-300 hover:border-[#0A66C2] hover:text-[#0A66C2] hover:shadow-[0_0_20px_rgba(10,102,194,0.2)]"
                    href="https://www.linkedin.com/in/kaushalsahu07/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon className="text-lg transition-transform duration-300 group-hover:scale-110" icon={faLinkedin} />
                    LinkedIn
                  </a>
                  <a
                    className="group w-[8.5rem] h-[3.5rem] flex items-center justify-center gap-2 text-amber-50/80 border border-neutral-800 bg-[var(--color-second)] rounded-xl text-sm font-medium transition-all duration-300 hover:border-[#E1306C] hover:text-[#E1306C] hover:shadow-[0_0_20px_rgba(225,48,108,0.2)]"
                    href="https://www.instagram.com/cd.kaushal/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon className="text-lg transition-transform duration-300 group-hover:scale-110" icon={faInstagram} />
                    Instagram
                  </a>
                  <a
                    className="group w-[8.5rem] h-[3.5rem] flex items-center justify-center gap-2 text-amber-50/80 border border-neutral-800 bg-[var(--color-second)] rounded-xl text-sm font-medium transition-all duration-300 hover:border-neutral-500 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]"
                    href="https://x.com/kaushalsahu_07"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon className="text-lg transition-transform duration-300 group-hover:scale-110" icon={faXTwitter} />
                    Twitter
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
