import React from "react";
import Image, { StaticImageData } from "next/image";

type Repo = {
  h3text: string;
  ptext: string;
  imagee: StaticImageData;
  imageClass: any;
  ptextclass: any;
  h3textclass: any;
};
const SoftwareDivs = ({
  h3text,
  ptext,
  imagee,
  imageClass,
  ptextclass,
  h3textclass,
}: Repo) => {
  return (
    <div className="relative">
      <div className="w-[450px]  pt-[122px] pb-[50px] px-[74px] shadow-[0px_10px_60px_0px_#272c771c] rounded-[20px] h-[430px]    ">
        <h3
          className={`${h3textclass} font-[Poppins] font-medium text-[30px] text-[#2F327D] max-w-[300px] text-center mb-[24px]`}
        >
          {h3text}
        </h3>
        <p
          className={`${ptextclass} font-[Poppins] font-medium text-[20px] text-[#696984] max-w-[300px] text-center `}
        >
          {ptext}
        </p>
        <div
          className={` ${imageClass} w-[100px] h-[100px] absolute -top-[50px] left-[175px] rounded-[50%] flex items-center justify-center bg-[#00CBB8]`}
        >
          <Image src={imagee} alt="CommunityImg" className=""></Image>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDivs;
