import React from "react";
import HeadPhoneGirlImg from "../../../../public/HeadPhoneGirl.png";
import IndianGirlImg from "../../../../public/IndianGirl.png";
import BoyWithGlassesImg from "../../../../public/BoyWithGlasses.png";
import CameraImg from "../../../../public/Camera.svg";
import MicrophoneImg from "../../../../public/Microphone.svg";
import DeclineImg from "../../../../public/Decline.svg";
import MonitorImg from "../../../../public/Monitor.svg";
import LeaveImg from "../../../../public/Leave.svg";
import Link from "next/link";
import Image from "next/image";
import CallDivs from "../CallDivs/CallDivs";
const VideoCall = () => {
  return (
    <div className="bg-[url('/TeacherCall.png')] w-[1186px] h-[1076px] mt-[39px] relative">
      <div className="absolute right-[53px] top-[30px] flex flex-col gap-[16.7px]">
        <Image src={HeadPhoneGirlImg} alt="HeadPhoneGirlImg"></Image>
        <Image src={IndianGirlImg} alt="IndianGirlImg"></Image>
        <Image src={BoyWithGlassesImg} alt="BoyWithGlassesImg"></Image>
      </div>
      <div className="w-[1085px] rounded-[30px] bg-[#E6F2FF] py-[37.36px] px-[283px] flex gap-[30px] absolute bottom-[24px] left-[50px]">
        <Link href="https://www.facebook.com/" target="blank">
          {" "}
          <CallDivs imagee={CameraImg} />
        </Link>
        <Link href="https://www.facebook.com/" target="blank">
          <CallDivs imagee={MicrophoneImg} />
        </Link>
        <Link href="https://www.facebook.com/" target="blank">
          <CallDivs imagee={DeclineImg} />
        </Link>
        <Link href="https://www.facebook.com/" target="blank">
          <CallDivs imagee={MonitorImg} />
        </Link>
        <Link href="https://www.facebook.com/" target="blank">
          <CallDivs imagee={LeaveImg} />
        </Link>
      </div>
    </div>
  );
};

export default VideoCall;
