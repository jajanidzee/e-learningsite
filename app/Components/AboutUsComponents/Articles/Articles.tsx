"use client";
import React from "react";
import MarketingDivs from "../../CourseComponents/MarketingDivs/MarketingDivs";
import LinaPfpImg from "../../../../public/LinaPfp.png";
import SolutionsImg from "../../../../public/Solutions.png";
import BornReadyImg from "../../../../public/BornReady.png";
import ConcentratedImg from "../../../../public/Concentrated.png";
import UniversityStudentImg from "../../../../public/UniversityStudent.png";
import Link from "next/link";
import CarlImg from "../../../../public/Carl.jpg";
import MariaImg from "../../../../public/Maria.jpg";

const Articles = () => {
  return (
    <div className="bg-[#9dccff79] px-[104px] py-[92px] mt-[150px]">
      <div className="flex justify-between">
        <h4 className="font-[Poppins] font-medium text-[30px] text-[#000]">
          Marketing Articles
        </h4>
        <Link href="/seeall">
          {" "}
          <p className="cursor-pointer hover:underline font-[Poppins] font-bold text-[20px] text-[#49BBBD]">
            See all
          </p>
        </Link>
      </div>
      <div className="flex gap-[50px] mt-[47px] mb-[200px]">
        {" "}
        <MarketingDivs
          mainimagee={ConcentratedImg}
          datetext="3 Month"
          quotetext="Turning Ideas Into Profit"
          biotext="Delivering quality, trust, innovation, and results for businesses ready to grow bigger."
          rdcname="Carl"
          rdcimg={CarlImg}
          oldprice="130"
          newprice="90"
        />{" "}
        <MarketingDivs
          mainimagee={SolutionsImg}
          datetext="1 Month"
          quotetext="Success Starts With Action"
          biotext="We create opportunities, inspire confidence, and help brands stand out naturally online."
          rdcname="Lina"
          rdcimg={LinaPfpImg}
          oldprice="100"
          newprice="80"
        />
        <MarketingDivs
          mainimagee={UniversityStudentImg}
          datetext="2 Month"
          quotetext="Success Starts With Action"
          biotext="Building modern businesses with innovation, consistency, passion, and smart execution."
          rdcname="Maria"
          rdcimg={MariaImg}
          oldprice="100"
          newprice="70"
        />
        <MarketingDivs
          mainimagee={BornReadyImg}
          datetext="4 Month"
          quotetext="Build Your Business Today"
          biotext="Helping brands grow faster through creative strategy and powerful digital marketing."
          rdcname="Carl"
          rdcimg={CarlImg}
          oldprice="130"
          newprice="90"
        />
      </div>
    </div>
  );
};

export default Articles;
