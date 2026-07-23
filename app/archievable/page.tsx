import React from "react";
import Events from "../Components/PrototypingComponents/Events/Events";
import XdHeader from "../Components/ArchivableComponents/XdHeader/XdHeader";
import CourseVideo from "../Components/ArchivableComponents/CourseVideo/CourseVideo";
import CourseFor from "../Components/ArchivableComponents/CourseFor/CourseFor";
import Review from "../Components/ArchivableComponents/Review/Review";
import Bought from "../Components/ArchivableComponents/Bought/Bought";

const archivablerouting = () => {
  return (
    <div className=" w-[1912px] m-auto flex">
      <div>
        {" "}
        <Events />
        <Events />
      </div>
      <div className=" bg-[#9dccff73]">
        <XdHeader />
        <CourseVideo />
        <CourseFor />
        <Review />
        <Bought />
      </div>
    </div>
  );
};

export default archivablerouting;
