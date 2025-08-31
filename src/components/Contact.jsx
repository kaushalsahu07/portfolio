import React, { useState } from "react";
import grid from "../assets/grid.svg";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b4fe6c51-e245-436d-8472-49c165d91a60");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact">
      <div className="flex justify-center items-center flex-col w-full overflow-hidden relative pb-10">
        <img
          src={grid}
          alt="grid"
          className="absolute w-full h-full top-0 object-cover"
        />
        {/* contact */}
        <div className="w-full flex justify-center z-10 mt-24 px-2">
          <div className="w-full lg:w-[80%]">
            <div className="text-center mb-8">
              <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
                Get in touch
              </h2>
              <p className="text-white/70 mt-2 text-sm">
                Have a question or want to collaborate? Drop a message below.
              </p>
            </div>

            <div className="max-w-[600px] mx-auto  border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-5 sm:p-8 shadow-[inset_0_0_10px_rgba(255,255,255,0.06)]">
              <form className="space-y-5" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-white/80 mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full rounded-xl bg-white/5 placeholder-white/50 text-white px-4 py-3 border border-white/10 focus:border-white/30 focus:ring-2 focus:ring-blue-500/40 outline-none"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-white/80 mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl bg-white/5 placeholder-white/50 text-white px-4 py-3 border border-white/10 focus:border-white/30 focus:ring-2 focus:ring-blue-500/40 outline-none"
                    />
                  </div>
                </div>
                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-white/80 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Write your message..."
                    className="w-full rounded-xl bg-white/5 placeholder-white/50 text-white px-4 py-3 border border-white/10 focus:border-white/30 focus:ring-2 focus:ring-blue-500/40 outline-none resize-y"
                  />
                </div>

                <div className="pt-2 flex justify-center">
                  <button
                    className="border border-white/30 shadow-[inset_0_0_10px_rgba(255,255,255,0.1)] shadow-white/20 rounded-full 
                    backdrop-blur-md hover:shadow-[0_0_12px_rgba(255,255,255,0.15)] text-white w-[12rem] sm:w-[14rem] h-14 
                    flex items-center justify-center 
                    transition-all duration-300 ease-in-out
                  hover:border-white/50 hover:scale-105 hover:bg-white/5"
                    type="submit"
                  >
                    <span className="flex items-center transition-transform duration-300 ease-in-out hover:transform hover:translate-x-1">
                      Send Message
                      <FontAwesomeIcon
                        className="pl-2 transition-transform duration-300 group-hover:rotate-45"
                        icon={faPaperPlane}
                      />
                    </span>
                  </button>
                </div>
                {/* Result */}
                  <div className="text-amber-50 text-center">{result}</div>
              </form>
            </div>
          </div>
        </div>
        {/* footer */}
        <footer className="w-full flex justify-center items-center z-10 mt-10 px-2">
        <div className="w-full lg:w-[80%] flex sm:flex-row gap-5 justify-between items-center mt-20 flex-col-reverse">
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
        </footer>
      </div>
    </section>
  );
}
