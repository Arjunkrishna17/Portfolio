import React from "react";

const Header = () => {
  return (
    <div className="flex w-full h-20 items-center justify-between px-20 bg-gradient-to-r to-cyan-500 from-blue-500">
      <h4 className="text-white font-lobster text-2xl cursor-pointer">
        Krishna Arjun
      </h4>

      <ul className="flex space-x-5 text-white font-poppins text-sm">
        <li className="cursor-pointer hover:underline underline-offset-2 decoration-2">
          HOME
        </li>

        <li className="cursor-pointer hover:underline underline-offset-2 decoration-2">
          EXPERIMENT
        </li>
        <li className="cursor-pointer hover:underline underline-offset-2 decoration-2">
          WORK
        </li>

        <li className="cursor-pointer hover:underline underline-offset-2 decoration-2">
          BLOG
        </li>
        <li className="cursor-pointer hover:underline underline-offset-2 decoration-2">
          RESUME
        </li>
        <li className="cursor-pointer hover:underline underline-offset-2 decoration-2">
          CONTACT
        </li>
      </ul>
    </div>
  );
};

export default Header;
