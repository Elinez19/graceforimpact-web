// const sections = [
//   {
//     imgSrc: "/images/board/board-img-1.svg",
//     title: "PRESIDENT AND CEO",
//     description: "Suzanne McCormick",
//   },
//   {
//     imgSrc: "/images/board/board-img-2.svg",
//     title: "EXECUTIVE V.P./CHIEF NETWORK EXPERIENCE OFFICER",
//     description: "Shawn Borzelleri",
//   },
//   {
//     imgSrc: "/images/board/board-img-3.svg",
//     title: "SENIOR V.P./CHIEF GOVERNMENT AFFAIRS OFFICER",
//     description: "Jeff Britt",
//   },
//   {
//     imgSrc: "/images/board/board-img-4.svg",
//     title: "SENIOR V.P./CHIEF INFORMATION OFFICER",
//     description: "Tom Gardner",
//   },
//   {
//     imgSrc: "/images/board/board-img-5.svg",
//     title: "SENIOR V.P./CHIEF DIVERSITY, INCLUSION AND GLOBAL OFFICER",
//     description: "Lynda Gonzales-Chavez",
//   },
// ];

import Image from "next/image";
import Link from "next/link";

interface BoardMember {
  imgSrc: string;
  title: string;
  description: string;
  memberId: string; // Add memberId property
}

const sections: BoardMember[] = [
  {
    imgSrc: "/images/board/board-img-1.svg",
    title: "PRESIDENT AND CEO",
    description: "Suzanne McCormick",
    memberId: "1",
  },
  {
    imgSrc: "/images/board/board-img-2.svg",
    title: "EXECUTIVE V.P./CHIEF NETWORK EXPERIENCE OFFICER",
    description: "Shawn Borzelleri",
    memberId: "2",
  },
  {
    imgSrc: "/images/board/board-img-2.svg",
    title: "EXECUTIVE V.P./CHIEF NETWORK EXPERIENCE OFFICER",
    description: "Shawn Borzelleri",
    memberId: "2",
  },
  {
    imgSrc: "/images/board/board-img-2.svg",
    title: "EXECUTIVE V.P./CHIEF NETWORK EXPERIENCE OFFICER",
    description: "Shawn Borzelleri",
    memberId: "2",
  },
  {
    imgSrc: "/images/board/board-img-2.svg",
    title: "EXECUTIVE V.P./CHIEF NETWORK EXPERIENCE OFFICER",
    description: "Shawn Borzelleri",
    memberId: "2",
  },
  // Add more sections with memberId for each board member
];

const Team = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-32 space-y-24">
      {sections.map((section, index) => (
        <div key={index} className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 bg-gray-100 border border-gray-300 rounded-lg">
            <div
              className={` mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ${
                index % 2 === 1 ? "lg:col-start-2" : ""
              }`}>
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-red-700">
                    {section.title}
                  </h2>
                  <div className="mr-90 mt-2 flex justify-center">
                    <span className="inline-block h-2 w-30 rounded-full bg-orange"></span>
                  </div>
                  <p className="mt-4 text-lg text-gray-700">
                    {section.description}
                  </p>
                  <div className="mt-6">
                    <Link href="/board-members">
                      <div className="inline-flex rounded-lg bg-red-700 px-18 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-700 hover:bg-red-700 hover:ring-red-700">
                        Learn More
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:block mt-12 sm:mt-16 lg:mt-0 flex justify-center items-center">
              <div
                className={`border border-gray-300 rounded-lg overflow-hidden`}
                style={{
                  width: "100%",
                  maxWidth: "847px",
                  maxHeight: "786px",
                  marginTop: "20px",
                }}>
                <Image
                  src={section.imgSrc}
                  alt={section.title}
                  width={847}
                  height={786}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
