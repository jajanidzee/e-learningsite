"use client";
import React from "react";
import BookDivs from "../BookDivs/BookDivs";
import NetworkBookImg from "../../../../public/NetworkBook.png";
import VicibleBookImg from "../../../../public/VicibleBook.png";
import LeftArrowImg from "../../../../public/LeftArrow.svg";
import RightArrowImg from "../../../../public/RightArrow.svg";
import RulesBookImg from "../../../../public/RulesBook.png";
import PivotBookImg from "../../../../public/PivotBook.png";
import LearningBookImg from "../../../../public/LearningBook.png";
import Image from "next/image";
import { motion } from "motion/react";
import Numbers from "../Numbers/Numbers";
const Books = () => {
  return (
    <div className="mt-[68px] ml-[117px]">
      <p className="font-[Poppins] font-bold text-[#000000] text-[30px] mb-[49px] ">
        Literature course
      </p>
      <div className="grid grid-cols-3 gap-[86px]">
        <BookDivs
          imagee={NetworkBookImg}
          text="All Benefits of PLUS"
          bio="$24"
        />{" "}
        <BookDivs
          imagee={VicibleBookImg}
          text="All Benefits of PLUS"
          bio="$24"
        />{" "}
        <BookDivs imagee={RulesBookImg} text="All Benefits of PLUS" bio="$24" />{" "}
        <BookDivs imagee={PivotBookImg} text="All Benefits of PLUS" bio="$24" />{" "}
        <BookDivs
          imagee={LearningBookImg}
          text="All Benefits of PLUS"
          bio="$24"
        />{" "}
        <BookDivs
          imagee={VicibleBookImg}
          text="All Benefits of PLUS"
          bio="$24"
        />
      </div>{" "}
      <div className="flex items-center justify-center mt-[57.29px] mb-[52px]">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-[50px] h-[50px] bg-[#49bbbda0] cursor-pointer rounded-[4px] text-[#fff] text-[24px] flex items-center justify-center"
        >
          <Image src={LeftArrowImg} alt="LeftArrowImg"></Image>
        </motion.button>
        <div className="flex items-center ">
          <Numbers text="1" /> <Numbers text="2" /> <Numbers text="3" />{" "}
          <Numbers text="4" /> <Numbers text="5" />
        </div>
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

export default Books;
