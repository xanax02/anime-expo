import React from "react";

const Home = () => {
  return (
    <div className="h-[70vh] w-[100vw]">
      <div className="flex flex-col justify-center text-center relative">
        <img src="/images/hero.png" className="w-full h-[690px]" />
        <div className="absolute top-40 left-24 text-left">
          <h2 className="text-red-600 text-6xl font-black relative border-b-4 border-gray-900 pb-5 mb-5">
            Anime Expo
            <span className="text-gray-700 text-xl absolute top-4 font-black">
              ®
            </span>
          </h2>
          <h3 className="font-semibold text-xl leading-10">
            Bringing fans and industry together to celebrate Japanese pop
            culture.
          </h3>
          <h3 className="font-semibold text-xl leading-10">
            Anime Expo® - Los Angeles, California July 1-4, 2023
          </h3>
          <h3 className="font-semibold text-xl leading-10">
            anime expo® chibi - Ontario, California November 12-13, 2022
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
