const HealthOne = () => {
  return (
    <>
      <section className="mx-auto mt-2 max-w-7xl px-4 sm:mt-6 sm:px-6 lg:mb-60 lg:px-4">
        <div className="rounded-xl bg-white py-16 shadow-lg">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-left text-2xl font-bold capitalize text-purple dark:text-white lg:text-4xl">
              Health Program
            </h1>
            <div className="flex justify-center mb-6 -ml-60">
              <span className="inline-block h-2 w-40 rounded-full bg-orange lg:hidden"></span>
              <span className="hidden lg:inline-block h-2 w-40 rounded-full bg-orange"></span>
            </div>
            <p className="text-base text-black mb-2">
              General screening and referral services for the rural poor
              including malaria, HIV, Vision, Blood Pressure, Diabetes and more
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthOne;
