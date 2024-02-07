import React from "react";

import { ReactComponent as LinkedIn } from "../Images/LinekedIn.svg";
import { ReactComponent as GitHub } from "../Images/GitHub.svg";
import { ReactComponent as Twitter } from "../Images/Twitter.svg";
import { GIT_HUB_LINK, LINKED_IN_LINK, TWITTER_LINK } from "./Constants";
import CustomEvent from "../GA/CustomEvent";
import { events } from "../GA/EVENTS";

const Home = () => {
  return (
    <div id="home" className="py-5 lg:py-36 lg:px-20 px-10 space-y-16 ">
      <div className=" justify-center w-full  font-poppins ">
        <div className="flex flex-col-reverse relative h-full items-center justify-center lg:flex-row space-x-5 ">
          <div className="flex lg:flex-col lg:mr-8 2xl:absolute left-6 top-12 lg:border items-center justify-center space-x-8 lg:space-x-0 lg:space-y-10 lg:bg-white px-2 py-5 lg:shadow-lg mt-8 lg:mt-0">
            <a
              onClick={() =>
                CustomEvent(events.LINKED_IN, "social media", "linked in")
              }
              href={LINKED_IN_LINK}
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <LinkedIn className="w-8 h-8" />
            </a>
            <a
              onClick={() =>
                CustomEvent(events.GIT_HUB, "social media", "git hub")
              }
              href={GIT_HUB_LINK}
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <GitHub className="w-8 h-8" />
            </a>
            <a
              onClick={() =>
                CustomEvent(events.TWITTER, "social media", "twitter")
              }
              href={TWITTER_LINK}
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
          <div className="flex flex-col mt-5   lg:mt-0  items-center lg:items-start space-y-10  md:w-[40rem]">
            <div className="flex flex-col items-center lg:items-start font-bold opacity-70">
              <div className="flex flex-col space-y-2">
                <h1 className="text-center lg:text-start text-xl lg:text-3xl">
                  Hi, I am Krishnadas R (Krishna Arjun)
                </h1>
                <h4 className="text-sm lg:text-xl opacity-80">
                  Founding Software Engineer @ Praximax
                </h4>
              </div>
            </div>
            <div className="flex w-full justify-center">
              <p className="flex text-sm sm:text-base font-light leading-6 ">
                As a professional software engineer, I specialize in
                constructing products based on fundamental first principles. My
                expertise lies in crafting robust architectures and developing
                user-friendly software solutions.
              </p>
            </div>

            <a
              onClick={() => CustomEvent(events.CV_DOWNLOAD, "cv", "")}
              href="https://diversio-product-images.s3.amazonaws.com/CV/Krishnadas+R.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex px-5 py-2 outline outline-1 outline-gray-500  hover:text-white hover:bg-black font-semibold rounded-lg"
            >
              Download CV
            </a>
          </div>
          <img
            className="w-52 h-52 lg:h-80 lg:w-80  rounded-tl-3xl shadow-lg"
            src={require("../Images/Avatar.jpeg")}
            alt="krishna"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
