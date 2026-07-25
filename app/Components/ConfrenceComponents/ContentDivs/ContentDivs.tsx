import React from "react";
import MiniClockImg from "../../../../public/MiniClock.svg";
import GreyBookImg from "../../../../public/GreyBook.svg";
import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";
type Props = {
  maindiv: any;
  maintext: string;
  duration: string;
  lessons: string;
};
const ContentDivs = ({ maindiv, maintext, duration, lessons }: Props) => {
  return (
    <div
      className={`${maindiv} w-[437px] rounded-[19px] border-[1px] border-[#D9D9D9] py-[11px] px-[30px]  flex items-center justify-between`}
    >
      <div className="">
        <h6 className="text-[24px] font-[Poppins] font-semibold text-[#252641]">
          {maintext}
        </h6>
        <div className="flex gap-[5px] mt-[5px]">
          <Image src={MiniClockImg} alt="MiniClockImgs"></Image>
          <p className="text-[14px] font-[Poppins] font-medium text-[#252641]">
            {duration}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-end justify-end">
        {" "}
        <FaArrowDown className="cursor-pointer mb-[15px]" />
        <div className="flex gap-[6px] items-center">
          <Image src={GreyBookImg} alt="GreyBookImg"></Image>
          <p className="text-[14px] font-[Poppins] font-medium text-[#252641]">
            {lessons}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentDivs;
