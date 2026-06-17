import React from "react";
import RatingBtns from "../RatingBtns/RatingBtns";
import SStariImg from "../../../../public/SStar.png";
import Stars from "../Stars/Stars";
import MariaImg from "../../../../public/Maria.jpg";
import CarlImg from "../../../../public/Carl.jpg";
import OverViewImg from "../../../../public/OverView.png";
import Image from "next/image";
import Persons from "../Persons/Persons";
import IncludedDiv from "../IncludedDiv/IncludedDiv";
import GuaranteeImg from "../../../../public/Guarantee.svg";
import MiniCameraImg from "../../../../public/MiniCamera.svg";
import ModulsImg from "../../../../public/Moduls.svg";
import FileImg from "../../../../public/File.svg";
import TwitterImg from "../../../../public/twitter.svg";
import FacebookImg from "../../../../public/facebook.svg";
import YoutubeImg from "../../../../public/youtube.svg";
import InstagramImg from "../../../../public/instagram.svg";
import TelegramImg from "../../../../public/telegram.svg";
import WhatsappImg from "../../../../public/whatsapp.svg";
const Rating = () => {
  return (
    <div className="mt-[55px] pl-[157px]">
      {" "}
      <div className="flex gap-[50px]">
        <RatingBtns btnclass="" btntext="Overview" />
        <RatingBtns btnclass="" btntext="Overview" />
        <RatingBtns btnclass="" btntext="Overview" />
        <RatingBtns btnclass="" btntext="Overview" />
      </div>
      <div className="flex gap-[225px] relative">
        {" "}
        <div className="w-[950px] rounded-[20px] bg-[#9dccff79] pt-[50px] pb-[53px] px-[50px] mt-[83px]">
          {" "}
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
        <div className="absolute right-[125px] -top-[440px] w-[501px] rounded-[20px] bg-[#fff] pt-[30px] pb-[93px] px-[29px]">
          <Image
            src={OverViewImg}
            alt="OverViewImg"
            className="w-[443px] h-[268px] object-cover object-centerს"
          ></Image>
          <div className="mt-[18px] flex items-center justify-between">
            <p className="font-[Poppins] font-semibold text-[45px] text-[#000000]">
              $49.65
            </p>
            <p className="font-[Poppins] font-semibold text-[28px] text-[#D9D9D9] line-through">
              {" "}
              $99.99
            </p>
            <p className="font-[Poppins] font-semibold text-[28px] text-[#D9D9D9] ">
              50% Off
            </p>
          </div>
          <p className="font-[Poppins] font-semibold text-[20px] text-[#49BBBD] mt-[42px] text-center">
            11 hour left at this price
          </p>
          <button className="w-[443px] rounded-[12px] px-[177px] py-[17px] font-[Poppins] font-bold text-[20px] text-[#FFFFFF] bg-[#49BBBD] mt-[42px] ">
            Buy Now
          </button>
          <hr className="w-[100%] h-[1px] text-[#D9D9D9] mt-[40px]" />
          <p className="font-[Poppins] font-semibold text-[30px] text-[#000] mt-[35px]">
            This Course included
          </p>
          <div className="mt-[34px] flex flex-col gap-[10px] items-start">
            <IncludedDiv logo={GuaranteeImg} text="Money Back Guarantee" />
            <IncludedDiv logo={MiniCameraImg} text="Access on all devices" />
            <IncludedDiv logo={FileImg} text="Certification of completion" />
            <IncludedDiv logo={ModulsImg} text="32 Moduls" />
          </div>
          <hr className="w-[100%] h-[1px] text-[#D9D9D9] mt-[40px]" />
          <h4 className="font-[Poppins] font-semibold text-[30px] text-[#000] mt-[34px]">
            Training 5 or more people
          </h4>
          <p className="font-[Poppins] font-normal text-[14px] text-[#696984] mt-[30px]">
            Class, launched less than a year ago by Blackboard co-founder
            Michael Chasen, integrates exclusively...
          </p>
          <hr className="w-[100%] h-[1px] text-[#D9D9D9] mt-[40px]" />
          <h4 className="font-[Poppins] font-semibold text-[30px] text-[#000] mt-[39px]">
            Share this course
          </h4>
          <div className="mt-[53px] flex items-center gap-[25px]">
            <Image src={TwitterImg} alt="TwitterImg"></Image>
            <Image src={FacebookImg} alt="FacebookImg"></Image>
            <Image src={YoutubeImg} alt="YoutubeImg"></Image>
            <Image src={InstagramImg} alt="InstagramImg"></Image>
            <Image src={TelegramImg} alt="TelegramImg"></Image>
            <Image src={WhatsappImg} alt="TwitterImg"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
