import React from "react";
import Image from "next/image";

const BoardThree = () => {
  return (
    <div className="py-5 relative mt-30 mb-20">
      <Image
        src="/images/hero/bg-img.svg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="container mx-auto px-16 md:px-12 relative z-10">
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 lg:w-1/2 relative">
              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <Image
                  src="/images/hero/Gfi-img-1.svg"
                  alt="Leader"
                  width={500}
                  height={700}
                  className="object-cover w-full h-full absolute bottom-0 left-0 z-10"
                />
              </div>
            </div>
            <div className="p-8 md:w-1/3 lg:w-1/2">
              <h2 className="mb-4 text-2xl font-bold text-red-700 dark:text-white md:text-4xl">
                Grace Chief Executive Leadership
              </h2>
              <div className="mr-60 mt-6 flex justify-center">
                <span className="inline-block h-2 w-40 rounded-full bg-orange"></span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                GFI executive leaders leverage their unique perspectives and
                expertise to support the needs of local Ys and advance our
                collective mission with excellence.
              </p>
              {/* <div className="mt-6">
                <h4 className="text-xl font-semibold text-black dark:text-gray-700">
                  Hentoni Doe
                </h4>
                <span className="block text-sm text-black">CEO-Founder</span>
              </div>
              <p className="mt-2 text-gray-600 dark:text-gray-600">
                Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                ipsam?
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardThree;
