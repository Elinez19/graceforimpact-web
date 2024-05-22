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
    imgSrc: "/images/board/board-img-5.svg",
    title: "Our Commitment to Support Changemakers",
    description:
      "GFI has made a commitment to empower and support new generations of leaders who will shape the communities we all want to live in – young leaders who grow into thriving adults and will influence systems change, bridge social divides and give back.Through this collective effort, we can engage more young people and deepen their impact based on the needs and opportunities in their individual communities.",
    memberId: "1",
  },
  {
    imgSrc: "/images/board/board-img-5.svg",
    title: "EXECUTIVE V.P./CHIEF NETWORK EXPERIENCE OFFICER",
    description: "Shawn Borzelleri",
    memberId: "2",
  },
  // Add more sections with memberId for each board member
];

const VisionThree = () => {
  return (
    <div className="relative overflow-hidden bg-white py-16 space-y-24">
      {sections.slice(0, 1).map((section, index) => (
        <div key={index} className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 bg-gray-100 border border-gray-300 rounded-lg">
            <div
              className={`mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ${
                index % 2 === 1 ? "lg:col-start-2" : ""
              }`}>
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-red-700">
                    {section.title}
                  </h2>
                  <div className="mt-2 flex justify-center -ml-90">
                    <span className="inline-block h-2 w-30 rounded-full bg-orange"></span>
                  </div>
                  <p className="mt-4 text-lg text-gray-700">
                    {section.description}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={`board/${section.memberId}`}
                      className="inline-flex rounded-lg bg-red-700 px-18 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-700 hover:bg-red-700 hover:ring-red-700"
                      passHref>
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 flex justify-center items-center lg:block">
              <div className="border border-gray-300 rounded-lg overflow-hidden max-w-full lg:max-w-none">
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

export default VisionThree;
