import { EXPERIENCE_SECTION_PROPS, Company } from "../constants";

interface ExperienceSectionProps {
  company: Company;
  highlighted: boolean;
  animationDelay?: number;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  company,
  highlighted,
  animationDelay = 0,
}) => {
  const experience = EXPERIENCE_SECTION_PROPS[company];
  return (
    <div
      className=" w-full flex items-center justify-center relative z-10"
      id={`${company}-section`}
    >
      <div
        className={`w-full flex items-center justify-center relative z-10 ${
          experience.alignment === "left" ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div
          className={`bg-white flex flex-col  p-4 rounded-lg shadow-lg w-[30%] fade-in ${
            experience.alignment === "left" ? "text-right" : "text-left"
          }`}
          style={{
            scale: highlighted ? 1.05 : 1,
            transition: "transform 3s ease-in-out",
            animationDelay: `${animationDelay}s`,
          }}
        >
          <p className="font-bold">{experience.title}</p>
          <p className="font-semibold" style={{ color: experience.color }}>
            {experience.companyName}
          </p>
          <p className="text-[12px]">{experience.time}</p>
          <ul className="list-disc list-none text-[#5D5F65] ">
            {experience.description.map((item, index) => (
              <li key={index} className="text-[14px] mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center mx-4">
          <div
            className="rounded-full h-[15px] w-[15px] border-2 border-white"
            style={{ backgroundColor: experience.color }}
          />
          <div
            className="w-[2px] h-82"
            style={{ backgroundColor: experience.color }}
          />
        </div>

        <div className="flex items-center justify-center p-6 rounded-lg w-[30%]">
          <img className="h-30" src={experience.picture} />
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
