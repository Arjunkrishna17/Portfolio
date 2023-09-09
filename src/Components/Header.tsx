import React from "react";
import { ReactComponent as Hamburger } from "../Images/Hamburger.svg";

const Header = () => {
  return (
    <div className="flex z-10 fixed w-full first-letter:w-full h-20 items-center justify-between  px-5 md:px-20 bg-gradient-to-r to-to from-from">
      <a href="/" className="text-white font-lobster text-2xl cursor-pointer">
        Krishna Arjun
      </a>

      <ul className="space-x-5 text-white font-poppins text-sm hidden lg:flex">
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

      <Hamburger className="lg:hidden w-10 h-10 fill-white"/>
    </div>
  );
};

export default Header;
