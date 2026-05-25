"use client";
import React from "react";
import TotcImg from "../../../public/Totc.svg";
import Image from "next/image";
import { motion } from "motion/react";
const Footer = () => {
  return (
    <div className="pt-[74px] pb-[40px] flex flex-col items-center justify-center bg-[#252641] mt-[115px]">
      <div className="flex items-center w-[388px] justify-between">
        <Image src={TotcImg} alt="TotcImg"></Image>
        <hr className="h-[83px] w-[1px] bg-[#626381]" />
        <p className="font-[Poppins] font-semibold text-[#fff] text-[22px]  ">
          Virtual Class <br /> for Zoom
        </p>
      </div>
      <p className="font-[Poppins] font-medium text-[#B2B3CF] text-[26px] mt-[95px]">
        Subscribe to get our Newsletter
      </p>
      <div className="flex gap-[20px] justify-center items-center mt-[20px]">
        <form action="">
          <input
            type="email"
            placeholder="Your Email"
            className="border-[1px] border-[#83839A] rounded-[80px] w-[400px] h-[60px] text-[#83839A] text-[20px] font-[Poppins] font-normal px-[30px] py-[15px]"
          />
        </form>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer w-[179px] bg-[#49BBBD] text-[#fff] rounded-[60px] h-[60px] font-[Poppins] font-medium text-[22px]"
        >
          Subscribe
        </motion.button>
      </div>

      <ul className="flex w-[564px] justify-between items-center mt-[96px]">
        <li className=" cursor-pointer font-[Poppins] font-normal text-[#B2B3CF] text-[22px]">
          Careers
        </li>
        <hr className="h-[17px] w-[1px] bg-[#626381]" />
        <li className=" cursor-pointer font-[Poppins] font-normal text-[#B2B3CF] text-[22px]">
          Privacy Policy
        </li>
        <hr className="h-[17px] w-[1px] bg-[#626381]" />
        <li className=" cursor-pointer font-[Poppins] font-normal text-[#B2B3CF] text-[22px]">
          {" "}
          Terms & Conditions
        </li>

        <hr className="h-[17px] w-[1px] bg-[#626381]" />
      </ul>
      <p className="font-[Poppins] font-normal text-[#B2B3CF] text-[22px] mt-[20px]">
        © 2021 Class Technologies Inc.{" "}
      </p>
    </div>
  );
};

export default Footer;
