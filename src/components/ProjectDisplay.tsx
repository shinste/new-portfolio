import { useNavigate } from "react-router-dom";

interface ProjectDisplayProps {
  title: string;
  details: string;
  image: string;
}
const ProjectDisplay: React.FC<ProjectDisplayProps> = ({
  title,
  details,
  image,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (title === "Dental Website") {
      window.open("https://www.dentistryintacoma.com/", "_blank");
    } else if (title === "Travel Event Planner") {
      navigate("/traveller/#traveller");
    } else if (title === "Spotify Recommender") {
      navigate("/spotify/#spotify");
    }
  };
  return (
    <div
      onClick={handleClick}
      className="bg-blue pb-4 rounded-[12px] animate fade-in-animation-delay hover:text-gray-100 group max-h-[330px]  cursor-pointer"
    >
      <div className=" overflow-hidden rounded-t-[12px] ">
        <img
          className="rounded-t-[12px] transition-transform duration-500 ease-out group-hover:scale-105"
          src={image}
        />
      </div>
      <div className="p-4">
        <p className="text-[24px] font-semibold group-hover:text-gray-100">
          {title}
        </p>
        <p className="gray-text text-[13px]">{details}</p>
      </div>
    </div>
  );
};

export default ProjectDisplay;
