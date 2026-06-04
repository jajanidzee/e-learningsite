"use client";
import React from "react";
import Image from "next/image";
import VideoCallImg from "../../../../public/VideoCall.png";
import NewsDivs from "../NewsDivs/NewsDivs";
import KidWithLaptopImg from "../../../../public/KidWithLaptop.png";
import BoyWithLaptopImg from "../../../../public/BoyWithLaptop.png";
import CatWithLaptopImg from "../../../../public/CatWithLaptop.png";
import { motion } from "motion/react";
const News = () => {
  return (
    <div className="text-center mt-[240px] ml-[200px]">
      <h3 className="font-[Nunito_Sans] font-bold text-[#2F327D] text-[36px]">
        Lastest News and Resources
      </h3>
      <p className="font-[Nunito_Sans] font-normal text-[#696984] text-[24px] mt-[20px]">
        See the developments that have occurred to TOTC in the world
      </p>
      <div className="mt-[100px] flex gap-[120px]">
        <div className="w-[640px] text-start">
          <Image src={VideoCallImg} alt="VideoCallImg"></Image>
          <button className="w-[150px] h-[40px] rounded-[80px] bg-[#49BBBD] mt-[40px] text-[#fff] font-[poppins] text-[20px] font-medium">
            NEWS
          </button>
          <h4 className="font-[Poppins] font-medium text-[26px] text-[#252641] mt-[20px]">
            Class adds $30 million to its balance sheet for a Zoom-friendly
            edtech solution
          </h4>
          <p className="font-[Poppins] font-normal text-[20px] text-[#696984] mt-[20px]">
            Class, launched less than a year ago by Blackboard co-founder
            Michael Chasen, integrates exclusively...
          </p>
          <p className="hover:underline cursor-pointer font-[Poppins] font-normal text-[20px] text-[#696984] mt-[28px]">
            Read more
          </p>
        </div>
        <div className="flex flex-col gap-[50px]">
          <NewsDivs
            h3text="Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand"
            ptext="Class Technologies Inc., the company that created Class,..."
            imagee={KidWithLaptopImg}
            btnText="PRESS RELEASE"
            btnClass="w-[154px]"
            imageeClass="w-[320px]"
          />
          <NewsDivs
            h3text="Zoom’s earliest investors are betting millions on a better Zoom for schools"
            ptext="Zoom was never created to be a consumer product. Nonetheless, the..."
            imagee={BoyWithLaptopImg}
            btnText="News"
            btnClass=""
            imageeClass=""
          />
          <NewsDivs
            h3text="Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms"
            ptext="This year, investors have reaped big financial returns from betting on Zoom..."
            imagee={CatWithLaptopImg}
            btnText="News"
            btnClass=""
            imageeClass="w-[320px]"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
