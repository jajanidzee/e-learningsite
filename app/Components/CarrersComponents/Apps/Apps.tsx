import React from "react";
import AndroidImg from "../../../../public/Android.png";
import IosImg from "../../../../public/Ios.png";
import Image from "next/image";
const Apps = () => {
  return (
    <div className="w-[1682px]  bg-[#252641] relative -top-[55px] rounded-[30px] pt-[71px] pb-[84px] pl-[100px] pr-[88px] flex justify-between items-center ml-[118px]">
      <p className="font-[Poppins] font-semibold text-[36px] text-[#fff]">
        APP is available for free
      </p>
      <div className="flex gap-[24px]">
        <button className="w-[254px] px-[26px] py-[14px] bg-[#29B9E7] rounded-[12px] flex items-center justify-between ">
          <Image
            src={AndroidImg}
            alt="AndroidImg"
            className="w-[34px] h-[34px]"
          ></Image>
          <p className="font-[Poppins] font-semibold text-[24px] text-[#fff]">
            Android APP
          </p>
        </button>
        <button className="w-[254px] px-[33px] pt-[11px] pb-[11px] bg-[#49BBBD] rounded-[12px] flex items-center justify-between">
          {" "}
          <Image
            src={IosImg}
            alt="IosImg"
            className="w-[30px] h-[30px]"
          ></Image>
          <p className="font-[Poppins] font-semibold text-[24px] text-[#fff]">
            Android APP
          </p>
        </button>
      </div>
    </div>
  );
};

export default Apps;
