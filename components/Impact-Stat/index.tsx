import Image from "next/image";
import React from "react";

const ImpactStat = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 lg:px-10 py-10">
          <h1 className="text-center text-2xl lg:text-3xl font-semibold capitalize text-gray-800 dark:text-white">
            Our Impact Numbers
          </h1>

          <div className="mx-auto mt-6 flex justify-center">
            <span className="inline-block h-1 w-24 sm:w-32 lg:w-40 rounded-full bg-orange"></span>
            <span className="inline-block h-1 w-6 sm:w-8 lg:w-10 rounded-full bg-purple"></span>
            <span className="inline-block h-1 w-6 sm:w-8 lg:w-10 rounded-full bg-purple"></span>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>
        </div>

        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4 px-6 lg:px-10 pb-10">
          <a href="/" aria-label="View Item">
            <div className="relative overflow-hidden rounded shadow-lg transition duration-200 hover:-translate-y-2 hover:shadow-2xl">
              <Image
                className="h-56 md:h-64 xl:h-80 w-full object-cover"
                src="/images/hero/banner-5.png"
                alt=""
                width={100}
                height={100}
              />
              <div className="absolute inset-0 bg-purple opacity-75 px-6 py-4">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Mona Lisa
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Painted between 1503 and 1517, Da Vinci’s alluring portrait
                  has been dogged by two questions since the day it was made:
                  Who’s the subject and why is she smiling?
                </p>
              </div>
            </div>
          </a>
          <a href="/" aria-label="View Item">
            <div className="relative overflow-hidden rounded shadow-lg transition duration-200 hover:-translate-y-2 hover:shadow-2xl">
              <Image
                className="h-56 md:h-64 xl:h-80 w-full object-cover"
                src="/images/hero/banner-5.png"
                alt=""
                width={100}
                height={100}
              />
              <div className="absolute inset-0 bg-orange opacity-75 px-6 py-4">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Mona Lisa
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Painted between 1503 and 1517, Da Vinci’s alluring portrait
                  has been dogged by two questions since the day it was made:
                  Who’s the subject and why is she smiling?
                </p>
              </div>
            </div>
          </a>
          <a href="/" aria-label="View Item">
            <div className="relative overflow-hidden rounded shadow-lg transition duration-200 hover:-translate-y-2 hover:shadow-2xl">
              <Image
                className="h-56 md:h-64 xl:h-80 w-full object-cover"
                src="/images/hero/banner-5.png"
                alt=""
                width={100}
                height={100}
              />
              <div className="absolute inset-0 bg-purple opacity-75 px-6 py-4">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Mona Lisa
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Painted between 1503 and 1517, Da Vinci’s alluring portrait
                  has been dogged by two questions since the day it was made:
                  Who’s the subject and why is she smiling?
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImpactStat;
