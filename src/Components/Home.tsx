import React from "react";
import TypeWritter from "typewriter-effect";
import { ReactComponent as LinkedIn } from "../Images/LinekedIn.svg";
import { ReactComponent as GitHub } from "../Images/GitHub.svg";
import { GIT_HUB_LINK, LINKED_IN_LINK } from "./Constants";

const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col py-5 lg:py-40 px-10 justify-center w-full h-full  lg:px-20 font-poppins "
    >
      <div className="flex flex-col-reverse items-center  lg:items-start lg:flex-row  lg:space-x-16">
        <div className="flex flex-col mt-5  lg:mt-0  items-center lg:items-start space-y-10 ">
          <div className="flex flex-col  w-full text-xl sm:text-3xl items-center lg:items-start">
            <h1>Hi, I am Krishna Arjun</h1>
            <TypeWritter
              options={{ loop: true }}
              onInit={(typeWritter) => {
                typeWritter
                  .typeString("a Software Engineer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("a Front-End Engineer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("a Back-End Engineer")
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
            />
          </div>
          <div className="flex w-full justify-center">
            <p className="flex  text-justify text-sm sm:text-base font-light leading-6 ">
              As a passionate software engineer, I thrive on tackling complex
              challenges and creating innovative solutions that enhance the user
              experience and drive business growth. My expertise in both
              front-end and back-end development enables me to effectively
              collaborate with cross-functional teams and deliver results that
              exceed expectations. I am committed to staying up-to-date with the
              latest trends and technologies in the software engineering
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
          className="w-52 h-52 sm:h-80 sm:w-80  rounded-tl-3xl shadow-lg"
          src={require("../Images/Avatar.jpeg")}
          alt="krishna"
        />
      </div>
    </div>
  );
};

export default Home;
