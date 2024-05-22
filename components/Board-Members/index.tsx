const ChairmanHeader = () => {
  return (
    <section className="mx-auto mt-2 max-w-7xl px-4 sm:mt-6 sm:px-6 lg:mb-60 lg:px-4">
      <div className="rounded-xl bg-white py-16 shadow-lg">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-left text-2xl font-bold capitalize text-red-700 dark:text-white lg:text-4xl">
            Dapo Oriola
          </h1>
          <p className="text-base text-black mb-2">President and Chairman</p>
        </div>
        <div className="flex justify-center mt-6 -ml-60">
          <span className="inline-block h-2 w-40 rounded-full bg-orange lg:hidden"></span>
          <span className="hidden lg:inline-block h-2 w-40 rounded-full bg-orange"></span>
        </div>
      </div>
    </section>
  );
};

export default ChairmanHeader;
