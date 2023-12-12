import React from "react";
import Slider from "react-slick";

import { workData } from "./WorkData";
import { sliderSettings } from "../SliderSettings";
import "../slick.css";

const Work = () => {
  return (
    <div
      id="work"
      className="flex flex-col justify-center w-full h-full  py-10 px-5 lg:px-20 "
    >
      <div className="flex flex-col h-full space-y-5  ">
        <div className="flex flex-col items-center lg:items-start space-y-5 w-full  font-bold  hover:underline decoration-from decoration-2 underline-offset-4">
          <p className="text-gray-600">WORK</p>
        </div>

        <div className="w-full h-full  ">
          <Slider {...sliderSettings}>
            {workData.map((work) => (
              <a
                key={work.name}
                href={work.link}
                rel="noreferrer"
                target="_blank"
                className={
                  "flex flex-col items-center justify-center w-52 h-56 space-y-5 bg-white rounded-lg border shadow-lg px-5 py-5 " +
                  (work.link
                    ? "hover:scale-105 transition hover:border-blue-500"
                    : " pointer-events:none bg-gray-200 opacity-50 cursor-default")
                }
              >
                <div className="flex flex-col space-y-3 w-full items-center ">
                  <img
                    src={require("../../Images/" + work.img)}
                    alt={work.img}
                    className="w-8 h-8 "
                  />
                  <h5 className="font-bold text-xs text-center">{work.name}</h5>
                </div>

                <p className="text-xs text-justify">{work.description}</p>
              </a>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Work;
