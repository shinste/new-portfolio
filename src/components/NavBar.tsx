import { useNavigate } from "react-router-dom";

interface NavBarProps {
  currentPage: string;
}
const NavBar: React.FC<NavBarProps> = ({ currentPage }) => {
  const navigate = useNavigate();
  return (
    <header className="bg-white py-4 px-[10%] w-full flex justify-between">
      <p className="text-[#6071EB] font-semibold text-[25px] font-mono">
        Stephen Shin
      </p>
      <div className="flex space-x-6 font-semibold text-[20px]">
        <button
          className="hover:text-[#6071EB] bg-transparent"
          onClick={() => {
            navigate("/");
          }}
        >
          <p>Home</p>
        </button>
        <button
          className={`hover:text-[#6071EB] bg-transparent ${
            currentPage === "experience" ? "text-[#6071EB]" : ""
          }`}
          onClick={() => {
            navigate("/experience");
          }}
          disabled={currentPage === "experience" ? true : false}
        >
          <p>Experience</p>
        </button>
        <button
          className={`hover:text-[#6071EB] bg-transparent ${
            currentPage === "projects" ? "text-[#6071EB]" : ""
          }`}
          onClick={() => {
            navigate("/projects");
          }}
          disabled={currentPage === "projects" ? true : false}
        >
          <p>Projects</p>
        </button>
        <button
          className={`hover:text-[#6071EB] bg-transparent ${
            currentPage === "contact" ? "text-[#6071EB]" : ""
          }`}
          onClick={() => {
            navigate("/contact");
          }}
        >
          <p>Contact</p>
        </button>
      </div>
    </header>
  );
};
export default NavBar;
