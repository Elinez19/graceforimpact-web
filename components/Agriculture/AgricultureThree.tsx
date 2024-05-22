"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";
import Link from "next/link";

interface AgricultureData {
  imgSrc: string;
  videoId: string;
  title: string;
  description: string;
  memberId: string;
}

const sections: AgricultureData[] = [
  {
    imgSrc: "/images/board/board-img-5.svg",
    videoId: "L61p2uyiMSo",
    title: "Our Commitment to Support Rural Farmers",
    description:
      "GFI has made a commitment to empower and support new generations of leaders who will shape the communities we all want to live in – young leaders who grow into thriving adults and will influence systems change, bridge social divides and give back. Through this collective effort, we can engage more young people and deepen their impact based on the needs and opportunities in their individual communities.",
    memberId: "1",
  },
  {
    imgSrc: "/images/board/board-img-5.svg",
    videoId: "L61p2uyiMSo",
    title: "EXECUTIVE V.P./CHIEF NETWORK EXPERIENCE OFFICER",
    description: "Shawn Borzelleri",
    memberId: "2",
  },
  // Add more sections with memberId and videoId for each board member
];

const AgricultureThree = () => {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  const handleOpenModal = (videoId: string) => {
    setVideoId(videoId);
    setOpen(true);
  };

  return (
    <div className="relative overflow-hidden bg-white py-16 space-y-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-purple">
          Agricultural Empowerment Programs
        </h1>
        <p className="mt-2 text-lg text-purple">
          Empowering rural farmers to reach their full potential.
        </p>
      </div>
      {sections.slice(0, 1).map((section, index) => (
        <div key={index} className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 bg-gray-100 border border-gray-300 rounded-lg">
            <div className="mt-12 sm:mt-16 lg:mt-0 flex justify-center items-center lg:block">
              <div className="relative border border-gray-300 rounded-lg overflow-hidden max-w-full lg:max-w-none">
                <Image
                  src={section.imgSrc}
                  alt={section.title}
                  width={847}
                  height={786}
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    aria-label="video play button"
                    onClick={() => handleOpenModal(section.videoId)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-purple transition hover:bg-opacity-100">
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current">
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-purple">
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
                      href="/blog/blog-details"
                      className="inline-flex rounded-lg bg-purple px-18 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-purple hover:bg-purple/95 hover:ring-purple"
                      passHref>
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default AgricultureThree;
