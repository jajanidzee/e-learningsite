import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

type props = {
  imagee: StaticImageData;
  ptext: any;
};
const ReadBlogDivs = ({ imagee, ptext }: props) => {
  return (
    <div className="relative">
      <Image src={imagee} alt="imagee"></Image>
      <button className="bottom-[34px] left-[60px] absolute w-[236px] h-[63px] text-[#000] rounded-[12px] text-[24px] font-bold font-[Poppins] bg-[#d9d9d9ac]">
        {ptext}
      </button>
    </div>
  );
};

export default ReadBlogDivs;
