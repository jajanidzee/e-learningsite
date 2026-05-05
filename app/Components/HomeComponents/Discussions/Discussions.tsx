import React from "react";
import Image from "next/image";
import HeadPhoneGirlImg from "../../../../public/HeadPhoneGirl.png";
import RatingImg from "../../../../public/Rating.svg";
const Discussions = () => {
  return (
    <div className="flex gap-[200px] pl-[150px] mt-[145px] items-center">
      <div className="relative">
        <div className="bg-[url('/BluredBg.png')] w-[658.12px] h-[365.48px] relative z-10 ">
          <div className="w-[591.27px] h-[368.13px] bg-[#fff] absolute  rounded-[18.83px] px-[53.59px] py-[56.72px] -right-[35.05px] top-[99.8px] shadow-[0px_5px_10px_0px_grey] ">
            <div className="bg-[#EAEAEA] w-[591.27px] h-[24.48px] rounded-[5.83px] absolute left-[0] top-[0]">
              <div className="flex gap-[6.12px] px-[28.25px] py-[6.12px]">
                <div className="w-[12.24px] h-[12.24px] bg-[#EE6767] rounded-[100%]"></div>
                <div className="w-[12.24px] h-[12.24px] bg-[#F6C566] rounded-[100%]"></div>
                <div className="w-[12.24px] h-[12.24px] bg-[#5BEB7B] rounded-[100%]"></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <Image src={HeadPhoneGirlImg} alt="HeadPhoneGirlImg"></Image>
              <hr className="h-[197.72px] bg-[#D5E2FB] w-[1px]" />
              <div className="bg-[url('/MendozaGirl.png')] w-[198.85px] h-[192.22px]">
                <button className=" bg-[#c9d3e751] rounded-[5.55px] w-[159.2px] h-[31.2px] flex items-center gap-[6.73px] pl-[5.55px] mt-[153.77px] ml-[10.61px] ">
                  <Image src={RatingImg} alt="RatingImg"></Image>
                  <p className="font-[Nunito_Sans] font-semibold text-[#FFFFFF] text-[16px]">
                    Patricia Mendoza
                  </p>
                </button>
              </div>
            </div>
            <div className="flex mt-[35.31px] gap-[55.55px]">
              <div>
                {" "}
                <h5 className="text-[#696984] font-[Nunito_Sans] text-[22.6px] font-bold">
                  Private Discussion
                </h5>
                <p className="text-[#A8A8B6] font-[Nunito_Sans] text-[16.95px] font-semibold -mt-[6px] whitespace-nowrap ">
                  Your video can’t be seen by others
                </p>
              </div>
              <button className="w-[197.72px] h-[54.61px] rounded-[56.49px] bg-gradient-to-r from-[#F55454] to-[#E5422B] font-medium font-[Poppins] text-[20.71px] text-[#fff]  shadow-[2px_2px_2px_0px_#E5422B]">
                End Discussion
              </button>
            </div>
          </div>{" "}
        </div>
        <div className="w-[196.78px] h-[193.01px] bg-[#73BCFF] rounded-[18.83px] absolute -bottom-[20px] -left-[20px] z-0"></div>
        <div className="w-[112.98px] h-[112.98px] bg-[#23BDEE] rounded-[100%] absolute -top-[40px] flex items-center justify-center left-[575px]">
          <div className="w-[80.98px] h-[80.98px] bg-[#fff] rounded-[100%]"></div>
        </div>
      </div>

      <div className="">
        <h3 className="font-[Poppins] font-semibold text-[40px] text-[#2F327D]">
          One-on-One <br /> <span className="text-[#00CBB8]">Discussions</span>
        </h3>
        <p className="text-[#696984] font-[Poppins] text-[22px] font-normal">
          Teachers and teacher assistants can talk with <br /> students
          privately without leaving the Zoom <br /> environment.
        </p>
      </div>
    </div>
  );
};

export default Discussions;
