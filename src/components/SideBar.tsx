import Stephen from "../assets/images/selfie.webp";
import linkedIn from "../assets/images/linkedIn.png";
import mail from "../assets/images/email.png";
import github from "../assets/images/github.png";
import useIntersectionAnimation from "../hooks/useIntersectionAnimation";
import { useEffect, useState } from "react";

const SideBar = () => {
  useIntersectionAnimation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`w-2/5 animate ${
        mounted ? "fade-in-animation in-view" : "not-mounted"
      } `}
    >
      <div className="font-mono top-20 lg:mt-5 sticky min-w-[200px] w-2/5 side-bar rounded-[10px] light-blue-border px-8 py-5">
        <img
          src={Stephen}
          alt="Picture of Stephen"
          className="min-w-[150px] h-auto rounded-xl"
        />
        <h3 className="text-[32px] text-center">Stephen Shin</h3>
        <h4 className="gray-text text-[20px] text-center">
          Frontend • Backend
        </h4>
        <div className="flex justify-between w-full px-5 mt-10">
          <a
            href="https://www.linkedin.com/in/stephen-shin-680bb0201/"
            target="_blank"
          >
            <img className="h-[30px]" src={linkedIn} />
          </a>

          <img
            className="h-[30px] cursor-pointer"
            onClick={() => {
              window.location.href = "mailto:stephenshin1@hotmail.com";
            }}
            src={mail}
          />
          <a href="https://github.com/shinste?tab=repositories" target="_blank">
            <img className="h-[30px]" src={github} />
          </a>
        </div>
        {/* <button className="px-[15%] py-[1%]">
          <p className="text-[20px]">Contact Me</p>
        </button> */}
      </div>
    </div>
  );
};

export default SideBar;
