import Image from "next/image";
import { PiCheckCircleDuotone } from "react-icons/pi";

const HomeOne = () => {
  return (
    <section className="mx-auto mt-12 max-w-7xl px-4 sm:mt-6 sm:px-6 lg:-mt-12 lg:px-4">
      <div className="rounded-xl  bg-white py-16 shadow-lg">
        <div className="mx-auto max-w-5xl  px-4 sm:px-6 lg:px-8">
          <p className="text-base text-black">
            Grace For Impact - GFI is a non profit health care organization with
            their headquarter office in Dallas, Texas, USA. The organization is
            also registered as a non governmental organization in the United
            Kingdom, Ghana and Nigeria. Grace For Impact (GFI) is a
            multi-dimensional ministry that demonstrates Gods love and
            compassion to the sick and underprivileged.
          </p>
          <p className="mt-4 text-base text-black">
            GFI has been providing health care to the underserved annually in
            different parts of Nigeria since 2005. Over the years, the
            organization observed through data collected that nearly 80% of the
            patients encountered have a form of eye disease. Millions of
            Nigerians are today disabled due to preventable blindness and visual
            impairments.
          </p>
          <p className="mt-4 text-base text-black">
            Grace Project for Impact objective with the eye institute is to
            develop meaningful and affordable solutions for proper eye care and
            eliminate visual impairment and avoidable blindness.
          </p>
          {/* <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange text-white">
                <PiCheckCircleDuotone size={36} />
              </div>
              <div className="mt-5">
                <p className="mt-2 text-base text-black">
                  The physical, psychological and economic burden associated
                  with blindness and visual impairment does not only affect the
                  individual, but the family as well as the society.
                </p>
              </div>
            </div>
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange text-white">
                <PiCheckCircleDuotone size={36} />
              </div>
              <div className="mt-5">
                <p className="mt-2 text-base text-black">
                  The physical, psychological and economic burden associated
                  with blindness and visual impairment does not only affect the
                  individual, but the family as well as the society.
                </p>
              </div>
            </div>
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange text-white">
                <PiCheckCircleDuotone size={36} />
              </div>
              <div className="mt-5">
                <p className="mt-2 text-base text-black">
                  The physical, psychological and economic burden associated
                  with blindness and visual impairment does not only affect the
                  individual, but the family as well as the society.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="lg:flex-justify mx-auto my-10 flex max-w-7xl flex-col gap-3 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:flex lg:flex-row lg:px-8 xl:mt-28"></div>
    </section>
  );
};

export default HomeOne;
