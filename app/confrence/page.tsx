import React from "react";
import Header from "../Components/Header/Header";
import Meeting from "../Components/ConfrenceComponents/Meeting/Meeting";
import VideoCall from "../Components/ConfrenceComponents/VideoCall/VideoCall";

const confrencerouting = () => {
  return (
    <div className=" w-[1912px] m-auto">
      <Header />
      <div className="ml-[97px]">
        <div>
          <Meeting />
          <VideoCall />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default confrencerouting;
