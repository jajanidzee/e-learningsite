import React from "react";
import MarketingDivs from "../MarketingDivs/MarketingDivs";
import DifferentImg from "../../../../public/Different.png";
import LinaPfpImg from "../../../../public/LinaPfp.png";
import SolutionsImg from "../../../../public/Solutions.png";
import FearLessImg from "../../../../public/FearLess.png";
import BornReadyImg from "../../../../public/BornReady.png";
import Image from "next/image";
const Marketing = () => {
  return (
    <div className=" pt-[80px] pl-[120px] pr-[89px] pb-[171px]">
      <div className="flex items-center justify-between">
        {" "}
        <p className="font-[Poppins] font-medium text-[30px] text-[#000]">
          Marketing Articles
        </p>
        <p className="font-[Poppins] font-bold text-[20px] text-[#49BBBD]">
          See all
        </p>
      </div>
      <div className="flex gap-[50px] mt-[47px]">
        <MarketingDivs
          mainimagee={DifferentImg}
          datetext="3 Month"
          quotetext="Think Different Move Faster"
          biotext="Helping brands grow faster through creative strategy and powerful digital marketing."
          rdcname="Lina"
          rdcimg={LinaPfpImg}
          oldprice="100"
          newprice="80"
        />
        <MarketingDivs
          mainimagee={SolutionsImg}
          datetext="2 Month"
          quotetext="AWS Certified solutions Architect"
          biotext="Building modern businesses with innovation, consistency, passion, and smart execution."
          rdcname="Lina"
          rdcimg={LinaPfpImg}
          oldprice="100"
          newprice="80"
        />
        <MarketingDivs
          mainimagee={FearLessImg}
          datetext="4 Month"
          quotetext="Fear Less Achieve More"
          biotext="We create opportunities, inspire confidence, and help brands stand out naturally online."
          rdcname="Lina"
          rdcimg={LinaPfpImg}
          oldprice="100"
          newprice="80"
        />
        <MarketingDivs
          mainimagee={BornReadyImg}
          datetext="3 Month"
          quotetext="Born Ready Built Tough"
          biotext="Delivering quality, trust, innovation, and results for businesses ready to grow bigger."
          rdcname="Lina"
          rdcimg={LinaPfpImg}
          oldprice="100"
          newprice="80"
        />
      </div>
    </div>
  );
};

export default Marketing;
