import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
type Props = {
  imagee: StaticImageData;
  btnClass: any;
  h3text: string;
  ptext: string;
  btnText: string;
  imageeClass: any;
};
const NewsDivs = ({
  imagee,
  btnClass,
  h3text,
  ptext,
  btnText,
  imageeClass,
}: Props) => {
  return (
    <div className="flex gap-[40px] w-[797px]">
      <div className="relative ">
        <Image
          src={imagee}
          alt="imagee"
          className={`${imageeClass} w-[280px] h-[200px]`}
        ></Image>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={` ${btnClass} w-[100px] h-[34px] bg-[#49BBBD] rounded-[20px] cursor-pointer font-[Poppins] text-[18px] bottom-[20px] right-[20px] absolute font-normal text-[#fff]`}
        >
          {btnText}
        </motion.button>
      </div>
      <div className="text-start">
        <h3 className="font-[Poppins] font-medium text-[22px] text-[#252641]">
          {h3text}
        </h3>
        <p className="font-[Poppins] font-normal text-[20px] text-[#696984] mt-[20px]">
          {ptext}
        </p>
      </div>
    </div>
  );
};

export default NewsDivs;
