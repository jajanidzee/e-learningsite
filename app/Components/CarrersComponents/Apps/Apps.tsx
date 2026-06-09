"use client";
import React from "react";
import AndroidImg from "../../../../public/Android.png";
import IosImg from "../../../../public/Ios.png";
import Image from "next/image";
import { motion } from "motion/react";
const Apps = () => {
  return (
    <div className="w-[1682px]  bg-[#252641] relative -top-[55px] rounded-[30px] pt-[71px] pb-[84px] pl-[100px] pr-[88px] flex justify-between items-center ml-[118px]">
      <p className="font-[Poppins] font-semibold text-[36px] text-[#fff]">
        APP is available for free
      </p>
      <div className="flex gap-[24px]">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-[254px] px-[26px] py-[14px] cursor-pointer bg-[#29B9E7] font-[Poppins] font-semibold text-[24px] text-[#fff] rounded-[12px] flex items-center justify-between "
        >
          <Image
            src={AndroidImg}
            alt="AndroidImg"
            className="w-[34px] h-[34px]"
          ></Image>
          Android APP
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-[254px] px-[33px] pt-[11px] pb-[11px] cursor-pointer bg-[#49BBBD] rounded-[12px] flex items-center justify-between font-[Poppins] font-semibold text-[24px] text-[#fff]"
        >
          {" "}
          <Image
            src={IosImg}
            alt="IosImg"
            className="w-[30px] h-[30px]"
          ></Image>
          Android APP
        </motion.button>
      </div>
    </div>
  );
};

export default Apps;
