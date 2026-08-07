"use client";
import Image from "next/image";
import RatingImg from "../../../../public/Rating.svg";
import PhoneImg from "../../../../public/Phone.svg";
import { motion } from "motion/react";
import PlatformDivs from "../PlatformDivs/PlatformDivs";

const Platform = () => {
  return (
    <div className="mt-[65px] ml-[120px] mr-[120px] pt-[33px] pb-[67.2px] pl-[133px] pr-[148px] bg-[#9dccff73] mb-[65px] rounded-[20px] flex items-center gap-[256px]">
      <div className="">
        <h4 className="font-[Poppins] text-[30px] font-semibold text-[#252641] mb-[25px]">
          Know about learning <br /> learning platform
        </h4>
        <div className="flex flex-col gap-[10px]">
          <PlatformDivs text="Free E-book, video & consolation" />
          <PlatformDivs text="Top instructors from around world" />
          <PlatformDivs text="Top courses from your team" />
        </div>
        <button className="cursor-pointer w-[309px] bg-[#49BBBD] py-[16px] px-[39px] mt-[25px] font-[Poppins] text-[24px] font-bold text-[#FFFFFF] rounded-[12px]">
          Start learning now
        </button>
      </div>
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
    </div>
  );
};

export default Platform;
