"use client";
import React from "react";
import PricingSystem from "../PricingSystem/PricingSystem";
import { motion } from "motion/react";
const Pricing = () => {
  return (
    <div className="mt-[60px] mb-[197px]">
      <h2 className="font-bold font-extrabold text-[#49BBBD] text-[64px] text-center">
        Affordable pricing
      </h2>
      <div className="flex gap-[30px] mt-[60px] ml-[375px] mt-[77px]">
        <div className="px-[32px] py-[32px] mb-[8px]">
          <p className="font-[Inter] font-bold text-[18px] text-[#49BBBD]">
            Like a New
          </p>

          <p className="text-[48px] text-[#000] font-bold font-[Inter]">
            Free
            <span className="text-[18px] tracking-[3px]"> / forever</span>
          </p>
          <PricingSystem maindiv="" ptext="Components-driven system" btn="" />
          <PricingSystem
            maindiv=""
            ptext="Sales-boosting landing pages"
            btn=""
          />
          <PricingSystem maindiv="" ptext="Awesome Feather icons pack" btn="" />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-[128px] w-[306px] h-[64px] rounded-[20px] border-[1px] cursor-pointer border-[#D9D9D9] text-[#49BBBD] text-[18px] font-bold font-[Inter] "
          >
            Try for free
          </motion.button>
        </div>
        <div className="px-[32px] py-[32px]  shadow-[0px_2px_3px_3px_#D9D9D9] rounded-[10px]">
          <div className="flex justify-between w-[320px]">
            <p className="text-[18px] font-bold font-[Inter] text-[#49BBBD]">
              👤 Individual{" "}
            </p>
            <button className=" w-[90px] h-[32px] border-[1px] border-[#6C5CE7] tracking-[3px] rounded-[20px] font-[Inter] font-extrabold text-[18px] text-[#000] flex items-center justify-center">
              best!
            </button>
          </div>
          <p className="text-[48px] text-[#000] font-bold font-[Inter] mb-[12px]">
            $24
            <span className="text-[18px] tracking-[3px]"> / month</span>
          </p>
          <PricingSystem
            maindiv=""
            ptext="Components-driven system"
            btn="bg-[#FDCB6E]"
          />
          <PricingSystem
            maindiv=""
            ptext="Sales-boosting landing pages"
            btn="bg-[#FDCB6E]"
          />
          <PricingSystem
            maindiv=""
            ptext="Awesome Feather icons pack"
            btn="bg-[#FDCB6E]"
          />
          <PricingSystem
            maindiv=""
            ptext="Themed into 3 different styles"
            btn="bg-[#FDCB6E]"
          />
          <PricingSystem
            maindiv=""
            ptext="Will help to learn Figma"
            btn="bg-[#FDCB6E]"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-[16px] w-[306px] h-[64px] rounded-[20px] text-[#fff] bg-[#49BBBD] cursor-pointer text-[18px] font-bold font-[Inter] "
          >
            Regular license
          </motion.button>
        </div>
        <div className="px-[32px] py-[32px]">
          {" "}
          <p className="font-[Inter] font-bold text-[18px] text-[#49BBBD]">
            👥Corporate
          </p>
          <p className="text-[48px] text-[#000] font-bold font-[Inter]">
            $12
            <span className="text-[18px] tracking-[3px]"> / editor</span>
          </p>
          <PricingSystem
            maindiv=""
            ptext="Components-driven system"
            btn="bg-green-200"
          />
          <PricingSystem
            maindiv=""
            ptext="Sales-boosting landing pages"
            btn="bg-green-200"
          />
          <PricingSystem
            maindiv=""
            ptext="Awesome Feather icons pack"
            btn="bg-green-200"
          />
          <PricingSystem
            maindiv=""
            ptext="Sales-boosting landing pages"
            btn="bg-green-200"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-[72px] w-[306px] h-[64px] cursor-pointer rounded-[20px] border-[1px] border-[#D9D9D9] text-[#49BBBD] text-[18px] font-bold font-[Inter] "
          >
            Extended license
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
