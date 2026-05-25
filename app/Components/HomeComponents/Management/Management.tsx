"use client";
import React from "react";
import StarImg from "../../../../public/Star.png";
import Image from "next/image";
import GradeBook1 from "../../../../public/GradeBook1.png";
import SmallStarImg from "../../../../public/SmallStar.png";
import GradeBook2 from "../../../..//public/GradeBook2.png";
import GradeBook3 from "../../../..//public/GradeBook3.png";
import GradeBook4 from "../../../..//public/GradeBook4.png";
import BookImg from "../../../../public/Book.png";
import WavesImg from "../../../../public/Waves.png";
import { motion } from "motion/react";
const Management = () => {
  return (
    <div className="mt-[175.51px] flex relative gap-[250.94px] ml-[150px] items-center ">
      <div>
        <h2 className="font-[Poppins] text-[40px] font-semibold text-[#00CBB8]">
          Class Management <br />
          <span className="text-[#2F327D]"> Tools for Educators</span>
        </h2>
        <p className="text-[22px] font-[Poppins] text-[#696984] mt-[19.91px]">
          Class provides tools to help run and manage the class <br /> such as
          Class Roster, Attendance, and more. With the <br /> Gradebook,
          teachers can review and grade tests <br /> and quizzes in real-time.
        </p>
      </div>

      <div className=" w-[717.69px] rounded-[20px] relative h-[479.16px] bg-[#fff] shadow-[0px_5px_5px_3px_#D9D9D9] z-10">
        <div className=" w-[717.69px] py-[17.97px] text-center bg-[#54AFF0] rounded-[20px]">
          <h3 className="font-[Poppins] text-[22px] font-semibold text-[#F2FDFF]">
            GradeBook
          </h3>
        </div>
        <div className="w-[131.93px] h-[131.78px] rounded-[100%] bg-[#d9d9d934] flex items-center justify-center absolute -left-[120px] -top-[40px] ">
          <div className="w-[99.95px] h-[99.83px] rounded-[100%] bg-[#fff] flex items-center justify-center   ">
            <Image src={StarImg} alt="StarImg"></Image>
          </div>
        </div>
        <div className="w-[99.95px] h-[99.83px] rounded-[100%] bg-[#d9d9d934] flex items-center justify-center absolute -right-[30px] top-[28.95px] ">
          <div className="w-[75.72px] h-[75.63px] rounded-[100%] bg-[#fff] flex items-center justify-center ">
            <Image src={BookImg} alt="BookImg"></Image>
          </div>
        </div>
        <div className="flex items-end gap-[23.99px] absolute -right-[30px] -top-[50px]">
          <div className="w-[43.98px] h-[43.92px] bg-[#9FD7FF] rounded-[100%]"></div>
          <div className="w-[19.99px] h-[19.96px] bg-[#9FD7FF] rounded-[100%]"></div>
        </div>
        <Image
          src={WavesImg}
          alt="WavesImg"
          className="absolute bottom-[21.09px] -left-[35.47px]"
        ></Image>

        <div className="flex">
          <div className="mt-[109.81px]">
            <div className="w-[126.94px] h-[29.95px] bg-[#3AC6F2] flex items-center justify-end relative">
              <div className="absolute -right-[20px]">
                <Image src={GradeBook1} alt="GradeBook1"></Image>
                <Image
                  src={SmallStarImg}
                  alt="SmallStarImg"
                  className="absolute -bottom-[13px] left-[27px]"
                ></Image>
                <div className="w-[99.96px] h-[49.91px] rounded-[60px] bg-[#CDF3FF] absolute top-[42.92px] left-[60.97px] text-[22px] font-[Poppins] font-medium text-[#43869B] flex items-center justify-center ">
                  100
                </div>
              </div>
            </div>
            <div className="w-[259.89px] h-[29.95px] bg-[#68F146] flex items-center justify-end relative mt-[121.79px]">
              <div className="absolute -right-[20px]">
                <Image src={GradeBook2} alt="GradeBook2"></Image>

                <div className="w-[99.96px] h-[49.91px] rounded-[60px] bg-[#D7FFCD] absolute top-[42.92px] left-[60.97px] text-[22px] font-[Poppins] font-medium text-[#4E8C3F] flex items-center justify-center ">
                  85
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[82.85px]">
            <div className="w-[304.87px] h-[29.95px] bg-[#3189EF] flex items-center justify-end absolute right-[0px]">
              <div className="absolute -left-[20px]">
                <Image src={GradeBook3} alt="GradeBook3"></Image>

                <div className="w-[99.96px] h-[49.91px] rounded-[60px] bg-[#CDE4FF] absolute top-[42.92px] right-[60.97px] text-[22px] font-[Poppins] font-medium text-[#486F9C] flex items-center justify-center ">
                  98
                </div>
              </div>
            </div>
            <div className="w-[145.94px] h-[29.95px] bg-[#F13C3C] flex items-center justify-end absolute right-[0px] mt-[91.84px]">
              <div className="absolute -left-[20px]">
                <Image src={GradeBook4} alt="GradeBook4"></Image>

                <div className="w-[99.96px] h-[49.91px] rounded-[60px] bg-[#FFCDCD] absolute top-[42.92px] right-[60.97px] text-[22px] font-[Poppins] font-medium text-[#9E5555] flex items-center justify-center ">
                  98
                </div>
              </div>
            </div>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer absolute right-[39.98px] bottom-[25.95px] w-[169.93px] h-[58.59px] bg-gradient-to-r from-[#545AE7] to-[#393FCF] rounded-[60px] text-[#FFFFFF] shadow-[2px_2px_2px_0px_#545AE8] font-[Poppins] text-[22px] font-medium text-[#FFFFFF] flex items-center justify-center "
        >
          Export
        </motion.button>
      </div>
      <div className="w-[288.87px] h-[207.63px] bg-[#D3E7FF] rounded-[20px] absolute z-0 left-[700px] top-[290px]"></div>
    </div>
  );
};

export default Management;
