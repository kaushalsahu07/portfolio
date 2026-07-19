import React from "react";
import "../../index.css";

// Tech stack SVG icons
import htmlIcon from "../../assets/html.svg";
import reactIcon from "../../assets/react.svg";
import tailIcon from "../../assets/tail.svg";
import cssIcon from "../../assets/css.svg";
import jsIcon from "../../assets/js.svg";
import dockerIcon from "../../assets/docker.svg";
import react_queryIcon from "../../assets/react-query.svg";
import tyIcon from "../../assets/typescript.svg";

// FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { HoverBorderGradient } from "./hover-border-gradient";

// Tech stack config — maps prop names to their icon + label
const techStack: Record<string, { icon: string; label: string }> = {
  html: { icon: htmlIcon, label: "HTML" },
  css: { icon: cssIcon, label: "CSS" },
  javascript: { icon: jsIcon, label: "JavaScript" },
  react: { icon: reactIcon, label: "React" },
  type: { icon: tyIcon, label: "TypeScript" },
  reactQuery: { icon: react_queryIcon, label: "React Query" },
  tailwindcss: { icon: tailIcon, label: "Tailwind CSS" },
  docker: { icon: dockerIcon, label: "Docker" },
};

interface BoxProps {
  img: string;
  imgWebp?: string;
  imgAvif?: string;
  title?: string;
  description?: string;
  link?: string;
  github?: string;

  html?: boolean;
  css: boolean;
  javascript: boolean;
  react: boolean;
  tailwindcss: boolean;
  docker?: boolean;
  reactQuery?: boolean;
  type?: boolean;
}

function Box({
  img,
  imgWebp,
  imgAvif,
  title,
  description,
  github,
  link,
  ...techProps
}: BoxProps) {
  // Collect active tech from boolean props
  const activeTech = Object.keys(techProps).filter(
    (key) => techProps[key as keyof typeof techProps] && techStack[key]
  );

  return (
    <HoverBorderGradient
      containerClassName="rounded-[20px]"
      as="div"
      className="bg-[var(--color-bg)] h-auto p-0 sm:w-[25rem] md:w-[30rem] lg:w-[35rem] xl:w-[36rem] flex flex-col justify-center z-10 overflow-hidden"
    >
      {/* Image with overlay gradient */}
      <div className="relative group overflow-hidden">
        <picture>
          {imgAvif && <source srcSet={imgAvif} type="image/avif" />}
          {imgWebp && <source srcSet={imgWebp} type="image/webp" />}
          <img
            src={img}
            alt={title || "Project thumbnail"}
            className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 640px) 95vw, (max-width: 1024px) 80vw, 576px"
          />
        </picture>
        {/* Bottom fade into card body */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
      </div>

      {/* Content */}
      <div className="px-5 pb-5 pt-2 flex flex-col gap-3">
        {/* Title */}
        {title && (
          <h3 className="text-lg text-amber-50 font-semibold tracking-tight">
            {title}
          </h3>
        )}

        {/* Description */}
        {description && (
          <p className="text-sm text-neutral-400 leading-relaxed line-clamp-2">
            {description}
          </p>
        )}

        {/* Footer: tech stack + links */}
        <div className="flex items-center justify-between mt-1">
          {/* Tech stack pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {activeTech.map((key) => (
              <span
                key={key}
                className="flex items-center gap-1 bg-neutral-900 border border-neutral-800 rounded-md px-2 py-1 text-[11px] text-neutral-400 font-medium"
                title={techStack[key].label}
              >
                <img
                  className="w-3.5 h-3.5"
                  src={techStack[key].icon}
                  alt={techStack[key].label}
                />
                <span className="hidden sm:inline">
                  {techStack[key].label}
                </span>
              </span>
            ))}
          </div>

          {/* Action links */}
          <div className="flex items-center gap-2">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-lg border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors duration-300"
                title="View source"
              >
                <FontAwesomeIcon icon={faGithub} className="text-sm" />
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-lg border border-neutral-800 text-neutral-400 hover:text-[var(--color-main)] hover:border-[var(--color-main)] transition-colors duration-300"
                title="Live demo"
              >
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="text-xs"
                />
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
