import React from "react";
import Image from "next/image";
import AcceptImg from "../../../../public/Accept.svg";
import CityOnWater from "../../../../public/CityOnWater.png";
const Assessments = () => {
  return (
    <div className="pl-[192px] mt-[160px]">
      <div className="w-[465.62px] h-[562.39px] rounded-[18.21px] bg-[#FFFFFF] shadow-[0px_10px_10px_10px_#D9D9D9] py-[38.32px] px-[38.32px] relative z-10">
        <button className="w-[174.37px] bg-[#CDD8FF] rounded-[72.82px] py-[6.71px] px-[33.53px] text-[#717FB0] font-[Poppins] font-medium text-[20.03px] border-[1px] border-[#000000]">
          Question 1
        </button>
        <p className=" text-[#55578D] font-[Poppins] font-semibold text-[30.95px] mt-[40.24px]">
          True or false? This play takes place in Italy
        </p>
        <div className="absolute left-[360px] bottom-[510px] w-[76.65px] h-[76.65px] rounded-[100%]  shadow-[0px_5px_5px_0px_#D9D9D9] flex items-center justify-center -rotate-[12deg] bg-[#FEFEFE]">
          <div className="w-[43.11px] h-[43.11px] rounded-[100%] border-[3px] border-[#EE3175] text-[#EE3175] text-[40px] flex items-center justify-center pb-[6px] ">
            x
          </div>
        </div>
        <div className="absolute left-[420px] bottom-[460px] w-[76.65px] h-[76.65px] rounded-[100%]  shadow-[0px_5px_5px_0px_#D9D9D9] flex items-center justify-center rotate-[12deg] bg-[#FEFEFE]">
          <div className="w-[43.11px] h-[43.11px] rounded-[100%] border-[3px] border-[#2DD38E] text-[#EE3175] text-[40px] flex items-center justify-center pl-[3px] ">
            <Image src={AcceptImg} alt="AcceptImg"></Image>
          </div>
        </div>
        <Image
          src={CityOnWater}
          alt="CityOnWater"
          className="mt-[38.32px] absolute"
        ></Image>
      </div>
      <div className="flex items-start gap-[18.2px] absolute z-0 top-[5365px] left-[200px]">
        {" "}
        <div className="w-[99.64px] h-[99.64px] bg-[#687EF3] rounded-[100%]"></div>
        <div className="w-[22.99px] h-[22.99px] bg-[#F3A268] rounded-[100%]"></div>
      </div>

      <div className=""></div>
    </div>
  );
};

export default Assessments;
