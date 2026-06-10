import React from "react";
import Image, { StaticImageData } from "next/image";
type Props = {
  imagee: StaticImageData;
  maintext: string;
  pfpimage: StaticImageData;
  nametext: string;
  lsntext: string;
};
const LessonDivs = ({
  imagee,
  maintext,
  pfpimage,
  nametext,
  lsntext,
}: Props) => {
  return (
    <div className="pt-[19.6px] pb-[12px] px-[21px] bg-[#fff] rounded-[15px]">
      <Image
        src={imagee}
        alt="imagee"
        className="w-[487.27px] h-[258.38px] rounded-[20px]"
      ></Image>
      <h4 className="font-[Poppins] font-medium text-[24px] text-[#252641] mt-[12.3px]">
        {maintext}
      </h4>
      <div className="flex items-center gap-[5.64px] mt-[28px]">
        <Image
          src={pfpimage}
          alt="pfpimage"
          className="w-[42px] h-[42px] rounded-[100%] "
        ></Image>
        <p className="font-[Poppins] font-medium text-[18px] text-[#000]">
          {nametext}
        </p>
      </div>
      <div className="w-full h-[8px] bg-[#D9D9D9] mt-[25px]">
        <div className="h-full w-3/4 bg-[#49BBBD]"></div>
      </div>
      <p className="font-[Poppins] font-semibold text-[14px] text-[#D9D9D9] mt-[12px] text-end">
        {lsntext}
      </p>
    </div>
  );
};

export default LessonDivs;
