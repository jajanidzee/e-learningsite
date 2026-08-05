import React from "react";
import Image, { StaticImageData } from "next/image";
type Props = {
  imagee: StaticImageData;
  maintext: string;
  bio: string;
};
const CreatorsDiv = ({ imagee, maintext, bio }: Props) => {
  return (
    <div className="w-[516px] shadow-[1px_10px_10px_10px_#D9D9D9] pt-[161px] pb-[30px] px-[68px] flex flex-col items-center text-center relative">
      <Image
        src={imagee}
        alt="imagee"
        className="absolute -top-[138px]"
      ></Image>
      <h6 className="font-[Poppins] font-medium text-[24px] text-[#252641]">
        {maintext}
      </h6>
      <p className="mt-[21px] font-[Poppins] font-normal text-[18px] text-[#696984]">
        {bio}
      </p>
    </div>
  );
};

export default CreatorsDiv;
