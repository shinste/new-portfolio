import { useState } from "react";
import { PROJECT_INFO, Project, techColors } from "../constants";
import ProjectDetail from "./ProjectDetail";

interface ProjectCardProps {
  projectName: Project;
  animationDelay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  animationDelay,
}) => {
  const projectInfo = PROJECT_INFO[projectName];
  const [open, setOpen] = useState(false);

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
        <button
          onClick={() => setOpen(true)}
          className={`bg-[#FFFFFF] py-2 ${
            projectInfo.link ? "w-[48%]" : "w-[100%]"
          } border-1 border-gray-200 shadow-sm hover:bg-[#F3F4F6]`}
        >
          View Details
        </button>
      </div>

      <ProjectDetail isOpen={open} onClose={() => setOpen(false)}>
        <div className="space-y-6 max-h-[80vh] overflow-y-auto">
          <div className="text-center border-b pb-4">
            <div className="flex justify-center mb-4"></div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {projectName}
            </h2>
            <p className="text-lg text-gray-600 italic">{projectInfo.myRole}</p>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
            <h3 className="text-lg font-semibold text-red-800 mb-2">
              🎯 Problem Statement
            </h3>
            <p className="text-red-700 leading-relaxed">
              {projectInfo.problemStatement}
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              📋 Project Overview
            </h3>
            <p className="text-blue-700 leading-relaxed">
              {projectInfo.projectDescription}
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <h3 className="text-lg font-semibold text-green-800 mb-3">
              ✨ Key Features
            </h3>
            <ul className="space-y-2">
              {projectInfo.keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start text-green-700">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
            <h3 className="text-lg font-semibold text-orange-800 mb-2">
              ⚡ Biggest Challenges
            </h3>
            <p className="text-orange-700 leading-relaxed">
              {projectInfo.biggestChallenges}
            </p>
          </div>

          <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
            <h3 className="text-lg font-semibold text-emerald-800 mb-2">
              🎉 Outcome & Impact
            </h3>
            <p className="text-emerald-700 leading-relaxed font-medium">
              {projectInfo.outcome}
            </p>
          </div>

          {projectInfo.link && (
            <div className="text-center pt-4 border-t">
              <a
                href={projectInfo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#6366F1] text-white px-8 py-3 rounded-lg hover:bg-[#4F46E5] transition-colors duration-200 font-semibold text-lg shadow-lg"
              >
                {projectInfo.projectName === Project.Environmental
                  ? "🌍 Visit Company"
                  : "🚀 View Live Project"}
              </a>
            </div>
          )}
        </div>
      </ProjectDetail>
    </div>
  );
};

export default ProjectCard;
