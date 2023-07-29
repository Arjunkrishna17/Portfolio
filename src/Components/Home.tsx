import React from "react";
import TypeWritter from "typewriter-effect";
import { ReactComponent as LinkedIn } from "./Images/LinekedIn.svg";
import { ReactComponent as GitHub } from "./Images/GitHub.svg";

const Home = () => {
  return (
    <div id="home" className="flex flex-col w-full h-full py-20 font-poppins items-center px-44">
      <div className="flex mt-16 w-full justify-between space-x-20 items-center">
        <div className="flex flex-col  text-3xl font-bold space-y-10">
          <div className="opacity-60">
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

          <p className="w-[700px] text-base font-thin leading-6">
            As a passionate software engineer, I thrive on tackling complex
            challenges and creating innovative solutions that enhance the user
            experience and drive business growth. My expertise in both front-end
            and back-end development enables me to effectively collaborate with
            cross-functional teams and deliver results that exceed expectations.
            I am committed to staying up-to-date with the latest trends and
            technologies in the software engineering industry, continuously
            improving my skills to enhance my performance and deliver
            exceptional value to my clients.
          </p>
          <div className="flex space-x-5">
            <button className="hover:scale-110 transition">
              <LinkedIn className="w-10 h-10" />
            </button>
            <button className="hover:scale-110 transition">
              <GitHub className="w-10 h-10" />
            </button>
          </div>
        </div>

        <img
          className="w-80 h-80 rounded-full"
          src={require("./Images/Krishna.jpg")}
          alt="krishna"
        />
      </div>
    </div>
  );
};

export default Home;
