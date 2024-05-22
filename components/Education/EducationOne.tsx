const EducationOne = () => {
  return (
    <>
      <section className="mx-auto mt-2 max-w-7xl px-4 sm:mt-6 sm:px-6 lg:mb-60 lg:px-4">
        <div className="rounded-xl bg-white py-16 shadow-lg">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-left text-2xl font-bold capitalize text-purple dark:text-white lg:text-4xl">
              Education Program
            </h1>
            <div className="flex justify-center mb-6 -ml-60">
              <span className="inline-block h-2 w-40 rounded-full bg-orange lg:hidden"></span>
              <span className="hidden lg:inline-block h-2 w-40 rounded-full bg-orange"></span>
            </div>
            <p className="text-base text-black mb-2">
              General education support to rural k-12 schools and orphanages,
              providing scholarships for school fees, uniforms and supplies
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationOne;
