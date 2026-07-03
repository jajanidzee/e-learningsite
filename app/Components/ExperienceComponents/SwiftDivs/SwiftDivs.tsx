"use client";
import { button } from "motion/react-client";
import React from "react";
import { motion } from "motion/react";
type Props = {
  btntext: string;
};
const SwiftDivs = ({ btntext }: Props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer w-[136px] rounded-[36px] bg-[#49bbbd34] py-[12px] px-[26px] text-[16px] font-[Poppins] font-normal text-[#696984]"
    >
      {btntext}
    </motion.button>
  );
};

export default SwiftDivs;
