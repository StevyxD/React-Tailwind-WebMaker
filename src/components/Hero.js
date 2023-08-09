import React from "react";
import Typed from "react-typed";
const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[150px] w-full h-screen mx-auto text-center flex flex-col">
        <p className="text-[#00df9a] font-bold p-2">
          Growing with data analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, flexible financing for
          </p>
          <Typed
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
            className="text-gray-400 pl-4 font-bold md:text-5xl sm:text-4xl text-xl"
          />
        </div>
        <p className="mt-4 md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platforms.
        </p>
        <div className="mt-5">
          <button className="bg-[#00df9a] mx-auto uppercase font-medium rounded-md w-[200px] h-[50px]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
