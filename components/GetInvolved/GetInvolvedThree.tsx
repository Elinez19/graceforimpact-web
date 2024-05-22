import Image from "next/image";
import React from "react";

const GetInvolvedThree = () => {
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
            <h2 className="mb-4 text-center text-2xl font-bold text-red-700 md:text-4xl">
              We Need You
            </h2>

            <p className="text-gray-600 dark:text-gray-300">
              We rely on our members, program participants, donors and
              volunteers to work alongside us to strengthen communities. Whether
              you want to mentor young people, improve your family’s health and
              wellbeing or support your neighbors, your involvement with the Y
              helps bring about positive and meaningful change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedThree;
