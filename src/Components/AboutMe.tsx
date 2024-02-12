import React from "react";
import Slider from "react-slick";
import { sliderSettings } from "./SliderSettings";

const AboutMe = () => {
  return (
    <div
      id="aboutMe"
      className="flex flex-col h-full items-center justify-center space-y-10 w-full px-10 py-10  "
    >
      <h1 className="font-bold text-xl opacity-80">About Me</h1>

      <div className="w-full">
        <Slider {...sliderSettings}>
          <div className=" bg-white space-y-5 h-96 lg:h-80 border rounded-xl py-5 px-8">
            <h1 className="font-bold opacity-70">Experience</h1>

            <div className="flex flex-col h-full w-full  space-y-5">
              <div className="flex flex-col w-full">
                <p className="font-bold">Praximax</p>
                <p className="text-xs">1.8+ Years </p>
                <p className="text-xs">
                  Full stack engineer (Founding Engineer)
                </p>
              </div>

              <div className="flex flex-col w-full">
                <p className="font-bold">Sky Scanner</p>
                <p className="text-xs">1 Month </p>
                <p className="text-xs">Software Engineer Intern</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-5 w-full  bg-white h-96 lg:h-80 border rounded-xl p-5">
            <h1 className="font-bold opacity-70">Skills</h1>

            <div className="h-full w-full space-y-5">
              <div className="flex flex-col">
                <p className="font-bold">Frontend:</p>
                <p className="text-xs">
                  Next.js, Next UI lib, React Js, Tailwind CSS, Typescript,
                  Javascript, HTML, CSS and Figma
                </p>
              </div>
              <div>
                <p className="font-bold">Backend: </p>
                <p className="text-xs">Node.Js, Express.Js and MongoDB</p>
              </div>
              <div>
                <p className="font-bold">Miscellaneous</p>
                <p className="text-xs">
                  AWS, Docker, GitHub, GitHub Actions(CI/CD), Google Analytics,
                  DNS Management, Stripe Api's and Jira
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-5 w-full  bg-white h-96 lg:h-80 border rounded-xl p-5">
            <h1 className="font-bold opacity-70">Education</h1>
            <div className=" h-full w-full justify-center space-y-5">
              <div>
                <p className="font-bold">Bachelor Of Engineering</p>
                <p className="text-xs">Nehru Institute Of Technology</p>
                <p className="text-xs">CGPA: 7.4/10</p>
              </div>

              <div>
                <p className="font-bold">Plus Two | Computer Science</p>
                <p className="text-xs">
                  Govt. Higher Secondary School Kumarapuram
                </p>
                <p className="text-xs">Percentage: 76/100</p>
              </div>
            </div>
          </div>

          <div className="w-full space-y-5 bg-white h-96 lg:h-80 border rounded-xl p-5">
            <h1 className="font-bold opacity-70">Interests</h1>

            <div className="h-full w-full justify-center space-y-4 text-xs">
              <p>
                <span className="font-bold text-base">Cycling</span> | Longest
                Ride: 165 kms in a day
              </p>
              <p>
                <span className="font-bold text-base">Jogging</span> | 5+ Mini
                Marathons
              </p>
              <p>
                <span className="font-bold text-base">Reading books</span> |
                Self-Help Groups
              </p>
              <p>
                <span className="font-bold text-base">Playing Drums </span> |
                State Champion
              </p>
              <p>
                <span className="font-bold text-base">Karate</span> | Black Belt
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default AboutMe;
