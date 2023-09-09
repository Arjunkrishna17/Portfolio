import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ReactComponent as TailwindLogo } from "../Images/TaillwindLogo.svg";

const blogDetails = [
  {
    name: "Customization of Font and its properties in React-Tailwind Project",
    date: "05 NOV 2022",
    link: "https://medium.com/@krishna.arjun/customization-of-font-in-react-tailwind-project-9218096542ae",
    img: <TailwindLogo className="h-20 w-full " />,
  },

  {
    name: "Dynamic color using Tailwind CSS.",
    date: "12 DEC 2022",
    link: "https://medium.com/@krishna.arjun/dynamic-color-using-tailwind-css-8229a1e05eae",
    img: <TailwindLogo className="h-20 w-full " />,
  },

  {
    name: "How to use SVG as React Component?",
    date: "05 MAY 2023",
    link: "https://medium.com/@krishna.arjun/how-to-use-svg-as-react-component-2ec6364e6a64",
    img: (
      <img
        src={require("../Images/SvgBlog.jpg")}
        alt="svg as react component"
        className="w-20 h-20"
      />
    ),
  },
];

const Blog = () => {
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
    <div id="blog" className="w-full  px-10 lg:px-20 h-full py-10">
      <div className="flex  flex-col w-full space-y-8 ">
        <div className="flex flex-col items-center lg:items-start space-y-5 w-full  font-bold  hover:underline decoration-from decoration-2 underline-offset-4">
          <h5 className="text-gray-600 font-bold">BLOG</h5>
        </div>

        <div className="w-full h-full space-x-5 justify-center items-center ">
          <Slider {...settings}>
            {blogDetails.map((blog) => (
              <a
                key={blog.name}
                href={blog.link}
                rel="noreferrer"
                target="_blank"
                className="flex flex-col items-center justify-center bg-white py-5 w-52 h-56 space-y-5 rounded-xl border shadow-lg px-5 hover:scale-105 transition hover:border-blue-500"
              >
                <div className="flex w-full justify-center ">{blog.img}</div>
                <div className=" flex flex-col items-center justify-center h-fit space-y-3 ">
                  <h6 className="text-xs text-center font-semibold ">
                    {blog.name}
                  </h6>
                  <p className="text-xs pt-3">{blog.date}</p>
                </div>
              </a>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Blog;
