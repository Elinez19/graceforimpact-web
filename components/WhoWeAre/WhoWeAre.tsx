const WhoWeAre = () => {
  return (
    <div className="py-16">
      <div className="xl:container mx-auto space-y-12 px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2">
            <h2 className="mt-4 text-2xl font-bold text-black dark:text-white md:text-4xl">
              Who We Are
            </h2>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <p className="text-sm text-gray-900">
              Grace For Impact - GFI is a non profit health care organization
              with their headquarter office in Dallas, Texas, USA.
            </p>
          </div>
        </div>
        <div className="mt-16 grid gap-8 sm:w-2/3 sm:mx-auto md:w-full md:grid-cols-2 md:-mx-8 lg:grid-cols-3">
          {/* Cards content */}
          {/* First Card */}
          <div className="relative">
            <div
              className="p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg"
              style={{
                backgroundImage: "url('/images/hero/bg-img-2.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                paddingTop: "6.25%", // Aspect ratio (9:16)
              }}>
              <div className="bg-white dark:bg-gray-800 bg-opacity-70 p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-semibold text-red-700 dark:text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Grace For Impact - GFI is a non profit health care
                  organization with their headquarter office in Dallas, Texas,
                  USA. The organization is also registered as a non governmental
                  organization in the United Kingdom, Ghana and Nigeria. Grace
                </p>
              </div>
            </div>
          </div>
          {/* Second Card */}
          <div className="relative">
            <div
              className="p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg"
              style={{
                backgroundImage: "url('/images/hero/bg-img-2.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                paddingTop: "6.25%", // Aspect ratio (9:16)
              }}>
              <div className="bg-white dark:bg-gray-800 bg-opacity-70 p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-semibold text-red-700 dark:text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Grace For Impact - GFI is a non profit health care
                  organization with their headquarter office in Dallas, Texas,
                  USA. The organization is also registered as a non governmental
                  organization in the United Kingdom, Ghana and Nigeria. Grace
                </p>
              </div>
            </div>
          </div>
          {/* Third Card */}
          <div className="relative">
            <div
              className="p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg"
              style={{
                backgroundImage: "url('/images/hero/bg-img-2.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                paddingTop: "6.25%", // Aspect ratio (9:16)
              }}>
              <div className="bg-white dark:bg-gray-800 bg-opacity-70 p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-semibold text-red-700 dark:text-white mb-4">
                  Our Impact
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Grace For Impact - GFI is a non profit health care
                  organization with their headquarter office in Dallas, Texas,
                  USA. The organization is also registered as a non governmental
                  organization in the United Kingdom, Ghana and Nigeria. Grace
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
