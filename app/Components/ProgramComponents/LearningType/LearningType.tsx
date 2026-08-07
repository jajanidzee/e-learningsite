"use client";
import React from "react";

import { FaArrowDown } from "react-icons/fa";
import { motion } from "motion/react";
type Props = {
  maindiv: any;
  text: string;
};
const LearningType = ({ maindiv, text }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`${maindiv} cursor-pointer w-[170px] justify-center px-[18.91px] py-[18px] font-[Poppins] text-[24px] font-medium text-[#252641] flex items-center gap-[10px] bg-[#fff] rounded-[10px]`}
    >
      {text}
      <FaArrowDown className="w-[15px] h-[32px]" />
    </motion.div>
  );
};

export default LearningType;
