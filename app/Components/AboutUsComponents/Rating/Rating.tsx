import React from "react";
import RatingBtns from "../RatingBtns/RatingBtns";
import SStariImg from "../../../../public/SStar.png";
import Stars from "../Stars/Stars";
import MariaImg from "../../../../public/Maria.jpg";
import LinaPfpImg from "../../../../public/LinaPfp.png";
import CarlImg from "../../../../public/Carl.jpg";
import MiniClockImg from "../../../../public/MiniClock.svg";
import Image from "next/image";
import Persons from "../Persons/Persons";
const Rating = () => {
  return (
    <div className="mt-[55px] pl-[157px]">
      <div className="flex gap-[50px]">
        <RatingBtns btnclass="" btntext="Overview" />
        <RatingBtns btnclass="" btntext="Overview" />
        <RatingBtns btnclass="" btntext="Overview" />
        <RatingBtns btnclass="" btntext="Overview" />
      </div>
      <div className="w-[950px] rounded-[20px] bg-[#9dccff79] pt-[50px] pb-[53px] px-[50px] mt-[83px]">
        <div className="flex gap-[46px]">
          <div className="w-[257px] rounded-[20px] bg-[#fff] py-[25px] px-[48px] flex flex-col items-center">
            <p className="font-[Poppins] font-semibold text-[30px] text-[#00000077]">
              4 out of 5
            </p>{" "}
            <div className="flex gap-[5px] mt-[28px]">
              <Image src={SStariImg} alt="SStariImg"></Image>
              <Image src={SStariImg} alt="SStariImg"></Image>
              <Image src={SStariImg} alt="SStariImg"></Image>
              <Image src={SStariImg} alt="SStariImg"></Image>
              <Image src={SStariImg} alt="SStariImg"></Image>
            </div>
            <p className="font-[Poppins] font-normal text-[20px] text-[#00000077] mt-[28px]">
              Top Raiting
            </p>
          </div>
          <div className="">
            <Stars ptext="5 star" mainclass="" smallclass="w-[78%]" />
            <Stars ptext="4 star" mainclass="" smallclass="w-[55%]" />
            <Stars ptext="3 star" mainclass="" smallclass="w-[60%]" />
            <Stars ptext="2 star" mainclass="" smallclass="w-[85%]" />
            <Stars ptext="1 star" mainclass="" smallclass="w-[35%]" />
          </div>
        </div>
        <div className="mt-[81px]">
          <Persons
            pfp={CarlImg}
            nametext="Carl"
            ptext="Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."
            stars={SStariImg}
            time="3 month"
          />
          <hr className="w-[844px] h-[2px] text-[#696984] mt-[22.98px] mb-[24px] " />
          <Persons
            pfp={MariaImg}
            nametext="Maria"
            ptext="StudyHub, created by experienced educators, offers engaging courses and collaborative learning features."
            stars={SStariImg}
            time="5 month"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Rating;
