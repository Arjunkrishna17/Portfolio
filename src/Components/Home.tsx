import React from "react";
import TypeWritter from "typewriter-effect";

const Home = () => {
  return (
    <div className="flex w-full h-full font-poppins px-20">
      <div className="mt-24">
        <div className="text-4xl opacity-60 font-bold space-y-5">
          <h1>Hi, I am Krishna Arjun</h1>
          <TypeWritter
            options={{ loop: true }}
            onInit={(typeWritter) => {
              typeWritter
                .typeString("a Software Engineer")
                .pauseFor(2000)
                .deleteAll()
                .typeString("a Front-End Engineer")
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
