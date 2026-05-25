"use client";
import React from "react";
import Image from "next/image";
import RatingImg from "../../../../public/Rating.svg";
import PhoneImg from "../../../../public/Phone.svg";
import FeatureDiv from "../FeatureDiv/FeatureDiv";
import WindowsImg from "../../../../public/Windows.png";
import DoubleBlocksImg from "../../../../public/DoubleBlocks.png";
import TeamImg from "../../../../public/Team.png";
import { motion } from "motion/react";
const Features = () => {
  return (
    <div className="mt-[160px] text-center pl-[170px] relative">
      <h3 className="font-[Poppins] font-bold text-[36px] text-[#2F327D]">
        Our <span className="text-[#00CBB8]">Features</span>
      </h3>
      <p className="font-[Poppins] font-normal text-[#696984] text-[24px] text-[#696984] mt-[20px]">
        This very extraordinary feature, can make learning activities more
        efficient
      </p>
      <div className="flex items-start gap-[20px] absolute top-[220px] z-18">
        <div className="w-[140px] h-[140px] rounded-[100%] bg-[#33EFA0]"></div>
        <div className="w-[30px] h-[30px] rounded-[100%] bg-[#33D9EF]"></div>
      </div>
      <div className="flex items-end absolute -bottom-[48px] z-18 left-[750px] ">
        <div className="w-[30px] h-[30px] rounded-[100%] bg-[#F56666]"></div>
        <div className="w-[264px] h-[264px] rounded-[100%] bg-[#5B61EB]"></div>
      </div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer bg-[#F9F9F9] w-[73px] h-[73px] rounded-[100%] absolute z-22 left-[32%] border-[10px] border-[#e2e2e263] top-[61%] "
      ></motion.div>
      <div className="flex items-start gap-[240px]">
        <div className="bg-[url('/BlurBg.png')] w-[783px] h-[483px] relative z-20  mt-[176px] ">
          <div className="pt-[92.7px] flex items-start  ">
            <div>
              {" "}
              <div className="bg-[url('/Howard.png')] w-[255.34px] h-[246.83px] pt-[216.23px] pl-[8.14px] ml-[83.86px] shadow-[0px_10px_10px_0px_#D9D9D9] rounded-[17.02px]">
                <div className="py-[4px] pl-[5.5px] pr-[10px] bg-[#c9d3e751] w-[170px] rounded-[5.55px] flex items-center justify-between ">
                  <Image src={RatingImg} alt="RatingImg"></Image>
                  <button className="w-[58px] h-[16px] rounded-[5.55px] font-[Nunito_Sans] font-semibold text-[#FFFFFF] text-[10px] bg-[#2196F3]">
                    Instructor
                  </button>
                  <p className=" font-[Nunito_Sans] font-semibold text-[#FFFFFF] text-[11.09px]">
                    Eveny Howard
                  </p>
                </div>
              </div>{" "}
              <div className="flex  items-center gap-[24.13px] mt-[34.43px] ml-[44.66px]">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer shadow-[0px_10px_60px_0px_#C9D3E7] py-[6.73px] px-[37.34px] h-[51.7px] bg-[#545AE8] rounded-[51.07px] font-[Nunito_Sans] font-bold text-[#FFFFFF] text-[22.13px]"
                >
                  Present
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer h-[65px] border-[5px] border-[#FFD4E1] py-[17px] pl-[30px] pr-[42px] bg-[#E13468] rounded-[51.07px] flex items-center font-[Nunito_Sans] font-bold text-[#FFFFFF] gap-[9.36px] text-[22.13px] "
                >
                  Call <Image src={PhoneImg} alt="PhoneImg"></Image>
                </motion.button>
              </div>
            </div>
            <div className="absolute left-[477px] top-[53.02px]">
              <div className="flex items-end gap-[54.87px]">
                <div className="bg-[url('/Clarke.png')] w-[166.37px] h-[162.23px] pt-[130.33px] flex justify-start pl-[8.87px]">
                  <button className=" bg-[#c9d3e751] rounded-[5.55px] w-[97.05px] h-[21.63px] flex items-center gap-[6.73px] pl-[5.55px] ">
                    <Image src={RatingImg} alt="RatingImg"></Image>
                    <p className="font-[Nunito_Sans] font-semibold text-[#FFFFFF] text-[11.09px]">
                      Tamara Clarke
                    </p>
                  </button>
                </div>
                <div className="bg-[url('/Levin.png')] w-[202px] h-[195.27px] pt-[158.23px] pl-[10.77px] shadow-[0px_5px_10px_0px_grey] rounded-[15px]">
                  <button className=" bg-[#c9d3e751] rounded-[5.55px] w-[102.35px] h-[26.26px] flex items-center gap-[6.73px] pl-[5.55px] ">
                    <Image src={RatingImg} alt="RatingImg"></Image>
                    <p className="font-[Nunito_Sans] font-semibold text-[#FFFFFF] text-[11.09px]">
                      Adam Levin
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute top-[278.76px] left-[477.76px] flex gap-[33.87px]">
              <div className="bg-[url('/Holland.png')] w-[166.37px] h-[160.83px] pt-[130.33px] flex justify-start pl-[8.87px] rounded-[7px]">
                <button className=" bg-[#c9d3e751] rounded-[5.55px] w-[113.13px] h-[21.63px] flex items-center gap-[6.73px] pl-[5.55px] ">
                  <Image src={RatingImg} alt="RatingImg"></Image>
                  <p className="font-[Nunito_Sans] font-semibold text-[#FFFFFF] text-[11.09px]">
                    Humbert Holland
                  </p>
                </button>
              </div>
              <div className="bg-[url('/Mendoza.png')] w-[240px] h-[232px] pt-[188px] flex justify-start pl-[12.8px] rounded-[7px] mt-[11.44px] shadow-[0px_5px_10px_0px_grey] rounded-[15px]">
                <button className=" bg-[#c9d3e751] rounded-[5.55px] w-[159.2px] h-[31.2px] flex items-center gap-[6.73px] pl-[5.55px] ">
                  <Image src={RatingImg} alt="RatingImg"></Image>
                  <p className="font-[Nunito_Sans] font-semibold text-[#FFFFFF] text-[16px]">
                    Patricia Mendoza
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[217px]">
          <h2 className="text-[#2F327D] text-[40px] font-[Poppins] font-semibold text-start">
            A <span className="text-[#00CBB8]">user </span>interface designed
            <br /> for the classroom
          </h2>
          <div className="pt-[51px]">
            <FeatureDiv
              imagee={WindowsImg}
              ptext="Teachers don’t get lost in the grid view and have a dedicated Podium space."
              pclass=""
              divclass=""
            />
            <FeatureDiv
              imagee={DoubleBlocksImg}
              ptext="TA’s and presenters can be moved to  the front of the class."
              pclass="w-[310px]"
              divclass=""
            />
            <FeatureDiv
              imagee={TeamImg}
              ptext="Teachers can easily see all students and class data at one time."
              pclass="w-[310px]"
              divclass=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
