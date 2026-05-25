"use client";
import React from "react";
import { motion } from "motion/react";
const WhatIsIt = () => {
  return (
    <div className="text-center mt-[158px]">
      <h1 className="font-[Poppins] text-[44px] font-semibold text-[#2F327D] ">
        {" "}
        What is <span className="text-[#00CBB8]">TOTC?</span>
      </h1>
      <p className="text-[#696984] text-[24px] font-[Poppins] font-normal mt-[20px] ">
        TOTC is a platform that allows educators to create online classes
        whereby they can <br /> store the course materials online; manage
        assignments, quizzes and exams; monitor <br /> due dates; grade results
        and provide students with feedback all in one place.
      </p>
      <div className="flex gap-[100px] justify-center mt-[80px]">
        <div className="bg-[url('/Instructor.png')] w-[600px] h-[403px] pt-[135px] pb-[123px] px-[146px]">
          <h3 className="font-[Poppins] text-[32px] font-semibold text-[#FFFFFF]">
            FOR INSTRUCTORS
          </h3>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className=" cursor-pointer w-[283px] h-[80px] py-[22px] px-[38px] text-[#FFFFFF] text-[22px] font-[Poppins] font-normal rounded-[80px] border-[1px] border-white mt-[17px]"
          >
            Start a class today
          </motion.button>
        </div>
        <div className="bg-[url('/Students.png')] w-[600px] h-[400px] pt-[132px] pb-[123px] px-[146px] ">
          <h2 className="font-[Poppins] text-[32px] font-semibold text-[#FFFFFF]">
            FOR STUDENTS
          </h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className=" cursor-pointer w-[283px] h-[80px] py-[22px] px-[38px] text-[#FFFFFF] text-[22px] font-[Poppins] font-normal rounded-[80px] bg-[#23bfeed7] mt-[17px]"
          >
            Enter access code
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default WhatIsIt;
