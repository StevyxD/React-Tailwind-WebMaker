import React from "react";
import Laptop from "../assets/laptop.jpg";
const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} className="w-[500px] mx-auto my-4" alt="Laptop" />
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, voluptates quod quos dolorum
            consequuntur voluptate quas voluptatibus quibusdam, quia, voluptates
            quod quos dolorum consequuntur voluptate quas voluptatibus
            voluptatum, quibusdam, quia, voluptates quod quos dolorum
            consequuntur voluptate quas voluptatibus voluptatum, quibusdam,
          </p>
          <div className="flex items-center">
            <button className="my-5 w-[200px] h-[40px] font-semibold bg-black mx-auto rounded-md text-[#00df9a]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
