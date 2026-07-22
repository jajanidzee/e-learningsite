import React from "react";
import Events from "../Components/PrototypingComponents/Events/Events";
import XdHeader from "../Components/ArchivableComponents/XdHeader/XdHeader";
import CourseVideo from "../Components/ArchivableComponents/CourseVideo/CourseVideo";

const archivablerouting = () => {
  return (
    <div className=" w-[1912px] m-auto flex">
      <Events />
      <div className="px-[50px]">
        <XdHeader />
        <CourseVideo />
      </div>
    </div>
  );
};

export default archivablerouting;
