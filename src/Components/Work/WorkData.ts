import { events } from "../../GA/EVENTS";

export const workData = [
  {
    name: "Engineering Metrics",
    action: events.HEY_CHAT,
    img: "EngMetrics.png",
    paid: true,
    link: "https://www.getaxon.io/pricing",
    description: "Software development analytics tool based on DORA metrics.",
    techStack:
      "React Js | Typescript | Rechart | Tailwind CSS | Node Js | Express Js | MongoDb | GitHub Actions | AWS | Docker",
  },
  {
    name: "OKR",
    action: events.HEY_CHAT,
    img: "OKR.png",
    gitHub: false,
    paid: true,
    link: "https://www.getaxon.io/pricing",
    description:
      "OKR: Align goals, track progress, and drive results efficiently.",
    techStack:
      "React Js | Typescript | Tailwind CSS | Node Js | Express Js | MongoDb | GitHub Actions | AWS | Docker",
  },
  {
    name: "Team Member Activity",
    action: events.HEY_CHAT,
    img: "IndividualMetrics.png",
    paid: true,
    gitHub: false,
    link: "https://www.getaxon.io/pricing",
    description: "Provides individual activity insights and metrics.",
    techStack:
      "React Js | Typescript | Tailwind CSS | Node Js | Express Js| MongoDb | GitHub Actions | AWS | Docker",
  },
  {
    name: "Diversio",
    action: events.DIVERSIO,
    img: "Diversio.svg",
    paid: false,
    link: "https://diversio.krishnaarjun.tech",
    githubLink: "https://github.com/Arjunkrishna17?tab=repositories",
    description: "Diversio is an e-commerce app",
    techStack:
      "React.Js | Typescript | Tailwind CSS | Node.Js | Express.Js | MongoDb | AWS | Docker | Stripe API's | Netlify",
  },
  {
    name: "Hey Chat",
    action: events.HEY_CHAT,
    img: "HeyChat.svg",
    paid: false,
    link: "",
    description: "Hey Chat is a personal chat app",
    techStack: "Next.Js | Typescript | Tailwind CSS | MongoDb | AWS | Docker",
  },
];
