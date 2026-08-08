"use client";
import React from "react";
import MarketingDivs from "../../CourseComponents/MarketingDivs/MarketingDivs";
import LeftArrowImg from "../../../../public/LeftArrow.svg";
import RightArrowImg from "../../../../public/RightArrow.svg";
import DifferentImg from "../../../../public/Different.png";
import LinaPfpImg from "../../../../public/LinaPfp.png";
import SolutionsImg from "../../../../public/Solutions.png";
import FearLessImg from "../../../../public/FearLess.png";
import BornReadyImg from "../../../../public/BornReady.png";
import MariaImg from "../../../../public/Maria.jpg";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";
const Recommended = () => {
  return (
    <div className="bg-[#9dccff73] pt-[97px] pb-[213px] pl-[139px] pr-[135px]">
      <div className="flex items-center justify-between">
        <h5 className="font-[Poppins] font-bold text-[30px] text-[#000000]">
          Recommended for you
        </h5>
        <Link href="/seeall">
          {" "}
          <p className="cursor-pointer hover:underline font-[Poppins] font-bold text-[20px] text-[#49BBBD]">
            See all
          </p>
        </Link>
      </div>
      <div className="flex gap-[50px] mt-[47px]">
        <MarketingDivs
          mainimagee={DifferentImg}
          datetext="3 Month"
          quotetext="Think Different Move Faster"
          biotext="Helping brands grow faster through creative strategy and powerful digital marketing."
          rdcname="Lina"
          rdcimg={LinaPfpImg}
          oldprice="100"
          newprice="80"
        />{" "}
        <MarketingDivs
          mainimagee={SolutionsImg}
          datetext="2 Month"
          quotetext="AWS Certified solutions Architect"
          biotext="Building modern businesses with innovation, consistency, passion, and smart execution."
          rdcname="Maria"
          rdcimg={MariaImg}
          oldprice="150"
          newprice="100"
        />
        <MarketingDivs
          mainimagee={FearLessImg}
          datetext="4 Month"
          quotetext="Fear Less Achieve More"
          biotext="We create opportunities, inspire confidence, and help brands stand out naturally online."
          rdcname="Lina"
          rdcimg={LinaPfpImg}
          oldprice="90"
          newprice="70"
        />
        <MarketingDivs
          mainimagee={BornReadyImg}
          datetext="3 Month"
          quotetext="Born Ready Built Tough"
          biotext="Delivering quality, trust, innovation, and results for businesses ready to grow bigger."
          rdcname="Maria"
          rdcimg={MariaImg}
          oldprice="100"
          newprice="80"
        />
      </div>
      <div className="flex gap-[20px] justify-end mt-[50px]">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-[50px] h-[50px] bg-[#49bbbda0] cursor-pointer rounded-[4px] text-[#fff] text-[24px] flex items-center justify-center"
        >
          <Image src={LeftArrowImg} alt="LeftArrowImg"></Image>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-[50px] h-[50px] bg-[#49BBBD] cursor-pointer rounded-[4px] text-[#fff] text-[24px] flex items-center justify-center"
        >
          <Image src={RightArrowImg} alt="RightArrowImg"></Image>
        </motion.button>
      </div>
    </div>
  );
};

export default Recommended;
