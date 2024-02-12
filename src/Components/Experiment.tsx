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
        className="w-12 h-12 "
        alt="MS Teams"
      />
    ),
    Aim: [
      "Different ways of integration",
      "Send messages to channels",
      "Create interactive messages",
      "Listen to events",
      "Explore Incoming webhook connector",
    ],
  },
  {
    name: "Slack Integration",
    img: (
      <img
        src={require("../Images/Slack.png")}
        className="w-12 h-12 "
        alt="Slack"
      />
    ),
    Aim: [
      "Different ways of integration",
      "Send messages to channels",
      "Create interactive messages",
      "Listen to events",
      "Explore Incoming webhooks",
    ],
    description:
      "Discover the process of connecting and sending notifications to a Slack channel through an external application.",
  },
  {
    name: "Route Subdomain to AWS load balancer",
    img: (
      <img
        src={require("../Images/loadBalancer.png")}
        className="w-12 h-12 "
        alt="load balancer"
      />
    ),
    Aim: [
      "Create subdomain from main domain",
      "Create SSL Certificate",
      "Explore DNS Records",
      "Route to AWS Load balancer",
    ],
    description:
      "Exploring Subdomain Routing to a AWS Load Balancer via CNAME DNS Records",
  },

  {
    name: "NLP-Powered Chatbot",
    img: (
      <img
        src={require("../Images/NLP.png")}
        className="w-12 h-12 "
        alt="nlp"
      />
    ),
    Aim: [
      "To understand NLP",
      "User feedback mechanism to increase performance",
      "Maintain context of Conversations to increase user experience",
    ],
    description:
      "Combining the power of NLP with chatbots, empowers chatbots to understand and interact with users in a human-like manner.",
  },
  {
    name: "WebSocket",
    img: (
      <img
        src={require("../Images/websocket.svg").default}
        className="w-12 h-12 "
        alt="websocket"
      />
    ),
    Aim: ["Push message to target user", "Explore Socket.io"],

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
      className="flex flex-col h-full items-center justify-center space-y-10 w-full px-10 py-10"
    >
      <h1 className="font-bold text-xl opacity-80">Experiments</h1>

      <div className="w-full h-full">
        <Slider {...settings}>
          {experimentsData.map((experiment, i) => (
            <div
              key={experiment.name + i}
              className=" bg-white space-y-5 h-80 border rounded-xl py-5 px-8"
            >
              <div className="flex flex-col space-y-3 h-20 w-full items-center">
                {experiment.img}
                <h5 className="font-bold text-xs text-center">
                  {experiment.name}
                </h5>
              </div>

              <h5 className="tex-sm font-semibold">Aim</h5>

              <ul className="text-xs space-y-2">
                {experiment.Aim?.map((aim, i) => (
                  <li className="list-disc" key={aim + i}>
                    {aim}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Experiments;
