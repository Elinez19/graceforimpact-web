/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const HomeTwo = () => {
  return (
    <section className=" bg-purple/75 w-full bg-[url('/images/hero/banner-2.svg')] bg-cover bg-fixed bg-center bg-no-repeat bg-blend-multiply">
      <div className="mx-auto  px-4 py-24 text-center lg:py-16">
        <h1 className="mt-14 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          Grace For Impact
        </h1>
        <p className="mt-10 text-lg font-normal text-white sm:px-16 lg:px-48 lg:text-xl">
          Compassionate Excellence Worldwide
        </p>
        <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="bg-orange hover:bg-purple inline-flex items-center justify-center rounded-lg px-16 py-4 text-center text-base font-medium text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Join Us Make Imapct
            <svg
              className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg border border-white px-5 py-3 text-center text-base font-medium text-white hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-400 sm:ms-4">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeTwo;
