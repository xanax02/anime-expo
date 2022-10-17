import React from "react";

const About = () => {
  return (
    <div className="w-[700px] mx-auto mt-10 bg-white shadow-lg flex flex-col items-center justify-center rounded-md py-10 px-10">
      <div>
        <h1 className="text-4xl font-bold text-gray-700 border-b-2">
          We are the anime expo community
        </h1>
        <p className="text-gray-600 font-medium text-sm text-center mt-10 border-b-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className="bg-blue-500 py-3 px-6 w-full text-white font-bold tracking-wider uppercase rounded-lg mt-5">
          Join Comminity
        </button>
      </div>
    </div>
  );
};

export default About;
