import { events } from "../../GA/EVENTS";

export const workData = [
  {
    id: 1,
    name: "Engineering Metrics",
    action: events.ENG_METRICS,
    img: "EngMetrics.png",
    paid: true,
    link: "https://www.getaxon.io/pricing",
    description:
      "Part of Axon, a software development analytics tool based on DORA metrics.",
    techStack:
      "React Js | Typescript | Rechart | Tailwind CSS | Node Js | Express Js | MongoDb | GitHub Actions | AWS | Docker",
  },
  {
    id: 2,
    name: "OKR",
    action: events.OKR,
    img: "OKR.png",
    gitHub: false,
    paid: true,
    link: "https://www.getaxon.io/pricing",
    description:
      "Part of Axon, OKR: Align goals, track progress, and drive results efficiently.",
    techStack:
      "React Js | Typescript | Tailwind CSS | Node Js | Express Js | MongoDb | GitHub Actions | AWS | Docker",
  },
  {
    id: 3,
    name: "Team Member Activity",
    action: events.INDIVIDUAL_METRICS,
    img: "IndividualMetrics.png",
    paid: true,
    gitHub: false,
    link: "https://www.getaxon.io/pricing",
    description:
      "Part of Axon, provides individual activity insights and metrics.",
    techStack:
      "React Js | Typescript | Tailwind CSS | Node Js | Express Js| MongoDb | GitHub Actions | AWS | Docker",
  },
  {
    id: 4,
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
    id: 5,
    name: "Hey Chat",
    action: events.HEY_CHAT,
    img: "HeyChat.svg",
    paid: false,
    link: "",
    description: "Hey Chat is a personal chat app",
    techStack: "Next.Js | Typescript | Tailwind CSS | MongoDb | AWS | Docker",
  },
];
