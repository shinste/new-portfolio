import pfd from "../assets/images/pfd-application.png";
import travel from "../assets/images/traveller-application.png";
import spotify from "../assets/images/spotify-recommender.png";
import oneskyPhone from "../assets/images/homepage.png";
import ProjectDisplay from "./ProjectDisplay";

const Projects = () => {
  return (
    <div id="projects-section" className="font-mono mt-20">
      <h2 className="text-[64px] font-bold animate fade-in-animation">
        Recent <span className="blue-text">Projects</span> and{" "}
        <span className="blue-text">Experience</span>
      </h2>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
        <div
          onClick={() => {
            document
              .getElementById("current-section")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-blue rounded-[12px] animate fade-in-animation-delay hover:text-gray-100 group max-h-[330px] flex cursor-pointer"
        >
          <div className="overflow-hidden rounded-l-[12px] p-[4%] self-center bg-purple h-full w-[40%]">
            <img
              className="h-[250px] w-auto transition-transform duration-500 ease-out group-hover:scale-105"
              src={oneskyPhone}
            />
          </div>
          <div className="p-4 pr-4 w-fit overflow-x-hidden">
            <p className="text-[30px] font-semibold group-hover:text-gray-100">
              Frontend Developer
            </p>
            <p className="gray-text text-[13px]">
              Working at One Sky Collective has given me hands-on experience
              collaborating within a large, cross-functional team. Our
              development team consists of about 10 engineers, while the UX/UI
              team includes 7 designers.
            </p>
          </div>
        </div>
        <ProjectDisplay
          title="Dental Website"
          details="Live NextJS + React website for dental company"
          image={pfd}
        />
        <ProjectDisplay
          title="Travel Event Planner"
          details="React + Firebase Event Planner"
          image={travel}
        />
        <ProjectDisplay
          title="Spotify Recommender"
          details="React + Spotify APIs to recommend and add songs"
          image={spotify}
        />
      </div>
    </div>
  );
};

export default Projects;
