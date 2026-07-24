import React from "react";
import MiniCalendarImg from "../../../../public/MiniCalendar.svg";
import MiniClockImg from "../../../../public/MiniClock.svg";
import GreyBookImg from "../../../../public/GreyBook.svg";
import LockerImg from "../../../../public/Locker.svg";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import Image from "next/image";
const Contents = () => {
  return (
    <div className="pt-[40px] pb-[16px] px-[30px] rounded-[15px]  shadow-[0px_5px_10px_0px_grey] w-[498px]">
      <h3 className="text-[30px] font-[Poppins] font-semibold text-[#252641]">
        Course Contents
      </h3>
      <div className="flex justify-between mt-[30px] items-center">
        <p className="text-[14px] font-[Poppins] font-normal text-[#49BBBD]">
          2/5 COMPLETED
        </p>
        <Image src={MiniCalendarImg} alt="MiniCalendarImg"></Image>
      </div>
      <div className="flex gap-[3px] mt-[20px]">
        <div className="w-[85px] h-[5px] bg-[#49BBBD]"></div>
        <div className="w-[85px] h-[5px] bg-[#49BBBD]"></div>
        <div className="w-[85px] h-[5px] bg-[#9DC9CA]"></div>
        <div className="w-[85px] h-[5px] bg-[#9DC9CA]"></div>
        <div className="w-[85px] h-[5px] bg-[#9DC9CA]"></div>
      </div>
      <div className="w-[437px] rounded-[19px] border-[1px] border-[#D9D9D9] py-[11px] px-[30px] mt-[20px] flex items-center justify-between">
        <div className="">
          <h6 className="text-[24px] font-[Poppins] font-semibold text-[#252641]">
            Get Started
          </h6>
          <div className="flex gap-[5px] mt-[5px]">
            <Image src={MiniClockImg} alt="MiniClockImgs"></Image>
            <p className="text-[14px] font-[Poppins] font-medium text-[#252641]">
              1 Hour
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end justify-end">
          {" "}
          <FaArrowDown className="cursor-pointer mb-[15px]" />
          <div className="flex gap-[6px] items-center">
            <Image src={GreyBookImg} alt="GreyBookImg"></Image>
            <p className="text-[14px] font-[Poppins] font-medium text-[#252641]">
              5 Lessons
            </p>
          </div>
        </div>
      </div>
      <div className="w-[437px] pt-[25px] pb-[14px] px-[30px] border-[1px] border-[#49BBBD] rounded-[19px] mt-[11px]">
        {" "}
        <div className="flex items-center justify-between">
          {" "}
          <div className="">
            <h6 className="text-[24px] font-[Poppins] font-semibold text-[#49BBBD]">
              Illstarator Structuors
            </h6>
            <div className="flex gap-[5px] mt-[5px]">
              <Image src={MiniClockImg} alt="MiniClockImgs"></Image>
              <p className="text-[14px] font-[Poppins] font-medium text-[#252641]">
                2 Hour
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end justify-end">
            {" "}
            <FaArrowUp className="cursor-pointer" />
            <div className="flex gap-[6px] items-center mt-[15px]">
              <Image src={GreyBookImg} alt="GreyBookImg"></Image>
              <p className="text-[14px] font-[Poppins] font-medium text-[#252641]">
                5 Lessons
              </p>
            </div>
          </div>
        </div>{" "}
        <hr className="w-full h-[1px] text-[#D9D9D9] mt-[15px]" />
        <div className="flex mt-[15px] justify-between items-center">
          <p className="text-[18px] font-[Poppins] font-medium text-[#49BBBD]">
            1.Illustrator structures enhance creativity.
          </p>{" "}
          <p className="text-[18px] font-[Poppins] font-medium text-[#49BBBD]">
            65:00
          </p>
        </div>{" "}
        <hr className="w-full h-[1px] text-[#D9D9D9] mt-[15px]" />
        <div className="flex mt-[15px] justify-between items-center">
          <p className="text-[18px] font-[Poppins] font-medium text-[#252641]">
            2.Mastering illustrator structures matters.
          </p>{" "}
          <div className="flex gap-[8px]">
            {" "}
            <p className="text-[18px] font-[Poppins] font-medium text-[#252641]">
              25:00
            </p>
            <Image src={LockerImg} alt="LockerImg"></Image>
          </div>
        </div>{" "}
        <hr className="w-full h-[1px] text-[#D9D9D9] mt-[15px]" />{" "}
        <div className="flex mt-[15px] justify-between items-center">
          <p className="text-[18px] font-[Poppins] font-medium text-[#252641]">
            3.Strong illustrator structures improve.
          </p>{" "}
          <div className="flex gap-[8px]">
            {" "}
            <p className="text-[18px] font-[Poppins] font-medium text-[#252641]">
              30:00
            </p>
            <Image src={LockerImg} alt="LockerImg"></Image>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Contents;
