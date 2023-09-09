import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { ReactComponent as Diversio } from "../Images/Diversio.svg";
import "./slick.css";

const experimentsData = [
  {
    name: "Diversio",
    img: <Diversio className="fill-orange-500 w-12 h-16" />,
    description:
      "Diversio is an e-commerce website, and I am currently in the process of experimenting with its creation using the MERN stack.",
  },

  {
    name: "ECS Deployment",
    img: (
      <img
        src={require("../Images/ECSWorkFlow.png")}
        className="h-16 w-16 "
        alt="ecs"
      />
    ),
    description:
      "Discovering the steps to deploy Docker containers in ECS via github actions.",
  },
  {
    name: "Route Subdomain to AWS load balancer",
    img: (
      <img
        src={require("../Images/loadBalancer.png")}
        className="h-12"
        alt="load balancer"
      />
    ),
    description:
      "Exploring Subdomain Routing to a AWS Load Balancer via CNAME DNS Records",
  },

  {
    name: "NLP-Powered Chatbot",
    img: <img src={require("../Images/NLP.png")} className="h-16" alt="nlp" />,
    description:
      "Combining the power of NLP with chatbots, empowers chatbots to understand and interact with users in a human-like manner.",
  },
  {
    name: "WebSocket notification service",
    img: (
      <img
        src={require("../Images/websocket.svg").default}
        className="h-16 w-12 "
        alt="websocket"
      />
    ),
    description:
      "Creating a WebSocket Notification System for Real-time Updates and Eliminating Polling.",
  },
];

const Experiments = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,

    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      id="experiments"
      className="flex flex-col justify-center w-full h-full  px-10 py-10 md:px-20 "
    >
      <div className="flex flex-col h-full w-full justify-center  space-y-8  ">
        <div className="flex flex-col space-y-5 w-fit  font-bold  hover:underline decoration-blue-500 decoration-2 underline-offset-4">
          <p className="text-gray-600">EXPERIMENTS</p>
        </div>

        <div className="w-full h-full space-x-5 justify-center items-center">
          <Slider {...settings}>
            {experimentsData.map((experiment) => (
              <div
                key={experiment.name}
                className="flex flex-col items-center justify-center w-52 h-56 space-y-5 bg-white rounded-lg border shadow-lg px-5 py-5 hover:scale-105 transition hover:border-blue-500"
              >
                <div className="flex flex-col space-y-3 w-full items-center">
                  {experiment.img}
                  <h5 className="font-bold text-xs text-center">
                    {experiment.name}
                  </h5>
                </div>

                <p className="text-xs text-justify ">
                  {experiment.description}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Experiments;
