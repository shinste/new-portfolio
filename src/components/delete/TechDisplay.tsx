import reactImg from "../assets/images/react.webp";
import typescript from "../assets/images/typescript.webp";
import figma from "../assets/images/figma.webp";
import aws from "../assets/images/aws.webp";
import firebase from "../assets/images/firebase.webp";
import nextjs from "../assets/images/nextjs.png";
import github from "../assets/images/github.webp";
import jira from "../assets/images/jira.png";

const TechDisplay = () => {
  const allTech = [
    reactImg,
    typescript,
    nextjs,
    github,
    figma,
    jira,
    aws,
    firebase,
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center my-8 w-fit">
      {allTech.map((image, index) => {
        let condition = index % 2 === 0;
        if (index > 3) {
          condition = !condition;
        }
        return (
          <div
            key={index}
            className={`w-[150px] h-[150px] p-5 rounded-[12px] ${
              condition ? "bg-light-blue" : "bg-white"
            }`}
          >
            <img
              className={`w-full h-full object-contain flicker-animation ${
                condition && "flicker-animation-delay"
              }`}
              src={image}
              alt={`tech-${index}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TechDisplay;
