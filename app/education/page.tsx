import Breadcrumb from "@/components/Common/Breadcrumb";
import Education from "@/components/Education/Education";
import EducationVidGallery from "@/components/Education/EducationGallery";
import EducationOne from "@/components/Education/EducationOne";
import EducationThree from "@/components/Education/EducationThree";
import EducationTwo from "@/components/Education/EducationTwo";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";

const EducationPage = () => {
  return (
    <>
      <div className="relative min-h-screen">
        {/* Breadcrumb */}
        <div className="absolute top-0 right-0 mt-10 mr-4 z-10">
          <Breadcrumb pageName="Vision" description="Our Vision" />
        </div>

        {/* Main content */}
        <div className="relative z-0">
          <Education />
        </div>

        {/* VisionOne component */}
        <div className="absolute -bottom-90 left-0  ml-8 z-10 w-full max-w-lg">
          <EducationOne />
        </div>
      </div>
      <EducationTwo />
      <EducationThree />
      <EducationVidGallery />
      <WhoWeAre />
    </>
  );
};

export default EducationPage;
