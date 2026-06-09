"use client";
import React from "react";
import StudentDivs from "../StudentDivs/StudentDivs";
import StudentToughtImg from "../../../../public/StudentsTought.png";
import StudentBoyImg from "../../../../public/StudentBoy.png";
import StudentBoy2Img from "../../../../public/StudentBoy2.png";
import StudentBoy3Img from "../../../../public/StudentBoy3.png";
import ArrowLeftImg from "../../../../public/ArrowLeft.svg";
import ArrowRightImg from "../../../../public/ArrowRight.svg";
import Image from "next/image";
import { motion } from "motion/react";
const Students = () => {
  return (
    <div className="bg-[#9dccff73] pt-[80px] pb-[194px] px-[147px] mt-[80px]">
      <h4 className="font-[Poppins] font-semibold text-[36px] text-[#2D3436]">
        What our students have to say
      </h4>
      <div className="flex gap-[30px] mt-[50px] relative">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-[50px] h-[50px] rounded-[100%] bg-[#49BBBD] cursor-pointer flex items-center justify-center absolute -left-[20px] top-[150px] "
        >
          <Image src={ArrowLeftImg} alt="ArrowLeftImg"></Image>{" "}
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-[50px] h-[50px] rounded-[100%] bg-[#49BBBD] cursor-pointer flex items-center justify-center absolute -right-[20px] top-[150px]"
        >
          {" "}
          <Image src={ArrowRightImg} alt="ArrowRightImg"></Image>
        </motion.div>

        <StudentDivs
          imagee={StudentToughtImg}
          htext="Business Growth"
          ptext="Success in business comes from consistent learning, smart decisions, and adapting to changing market conditions."
        />
        <StudentDivs
          imagee={StudentBoyImg}
          htext="Strategic Leadership"
          ptext="Business students learn leadership, strategy, and communication skills to succeed in competitive professional environments."
        />
        <StudentDivs
          imagee={StudentBoy2Img}
          htext="Market Success"
          ptext="Strong business knowledge helps individuals create opportunities, solve problems, and achieve long-term professional growth."
        />
        <StudentDivs
          imagee={StudentBoy3Img}
          htext="Financial Planning"
          ptext="Effective leaders inspire teams, manage resources wisely, and drive organizations toward meaningful goals daily."
        />
      </div>
    </div>
  );
};

export default Students;
