import { PROJECT_INFO, Project, techColors } from "../constants";
interface ProjectCardProps {
  projectName: Project;
  animationDelay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  animationDelay,
}) => {
  const projectInfo = PROJECT_INFO[projectName];
  return (
    <div
      className="p-4 rounded-md shadow-sm border-1 border-gray-200 hover:shadow-lg fade-in"
      style={{ animationDelay: `${animationDelay || 0}s` }}
    >
      <div className="flex justify-center">
        <img className="h-[300px] justify-center" src={projectInfo.picture} />
      </div>
      <h2 className="font-semibold">{projectName}</h2>
      <p className="text-sm text-[#B1AECA] font-semibold">
        {projectInfo.projectDescription}
      </p>
      {projectInfo.tech.map((technology, index) => {
        return (
          <span
            key={index}
            className="inline-block text-xs px-2 py-1 rounded-md mr-2 my-2"
            style={{
              backgroundColor: techColors[index].bg,
              color: techColors[index].text,
            }}
          >
            {technology}
          </span>
        );
      })}
      <div className="flex full-width justify-between">
        {projectInfo.link && (
          <a
            href={projectInfo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#6366F1] text-white shadow-sm py-2 w-[48%] inline-block text-center rounded-md hover:bg-[#4F46E5]"
          >
            {projectInfo.projectName === Project.Environmental
              ? "Company"
              : "Live Project"}
          </a>
        )}
        {/* Adding this part with a popup soon */}
        {/* <button
          className={`bg-[#FFFFFF] py-2 ${
            projectInfo.link ? "w-[48%]" : "w-[100%]"
          } border-1 border-gray-200 shadow-sm hover:bg-[#F3F4F6]`}
          title="Coming 08/27/2025"
        >
          View Details
        </button> */}
      </div>
    </div>
  );
};

export default ProjectCard;
