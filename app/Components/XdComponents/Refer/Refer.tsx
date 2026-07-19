"use client";
import React from "react";
import Link from "next/link";
import MiniClockImg from "../../../../public/MiniClock.svg";
import Image from "next/image";
import { DayPicker, Footer } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { motion } from "motion/react";
import LiveDivs from "../LiveDivs/LiveDivs";
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
        <div className=" px-[30px] pb-[20px] w-[1000px] bg-[#fff] mt-[50px] flex gap-[40px] pt-[36px] ml-[70px] rounded-[20px] ">
          {" "}
          <DayPicker mode="single" className="" />
          <hr className="w-[1px] h-[361px] bg-[#D9D9D9] " />{" "}
          <div className="">
            <h5 className="font-[Poppins] font-bold text-[20px] text-[#252641]">
              Sep 12, Monday
            </h5>
            <LiveDivs text="2PM" maindiv="mt-[30px]" />
            <div className="w-[409px] bg-[#F2A8A3] py-[20px] pl-[30px] font-[Poppins] ml-[40px] font-semibold text-[14px] text-[#EE645B] mt-[6px] rounded-[12px]">
              Adobe XD Live Class
            </div>
            <LiveDivs text="3PM" maindiv="mb-[60px]" />
            <LiveDivs text="4PM" maindiv="mb-[60px]" />
            <LiveDivs text="5PM" maindiv="mb-[60px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refer;
