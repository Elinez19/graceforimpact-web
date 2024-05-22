import Breadcrumb from "@/components/Common/Breadcrumb";
import OurBoard from "@/components/Board/Board";
import BoardOne from "@/components/Board/BoardOne";
import BoardThree from "@/components/Board/BoardThree";
import SectionTitleCard from "@/components/SectionTitleCard/SectionTitleCard";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import Team from "@/components/Team/Team";
import Chairman from "@/components/Board-Members/Chairman";
import ChairmanDetails from "@/components/Board-Members/Chairman-details";
import BoardTitle from "@/components/Board-Members";
import VisionThree from "@/components/Vision/VisionThree";

const BoardMember = () => {
  return (
    <>
      <div className="relative min-h-screen">
        {/* Breadcrumb */}
        {/* <div className="absolute top-0 right-0 mt-10 mr-4 z-10">
          <Breadcrumb pageName="Board" description="Board of Directors" />
        </div> */}

        {/* Main content */}
        <div className="relative z-0">
          <Chairman />
        </div>

        {/* BoardOne component */}
        <div className="absolute -bottom-90 left-0  ml-8 z-10 w-full max-w-lg">
          <BoardTitle />
        </div>
      </div>
      <ChairmanDetails />
      {/* <SectionTitleCard /> */}
      <VisionThree />
      <WhoWeAre />
    </>
  );
};

export default BoardMember;