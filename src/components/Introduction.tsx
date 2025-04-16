import Carousel from "./TechDisplay";
import arrow from "../assets/images/arrow.png";

const Introduction = () => {
  return (
    <div className=" font-semibold animate fade-in-animation-delay">
      <h2 className="text-[64px] w-4/5 leading-tight font-mono">
        Crafting Fluid <span className="blue-text">User Experiences</span>
      </h2>
      <div className="gray-text my-10 font-mono">
        <p>Motivated to creating intuitive and engaging interfaces.</p>
        <p>Passionate about empowering users through technology.</p>
      </div>
      <p className="text-[20px] font-mono">
        Specializing in leading tools, always ready to learn the next{" "}
      </p>
      <Carousel />
      {/* <div className="flex"> */}
      {/* <button className=" px-[3%]">
          <p className="text-[20px]">Contact Me</p>
        </button> */}
      <div
        className="cursor-pointer flex group"
        onClick={() => {
          document
            .getElementById("projects-section")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <p className="text-[20px] text-black font-mono">My Work</p>
        <img
          className="w-[20px] h-[20px] self-center ml-2 transition-translate duration-500 ease-out group-hover:translate-x-2 hover:scale-x-120"
          src={arrow}
          alt="arrow"
        />
      </div>

      {/* </div> */}
    </div>
  );
};

export default Introduction;
