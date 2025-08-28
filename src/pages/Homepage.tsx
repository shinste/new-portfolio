import { useNavigate } from "react-router-dom";
import CircularText from "../components/CircularText";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-[#4758BE] to-[#0B8CAB] h-screen w-full flex items-center justify-center relative overflow-hidden">
      <CircularText />
      <div className="flex flex-col items-center justify-center relative z-10 fade-in">
        <h1 className="text-white font-bold text-[70px] text-center ">
          Hi, I'm <span className="text-[#67E8F9]">Stephen Shin</span>
        </h1>
        <h2 className="text-white mt-4 text-[20px] text-center font-mono">
          Frontend Developer specializing in React + TypeScript
        </h2>

        <div className="flex">
          <button
            onClick={() => navigate("/Experience")}
            className="bg-[#FFFFFF] text-black px-6 py-2 rounded-[20px] mt-6 mr-4 hover:bg-[#38BDF8] transition-colors"
          >
            <p className="text-[#6071EB] text-[20px] font-semibold">
              View My Work
            </p>
          </button>
          <button className="px-6 py-2 rounded-[20px] mt-6 border-1 border-white hover:bg-[#38BDF8] bg-transparent">
            <a href="/resume.pdf" target="_blank">
              <p className="text-white text-[20px] font-semibold">
                View Resume
              </p>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
