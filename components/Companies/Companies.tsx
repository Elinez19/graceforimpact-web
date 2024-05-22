"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// IMAGES DATA FOR CAROUSEL
const data = [
  {
    imgSrc: "/images/carousel/google.svg",
  },
  {
    imgSrc: "/images/carousel/garnier.png",
  },
  {
    imgSrc: "/images/carousel/slack.png",
  },
  {
    imgSrc: "/images/carousel/udemy.png",
  },
  {
    imgSrc: "/images/carousel/google.svg",
  },
  {
    imgSrc: "/images/carousel/garnier.png",
  },
  {
    imgSrc: "/images/carousel/slack.png",
  },
  {
    imgSrc: "/images/carousel/udemy.png",
  },
];

// CAROUSEL SETTINGS
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};

const Companies = () => {
  return (
    <div className="text-center py-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            Our Trusted Partners
          </h2>
          <p className="text-lg text-gray-600">
            We collaborate with the best in the industry
          </p>
        </div>
        <Slider {...settings}>
          {data.map((item, i) => (
            <div key={i}>
              <Image
                src={item.imgSrc}
                alt={`Image ${i}`}
                width={150}
                height={150}
              />
            </div>
          ))}
        </Slider>
        <hr className="mt-8" />
      </div>
    </div>
  );
};

export default Companies;
