import Image from "next/image";
import React from "react";

const SectionTitleCard = () => {
  return (
    <div className="py-10 relative">
      <Image
        src="/images/hero/bg-img-2.svg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="bg-white rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
          <div className="p-6 md:p-8 lg:p-10">
            <h2 className="mb-4 text-2xl font-bold text-red-700 md:text-4xl">
              Grace Executive leadership
            </h2>
            <div className="flex -ml-32 justify-center md:justify-start">
              <span className="inline-block h-2 w-40 rounded-full bg-red-700"></span>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Grace for Impact prides itself not only on award-winning health
              outreach, but also on the talent of its people of some of the
              brightest minds and most experienced executives in business.
              Excellent minds and most experienced executives in business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitleCard;
