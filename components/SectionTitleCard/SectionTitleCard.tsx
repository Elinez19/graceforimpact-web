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
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-white rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="mb-4  text-2xl font-bold text-red-700 md:text-4xl">
              Grace Executive leadership
            </h2>
            <div className="-ml-96 mt-2 flex justify-center">
              <span className="inline-block h-2 w-40 rounded-full bg-red-700"></span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Grace for Impact prides itself not only on award-winning health
              outreach, but also on the talent of its people of some of the
              brightest minds and most experienced executives in business.
              Excellent minds and most experienced executives in business.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Grace for Impact prides itself not only on award-winning health
              outreach, but also on the talent of its people of some of the
              brightest minds and most experienced executives in business.
              Excellent minds and most experienced executives in business.
            </p>
            {/* <div className="mt-6">
              <p className="text-gray-600 dark:text-gray-400">- Hentoni Doe</p>
              <span className="block text-sm text-gray-500">CEO-Founder</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitleCard;
