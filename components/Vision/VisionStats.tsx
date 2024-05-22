interface CardDataType {
  heading: string;
  percent: string;
  subheading: string;
}

const cardData: CardDataType[] = [
  {
    percent: "11 MILLION",
    heading: "community members served annually",
    subheading:
      "Across the U.S., our Ys reach millions of people in 10,000 communities.",
  },
  {
    percent: "4 MILLION",
    heading: "Project completed",
    subheading:
      "We provide millions of pounds of groceries to families each month.",
  },
  {
    percent: "10,000",
    heading: "camp programs nationwide",
    subheading:
      "Our day and overnight camps empowered kids by building lifelong skills, confidence and friendships.",
  },
  {
    percent: "2,650",
    heading: "Ys across the U.S.",
    subheading:
      "Ys reach millions of people across 50 states, plus the District of Columbia and Puerto Rico.",
  },
];

const VisionStats = () => {
  return (
    <div className="mx-auto max-w-7xl py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-gray-900">Our Impact</h2>
        <p className="mt-2 text-lg text-gray-600">
          Each year, we strive to transform lives and strengthen communities
          worldwide.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-y-20 gap-x-5">
        {cardData.map((items, i) => (
          <div className="flex flex-col justify-center items-center" key={i}>
            <div className="text-4xl lg:text-6xl text-purple font-semibold text-center mt-5 bg-gray-200 p-2 w-96 rounded-lg">
              {items.percent}
            </div>
            <h3 className="text-2xl text-black font-semibold text-center lg:mt-6">
              {items.heading}
            </h3>
            <p className="text-lg font-normal text-black text-center text-opacity-50 mt-2">
              {items.subheading}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisionStats;
