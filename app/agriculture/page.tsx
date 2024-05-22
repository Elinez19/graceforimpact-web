import Agriculture from "@/components/Agriculture/Agriculture";
import AgricultureVidGallery from "@/components/Agriculture/AgricultureGallery";
import AgricultureOne from "@/components/Agriculture/AgricultureOne";
import AgricultureThree from "@/components/Agriculture/AgricultureThree";
import AgricultureTwo from "@/components/Agriculture/AgricultureTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";

const AgriculturePage = () => {
  return (
    <>
      <div className="relative min-h-screen">
        {/* Breadcrumb */}
        <div className="absolute top-0 right-0 mt-10 mr-4 z-10">
          <Breadcrumb pageName="Vision" description="Our Vision" />
        </div>

        {/* Main content */}
        <div className="relative z-0">
          <Agriculture />
        </div>

        <div className="absolute -bottom-90 left-0  ml-8 z-10 w-full max-w-lg">
          <AgricultureOne />
        </div>
      </div>
      <AgricultureTwo />
      <AgricultureThree />
      <AgricultureVidGallery />
      <WhoWeAre />
    </>
  );
};

export default AgriculturePage;
