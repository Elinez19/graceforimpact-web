import React from "react";

const MissionOne = () => {
  return (
    <section className="hidden sm:block mx-auto mt-2 max-w-7xl px-4 sm:mt-6 sm:px-6 lg:mb-60 lg:px-4">
      <div className="rounded-xl bg-white py-16 shadow-lg">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-2xl font-bold capitalize text-red-700 dark:text-white lg:text-4xl">
            Our Mission Statement
          </h1>
          <div className="hidden lg:flex justify-center mb-6 lg:mb-12">
            <span className="inline-block h-2 w-40 lg:w-60 rounded-full bg-orange"></span>
          </div>
          <p className="text-base text-black text-center lg:text-left lg:max-w-2xl lg:mx-auto mb-2 lg:mb-6">
            GFI is dedicated to providing comprehensive programs and services
            that enrich communities — and all of the people who live in them —
            across the country in fulfillment of our mission.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionOne;
