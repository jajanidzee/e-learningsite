import React from "react";
import Image, { StaticImageData } from "next/image";
import EyeImg from "../../../../public/Eye.png";
type Props = {
  imagee: StaticImageData;
  ptext: string;
  redactorimg: StaticImageData;
  rdcname: string;
  biotext: string;
  seentext: string;
};
const RelatedBlogDivs = ({
  imagee,
  ptext,
  redactorimg,
  rdcname,
  biotext,
  seentext,
}: Props) => {
  return (
    <div className="w-[785px] pt-[56.6px] pb-[64.09px] px-[33px] rounded-[20px] bg-[#FFFFFF]">
      <Image src={imagee} alt="imagee" className="w-[719px] h-[382px]"></Image>
      <p className="font-[Poppins] font-semibold text-[26px] text-[#252641] mt-[12.28px]">
        {ptext}
      </p>
      <div className="flex items-center mt-[15px] gap-[16.87px]">
        <Image
          src={redactorimg}
          alt="redactorimg"
          className="w-[70.84px] h-[70.84px]"
        ></Image>
        <p className="font-[Poppins] font-semibold text-[18px] text-[#000000]">
          {rdcname}
        </p>
      </div>
      <p className="font-[Poppins] font-normal text-[20px] text-[#696984] mt-[23.61px]">
        {biotext}
      </p>

      <div className="mt-[45px] flex justify-between items-center">
        {" "}
        <p className="text-[#696984] font-[Poppins] font-normal text-[20px] hover:underline cursor-pointer">
          Read more
        </p>
        <div className="flex items-center gap-[22.49px]">
          <Image src={EyeImg} alt="EyeImg" className=""></Image>
          <p className="text-[#696984] font-[Poppins] font-normal text-[20px]">
            {seentext}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RelatedBlogDivs;
