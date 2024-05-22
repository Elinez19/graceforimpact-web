const BoardOne = () => {
  return (
    <section className="mx-auto mt-12 max-w-7xl px-4 sm:mt-6 sm:px-6 lg:mb-60 lg:px-4">
      <div className="rounded-xl bg-white py-16 shadow-lg">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-left text-2xl font-bold capitalize text-red-700 dark:text-white lg:text-4xl">
            Our Board of Directors
          </h1>
          <p className="text-base text-black mb-2">
            GFI is led by a diverse group of skilled professionals who, together
            with our National Board of Directors, share an unwavering commitment
            to the mission and work to strengthen communities.
          </p>
        </div>
        <div className="mr-60 mt-6 flex justify-center">
          <span className="inline-block h-2 w-40 rounded-full bg-orange"></span>
        </div>
      </div>
    </section>
  );
};

export default BoardOne;
