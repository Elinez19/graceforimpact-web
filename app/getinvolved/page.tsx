import Breadcrumb from "@/components/Common/Breadcrumb";
import GetInvolved from "@/components/GetInvolved/GetInvolved";
import GetInvolvedGallery from "@/components/GetInvolved/GetInvolvedGallery";
import GetInvolvedOne from "@/components/GetInvolved/GetInvolvedOne";
import GetInvolvedThree from "@/components/GetInvolved/GetInvolvedThree";
import GetInvolvedTwo from "@/components/GetInvolved/GetInvolvedTwo";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";

const GetInvolvedPage = () => {
  return (
    <>
      <div className="relative min-h-screen">
        {/* Breadcrumb */}
        <div className="absolute top-0 right-0 mt-10 mr-4 z-10">
          <Breadcrumb pageName="Mission" description="Our Mission" />
        </div>

        {/* Main content */}
        <div className="relative z-0">
          <GetInvolved />
        </div>

        {/* MissionOne component */}
        <div className="absolute -bottom-90 left-0  ml-8 z-10 w-full max-w-lg">
          <GetInvolvedOne />
        </div>
      </div>
      <GetInvolvedThree />
      <GetInvolvedTwo />
      <GetInvolvedGallery />
      <WhoWeAre />
    </>
  );
};

export default GetInvolvedPage;
