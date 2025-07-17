import onboarding from "../assets/images/onboarding.png";
import homepage from "../assets/images/homepage.png";
import quiz from "../assets/images/quiz.png";
import refill from "../assets/images/refill.png";
import onesky from "../assets/images/onesky.webp";
import { useEffect, useState } from "react";

const CurrentRole = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, []);
  return (
    <div id="current-section" className="font-mono mt-20">
      <h2 className="text-[64px] font-bold animate fade-in-animation">
        Current <span className="blue-text">Project/Position</span>
      </h2>
      <div className="flex w-4/5 items-center">
        <div className="animate fade-in-animatio">
          <h3 className="text-[32px] font-semibold">Frontend Developer</h3>
          <h4 className="text-[20px] mt-2">One Sky Collective</h4>
          <p className="gray-text my-10 w-3/4">
            One Sky Collective is an early-stage startup company that is
            committed to encouraging social and environmental changes. I am
            apart of the team as a{" "}
            <span className="purple-text">Frontend Developer</span>, currently
            working on their mobile application.
          </p>
        </div>
        <div className="relative w-[500px] h-[300px] flex items-center justify-center">
          <img className="h-auto w-[100px] z-10" src={onesky} />
          <div className="absolute w-full h-full animate-spin-smooth">
            <svg viewBox="0 0 600 600" className="w-full h-full">
              <defs>
                <path
                  id="circlePath"
                  d="
                    M 300, 300
                    m -250, 0
                    a 250,250 0 1,1 500,0
                    a 250,250 0 1,1 -500,0"
                />
              </defs>
              <text fill="#4817C0" fontSize="36" fontFamily="monospace">
                <textPath href="#circlePath" startOffset="0%" textLength="1570">
                  We all call planet earth home • We all call planet earth home
                  • We all call planet earth home •
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-5/6 animate fade-right-animation">
        <div className="flex h-[600px] justify-between w-full">
          <div className="flex">
            <img className="phone-img" src={onboarding} />
            <div className="flex flex-col mt-5 font-semibold">
              <p className="text-[15px]">utilizing</p>
              <p className="text-[32px]">React-Native</p>
              <p>for performance</p>
            </div>
          </div>
          <div className="flex self-end animate fade-left-animation">
            <div className="flex flex-col mt-5 text-right font-semibold">
              <p className="text-[15px]">translating</p>
              <p className="text-[32px]">Figma Designs</p>
              <p>into intuitive interfaces</p>
            </div>
            <img className="phone-img" src={homepage} />
          </div>
        </div>
        <div className="flex h-[600px] justify-between w-full">
          <div className="flex animate fade-right-animation">
            <img className="phone-img" src={quiz} />
            <div className="flex flex-col mt-5 font-semibold">
              <p className="text-[32px]">Animations</p>
              <p className="text-[15px]">for interactive experience</p>
            </div>
          </div>
          <div className="flex self-end animate fade-left-animation">
            <div className="flex flex-col mt-5 text-right font-semibold">
              <p className="text-[15px]">integrating</p>
              <p className="text-[32px]">API Data</p>
              <p>gracefully</p>
            </div>
            <img className="phone-img" src={refill} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentRole;
