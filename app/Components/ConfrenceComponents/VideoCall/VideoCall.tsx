import React from "react";
import HeadPhoneGirlImg from "../../../../public/HeadPhoneGirl.png";
import IndianGirlImg from "../../../../public/IndianGirl.png";
import BoyWithGlassesImg from "../../../../public/BoyWithGlasses.png";
import Image from "next/image";
const VideoCall = () => {
  return (
    <div className="bg-[url('/TeacherCall.png')] w-[1186px] h-[1076px] mt-[39px] relative">
      <div className="absolute right-[53px] top-[30px] flex flex-col gap-[16.7px]">
        <Image src={HeadPhoneGirlImg} alt="HeadPhoneGirlImg"></Image>
        <Image src={IndianGirlImg} alt="IndianGirlImg"></Image>
        <Image src={BoyWithGlassesImg} alt="BoyWithGlassesImg"></Image>
      </div>
    </div>
  );
};

export default VideoCall;
