"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import PlayImg from "../../../../public/Play.svg";
import TeenageGirlImg from "../../../../public/TeenageGirl.png";
import CalendarlImg from "../../../../public/Calendar.png";
import EllipselImg from "../../../../public/Ellipse.png";
import VoiceImg from "../../../../public/voice.png";
import EmailImg from "../../../../public/Email.png";
import { motion } from "motion/react";
const OnlineStudying = () => {
  return (
    <div className="bg-[#49BBBD] px-[140px] flex items-center pt-[142px] gap-[74px]">
      <div className="w-full max-w-[681px]">
        <h2 className="font-bold font-[Poppins] text-[#FFFFFF] text-[54px] block">
          <span className="text-[#F48C06]">Studying</span> Online is now <br />
          much easier
        </h2>
        <p className="font-[Nunito_Sans] text-[#FFFFFF] text-[24px] font-normal mt-[34px]">
          TOTC is an interesting platform that will teach you in <br /> more an
          interactive way
        </p>
        <div className="flex gap-[40px] items-center gap-[40px] mt-[52px]">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className=" cursor-pointer  text-[#FFFFFF] bg-[#00CBB8] font-[Poppins] text-[22px] font-semibold
            rounded-[80px] w-[180px] h-[60px]"
          >
            Join for free
          </motion.button>
          <div className="flex items-center gap-8">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-[80px] h-[80px] cursor-pointer  flex justify-center items-center bg-[#FFF] rounded-[50%] pl-[5px]"
            >
              {" "}
              <Image
                src={PlayImg}
                alt="PlayImg"
                className="cursor-pointer"
              ></Image>
            </motion.div>
            <p className="text-[#252641] font-[Poppins]  text-[24px] font-normal">
              Watch how it works
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full max-w-[900px] flex justify-center">
        <Image
          src={TeenageGirlImg}
          alt="TeenageGirlImg"
          className="w-[544px] "
        ></Image>
        <div className="py-[15px] px-[28px] bg-[#fffc] flex rounded-[20px] gap-[32px] items-center absolute left-[0] top-[185px]  ">
          <Image
            src={CalendarlImg}
            alt="CalendarImg"
            className="w-[50px] h-[50px]"
          ></Image>
          <p className="text-[#595959] font-[Nunito_Sans] text-[20px] font-semibold text-start ">
            <span className="font-bold text-[24px]">250k</span> <br />
            Assisted Student
          </p>
        </div>
        <div className="pt-[20px] pb-[28px] px-[26px] bg-[#fffc] flex absolute rounded-[20px] gap-[23px] top-[420px] left-[0]">
          {" "}
          <Image
            src={EllipselImg}
            alt="EllipselImg"
            className="w-[56px] h-[56px]"
          ></Image>
          <div>
            <p className="font-[Nunito_Sans] text-[24px] font-bold text-[#595959] ">
              User Experience Class
            </p>
            <p className="font-[Nunito_Sans] text-[20px] font-semibold text-[#545567]">
              Today at 12.00 PM
            </p>
            <Link href="/experience">
              {" "}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className=" cursor-pointer py-[12px] px-[48px] bg-[#D8587E] rounded-[80px] font-[Nunito_Sans] text-[20px] font-bold text-[#FFFFFF] mt-[31px] "
              >
                Join Now
              </motion.button>
            </Link>
          </div>
        </div>
        <Image
          src={VoiceImg}
          alt="VoiceImg"
          className="absolute right-[100px] top-[130px]"
        ></Image>
        <div className="absolute bg-[#fffc] pr-[21px] pl-[26px] py-[20px] rounded-[20px] flex gap-[24px] right-[0] top-[380px]">
          {" "}
          <div className="bg-[#F88C3D] w-[50px] h-[50px] flex items-center justify-center">
            {" "}
            <Image src={EmailImg} alt="EmailImg" className=""></Image>{" "}
          </div>
          <div>
            {" "}
            <p className="font-[Nunito_Sans] text-[24px] font-bold text-[#595959]">
              Congratulations
            </p>
            <p className="font-[Nunito_Sans] text-[20px] font-semibold text-[#545567]">
              Your admission completed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineStudying;
