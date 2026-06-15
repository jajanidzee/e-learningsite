import React from "react";
import Image, { StaticImageData } from "next/image";
import MiniClockImg from "../../../../public/MiniClock.svg";
type Props = {
  pfp: StaticImageData;
  nametext: string;
  stars: StaticImageData;
  ptext: string;
  time: string;
};
const Persons = ({ pfp, nametext, stars, ptext, time }: Props) => {
  return (
    <div>
      <div>
        {" "}
        <div className="flex justify-between">
          {" "}
          <div className="flex gap-[11.81px]">
            <Image
              src={pfp}
              alt="pfp"
              className="w-[70.84px] h-[70.84px] rounded-[100%]"
            ></Image>
            <div>
              <p className="font-[Poppins] font-medium text-[18px] text-[#000000]">
                {nametext}
              </p>
              <ul className="flex gap-[5px] mt-[4.64px]">
                {" "}
                <Image src={stars} alt="stars"></Image>
                <Image src={stars} alt="stars"></Image>
                <Image src={stars} alt="stars"></Image>
                <Image src={stars} alt="stars"></Image>
                <Image src={stars} alt="stars"></Image>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            {" "}
            <Image src={MiniClockImg} alt="MiniClockImg"></Image>
            <p className="text-[#696984] font-[Poppins] font-medium text-[14px] ">
              {time}
            </p>
          </div>
        </div>
      </div>
      <p className="text-[#696984] font-[Poppins] font-normal text-[20px] mt-[23.16px]">
        {ptext}
      </p>
    </div>
  );
};

export default Persons;
