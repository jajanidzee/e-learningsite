import React from "react";
import SettingsImg from "../../../../public/Settings.svg";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";
const Meeting = () => {
  return (
    <div className="w-[1200px] rounded-[26px]  shadow-[0px_5px_10px_0px_grey] bg-[#fff] py-[35px] pl-[35px] pr-[51px]  flex justify-between">
      {" "}
      <div className="">
        <h5 className="font-[Poppins] font-semibold text-[#252641] text-[30px]">
          UX/UI Design Confrence Meeting
        </h5>
        <p className="font-[Poppins] font-normal text-[#252641] text-[20px] mt-[11px]">
          9 Lesson 6h 30min
        </p>
      </div>
      <Link href="https://www.youtube.com/watch?v=3O5j2xyeddQ" target="blank">
        {" "}
        <Image
          src={SettingsImg}
          alt="SettingsImg"
          className="cursor-pointer"
        ></Image>
      </Link>
    </div>
  );
};

export default Meeting;
