import React from "react";
import { ReactComponent as TailwindLogo } from "./Images/TaillwindLogo.svg";

const Blog = () => {
  const blogDetails = [
    {
      name: "Customization of Font and its properties in React-Tailwind Project",
      date: "05 NOV 2022",
      link: "https://medium.com/@krishna.arjun/customization-of-font-in-react-tailwind-project-9218096542ae",
      img: <TailwindLogo className="h-10 w-full opacity-60" />,
    },

    {
      name: "Dynamic color using Tailwind CSS.",
      date: "12 DEC 2022",
      link: "https://medium.com/@krishna.arjun/dynamic-color-using-tailwind-css-8229a1e05eae",
      img: <TailwindLogo className="h-10 w-full opacity-60" />,
    },

    {
      name: "How to use SVG as React Component?",
      date: "05 MAY 2023",
      link: "https://medium.com/@krishna.arjun/how-to-use-svg-as-react-component-2ec6364e6a64",
      img: (
        <img
          src={require("../Components/Images/SvgBlog.jpg")}
          alt="svg as react component"
          className="w-10 h-10"
        />
      ),
    },
  ];

  return (
    <div id="blog" className="w-full h-full py-5 font-poppins px-20">
      <div className="flex flex-col space-y-16">
        <h5 className="text-xl font-bold  text-gray-600">BLOG</h5>

        <div className="flex space-x-5">
          {blogDetails.map((blog) => (
            <a
              key={blog.name}
              href={blog.link}
              rel="noreferrer"
              target="_blank"
              className="flex flex-col justify-center w-44 h-36 space-y-5 bg-white rounded-xl border shadow-lg px-5 py-3 hover:scale-105 transition hover:border-blue-500"
            >
              <div className="flex w-full justify-center ">{blog.img}</div>
              <div className=" flex flex-col items-center justify-center h-fit space-y-3 ">
                <p className="text-xs">{blog.date}</p>
                <h6 className="text-xs  text-gray-600 line-clamp-2">
                  {blog.name}
                </h6>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
