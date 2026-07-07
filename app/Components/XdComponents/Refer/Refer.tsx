"use client";
import React from "react";
import Link from "next/link";
import MiniClockImg from "../../../../public/MiniClock.svg";
import Image from "next/image";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { motion } from "motion/react";
const Refer = () => {
  return (
    <div className="w-full bg-[#9dccff73]">
      <div className="bg-[#49BBBD] pt-[26px] pb-[30px] pl-[60px] pr-[50px] ">
        <h3 className="font-[Poppins] font-normal text-[44px] text-[#fff]">
          Learn about Adobe XD & Prototyping
        </h3>
        <div className="flex justify-between">
          <p className="font-[Poppins] font-normal text-[24px] text-[#fff] mt-[5px]">
            Introduction about XD
          </p>
          <div className="flex items-center gap-[10px]">
            <Image src={MiniClockImg} alt="MiniClockImg"></Image>
            <p className="font-[Poppins] font-normal text-[24px] text-[#fff]">
              1 hour
            </p>
          </div>
        </div>
      </div>
      <div className="pt-[30px] pl-[30px] pr-[34px] pb-[152px]">
        <h4 className="font-[Poppins] font-semibold text-[30px] text-[#252641] ">
          Share and refer
        </h4>
        <p className="text-[#696984] font-[Poppins] font-normal text-[18px] mt-[20px]">
          Share the value and grow together through our referral program. Invite
          your friends, family, colleagues, or clients to join our platform
          using your unique referral link. Every successful referral helps
          strengthen our community while rewarding you with exclusive benefits.
          It's a simple way to support others, expand your network, and earn
          valuable incentives. The more people you refer, the greater the
          opportunities to unlock exciting rewards, build lasting connections,
          and contribute to a thriving community where everyone benefits from
          shared success.
        </p>
        <div className="pt-[90px] px-[54px] pb-[20px] w-[1137px] bg-[#fff] mt-[50px] flex gap-[40px] items-end ">
          {" "}
          <DayPicker mode="single" className="scale-120 h-[416px]" />
          <hr className="w-[1px] h-[461px] bg-[#D9D9D9]" />
        </div>
      </div>
    </div>
  );
};

export default Refer;
