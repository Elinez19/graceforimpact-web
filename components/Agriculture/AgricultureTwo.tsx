import Image from "next/image";
import Link from "next/link";

const AgricultureTwo = () => {
  const cardData = [
    {
      title: "Rural Agricultural Transformation Program",
      description:
        "Program on Agricultural and Rural Transformation for Nutrition, Entrepreneurship, and Resilience",
      imageSrc: "/images/board/board-img-5.svg",
      link: "/blog/blog-details",
    },
    {
      title: "Agricultural Vocational Training",
      description:
        "Rural Youth Vocational Training, Employment and Entrepreneurship Support Project",
      imageSrc: "/images/board/board-img-5.svg",
      link: "/blog/blog-details",
    },
    {
      title: "Agricultural Trade Project",
      description:
        "Agriculture Services Programme for an Inclusive Rural Economy and Agricultural Trade",
      imageSrc: "/images/board/board-img-5.svg",
      link: "/blog/blog-details",
    },
  ];

  return (
    <div className="py-12">
      <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="mb-12 space-y-2 ml-15">
          <h2 className="text-3xl text-purple font-bold dark:text-white">
            Our Agriculture Empowerment Outreach <br />
            <span className="text-3xl font-bold text-purple md:text-4xl">
              Programs
            </span>
          </h2>
          <div className="flex mb-6 -ml-0">
            <span className="inline-block h-2 w-40 rounded-full bg-orange lg:hidden"></span>
            <span className="hidden lg:inline-block h-2 w-40 rounded-full bg-gradient-to-r from-orange via-red-700 to-orange"></span>
          </div>
          <p className="lg:w-6/12 text-gray-600 dark:text-gray-300 text-left">
            Despite the African continent holding the world’s most arable land
            and the agricultural sector employing over half of the population,
            Africa is still struggling with food production and food insecurity.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={card.imageSrc}
                  alt={`${card.title} cover`}
                  loading="lazy"
                  width={1000}
                  height={667}
                  className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 relative">
                <Link href={card.link} passHref>
                  <h3 className="text-2xl font-semibold text-orange dark:text-white cursor-pointer">
                    {card.title}
                  </h3>
                </Link>
                <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  {card.description}
                </p>
                <Link href={card.link} passHref>
                  <span className="inline-block px-6 py-2 text-white bg-purple rounded-full hover:bg-purple-700 transition cursor-pointer">
                    Read more
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgricultureTwo;
