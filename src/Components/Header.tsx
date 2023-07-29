import React from "react";

const Header = () => {
  return (
    <div className="flex w-full h-20 items-center justify-between px-20 bg-gradient-to-r to-cyan-500 from-blue-500">
      <h4 className="text-white font-lobster text-2xl cursor-pointer">
        Krishna Arjun
      </h4>

      <ul className="flex space-x-5 text-white font-poppins text-sm">
        <a
          href="#home"
          className="cursor-pointer hover:underline underline-offset-2 decoration-2"
        >
          HOME
        </a>

        <a
          href="#experiments"
          className="cursor-pointer hover:underline underline-offset-2 decoration-2"
        >
          EXPERIMENTS
        </a>
        <a
          href="#work"
          className="cursor-pointer hover:underline underline-offset-2 decoration-2"
        >
          WORK
        </a>

        <a
          href="#blog"
          className="cursor-pointer hover:underline underline-offset-2 decoration-2"
        >
          BLOG
        </a>
       
      </ul>
    </div>
  );
};

export default Header;
