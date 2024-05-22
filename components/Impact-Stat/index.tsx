const ImpactStat = () => {
  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="h-[32rem] bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 py-10">
          <h1 className="text-center text-2xl font-semibold capitalize text-gray-800 dark:text-white lg:text-3xl">
            Our Impact Numbers
          </h1>

          <div className="mx-auto mt-6 flex justify-center">
            <span className="inline-block h-1 w-40 rounded-full bg-orange"></span>
            <span className="inline-block h-1 w-10 rounded-full bg-purple"></span>
            <span className="inline-block h-1 w-10 rounded-full bg-purple"></span>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>
        </div>

        <div className="row-gap-5 sm:row-gap-6 mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <a href="/" aria-label="View Item">
            <div className="relative transform overflow-hidden rounded shadow-lg transition duration-200 hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="h-56 w-full object-cover md:h-64 xl:h-80"
                src="/images/hero/banner-5.png"
                alt=""
              />
              <div className="absolute inset-0 bg-purple  px-6 py-4 opacity-75">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Mona Lisa
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Painted between 1503 and 1517, Da Vinci’s alluring portrait
                  has been dogged by two questions since the day it was made:
                  Who’s the subject and why is she smiling?
                </p>
              </div>
            </div>
          </a>
          <a href="/" aria-label="View Item">
            <div className="relative transform overflow-hidden rounded shadow-lg transition duration-200 hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="h-56 w-full object-cover md:h-64 xl:h-80"
                src="/images/hero/banner-5.png"
                alt=""
              />
              <div className="absolute inset-0 bg-orange px-6 py-4 opacity-75">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  The Starry Night
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Vincent Van Gogh’s most popular painting, The Starry Night was
                  created by Van Gogh at the asylum in Saint-Rémy, where he’d
                  committed himself in 1889.
                </p>
              </div>
            </div>
          </a>
          <a href="/" aria-label="View Item">
            <div className="relative transform overflow-hidden rounded shadow-lg transition duration-200 hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="h-56 w-full object-cover md:h-64 xl:h-80"
                src="/images/hero/banner-5.png"
                alt=""
              />
              <div className=" absolute inset-0 bg-purple px-6 py-4 opacity-75">
                <p className="mb-4 text-lg font-bold text-gray-100">The Kiss</p>
                <p className="text-sm tracking-wide text-gray-300">
                  Opulently gilded and extravagantly patterned, The Kiss, Gustav
                  Klimt’s fin-de-siècle portrayal of intimacy, is a mix of
                  Symbolism and Vienna Jugendstil, the Austrian variant of Art
                  Nouveau.
                </p>
              </div>
            </div>
          </a>
          <a href="/" aria-label="View Item">
            <div className="relative transform overflow-hidden rounded shadow-lg transition duration-200 hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="h-56 w-full object-cover md:h-64 xl:h-80"
                src="/images/hero/banner-5.png"
                alt=""
              />
              <div className="absolute inset-0 bg-orange  px-6 py-4 opacity-75">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  The Harvesters
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Bruegel’s fanfare for the common man is considered one of the
                  defining works of Western art. This composition was one of six
                  created on the theme of the seasons.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImpactStat;
