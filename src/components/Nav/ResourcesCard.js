import React from "react";
import Django from "../../assets/Django.jpg";
import Tailwind from "../../assets/Tailwind.jpg";
import ReactLogo from "../../assets/React.jpg";

const ResourcesCard = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row">
        <div className="mx-[20px] w-[200px] h-[300px] shadow-xl hover:scale-105 duration-500  items-center flex flex-col border border-gray-600 hover:border-gray-400 p-6 ">
          <div className="mt-[-50px] w-[100px]">
            <img src={Django} alt="Django" />
          </div>
          <div>
            <h1 className="text-2xl mb-[20px] text-green-400">$50</h1>
          </div>
          <div>
            <p>We provide a website where backend is created using Django.</p>
          </div>

          <div className="mt-[30px]">
            {" "}
            <button className="mt-[30px] bg-green-400 w-[100px] rounded h-[35px] font-semibold mt-[10px] hover:scale-105 duration-300 text-gray-200">
              Pay
            </button>
          </div>
        </div>

        <div className="mx-[20px] w-[200px] h-[300px] shadow-xl hover:scale-105 duration-500  items-center flex flex-col border border-gray-600 hover:border-gray-400 p-6 ">
          <div className="mt-[-60px] w-[100px]">
            <img src={ReactLogo} alt="Django" />
          </div>
          <div>
            <h1 className="text-2xl mb-[20px] text-green-400">$50</h1>
          </div>
          <div>
            <p>
              We provide a website where frontend is created using React Js
              framework.
            </p>
          </div>

          <div className="mt-[5px]">
            {" "}
            <button className=" bg-green-400 w-[100px] rounded h-[35px] font-semibold mt-[10px] hover:scale-105 duration-300 text-gray-200">
              Pay
            </button>
          </div>
        </div>

        <div className="mx-[20px] w-[200px] h-[300px] shadow-xl hover:scale-105 duration-500  items-center flex flex-col border border-gray-600 hover:border-gray-400 p-6 ">
          <div className="mt-[-60px] h-[80px] w-[50px]">
            <img src={Tailwind} alt="Django" />
          </div>
          <div>
            <h1 className="text-2xl mb-[20px] text-green-400">$50</h1>
          </div>
          <div>
            <p>
              We provide a website where UI is created using Tailwind framework.
            </p>
          </div>

          <div className="mt-[5px]">
            {" "}
            <button className=" bg-green-400 w-[100px] rounded h-[35px] font-semibold mt-[10px] hover:scale-105 duration-300 text-gray-200">
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesCard;
