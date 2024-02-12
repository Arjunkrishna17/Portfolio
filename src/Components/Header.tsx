import React, { useState } from "react";
import { ReactComponent as Hamburger } from "../Images/Hamburger.svg";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuHandler = () => {
    setShowMenu(!showMenu);
  };

  const menuList = (
    <ul className="flex flex-col justify-center h-full space-y-5 lg:items-center lg:space-y-0 px-5 py-5 lg:px-0 lg:py-0  lg:justify-end lg:flex-row lg:space-x-5 lg:text-sm lg:font-bold text-white">
      <a
        href="#home"
        className="cursor-pointer hover:underline underline-offset-2 decoration-2"
      >
        Home
      </a>

      <a
        href="#aboutMe"
        className="cursor-pointer hover:underline underline-offset-2 decoration-2"
      >
        About Me
      </a>

      <a
        href="#work"
        className="cursor-pointer hover:underline underline-offset-2 decoration-2"
      >
        Work
      </a>

      <a
        href="#experiments"
        className="cursor-pointer hover:underline underline-offset-2 decoration-2"
      >
        Experiments
      </a>

      <a
        href="#blog"
        className="cursor-pointer hover:underline underline-offset-2 decoration-2"
      >
        Blog
      </a>
    </ul>
  );

  return (
    <div className="flex z-10 fixed w-full first-letter:w-full h-20 items-center justify-between  px-5 md:px-10 bg-gradient-to-r to-to from-from">
      <a href="/" className="text-white font-lobster text-2xl cursor-pointer">
        Krishnadas R
      </a>
      <div className="hidden lg:flex">{menuList}</div>

      <Hamburger
        onClick={menuHandler}
        className="lg:hidden w-8 h-8  cursor-pointer fill-white"
      />

      {showMenu && (
        <div className="flex flex-col absolute right-0 top-0 w-52 py-5 bg-to border border-white text-white rounded-l-lg shadow-sm">
          <button
            onClick={menuHandler}
            className=" absolute right-5 top-1 flex w-8 h-8 rounded-full items-center justify-center hover:bg-gray-100 hover:text-black"
          >
            X
          </button>

          <div className="flex lg:hidden">{menuList}</div>
        </div>
      )}
    </div>
  );
};

export default Header;
