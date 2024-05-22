import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team/Team";
import OurVision from "@/components/Vision/Vision";
import VisionOne from "@/components/Vision/VisionOne";
import VisionStats from "@/components/Vision/VisionStats";
import VisionThree from "@/components/Vision/VisionThree";
import VisionTwo from "@/components/Vision/VisionTwo";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";

const Vision = () => {
  return (
    <>
      <div className="relative min-h-screen">
        {/* Breadcrumb */}
        <div className="absolute top-0 right-0 mt-10 mr-4 z-10">
          <Breadcrumb pageName="Vision" description="Our Vision" />
        </div>

        {/* Main content */}
        <div className="relative z-0">
          <OurVision />
        </div>

        {/* VisionOne component */}
        <div className="absolute -bottom-90 left-0  ml-8 z-10 w-full max-w-lg">
          <VisionOne />
        </div>
      </div>
      <VisionTwo />
      <VisionStats />
      <VisionThree />
      <WhoWeAre />
    </>
  );
};

export default Vision;
