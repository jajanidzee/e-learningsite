import React from "react";
import Image from "next/image";
import RatingImg from "../../../../public/Rating.svg";
import PhoneImg from "../../../../public/Phone.svg";
const Features = () => {
  return (
    <div className="mt-[160px] text-center">
      <h3 className="font-[Poppins] font-bold text-[36px] text-[#2F327D]">
        Our <span className="text-[#00CBB8]">Features</span>
      </h3>
      <p className="font-[Poppins] font-norma; text-[24px] text-[#696984 mt-[20px]">
        This very extraordinary feature, can make learning activities more
        efficient
      </p>
      <div>
        <div className="bg-[url('/BlurBg.png')] w-[783px] h-[483px]">
          <div className="pt-[92.7px] ">
            <div className="bg-[url('/Howard.png')] w-[255.34px] h-[246.83px] pt-[216.23px] pl-[8.14px] ml-[83.86px] shadow-[0px_10px_10px_0px_#D9D9D9] rounded-[17.02px]">
              <div className="py-[4px] pl-[5.5px] pr-[10px] bg-[#c9d3e751] w-[170px] rounded-[5.55px] flex items-center justify-between ">
                <Image src={RatingImg} alt="RatingImg"></Image>
                <button className="w-[58px] h-[16px] rounded-[5.55px] font-[Nunito_Sans] font-semibold text-[#FFFFFF] text-[10px] bg-[#2196F3]">
                  Instructor
                </button>
                <p className=" font-[Nunito_Sans] font-semibold text-[#FFFFFF] text-[11.09px]">
                  Eveny Howard
                </p>
              </div>
            </div>{" "}
            <div className="flex  items-center gap-[24.13px] mt-[34.43px] ml-[44.66px]">
              <button className="shadow-[0px_10px_60px_0px_#C9D3E7] py-[6.73px] px-[37.34px] h-[51.7px] bg-[#545AE8] rounded-[51.07px] font-[Nunito_Sans] font-bold text-[#FFFFFF] text-[22.13px]">
                Present
              </button>
              <button className="h-[65px] border-[5px] border-[#FFD4E1] py-[17px] pl-[30px] pr-[42px] bg-[#E13468] rounded-[51.07px] flex items-center font-[Nunito_Sans] font-bold text-[#FFFFFF] gap-[9.36px] text-[22.13px] ">
                Call <Image src={PhoneImg} alt="PhoneImg"></Image>
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Features;
