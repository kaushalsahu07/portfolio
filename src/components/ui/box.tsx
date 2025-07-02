import React from "react";
import "../../index.css";

//svg
import htmlIcon from "../../assets/html.svg";
import reactIcon from "../../assets/react.svg";
import tailIcon from "../../assets/tail.svg";
import cssIcon from "../../assets/css.svg";
import jsIcon from "../../assets/js.svg";

//icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { HoverBorderGradient } from "./hover-border-gradient";

interface BoxProps {
  img: string;
  title?: string;
  description?: string;
  link?: string;
  github?: string;

  html?: boolean;
  css: boolean;
  javascript: boolean;
  react: boolean;
  tailwindcss: boolean;
}

function Box({
  img,
  title,
  description,
  github,
  link,
  html,
  css,
  javascript,
  react,
  tailwindcss,
}: BoxProps) {
  return (
    <HoverBorderGradient
      containerClassName="rounded-[20px]"
      as="div"
      className="bg-[var(--color-bg)] h-auto p-2 sm:p-3 lg:p-5 sm:w-[25rem] md:w-[30rem] lg:w-[35rem] xl:w-[36rem] flex flex-col justify-center z-10"
    >
      <img
        src={img}
        alt={title || "Project thumbnail"}
        className="w-[34rem] mr-auto ml-auto rounded-2xl"
      />
      <div className="p-4">
        {title && (
          <h3 className="text-lg text-amber-50 font-semibold">{title}</h3>
        )}
        {description && <p className="text-[#abb8d3]">{description}</p>}
        <div className="flex justify-between mt-4">
          <div className="flex">
            {html && (
              <span className="bg-[var(--color-second)] border-2 rounded-full p-2">
                <img className="w-5" src={htmlIcon} alt="HTML" />
              </span>
            )}
            {css && (
              <span className="bg-[var(--color-second)] border-2 rounded-full p-2">
                <img className="w-5" src={cssIcon} alt="CSS" />
              </span>
            )}
            {javascript && (
              <span className="bg-[var(--color-second)] border-2 rounded-full p-2">
                <img className="w-5" src={jsIcon} alt="JavaScript" />
              </span>
            )}
            {react && (
              <span className="bg-[var(--color-second)] border-2 rounded-full p-2">
                <img className="w-5" src={reactIcon} alt="React" />
              </span>
            )}
            {tailwindcss && (
              <span className="bg-[var(--color-second)] border-2 rounded-full p-2">
                <img className="w-5" src={tailIcon} alt="TailwindCSS" />
              </span>
            )}
          </div>
          {/* icon */}
          <div className="flex gap-3 text-2xl text-teal-50">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
              >
                <FontAwesomeIcon icon={faGlobe} />
              </a>
            )}
          </div>
        </div>
      </div>
    </HoverBorderGradient>
  );
}

// Default props are handled by the interface's optional properties
export default Box;
