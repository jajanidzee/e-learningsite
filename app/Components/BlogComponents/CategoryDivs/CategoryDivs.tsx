import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";
type Props = {
  divclass: any;
  imagee: StaticImageData;
  maintext: string;
  bio: string;
};
const CategoryDivs = ({ divclass, imagee, maintext, bio }: Props) => {
  return (
    <div className="w-[349px] flex flex-col items-center text-center pt-[30px] pb-[59px] px-[32px] rounded-[20px] bg-[#FFFFFF] shadow-[0px_10px_10px_10px_#D9D9D9]">
      <div
        className={`${divclass} w-[90px] h-[90px] flex items-center justify-center rounded-[4px]`}
      >
        <Image src={imagee} alt="imagee"></Image>
      </div>
      <h4 className="font-[Poppins] font-semibold text-[30px] text-[#000] mt-[20px]">
        {maintext}
      </h4>
      <p className="font-[Poppins] font-normal text-[#696984] text-[18px] mt-[25px]">
        {bio}
      </p>
    </div>
  );
};

export default CategoryDivs;
