import React from "react";
import Image from "next/image";
import HandImg from "../../../../public/Hand.png";
import StudentGirlImg from "../../../../public/StudentGirl.png";
import BlocksImg from "../../../../public/Blocks.png";
import ClassImg from "../../../../public/Class.png";
const Tools = () => {
  return (
    <div className="mt-[194px] flex items-end flex gap-[395px] pl-[239px]">
      <div className="relative mt-[194px]">
        <h3 className="font-semibold text-[40px] font-[Poppins] text-[#2F327D]">
          <span className="text-[#00CBB8]">Tools</span> For Teachers <br /> And
          Learners
        </h3>
        <p className="font-bormal text-[22px] font-[Poppins] text-[#696984] mt-[20px]">
          Class has a dynamic set of teaching tools built to <br /> be deployed
          and used during class. Teachers can <br /> handout assignments in
          real-time for students to <br /> complete and submit.
        </p>
        <Image
          src={HandImg}
          alt="HandImg"
          className="absolute left-[100px] top-[128px] left-[267px]"
        ></Image>
      </div>
      <div className="bg-[url('/FullStops.png')] w-[550px] h-[370px] flex items-center justify-center relative">
        <Image
          src={StudentGirlImg}
          alt="StudentGirlImg"
          className="absolute z-10"
        ></Image>
        <div className="w-[236px] h-[236px] rounded-[100%] bg-[#FF6A6A] absolute -top-[40px] left-[140px]"></div>
        <div className="w-[24px] h-[24px] rounded-[100%] bg-[#FF9A7A] absolute -left-[20px] bottom-[100px]  "></div>
        <div className="w-[24px] h-[24px] rounded-[100%] bg-[#33EFA0] absolute -top-[80px] right-[120px]"></div>
        <div className="w-[24px] h-[24px] rounded-[100%] bg-[#545AE8] absolute -bottom-[70px] right-[50px]"></div>
        <div className="w-[80.36px] h-[80.36px] flex items-center justify-center rounded-[20px] border-[#d9d9d92c] border-[10px] rounded-[20px] bg-[#fff] absolute left-[0px] top-[30px] -rotate-[15deg] ">
          <Image
            src={BlocksImg}
            alt="Blocksimg"
            className="rotate-[10deg] "
          ></Image>
        </div>
        <div className="w-[80.36px] h-[80.36px] flex items-center justify-center rounded-[20px] border-[#d9d9d92c] border-[10px] rounded-[20px] bg-[#fff] absolute right-[0px] top-[75px] rotate-[15deg] ">
          <Image
            src={ClassImg}
            alt="ClassImg"
            className="-rotate-[10deg] "
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Tools;
