"use client";
import React from "react";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
type Props = {
  imagee: StaticImageData;
};
const CallDivs = ({ imagee }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => console.log("hover started!")}
      className="w-[80px] rounded-[13px] bg-[#fff] flex items-center justify-center h-[66.78px] cursor-pointer"
    >
      <Image src={imagee} alt="imagee" className="w-[36px] h-[41px]"></Image>
    </motion.div>
  );
};

export default CallDivs;
