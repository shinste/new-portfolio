import { useNavigate } from "react-router-dom";
import arrow from "../assets/images/arrow.png";
import traveller from "../assets/images/traveller-application.png";
import travellerCalendar from "../assets/images/traveller_calendar.png";
import travellerItinerary from "../assets/images/traveller_itinerary.png";
import ProjectDisplay from "./ProjectDisplay";
import pfd from "../assets/images/pfd-application.png";
import spotify from "../assets/images/spotify-recommender.png";
import oneskyPhone from "../assets/images/homepage.png";
import { useEffect } from "react";

const Traveller = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <div id="traveller" className="w-3/5 font-mono">
      <div onClick={() => navigate("/")} className="flex cursor-pointer group">
        <img
          className="rotate-180 w-[20px] h-[20px] self-center mr-2 transition-translate duration-500 ease-out group-hover:-translate-x-2 hover:scale-x-120"
          src={arrow}
          alt="arrow"
        />
        <p>Go Back</p>
      </div>
      <img
        src={traveller}
        className="w-2/3 my-5 rounded-[25px]"
        alt="screenshot of webpage"
      />
      <h2 className="text-[40px] w-4/5 leading-tight ">Travel Event Planner</h2>
      <p className="gray-text">React + Firebase Event Planner</p>
      <p className="w-3/4 my-10">
        This project streamlines the planning and organization of travel events.
        It leverages Google Firebase's Firestore database and OAuth for seamless
        user authentication and registration. Users can quickly create, edit,
        and manage events through an intuitive calendar interface. The app
        supports detailed trip planning with integrated itineraries and to-do
        lists, all visually represented to enhance clarity and organization
        throughout the travel planning process.
      </p>
      <div className="flex flex-col">
        <img
          className="w-3/5 my-5 rounded-[25px]"
          src={travellerCalendar}
          alt="picture of webpage"
        />

        <img
          className="w-3/5 mt-5 mb-10 rounded-[25px]"
          src={travellerItinerary}
          alt="picture of webpage"
        />
        <a href="https://travellerapplication.netlify.app/" target="_blank">
          <button className="px-[1%] w-fit">
            <p className="text-[20px]">Visit Application</p>
          </button>
        </a>

        <h2 className="text-[40px] w-4/5 leading-tight mt-30 purple-text">
          More Projects
        </h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 p-20 pl-0">
          <div
            onClick={() => {
              navigate("/#current-section");
            }}
            className="bg-blue rounded-[12px] animate fade-in-animation-delay hover:text-gray-100 group max-h-[330px] flex cursor-pointer"
          >
            <div className=" overflow-hidden rounded-l-[12px] p-5 self-center bg-purple h-full w-fit">
              <img
                className="h-[250px] w-auto transition-transform duration-500 ease-out group-hover:scale-105"
                src={oneskyPhone}
              />
            </div>
            <div className="p-4 w-3/5">
              <p className="text-[30px] font-semibold group-hover:text-gray-100">
                Frontend Developer
              </p>
              <p className="gray-text text-[13px]">
                Working at One Sky Collective has given me hands-on experience
                collaborating within a large, cross-functional team. Our
                development team consists of about 10 engineers, while the UX/UI
                team includes 7 designers. We rely on tools like GitHub, Slack,
                and Jira to stay aligned, communicate efficiently, and move
                collectively toward our founder’s vision.
              </p>
            </div>
          </div>
          <ProjectDisplay
            title="Dental Website"
            details="Live NextJS + React website for dental company"
            image={pfd}
          />

          <ProjectDisplay
            title="Spotify Recommender"
            details="React + Spotify APIs to recommend and add songs"
            image={spotify}
          />
        </div>
      </div>
    </div>
  );
};

export default Traveller;
