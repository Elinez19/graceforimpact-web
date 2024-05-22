import Image from "next/image";
import Link from "next/link";

const Education = () => {
  return (
    <div className="py-12">
      <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="mb-12 space-y-2 ml-15">
          <h2 className="text-xl text-purple dark:text-white">
            AREA OF IMPACT <br />
            <span className="text-3xl font-bold text-red-700 md:text-4xl">
              Education
            </span>
          </h2>
          <div className="flex  mb-6 -ml-0">
            <span className="inline-block h-2 w-40 rounded-full bg-orange lg:hidden"></span>
            <span className="hidden lg:inline-block h-2 w-40 rounded-full bg-gradient-to-r from-orange via-red-700 to-orange"></span>
          </div>
          <p className="lg:w-6/12 text-gray-600 dark:text-gray-300 text-left">
            Empowering young people to reach their full potential.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/images/board/board-img-5.svg"
                alt="art cover"
                loading="lazy"
                width={1000}
                height={667}
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-orange dark:text-white">
                K-12 Education Support
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                General education support to rural k-12 schools and orphanages,
                providing scholarships for school fees, uniforms and supplies
              </p>
              <Link href="/blog/blog-details">
                <span className="text-red-700 cursor-pointer">Read more</span>
              </Link>
            </div>
          </div>
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/images/board/board-img-5.svg"
                alt="art cover"
                loading="lazy"
                width={1000}
                height={667}
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-orange dark:text-white">
                Education Infrastructure
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Building Schools and learning centers to provide the necessary
                Infrastructure for the provision of high quality education
              </p>
              <Link href="/blog/blog-details">
                <span className="text-red-700 cursor-pointer">Read more</span>
              </Link>
            </div>
          </div>
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/images/board/board-img-5.svg"
                alt="art cover"
                loading="lazy"
                width={1000}
                height={667}
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-orange dark:text-white">
                Scholarships and Fellowships
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Higher education scholarships and Fellowships provided to the
                most promising student interested in health, education and other
                closely related fields
              </p>
              <Link href="/blog/blog-details">
                <span className="text-red-700 cursor-pointer">Read more</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
