"use client";
import React from "react";
import Image from "next/image";
import BigLaptopImg from "../../../../public/BigLaptop.png";
import { motion } from "motion/react";
const Inspiration = () => {
  return (
    <div className="bg-[#9dccff73] py-[70px] pl-[118px] pr-[163px] flex items-center gap-[176px]">
      <div>
        <p className="text-[#000] font-[Poppins] text-[24px] font-semibold">
          By Themadbrains in{" "}
          <span className="text-[#49BBBD] font-bold">inspiration</span>
        </p>
        <h3 className="text-[#2F327D] font-[Poppins] text-[44px] font-semibold">
          Why Swift UI Should Be on the <br /> Radar of Every Mobile <br />{" "}
          Developer
        </h3>
        <p className="text-[#696984] font-[Poppins] text-[24px] font-normal mt-[14px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do
          eiusmod tempos Lorem ipsum dolor sitamet, <br /> consectetur
          adipiscing elit, sed do eiusmod tempor
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-[25px] bg-[#49BBBD] w-[236px] h-[63px] text-[#FFFFFF] font-[Poppins] text-[16px] cursor-pointer rounded-[12px] font-bold"
        >
          Start learning now
        </motion.button>
      </div>
      <Image src={BigLaptopImg} alt="BigLaptopImg"></Image>
    </div>
  );
};

export default Inspiration;
