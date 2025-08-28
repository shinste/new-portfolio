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
    problemStatement: string;
    myRole: string;
    keyFeatures: string[];
    biggestChallenges: string;
    outcome: string;
  }
> = {
  [Project.Environmental]: {
    projectName: "Environmental App",
    projectDescription:
      "An app that helps users reduce their carbon footprint through personalized recommendations and challenges.",
    picture: environmentalApp,
    link: "https://oneskycollective.org/",
    tech: ["React Native", "Redux", "Node.js"],
    problemStatement:
      "Users need a fun and engaging way to reduce their carbon footprint.",
    myRole: "Lead Frontend Developer",
    keyFeatures: [
      "Points awarded for activities such as completing quizzes, logging water refills, taking eco-friendly travel methods",
      "Challenges to encourage users to adopt sustainable habits",
      "Social sharing to promote eco-friendly activities",
      "E-commerce integration to purchase eco-friendly products using points",
    ],
    biggestChallenges:
      "Learning React Native from scratch and implementing complex state management with Redux.",
    outcome:
      "Planning MVP launch in late 2025 with thousands of users being referred by environmental partners. Learning to lead a frontend team and manage project timelines effectively.",
  },
  [Project.Pacific]: {
    projectName: "Company Website",
    projectDescription:
      "A responsive website for a dental practice, featuring google reviews, google maps, a contact form, and patient testimonials.",
    picture: pacificScreen,
    link: "https://dentistryintacoma.com/",
    tech: ["Next.js", "TypeScript", "React"],
    problemStatement:
      "A dental practice needed a modern, SEO-optimized website to increase patient acquisition and improve online presence in a competitive market.",
    myRole: "Web Developer",
    keyFeatures: [
      "Server-side rendering (SSR) and static site generation (SSG) for optimal performance and SEO",
      "Dynamic Google Reviews integration with real-time API fetching",
      "Interactive Google Maps integration with custom markers and practice information",
      "Responsive contact form with email validation and spam protection",
      "JSON-LD structured data implementation for enhanced search visibility",
    ],
    biggestChallenges:
      "Implementing complex SEO optimizations while maintaining fast load times, and integrating multiple third-party APIs (Google Reviews, Maps) with proper error handling and fallbacks.",
    outcome:
      "Delivered a high-performance website that increased monthly contact form submissions by 58% and improved Google PageSpeed scores to 95+. Site now ranks on first page for local dental searches.",
  },
  [Project.Spotify]: {
    projectName: "Spotify Recommender",
    projectDescription:
      "A web application that personalized music recommendations based on given song and artist preferences.",
    picture: spotifyScreen,
    tech: ["React", "TypeScript", "Spotify API"],
    problemStatement:
      "Music discovery on streaming platforms can be overwhelming and generic. Users needed a more personalized way to find new music based on their specific taste preferences.",
    myRole: "Developer",
    keyFeatures: [
      "OAuth 2.0 authentication flow with Spotify for secure user access",
      "Real-time search functionality with debounced API calls for performance",
      "Interactive playlist creation and management with drag-and-drop interface",
      "Audio preview integration with custom media player controls",
    ],
    biggestChallenges:
      "Managing complex OAuth authentication flows, handling rate-limited API calls efficiently, and creating a smooth user experience with asynchronous data fetching and error handling.",
    outcome:
      "Built a fully functional music recommendation system that processes user preferences and generates personalized playlists. Discovered debouncing techniques to optimize API usage and enhance performance.",
  },
  [Project.Event]: {
    projectName: "Event Planning Application",
    projectDescription:
      "An application that allows users to plan and manage events, including guest lists, budgets, and schedules.",
    picture: collapScreen,
    tech: ["REST APIs", "Django", "PostGreSQL"],
    problemStatement:
      "Event organizers struggled with fragmented tools for managing different aspects of events, leading to inefficient planning and poor coordination among team members.",
    myRole: "Full-Stack Developer",
    keyFeatures: [
      "Comprehensive event dashboard with real-time updates and notifications",
      "Dynamic budget calculator with expense categorization and cost tracking",
      "Interactive scheduling system with conflict detection and time zone support",
      "Role-based access control for team collaboration and permission management",
      "RESTful API architecture with comprehensive documentation and testing",
    ],
    biggestChallenges:
      "Designing a scalable database schema to handle complex relationships between events, users, and resources, while ensuring data consistency and implementing efficient query optimization for large datasets.",
    outcome:
      "Developed a comprehensive full stack event management platform that streamlined planning workflows. Exposure to backend development and database design principles.",
  },
  [Project.Travel]: {
    projectName: "Travel Event Application",
    projectDescription:
      "A platform for organizing group travel events, enabling users to coordinate itineraries, accommodations, and activities.",
    picture: travellerScreen,
    tech: ["React", "TypeScript", "TailwindCSS"],
    problemStatement:
      "Group travel coordination was chaotic with scattered communication across multiple platforms, leading to confusion, missed bookings, and frustrated travelers.",
    myRole: "Developer",
    keyFeatures: [
      "Collaborative itinerary builder with real-time synchronization across all group members",
      "Time and date recommendation engine based on group preferences and location data",
      "OAuth google authentication for secure and seamless user access",
    ],
    biggestChallenges:
      "Implementing real-time collaboration features with conflict resolution, managing complex state synchronization across multiple users, and ensuring optimal performance with large datasets and map integrations.",
    outcome:
      "Created an intuitive travel coordination platform that advanced my skills in React and TypeScript.",
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
