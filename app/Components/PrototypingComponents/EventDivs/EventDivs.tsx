import React from "react";
import Image, { StaticImageData } from "next/image";
type Props = {
  divclass: any;
  imagee: StaticImageData;
  lesson: string;
  duration: string;
};
const EventDivs = ({ divclass, imagee, lesson, duration }: Props) => {
  return (
    <div
      className={` ${divclass} w-[456px] rounded-[12px] pl-[25px] pr-[18px] py-[20px] flex justify-between`}
    >
      <div className="flex gap-[15px]">
        <Image src={imagee} alt="imagee"></Image>
        <p className="font-[Poppins] font-normal text-[16px] text-[#fff]">
          {lesson}
        </p>
      </div>
      <p className="font-[Poppins] font-normal text-[16px] text-[#252641]">
        {duration}
      </p>
    </div>
  );
};

export default EventDivs;
