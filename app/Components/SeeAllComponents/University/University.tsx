"use client";
import React from "react";
import McMasterImg from "../../../../public/McMaster.png";
import GreyStarImg from "../../../../public/GreyStar.svg";
import GreyEyeImg from "../../../../public/GreyEye.svg";
import GreyVideoImg from "../../../../public/GreyVideo.svg";
import { motion } from "motion/react";
import Image from "next/image";
const University = () => {
  return (
    <div className="bg-[url('/Assistant.png')] w-full h-[415px] bg-no-repeat ml-[160px] mr-[120px] mt-[20px] py-[33px] pl-[50px] pr-[33px] ">
      <div className="flex items-center gap-[34px]">
        <div className="w-[363px] h-[363px] rounded-full bg-[#fff] px-[12px] py-[12px]">
          <Image src={McMasterImg} alt="McMasterImg"></Image>
        </div>
        <div className="bg-[#ffffffa0] w-[1099px] h-[348px] rounded-[10px] pt-[48px] pb-[36px] pl-[50px] pr-[42.84px]">
          <div className="flex items-center justify-between">
            <div>
              {" "}
              <p className="font-[Poppins] font-medium text-[30px] text-[#000000]">
                John Anderson
              </p>
              <p className="font-[Inter] font-normal text-[18px] text-[#555353] mt-[7px]">
                Assistant Professor at Mcmaster University
              </p>
            </div>
            <button className="w-[183.16px] cursor-pointer rounded-[12px] bg-[#49BBBD] py-[16px] px-[27px] text-[#fff] font-[Poppins] font-bold text-[24px]">
              Enroll Now
            </button>
          </div>
          <p className="font-[Inter] font-normal text-[25px] text-[#2D3436] mt-[15px]">
            As a successful business professional and Assistant Professor at
            McMaster University, he combines <br />
            real-world experience with academic knowledge, inspiring students{" "}
            <br /> to develop innovative ideas, strong leadership skills, and
            entrepreneurial thinking.
          </p>
          <div className="mt-[25px] flex items-center justify-between">
            <div className="flex items-center gap-[4px]">
              <Image src={GreyStarImg} alt="GreyStarImg"></Image>
              <p className="font-[Inter] font-normal text-[18px] text-[#474747] ">
                4.9 instructor Rating
              </p>
            </div>{" "}
            <div className="flex items-center gap-[3px]">
              <Image src={GreyEyeImg} alt="GreyEyeImg"></Image>
              <p className="font-[Inter] font-normal text-[18px] text-[#474747] ">
                1,592 Students
              </p>
            </div>{" "}
            <div className="flex items-center gap-[3px]">
              <Image src={GreyVideoImg} alt="GreyVideoImg"></Image>
              <p className="font-[Inter] font-normal text-[18px] text-[#474747] ">
                Courses
              </p>
            </div>{" "}
            <div className="flex gap-[25px] items-center ">
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                src="/WayTwitter.svg"
                alt="WayTwitterImg"
                className="cursor-pointer"
              />
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                src="/WayFacebook.svg"
                alt="WayFacebookImg"
                className="cursor-pointer"
              />
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                src="/WayInstagram.svg"
                alt="WayInstagramImg"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default University;
