import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";
type Props = {
  imagee: StaticImageData;
  htext: string;
  ptext: string;
};
const StudentDivs = ({ imagee, htext, ptext }: Props) => {
  return (
    <div className="w-[384px] pt-[35px] pb-[59px] px-[28px] rounded-[20px] bg-[#ffffff] text-center flex flex-col items-center justify-center  ">
      <Image
        src={imagee}
        alt="imagee"
        className=" w-[118px] h-[118px] rounded-[6px]"
      ></Image>
      <h4 className="font-[Poppins] font-semibold text-[24px] text-[#2D3436] mt-[20px] ">
        {htext}
      </h4>
      <p className="font-[Poppins] font-normal text-[18px] text-[#696984] mt-[19px]">
        {ptext}
      </p>
    </div>
  );
};

export default StudentDivs;
