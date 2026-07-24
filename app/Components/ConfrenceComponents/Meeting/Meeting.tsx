import React from "react";
import SettingsImg from "../../../../public/Settings.svg";
import Image from "next/image";
const Meeting = () => {
  return (
    <div className="w-[1200px] rounded-[26px]  shadow-[0px_5px_10px_0px_grey] py-[35px] pl-[35px] pr-[51px] mt-[50px] flex justify-between">
      {" "}
      <div>
        <h5 className="font-[Poppins] font-semibold text-[#252641] text-[30px]">
          UX/UI Design Confrence Meeting
        </h5>
        <p className="font-[Poppins] font-normal text-[#252641] text-[20px] mt-[11px]">
          9 Lesson 6h 30min
        </p>
      </div>
      <Image src={SettingsImg} alt="SettingsImg"></Image>
    </div>
  );
};

export default Meeting;
