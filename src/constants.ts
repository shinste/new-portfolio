import oneSky from "../src/assets/images/onesky.webp";
import gbcs from "../src/assets/images/gbcsGroup.png";
import pacific from "../src/assets/images/pacificFamilyDentistry.png";
import environmentalApp from "../src/assets/images/OneSkyScreen.png";
import pacificScreen from "../src/assets/images/PacificScreen.png";
import spotifyScreen from "../src/assets/images/SpotifyScreen.png";
import travellerScreen from "../src/assets/images/TravellerScreen.png";
import collapScreen from "../src/assets/images/Collap.png";

export enum Company {
  OneSky = "OneSkyCollective",
  GBCS = "GBCSGroup",
  Pacific = "PacificFamilyDentistry",
}

export enum Project {
  Environmental = "Environmental App",
  Pacific = "Company Website",
  Spotify = "Spotify Recommender",
  Event = "Event Planning Application",
  Travel = "Travel Event Application",
}

export interface ExperienceDetails {
  title: string;
  companyName: string;
  alignment?: "left" | "right";
  time: string;
  description: string[];
  color: string;
  picture: string;
}

export const EXPERIENCE_SECTION_PROPS: Record<Company, ExperienceDetails> = {
  [Company.OneSky]: {
    title: "Frontend Lead Developer",
    companyName: "One Sky Collective",
    alignment: "left",
    time: "Dec 2024 - Present",
    color: "#6366F1",
    picture: oneSky,
    description: [
      "Led frontend development for responsive web and mobile applications using React/React-Native, Next.js, and TypeScript.",
      "Implemented modern state management with Redux Toolkit",
      "Collaborated with design team to create user-friendly interfaces",
      "Integrated Restful APIs and GraphQL for data fetching",
    ],
  },
  [Company.GBCS]: {
    title: "Frontend Developer Intern",
    companyName: "GBCS Group",
    alignment: "right",
    time: "July 2025 - Present",
    color: "#8B5CF6",
    picture: gbcs,
    description: [
      "Contributed to the development of internal web platforms and tools using React, TypeScript, and Next.js.",
      "Engaged in weekly team meetings providing updates on project progress and challenges.",
      "Worked around cloud infrastructure and CI/CD pipelines to ensure smooth deployment using tools like Azure DevOps and GitHub Actions.",
      "Launched production-ready features and enhancements, improving user experience and performance.",
    ],
  },
  [Company.Pacific]: {
    title: "Frontend Developer",
    companyName: "Pacific Family Dentistry",
    alignment: "left",
    time: "Jan 2024 - Dec 2024",
    color: "#06B6D4",
    picture: pacific,
    description: [
      "Developed and hosted high-traffic dental website that submitted 58% more contact forms each month.",
      "Leveraged Next.js tools such as SSR and SSG for optimal performance.",
      "Implemented SEO best practices such as dynamic meta tags, semantic HTML, and JSON-LD structured data.",
      "Ensured cross-browser compatibility with modern CSS techniques.",
    ],
  },
};

export const PROJECT_INFO: Record<
  Project,
  {
    projectName: string;
    projectDescription: string;
    picture: string;
    tech: string[];
    details?: string;
    link?: string;
  }
> = {
  [Project.Environmental]: {
    projectName: "Environmental App",
    projectDescription:
      "An app that helps users reduce their carbon footprint through personalized recommendations and challenges.",
    picture: environmentalApp,
    link: "https://oneskycollective.org/",
    tech: ["React Native", "Redux", "Node.js"],
  },
  [Project.Pacific]: {
    projectName: "Company Website",
    projectDescription:
      "A responsive website for a dental practice, featuring google reviews, google maps, a contact form, and patient testimonials.",
    picture: pacificScreen,
    link: "https://dentistryintacoma.com/",
    tech: ["Next.js", "TypeScript", "React"],
  },
  [Project.Spotify]: {
    projectName: "Spotify Recommender",
    projectDescription:
      "A web application that personalized music recommendations based on given song and artist preferences.",
    picture: spotifyScreen,
    tech: ["React", "TypeScript", "Spotify API"],
  },
  [Project.Event]: {
    projectName: "Event Planning Application",
    projectDescription:
      "An application that allows users to plan and manage events, including guest lists, budgets, and schedules.",
    picture: collapScreen,
    tech: ["REST APIs", "Django", "PostGreSQL"],
  },
  [Project.Travel]: {
    projectName: "Travel Event Application",
    projectDescription:
      "A platform for organizing group travel events, enabling users to coordinate itineraries, accommodations, and activities.",
    picture: travellerScreen,
    tech: ["React", "TypeScript", "TailwindCSS"],
  },
};

export const techColors = [
  {
    bg: "#DBEAFE",
    text: "#607CD7",
  },
  {
    bg: "#DCFCE7",
    text: "#3C8E7A",
  },
  {
    bg: "#F3E8FF",
    text: "#8154B3",
  },
];
