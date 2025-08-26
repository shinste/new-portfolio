import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import { Project } from "../constants";
const Projects = () => {
  return (
    <div className=" w-full pb-3">
      <NavBar currentPage="projects" />
      <div className="text-center w-full py-[3%]">
        <h2 className="text-[35px] font-semibold">Projects</h2>
        <p className="w-half text-[#5D5F65] font-semibold">
          Bringing ideas to life through code
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 px-[3%] ">
        <ProjectCard projectName={Project.Environmental} />
        <ProjectCard projectName={Project.Pacific} animationDelay={0.2} />
        <ProjectCard projectName={Project.Spotify} animationDelay={0.4} />
        <ProjectCard projectName={Project.Event} animationDelay={0.6} />
        <ProjectCard projectName={Project.Travel} animationDelay={0.8} />
      </div>
    </div>
  );
};

export default Projects;
