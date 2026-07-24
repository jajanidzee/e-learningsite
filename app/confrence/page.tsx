import React from "react";
import Header from "../Components/Header/Header";
import Meeting from "../Components/ConfrenceComponents/Meeting/Meeting";
import VideoCall from "../Components/ConfrenceComponents/VideoCall/VideoCall";
import Contents from "../Components/ConfrenceComponents/Contents/Contents";

const confrencerouting = () => {
  return (
    <div className=" w-[1912px] m-auto">
      <Header />
      <div className="ml-[97px] flex gap-[35px] mt-[50px]">
        <div>
          <Meeting />
          <VideoCall />
        </div>
        <div>
          <Contents />
        </div>
      </div>
    </div>
  );
};

export default confrencerouting;
