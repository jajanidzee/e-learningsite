import React from "react";
import Image from "next/image";
import RightArrowImg from "../../../../public/RightArrow.png";
import GloriaGirlImg from "../../../../public/GloriaGirl.png";
import SstarImg from "../../../../public/SStar.png";
const Testimonial = () => {
  return (
    <div className="flex gap-[160px] ml-[200px] mt-[250px]">
      <div>
        <div className="flex gap-[30px] items-center">
          <hr className="w-[80px] bg-[#525596] h-[1px]" />
          <p className="font-[Nunito_Sans] text-[20px] font-normal text-[#525596]">
            TESTIMONIAL
          </p>
        </div>
        <h3 className="font-[Nunito_Sans] text-[60px] font-bold text-[#2F327D] mt-[32px]">
          What They Say?
        </h3>
        <p className="font-[Poppins] text-[26px] font-normal text-[#696984] mt-[29px]">
          TOTC has got more than 100k positive ratings <br /> from our users
          around the world.{" "}
        </p>
        <p className="font-[Poppins] text-[26px] font-normal text-[#696984] mt-[26px]">
          Some of the students and teachers were <br /> greatly helped by the
          Skilline.
        </p>
        <p className="font-[Poppins] text-[26px] font-normal text-[#696984] mt-[46px]">
          Are you too? Please give your assessment
        </p>
        <button className="flex  pl-[38px] py-[22px] items-center justify-between mt-[43px] w-[403px] h-[80px] border-[1px] border-[#49BBBD] text-[#49BBBD] text-[22px] font-[Poppins] rounded-[80px] font-normal">
          Write your assessment
          <Image src={RightArrowImg} alt="RightArrowImg"></Image>
        </button>
      </div>
      <div className="relative">
        <Image src={GloriaGirlImg} alt="GloriaGirlImg" className=""></Image>
        <div className="w-[680px] bg-[#FFFFFF] shadow-[0px_5px_5px_3px_#D9D9D9] h-[329px] pr-[42px]  rounded-[20px] pl-[55px] absolute left-[70px] -bottom-[120px] pt-[41px]">
          <hr className="h-[329px] w-[14px] bg-[#F67766] absolute left-[0] top-[0] " />
          <div className="flex gap-[32px] ">
            <hr className="h-[139.01px] bg-[#BDBDD1] w-[1px]" />
            <p className="font-[Nunito_Sans] text-[22px] font-normal text-[#5F5F7E]">
              "Thank you so much for your help. It's exactly what <br /> I've
              been looking for. You won't regret it. It really <br /> saves me
              time and effort. TOTC is exactly what our <br /> business has been
              lacking."
            </p>
          </div>
          <div className="flex justify-between items-center mt-[51px]">
            <p className="font-[Nunito_Sans] text-[24px] font-semibold text-[#5F5F7E]">
              Gloria Rose
            </p>
            <div>
              <div className="flex gap-[4.28px] ">
                <Image
                  src={SstarImg}
                  alt="SstarImg"
                  className="w-[23.98px] h-[23.98px"
                />
                <Image
                  src={SstarImg}
                  alt="SstarImg"
                  className="w-[23.98px] h-[23.98px"
                />
                <Image
                  src={SstarImg}
                  alt="SstarImg"
                  className="w-[23.98px] h-[23.98px"
                />
                <Image
                  src={SstarImg}
                  alt="SstarImg"
                  className="w-[23.98px] h-[23.98px"
                />
                <Image
                  src={SstarImg}
                  alt="SstarImg"
                  className="w-[23.98px] h-[23.98px"
                />
              </div>
              <p className="font-[Nunito_Sans] text-[18px] font-semibold text-[#80819A] mt-[12.02px]">
                12 reviews at Yelp
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
