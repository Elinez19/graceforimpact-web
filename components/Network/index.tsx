import Image from "next/image";

interface datatype {
  imgSrc: string;
  country: string;
  paragraph: string;
}

const Aboutdata: datatype[] = [
  {
    imgSrc: "/images/network/bangladesh.svg",
    country: "Bangladesh",
    paragraph: "Event madness gathering innoies, & tech enthusiasts in Speced.",
  },
  {
    imgSrc: "/images/network/america.svg",
    country: "United States",
    paragraph: "Event madness gathering innoies, & tech enthusiasts in Speced.",
  },
  {
    imgSrc: "/images/network/australia.svg",
    country: "Australia",
    paragraph: "Event madness gathering innoies, & tech enthusiasts in Speced.",
  },
  {
    imgSrc: "/images/network/china.svg",
    country: "China",
    paragraph: "Event madness gathering innoies, & tech enthusiasts in Speced.",
  },
];

const network = () => {
  return (
    <div className="bg-white" id="project">
      <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h3 className="text-4xl sm:text-6xl font-semibold text-center my-10 lh-81 text-black">
          GFI Global Impact
          <br /> and work .
        </h3>

        <Image
          src={"/images/network/map.svg"}
          alt={"map-image"}
          width={1400}
          height={800}
        />

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-4 lg:gap-x-8">
          {Aboutdata.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-xl">
              <div className="flex justify-start items-center gap-2">
                <Image
                  src={item.imgSrc}
                  alt={item.imgSrc}
                  width={55}
                  height={55}
                  className="mb-2"
                />
                <h4 className="text-xl font-medium text-black">
                  {item.country}
                </h4>
              </div>
              <hr />
              <h4 className="text-lg font-normal text-black my-2">
                {item.paragraph}
              </h4>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default network;
