import React from "react";

import { ReactComponent as LinkedIn } from "../Images/LinekedIn.svg";
import { ReactComponent as GitHub } from "../Images/GitHub.svg";
import { GIT_HUB_LINK, LINKED_IN_LINK } from "./Constants";

const sillsImagePath = [
  "NextJs.svg",
  "React.svg",
  "Typescript.svg",
  "JavaScript.svg",
  "Tailwindcss.svg",
  "HTML.svg",
  "CSS.svg",
  "NodeJs.svg",
  "ExpressJs.svg",
  "MongoDB.svg",
  "AWS.svg",
  "Docker.svg",
  "Git.svg",
  "GitHub.svg",
  "GitHubActions.svg",
  "Jira.svg",
];

const Home = () => {
  return (
    <div id="home" className="py-5 lg:py-20 lg:px-20 px-10 space-y-16">
      <div className="grow    justify-center w-full  font-poppins ">
        <div className="flex flex-col-reverse h-full items-center  lg:items-start lg:flex-row  lg:space-x-16 ">
          <div className="flex flex-col mt-5  lg:mt-0  items-center lg:items-start space-y-10 ">
            <div className="flex flex-col  w-full text-xl lg:text-3xl items-center lg:items-start font-bold opacity-70">
              <div className="flex flex-col space-y-2">
                <h1>Hi, I am Krishna Arjun</h1>
                <h4 className="text-lg">Founding Engineer @ Praximax</h4>
              </div>
            </div>
            <div className="flex w-full justify-center">
              <p className="flex  text-justify text-sm sm:text-base font-light leading-6 ">
                As a passionate software engineer, I thrive on tackling complex
                challenges and creating innovative solutions that enhance the
                user experience and drive business growth. My expertise in both
                front-end and back-end development enables me to effectively
                collaborate with cross-functional teams and deliver results that
                exceed expectations. I am committed to staying up-to-date with
                the latest trends and technologies in the software engineering
                industry, continuously improving my skills to enhance my
                performance and deliver exceptional value to my clients.
              </p>
            </div>

            <div className="flex space-x-5 ">
              <a
                href={LINKED_IN_LINK}
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition"
              >
                <LinkedIn className="w-10 h-10" />
              </a>
              <a
                href={GIT_HUB_LINK}
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition"
              >
                <GitHub className="w-10 h-10" />
              </a>
            </div>
          </div>
          <img
            className="w-52 h-52 lg:h-80 lg:w-80  rounded-tl-3xl shadow-lg"
            src={require("../Images/Avatar.jpeg")}
            alt="krishna"
          />
        </div>
      </div>

      <div className="flex flex-col space-y-5">
        <h1 className="font-bold text-lg opacity-70">SKILLS</h1>
        <div className="flex flex-wrap gap-5 items-center">
          {sillsImagePath.map((path) => (
            <img
              key={path}
              src={require("../Images/" + path)}
              alt="skills"
              className="w-12 h-12"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
