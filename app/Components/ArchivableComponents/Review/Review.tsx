import React from "react";
import BulkinSimonsImg from "../../../../public/BulkinSimons.svg";
import AllStarImg from "../../../../public/AllStar.png";
import Image from "next/image";
const Review = () => {
  return (
    <div className="w-[1309px] pt-[28px] pb-[40px] pl-[30px] pr-[52px] bg-[#FFDBAC] rounded-[15px] mx-[50px]">
      <div className="flex gap-[20.16px]">
        <Image
          src={BulkinSimonsImg}
          alt="BulkinSimonsImg"
          className="w-[70.84px] h-[70.84px] rounded-[8px]"
        ></Image>
        <div className="">
          <p className="font-[Poppins] font-semibold text-[24px] text-[#2D3436] mb-[8px]">
            Bulkin Simons
          </p>

          <Image src={AllStarImg} alt="AllStarImg"></Image>
        </div>
      </div>{" "}
      <p className="font-[Poppins] font-normal text-[24px] text-[#696984] mt-[37px]">
        Business is an activity that involves producing, selling, or providing
        goods and services to customers. Successful businesses focus on quality,
        customer satisfaction, innovation, and teamwork.
      </p>
    </div>
  );
};

export default Review;
