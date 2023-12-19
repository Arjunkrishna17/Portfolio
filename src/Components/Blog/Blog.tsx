import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blogDetails } from "./BlogData";
import { sliderSettings } from "../SliderSettings";

const Blog = () => {
  return (
    <div
      id="blog"
      className="flex flex-col h-full items-center justify-center space-y-10 w-full px-10 py-10  "
    >
      <h1 className="font-bold text-xl opacity-80">Blog</h1>

      <div className="w-full h-full space-x-5 justify-center items-center ">
        <Slider {...sliderSettings}>
          {blogDetails.map((blog) => (
            <div
              key={blog.name}
              className=" bg-white space-y-10 h-80 border rounded-xl py-5 px-8"
            >
              <div className="flex w-full justify-center h-20 ">
                <img
                  src={require("../../Images/" + blog.img)}
                  alt={blog.name}
                  className="w-28 h-20"
                />
              </div>
              <div className=" flex flex-col items-center justify-center  space-y-3 h-10 ">
                <h6 className="text-xs text-center font-semibold ">
                  {blog.name}
                </h6>
                <p className="text-xs pt-3">{blog.date}</p>
              </div>

              <div className="flex w-full justify-center">
                <a
                  href={blog.link}
                  rel="noreferrer"
                  target="_blank"
                  className="flex font-semibold w-24 justify-center  py-1 text-xs border outline outline-1 outline-gray-500  hover:text-white hover:bg-black disabled:bg-gray-200 disabled:opacity-70 disabled:text-black  rounded-lg"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blog;
