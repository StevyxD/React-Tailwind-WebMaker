import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white">
      <div className="max-w-[1240px] flex flex-col items-center justify-center mx-auto grid grid-cols-1 lg:grid-cols-3">
        <div className="flex flex-col col-span-2 justify-center items-center">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date. </p>
        </div>
        <div className="my-4 flex flex-col items-center justify-center">
          <input
            type="email"
            className="rounded-md p-2 mb-2 w-[300px] h-[50px] lg:w-[400px]"
            placeholder="Enter your email"
          />
          <button className="bg-[#00df9a] mx-auto uppercase font-medium rounded-md w-[200px] h-[50px]">
            Notify Me
          </button>
          <p>
            We care about protection of your data. Read our{" "}
            <span className="text-[#00df9a]">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
