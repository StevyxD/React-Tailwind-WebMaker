import React from "react";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";
const Cards = (props) => {
  return (
    <div className="w-full py-[10rem] bg-white">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="w-full border rounded-lg  shadow-xl flex-col flex  items-center p-4 hover:scale-105 duration-500">
          <img
            src={single}
            className="w-20 mx-auto mt-[-3rem] bg-white"
            alt="single picture"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <div>
            <button className="w-[200px] font-semibold h-[50px] rounded-md hover:shadow-xl hover:scale-105 duration-300 bg-[#00df9a]">
              Start Trial
            </button>
          </div>
        </div>

        <div className="w-full border rounded-lg  shadow-xl flex-col flex  items-center p-4 hover:scale-105 duration-500">
          <img
            src={double}
            className="w-20 mx-auto mt-[-3rem] bg-white"
            alt="Double picture"
          />
          <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
          <p className="text-center text-4xl font-bold">$249</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <div>
            <button className="w-[200px] font-semibold h-[50px] rounded-md hover:shadow-xl hover:scale-105 duration-300 bg-[#00df9a]">
              Start Trial
            </button>
          </div>
        </div>

        <div className="w-full border rounded-lg  shadow-xl flex-col flex  items-center p-4 hover:scale-105 duration-500">
          <img
            src={triple}
            className="w-20 mx-auto mt-[-3rem] bg-white"
            alt="triple picture"
          />
          <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
          <p className="text-center text-4xl font-bold">$270</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <div>
            <button className="w-[200px] font-semibold h-[50px] rounded-md hover:shadow-xl hover:scale-105 duration-300 bg-[#00df9a]">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
