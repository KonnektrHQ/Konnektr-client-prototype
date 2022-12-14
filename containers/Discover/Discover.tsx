import React from "react";

const Discover = () => {
  return (
    <div
      className="relative xl1800:px-40 xl2000:px-60 xl2400:px-96"
      id="discover"
    >
      <div className="grid grid-cols-2 lg1100:px-2.5 xl6:pr-40 lg1300:mb-20 sm600:mb-20 mb-5">
        <div
          className={`lg:pl-5 xl1400:pl-32 lg1200:pl-20 lg1100:col-span-1 col-span-2 flex flex-col content-center sm:gap-10 gap-5 px-2 relative z-10 lg1100:items-start items-center lg1100:text-start text-center justify-center lg1100:order-1  order-2`}
        >
          <h1 className="font_exo2 font-bold sm800:text-5xl sm400:text-4xl text-3xl sm600:whitespace-nowrap">
            Discover Amazing Communities
          </h1>
          <p className="text-gray-400 font_sfpro sm600:text-lg text-xs font-semibold lg1300:pr-10 tracking-widest leading-relaxed">
            {
              "Navigate through multiple communities, and DAOs and connect with the ones you're interested in."
            }
          </p>
          <a
            href="https://tally.so/r/3ja5j4"
            target="_blank"
            rel="noreferrer"
            className="text-white tracking-widest sm600:text-xl text-xs font-bold font_sfpro button-gradient-1 landing-review2-reverse px-7 py-2.5 rounded w-fit hover:scale-105 transition-all duration-500"
            type="button"
          >
            Get Started
          </a>
        </div>
        <div className="lg1100:col-span-1 col-span-2 lg1100:order-2 order-1 z-10 px-5 lg1100:max-w-full max-w-xl mx-auto relative lg1100:right-0 right-3">
            <img src="/images/spiralCommunities.png" alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default Discover;
