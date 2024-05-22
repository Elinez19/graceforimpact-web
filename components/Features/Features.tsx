import Image from "next/image";

const Features = () => {
  return (
    <section className="bg-gray-200 dark:bg-gray-900">
      <div className="max-w-[95rem] px-6 py-10 mx-auto">
        <p className="text-xl font-medium text-orange ml-96">
          As our Name Implies.
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white ml-96">
          We are All About Impact
        </h1>
        <div className="mr-64 mt-6 flex justify-center">
          <span className="inline-block h-1 w-40 rounded-full bg-orange"></span>
          <span className="inline-block h-1 w-10 rounded-full bg-purple"></span>
          <span className="inline-block h-1 w-10 rounded-full bg-purple"></span>
        </div>
        <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
          <div className="absolute w-full bg-purple -z-10 md:h-96 rounded-2xl lg:mx-[38]"></div>
          <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
            <div className="md:mx-6">
              <Image
                src="images/hero/banner-2.svg"
                alt="client photo"
                width={100}
                height={100}
                className="h-24 w-24 md:h-[32rem] md:w-80 lg:h-[26rem] lg:w-[56rem] md:rounded-2xl object-cover shadow-md"
              />
            </div>
            <div className="mt-2 md:mx-6">
              <div>
                <p className="text-xl font-medium tracking-tight text-white">
                  Grace For Impact
                </p>
                <p className="text-white"> We are All About Impact</p>
              </div>
              <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                GFI has been providing health care to the underserved annually
                in different parts of Nigeria since 2005.
              </p>
              <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 mr-90">
                <button className="bg-orange  hover:bg-orange/70 inline-flex items-center justify-center rounded-lg px-6 py-4 text-center text-base font-medium text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                  Join Us Make Imapct
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Features;
