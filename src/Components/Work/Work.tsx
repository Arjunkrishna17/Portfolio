import React from "react";
import Slider from "react-slick";

import { workData } from "./WorkData";
import { sliderSettings } from "../SliderSettings";
import "../slick.css";
import CustomEvent from "../../GA/CustomEvent";
import { useNavigate } from "react-router-dom";

const Work = () => {
  const navigate = useNavigate();

  return (
    <div
      id="work"
      className="flex flex-col h-full items-center justify-center space-y-10 w-full px-10 py-10"
    >
      <h1 className="font-bold text-xl opacity-80">Work</h1>

      <div className="w-full h-full  ">
        <Slider {...sliderSettings}>
          {workData.map((work) => (
            <div
              className={
                " bg-white h-80 border rounded-xl relative  py-5 px-8 space-y-2  " +
                (work.name === "Hey Chat" ? " bg-gray-300 opacity-60" : "")
              }
            >
              <div
                className={
                  "bg-rose-200 absolute px-5 py-1 left-2 " +
                  (work.paid ? " visible" : " invisible")
                }
              >
                Paid
              </div>

              <div className="flex flex-col  w-full items-center ">
                <img
                  src={require("../../Images/" + work.img)}
                  alt={work.img}
                  className="w-12 h-12 "
                />
                <h5 className="font-bold text-center ">{work.name}</h5>
              </div>

              <p className="text-xs text-center  ">{work.description}</p>

              <div className="flex flex-col grow space-y-8 ">
                <p className="text-xs  ">
                  <span className="test-base font-bold">Tech Stack:</span>{" "}
                  <span>{work.techStack}</span>
                </p>

                <div className="flex grow w-full  text-xs space-x-3 justify-center ">
                  {work.paid ? (
                    <button
                      onClick={() => navigate("/work/" + work.id)}
                      className="font-bold text-violet-500"
                    >
                      Read more
                    </button>
                  ) : (
                    <a
                      onClick={() =>
                        CustomEvent(work.action, "project", "github")
                      }
                      key={work.name}
                      href={work.githubLink}
                      rel="noreferrer"
                      target="_blank"
                      className={
                        "flex font-semibold w-24 justify-center  py-2 border outline outline-1 outline-gray-500  rounded-lg" +
                        (work.name === "Hey Chat"
                          ? " pointer-events-none"
                          : " hover:text-white hover:bg-black")
                      }
                    >
                      Git Hub
                    </a>
                  )}
                  <a
                    onClick={() =>
                      CustomEvent(work.action, "project", "live demo")
                    }
                    key={work.name}
                    href={work.link}
                    rel="noreferrer"
                    target="_blank"
                    className={
                      "flex font-semibold w-24 justify-center  py-2 border outline outline-1 outline-gray-500  rounded-lg" +
                      (work.name === "Hey Chat"
                        ? " pointer-events-none"
                        : " hover:text-white hover:bg-black")
                    }
                  >
                    {work.paid ? "Go to site" : "Live Demo"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Work;
