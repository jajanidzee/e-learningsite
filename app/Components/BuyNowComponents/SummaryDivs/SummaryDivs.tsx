import React from "react";
import Image, { StaticImageData } from "next/image";
type Props = {
  imagee: StaticImageData;
  head: string;
  bio: string;
  price: string;
};
const SummaryDivs = ({ imagee, head, bio, price }: Props) => {
  return (
    <div className="flex gap-[22px] items-center">
      <Image
        src={imagee}
        alt="imagee"
        className="w-[160px] h-[107px] rounded-[20px]"
      ></Image>
      <div className="">
        <p className="text-[18px] text-[#000000] font-[Poppins] font-normal">
          {head}
        </p>
        <p className="text-[18px] text-[#5B5B5B] font-[Poppins] font-normal mt-[2px]">
          {bio}
        </p>
        <p className="text-[24px] text-[#000000] font-[Poppins] font-normal mt-[5px]">
          {price}
        </p>
      </div>
    </div>
  );
};

export default SummaryDivs;
