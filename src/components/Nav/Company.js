import React from "react";
import Typed from "react-typed";
import Coding from "../../assets/Coding.jpg";

const Company = () => {
  return (
    <div className="text-white h-full">
      <div className="w-full flex flex-col justify-center items-center">
        <div>
          <h1 className="text-4xl font-bold uppercase mt-[30px]">Company</h1>
        </div>
        <div className="flex  flex-col">
          <div className="my-[30px] ">
            <img
              src={Coding}
              alt=""
              className="w-[400px] rounded-xl object-contain"
            />
          </div>

          <div className="mt-[50px] flex sm:flex-row flex-col items-center">
            <p className="text-2xl text-green-400">We specialize in</p>
            <Typed
              strings={["React", "Django", "and Tailwind"]}
              typeSpeed={120}
              backSpeed={140}
              loop
              className="text-green-300 pl-2 text-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
