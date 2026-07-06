"use client";
import React from "react";
import WhiteArrowImg from "../../../../public/WhiteArrow.svg";
import Image from "next/image";
import EventDivs from "../EventDivs/EventDivs";
import WhiteBookImg from "../../../../public/WhiteBook.svg";
import BlackBookImg from "../../../../public/BlackBook.svg";
import Link from "next/link";
import { motion } from "motion/react";
const Events = () => {
  return (
    <div className="flex">
      <div className="w-[497px] pt-[26px] pb-[30px] px-[20px]">
        <Link href="/courses">
          {" "}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className="w-[50px] h-[50px] bg-[#49BBBD] flex items-center justify-center cursor-pointer"
          >
            <Image src={WhiteArrowImg} alt="WhiteArrowImg"></Image>
          </motion.button>
        </Link>
        <h4 className="font-[Poppins] font-semibold text-[30px] text-[#252641] mt-[47px]">
          Change Simplification
        </h4>
        <div className="flex flex-col gap-[15px] mt-[16px]">
          <EventDivs
            divclass="bg-[#49BBBD]"
            imagee={WhiteBookImg}
            lesson="Lesson 01 : Introduction about XD"
            duration="30 mins"
          />
          <EventDivs
            divclass="bg-[#FFD7A3]"
            imagee={BlackBookImg}
            lesson="Lesson 01 : Introduction about XD"
            duration="30 mins"
          />
          <EventDivs
            divclass="bg-[#B8DAFF]"
            imagee={BlackBookImg}
            lesson="Lesson 01 : Introduction about XD"
            duration="30 mins"
          />
          <EventDivs
            divclass="bg-[#FDB1AD]"
            imagee={BlackBookImg}
            lesson="Lesson 01 : Introduction about XD"
            duration="30 mins"
          />
        </div>
        <h4 className="font-[Poppins] font-semibold text-[30px] text-[#252641] mt-[50px] ">
          PRACTICE QUIZ
        </h4>
        <div className="flex flex-col gap-[15px] mt-[20px]">
          {" "}
          <EventDivs
            divclass="bg-[#B8DAFF]"
            imagee={BlackBookImg}
            lesson="Lesson 01 : Introduction about XD"
            duration="30 mins"
          />
          <EventDivs
            divclass="bg-[#FFD7A3]"
            imagee={BlackBookImg}
            lesson="Lesson 01 : Introduction about XD"
            duration="30 mins"
          />
          <EventDivs
            divclass="bg-[#B8DAFF]"
            imagee={BlackBookImg}
            lesson="Lesson 01 : Introduction about XD"
            duration="30 mins"
          />
          <EventDivs
            divclass="bg-[#FDB1AD]"
            imagee={BlackBookImg}
            lesson="Lesson 01 : Introduction about XD"
            duration="30 mins"
          />
          <EventDivs
            divclass="bg-[#B8DAFF]"
            imagee={BlackBookImg}
            lesson="Lesson 01 : Introduction about XD"
            duration="30 mins"
          />
          <EventDivs
            divclass="bg-[#FFD7A3]"
            imagee={BlackBookImg}
            lesson="Lesson 01 : Introduction about XD"
            duration="30 mins"
          />
          <EventDivs
            divclass="bg-[#B8DAFF]"
            imagee={BlackBookImg}
            lesson="Lesson 01 : Introduction about XD"
            duration="30 mins"
          />
          <EventDivs
            divclass="bg-[#FDB1AD]"
            imagee={BlackBookImg}
            lesson="Lesson 01 : Introduction about XD"
            duration="30 mins"
          />
          <EventDivs
            divclass="bg-[#B8DAFF]"
            imagee={BlackBookImg}
            lesson="Lesson 01 : Introduction about XD"
            duration="30 mins"
          />
          <EventDivs
            divclass="bg-[#FFD7A3]"
            imagee={BlackBookImg}
            lesson="Lesson 01 : Introduction about XD"
            duration="30 mins"
          />
          <EventDivs
            divclass="bg-[#B8DAFF]"
            imagee={BlackBookImg}
            lesson="Lesson 01 : Introduction about XD"
            duration="30 mins"
          />
          <EventDivs
            divclass="bg-[#FDB1AD]"
            imagee={BlackBookImg}
            lesson="Lesson 01 : Introduction about XD"
            duration="30 mins"
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
