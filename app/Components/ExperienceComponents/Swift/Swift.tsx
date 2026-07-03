"use client";
import React from "react";
import SwiftDivs from "../SwiftDivs/SwiftDivs";
import SquareLInaImg from "../../../../public/SquareLina.png";
import Image from "next/image";
import { motion } from "motion/react";
const Swift = () => {
  return (
    <div className="ml-[120px] mt-[80px] mr-[120px] mb-[30px]">
      <h3 className="font-[Poppins] font-semibold text-[44px] text-[#2F327D]">
        Why Swift UI Should Be on the Radar of Every Mobile Developer
      </h3>
      <p className="font-[Poppins] font-normal text-[24px] text-[#696984] mt-[20px]">
        TOTC is a platform that helps educators create online learning
        environments where they can share course content, manage assignments and
        quizzes, track student performance, organize schedules, and provide
        feedback through a single system.
      </p>
      <p className="font-[Poppins] font-normal text-[24px] text-[#696984] mt-[30px]">
        TOTC is a platform that allows educators to create online classes
        whereby they can store the course materials online; manage assignments,
        quizzes and exams; monitor due dates; grade results and provide students
        with feedback all in one place. TOTC is a platform that allows educators
        to create online classes whereby they can store the course materials
        online; manage assignments, quizzes and exams; monitor due dates; grade
        results and provide students with feedback all in one place. TOTC is a
        platform{" "}
      </p>
      <div className="flex gap-[22px] mt-[30px]">
        <SwiftDivs btntext="affordable " />
        <SwiftDivs btntext="Stunning" />
        <SwiftDivs btntext="making" />
        <SwiftDivs btntext="madbrawns" />
      </div>
      <hr className="w-[1681px] h-[1px] text-[#D9D9D9] mt-[31px]" />
      <div className="flex justify-between mt-[30px]">
        <div className="flex gap-[20px] items-center">
          <Image src={SquareLInaImg} alt="SquareLInaImg"></Image>
          <div>
            {" "}
            <p className="font-[Poppins] font-medium text-[12px] text-[#696984]">
              Written by
            </p>
            <p className="font-[Poppins] font-medium text-[18px] text-[#000000] mt-[6px]">
              Lina
            </p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-[282px] rounded-[10px] py-[12px] pl-[90px] pr-[88px] border-[1px] cursor-pointer border-[#49BBBD] font-[Poppins] font-bold text-[26px] text-[#49BBBD]"
        >
          Follow
        </motion.button>
      </div>
    </div>
  );
};

export default Swift;
