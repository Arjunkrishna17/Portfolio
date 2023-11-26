import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blogDetails } from "./BlogData";
import { sliderSettings } from "../SliderSettings";

const Blog = () => {

  return (
    <div id="blog" className="w-full  px-10 lg:px-20 h-full py-10">
      <div className="flex  flex-col w-full space-y-8 ">
        <div className="flex flex-col items-center lg:items-start space-y-5 w-full  font-bold  hover:underline decoration-from decoration-2 underline-offset-4">
          <h5 className="text-gray-600 font-bold">BLOG</h5>
        </div>

        <div className="w-full h-full space-x-5 justify-center items-center ">
          <Slider {...sliderSettings}>
            {blogDetails.map((blog) => (
              <a
                key={blog.name}
                href={blog.link}
                rel="noreferrer"
                target="_blank"
                className="flex flex-col items-center justify-center bg-white py-5 w-52 h-56 space-y-5 rounded-xl border shadow-lg px-5 hover:scale-105 transition hover:border-blue-500"
              >
                <div className="flex w-full justify-center ">
                  <img
                    src={require("../../Images/" + blog.img)}
                    alt={blog.name}
                    className="w-28 h-20"
                  />
                </div>
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
