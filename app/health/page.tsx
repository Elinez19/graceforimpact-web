import Breadcrumb from "@/components/Common/Breadcrumb";
import Health from "@/components/Health/Health";
import HealthVidGallery from "@/components/Health/HealthGallery";
import HealthOne from "@/components/Health/HealthOne";
import HealthThree from "@/components/Health/HealthThree";
import HealthTwo from "@/components/Health/HealthTwo";
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
          <Breadcrumb pageName="Health" description="Health" />
        </div>

        {/* Main content */}
        <div className="relative z-0">
          <Health />
        </div>

        {/* VisionOne component */}
        <div className="absolute -bottom-90 left-0  ml-8 z-10 w-full max-w-lg">
          <HealthOne />
        </div>
      </div>
      <HealthTwo />
      <HealthThree />
      <HealthVidGallery />
      <WhoWeAre />
    </>
  );
};

export default Vision;
