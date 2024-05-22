import Breadcrumb from "@/components/Common/Breadcrumb";
import MissionGallery from "@/components/Mission/MissionGallery";
import MissionTwo from "@/components/Mission/MissionTwo";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";
import WhatWeDoOne from "@/components/WhatWeDo/WhatWeDoOne";
import WhatWeDoThree from "@/components/WhatWeDo/Health";
import WhatWeDoTwo from "@/components/WhatWeDo/WhatWeDoTwo";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import Health from "@/components/WhatWeDo/Health";
import SectionTitleCard from "@/components/SectionTitleCard/SectionTitleCard";
import Education from "@/components/WhatWeDo/Education";
import Agriculture from "@/components/WhatWeDo/Agriculture";

const WhatWeDoPage = () => {
  return (
    <>
      <div className="relative min-h-screen">
        {/* Breadcrumb */}
        <div className="absolute top-0 right-0 mt-10 mr-4 z-10">
          <Breadcrumb pageName="Mission" description="Our Mission" />
        </div>

        {/* Main content */}
        <div className="relative z-0">
          <WhatWeDo />
        </div>

        {/* MissionOne component */}
        <div className="absolute -bottom-90 left-0  ml-8 z-10 w-full max-w-lg">
          <WhatWeDoOne />
        </div>
      </div>
      <WhatWeDoTwo />
      <Health />
      <SectionTitleCard />
      <Education />
      <Agriculture />
      <WhoWeAre />
    </>
  );
};

export default WhatWeDoPage;
