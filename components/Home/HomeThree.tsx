import Image from "next/image";

const HomeThree = () => {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-10 px-5 md:grid-cols-3 md:gap-20 md:p-10">
      <div className="relative transform cursor-pointer duration-500 hover:-translate-y-1 hover:shadow-2xl">
        <Image
          src="/images/hero/banner-5.png"
          alt=""
          fill
          className="rounded-lg"
        />
        <div className="content left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform bg-white p-4 md:p-8 lg:absolute lg:max-w-lg">
          <div className="flex justify-between text-sm font-bold">
            <p>Product Review</p>
            <p className="text-gray-400">17th March, 2021</p>
          </div>
          <h2 className="mt-4 text-3xl font-semibold md:mt-10">
            Coffee From Heaven
          </h2>
          <p className="my-3 text-justify font-medium leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            aperiam nulla cupiditate saepe sed quis veritatis minus rem adipisci
            aliquid.
          </p>
          <button className="mt-2 bg-black p-3 px-5 text-sm font-bold text-white hover:bg-purple-800 md:mt-5">
            Read More
          </button>
        </div>
      </div>

      {/* Repeat this div for additional cards */}
    </section>
  );
};

export default HomeThree;
