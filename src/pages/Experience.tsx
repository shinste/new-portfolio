import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ExperienceSection from "../components/ExperienceSection";
import { Company } from "../constants";

const Experiences = () => {
  const [highlighted, sethighlighted] = useState<Company>();
  useEffect(() => {
    const scrollIntoView = () => {
      document
        .getElementById(highlighted + "-section")
        ?.scrollIntoView({ behavior: "smooth" });
    };
    if (highlighted) {
      scrollIntoView();
    }
  }, [highlighted]);

  const handleHighlight = (company: Company) => {
    if (highlighted === company) {
      sethighlighted(undefined);
    } else {
      sethighlighted(company);
    }
  };
  return (
    <div className="bg-[#F9FAFB] w-full pb-3">
      <NavBar currentPage="experience" />
      <div className="text-center w-full py-[3%]">
        <h2 className="text-[35px] font-semibold">Experience</h2>
        <p className="w-half text-[#5D5F65] font-semibold">
          My journey as a frontend developer, building innovative solutions and{" "}
          <br />
          growing with amazing teams
        </p>
      </div>
      <div className="flex items-center justify-center space-x-2 mb-10">
        <div
          onClick={() => handleHighlight(Company.OneSky)}
          className="px-2 flex bg-[#6366F1] text-white py-1 text-[12px] font-bold rounded-[7px] cursor-pointer"
        >
          <p>One Sky Collective</p>
        </div>
        <div
          onClick={() => handleHighlight(Company.GBCS)}
          className="px-2 flex bg-[#8B5CF6] text-white py-1 text-[12px] font-bold rounded-[7px] cursor-pointer"
        >
          <p>GBCS Group</p>
        </div>
        <div
          onClick={() => handleHighlight(Company.Pacific)}
          className="px-2 flex bg-[#06B6D4] text-white py-1 text-[12px] font-bold rounded-[7px] cursor-pointer"
        >
          <p>Pacific Family Dentistry</p>
        </div>
      </div>
      <ExperienceSection
        company={Company.OneSky}
        highlighted={highlighted === Company.OneSky}
        animationDelay={0.2}
      />
      <ExperienceSection
        company={Company.GBCS}
        highlighted={highlighted === Company.GBCS}
        animationDelay={0.4}
      />
      <ExperienceSection
        company={Company.Pacific}
        highlighted={highlighted === Company.Pacific}
        animationDelay={0.6}
      />
    </div>
  );
};
export default Experiences;
