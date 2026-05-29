import { StaticImageData } from "next/image";
import MiniDesignImg from "../../../../public/MiniDesign.svg";
import MiniClockImg from "../../../../public/MiniClock.svg";
import Image from "next/image";
import React from "react";
type Props = {
  mainimagee: StaticImageData;
  datetext: string;
  quotetext: string;
  biotext: string;
  rdcimg: StaticImageData;
  rdcname: string;
  oldprice: string;
  newprice: string;
};
const MarketingDivs = ({
  mainimagee,
  datetext,
  quotetext,
  biotext,
  rdcimg,
  rdcname,
  oldprice,
  newprice,
}: Props) => {
  return (
    <div className="w-[374px] pt-[20px] pb-[34.75px] px-[21px] rounded-[20px]  shadow-[0px_2px_4px_0px_grey]">
      <Image
        src={mainimagee}
        alt="mainimagee"
        className="w-[335px] h-[239px]"
      ></Image>
      <div className="flex mt-[20px] justify-between">
        <div className="flex gap-[10px] items-center">
          {" "}
          <Image src={MiniDesignImg} alt="MiniDesignImg"></Image>
          <p className="font-[Poppins] font-medium text-[14px] text-[#696984]">
            Design
          </p>
        </div>
        <div className="flex items-center gap-[10px]">
          {" "}
          <Image src={MiniClockImg} alt="MiniClockImg"></Image>
          <p className="font-[Poppins] font-medium text-[14px] text-[#696984]">
            {datetext}
          </p>
        </div>
      </div>
      <h4 className="font-[Poppins] font-medium text-[24px] text-[#252641] mt-[20px]">
        {quotetext}
      </h4>
      <p className="font-[Poppins] font-normal text-[18px] text-[#696984] mt-[21px]">
        {biotext}
      </p>
      <div className="flex items-center justify-between mt-[17px]">
        <div className="flex gap-[17.78px] items-center">
          <Image src={rdcimg} alt="rdcimg"></Image>
          <p className="">{rdcname}</p>
        </div>
        <div className="flex gap-[14px] items-center">
          <p className="font-[Poppins] italic text-[18px] text-[#00000090] line-through">
            ${oldprice}
          </p>
          <p className="font-[Poppins] font-bold text-[24px] text-[#49BBBD]">
            ${newprice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketingDivs;
