import React from "react";
import { ReactComponent as TailwindLogo } from "./Images/TaillwindLogo.svg";

const Blog = () => {
  const blogDetails = [
    {
      name: "Customization of Font and its properties in React-Tailwind Project",
      date: "05 NOV 2022",
      link: "https://medium.com/@krishna.arjun/customization-of-font-in-react-tailwind-project-9218096542ae",
    },

    {
      name: "Dynamic color using Tailwind CSS.",
      date: "12 DEC 2022",
      link: "https://medium.com/@krishna.arjun/dynamic-color-using-tailwind-css-8229a1e05eae",
    },

    {
      name: "Dynamic color using Tailwind CSS.",
      date: "12 DEC 2022",
      link: "https://medium.com/@krishna.arjun/dynamic-color-using-tailwind-css-8229a1e05eae",
    },
  ];

  return (
    <div id="blog" className="w-full h-full py-5 font-poppins px-20">
      <div className="flex flex-col space-y-16">
        <h5 className="text-xl font-bold underline underline-offset-4 decoration-2 decoration-blue-500 text-gray-600">
          BLOG
        </h5>

        <div className="flex space-x-5">
          {blogDetails.map((blog) => (
            <a
              key={blog.name}
              href={blog.link}
              rel="noreferrer"
              target="_blank"
              className="flex flex-col w-44 h-36 space-y-5 bg-white rounded-xl border shadow-lg px-5 py-3 hover:scale-105 transition hover:border-blue-500"
            >
              <TailwindLogo className="h-10 w-full opacity-60" />
              <div className=" h-fit space-y-3 ">
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
