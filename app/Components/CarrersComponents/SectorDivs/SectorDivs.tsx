"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
type Props = {
  imagee: StaticImageData;
  htext: string;
  ptext: string;
  btntext: string;
};
const SectorDivs = ({ imagee, htext, ptext, btntext }: Props) => {
  return (
    <div className="w-[786px] h-[762px] bg-[#fff] rounded-[20px] pt-[59px] pb-[51px] px-[33px] shadow-[0px_10px_10px_10px_#D9D9D9]">
      <Image
        src={imagee}
        alt="imagee"
        className="w-[720px] h-[382.5px] rounded-[20px]"
      ></Image>
      <h3 className="mt-[12.88px] font-[Poppins] font-medium text-[30px] text-[#252641]">
        {htext}
      </h3>
      <p className="mt-[13px] font-[Poppins] font-normal text-[30px] text-[#696984]">
        {ptext}
      </p>
      <div className="flex  justify-end">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-[254px] rounded-[12px] cursor-pointer bg-[#49BBBD] font-[Poppins] font-medium text-[20px] text-[#fff] pt-[12px] pb-[12px] pl-[47px] pr-[39px] mt-[48px] items-end"
        >
          {btntext}
        </motion.button>
      </div>
    </div>
  );
};

export default SectorDivs;
