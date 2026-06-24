"use client";
import React from "react";
import Image from "next/image";
import TotcImg from "../../../public/Totc.svg";
import Link from "next/link";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="bg-[#49BBBD] px-[120px] py-[30px] flex justify-between">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => console.log("hover started!")}
      >
        <Link href="/">
          <Image src={TotcImg} alt="TotcImg"></Image>
        </Link>
      </motion.div>
      <div className="flex items-center gap-[81px]">
        <ul className="font-[Poppins] text-[22px] text-[#ffffff] font-normal flex items-center  gap-[79px] ">
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="/">Home</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className="cursor-pointer"
          >
            <Link href="/courses">Courses</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className="cursor-pointer"
          >
            <Link href="/carrers">Careers</Link>
          </motion.li>
          <motion.li
            className="cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            <Link href="/blog"> Blog</Link>
          </motion.li>
          <motion.li
            className="cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            <Link href="/aboutus"> About Us</Link>
          </motion.li>
        </ul>
        <div className="flex gap-[26px]">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className="cursor-pointer bg-[#FFFFFF] text-[#5B5B5B] font-[Poppins] text-[22px] font-medium  rounded-[80px] py-[14px] px-[49px]"
          >
            Login
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className="cursor-pointer  text-[#FFFFFF] bg-[#00CBB8] font-[Poppins] text-[22px] font-medium  rounded-[80px] py-[14px] px-[49px]"
          >
            <Link href="/signup">Sign Up</Link>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Header;
