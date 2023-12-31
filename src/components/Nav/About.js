import React from "react";

const About = () => {
  return (
    <div className="text-white">
      <div className="flex flex-col items-center">
        <div className="text-4xl text-blue-300 hover:scale-105 duration-500">
          <h1 className="font-mono">About</h1>
        </div>
        <div className="mt-[100px] w-[500px]">
          <p className="text-xl  font-mono">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
