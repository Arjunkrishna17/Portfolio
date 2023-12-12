import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./slick.css";

const experimentsData = [
  {
    name: "Microsoft Teams Integration",
    img: (
      <img
        src={require("../Images/MSTeams.png")}
        className="h-12"
        alt="MS Teams"
      />
    ),
    description:
      "Discover the process of connecting and sending notifications to a Microsoft Teams channel through an external application.",
  },
  {
    name: "Slack Integration",
    img: (
      <img src={require("../Images/Slack.png")} className="h-12" alt="Slack" />
    ),
    description:
      "Discover the process of connecting and sending notifications to a Slack channel through an external application.",
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
    img: <img src={require("../Images/NLP.png")} className="h-12" alt="nlp" />,
    description:
      "Combining the power of NLP with chatbots, empowers chatbots to understand and interact with users in a human-like manner.",
  },
  {
    name: "WebSocket notification service",
    img: (
      <img
        src={require("../Images/websocket.svg").default}
        className="h-12 "
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
      className="flex flex-col justify-center w-full h-full  px-10 py-10 lg:px-20 "
    >
      <div className="flex flex-col h-full w-full justify-center  space-y-8  ">
        <div className="flex flex-col items-center lg:items-start space-y-5 w-full  font-bold  hover:underline decoration-from decoration-2 underline-offset-4">
          <p className="text-gray-600">EXPERIMENTS</p>
        </div>

        <div className="w-full h-full">
          <Slider {...settings}>
            {experimentsData.map((experiment) => (
              <div
                key={experiment.name}
                className="flex flex-col items-center justify-center w-52 h-56 space-y-5 bg-white rounded-lg border shadow-lg px-5 py-5"
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
