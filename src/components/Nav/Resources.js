import React from "react";
import ResourcesCard from "./ResourcesCard";
const Resources = () => {
  return (
    <div className="flex flex-col text-white items-center">
      <div>
        <h1 className="text-6xl text-blue-300 font-['arial']">Resources</h1>
      </div>
      <div className="my-16">
        <p className="text-2xl  text-center text-green-200">
          Below you will find resources provided by our company
        </p>
      </div>
      <div>
        <ResourcesCard />
      </div>
    </div>
  );
};

export default Resources;
