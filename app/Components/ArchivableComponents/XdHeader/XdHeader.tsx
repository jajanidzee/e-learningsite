import React from "react";
import MiniClockImg from "../../../../public/MiniClock.svg";
import Image from "next/image";
const XdHeader = () => {
  return (
    <div className="bg-[#49BBBD] pt-[26px] pb-[30px] pl-[60px] pr-[50px] w-full">
      <h3 className="font-[Poppins] font-normal text-[44px] text-[#fff]">
        Learn about Adobe XD & Prototyping
      </h3>
      <div className="flex justify-between">
        <p className="font-[Poppins] font-normal text-[24px] text-[#fff] mt-[5px]">
          Introduction about XD
        </p>
        <div className="flex items-center gap-[10px]">
          <Image src={MiniClockImg} alt="MiniClockImg"></Image>
          <p className="font-[Poppins] font-normal text-[24px] text-[#fff]">
            1 hour
          </p>
        </div>
      </div>
    </div>
  );
};

export default XdHeader;
