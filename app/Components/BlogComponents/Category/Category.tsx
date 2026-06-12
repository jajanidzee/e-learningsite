import React from "react";
import CategoryDivs from "../CategoryDivs/CategoryDivs";
import DesignImg from "../../../../public/Design.svg";
import DevelopmentPcImg from "../../../../public/DevelopmentPc.svg";
import DevelopmentCoinImg from "../../../../public/DevelopmentCoin.svg";
import BusinessImg from "../../../../public/Business.svg";
import MarketingImg from "../../../../public/Marketing.svg";
import PhotographyImg from "../../../../public/Photography.svg";
import ActingImg from "../../../../public/Acting.svg";
import Image from "next/image";
const Category = () => {
  return (
    <div className="mt-[134px] pl-[119px] pb-[100px] pr-[165px] ">
      <h3 className="font-[Poppins] font-semibold text-[36px] text-[#252641] mb-[53px]">
        Choice favourite course from top category
      </h3>
      <div className="grid grid-cols-4 gap-[80px] ">
        <CategoryDivs
          divclass="bg-[#33EFA0]"
          imagee={DesignImg}
          maintext="Design"
          bio="Effective marketing strategies increase brand awareness, customer loyalty, and overall sales."
        />
        <CategoryDivs
          divclass="bg-[#95A2FF]"
          imagee={DevelopmentPcImg}
          maintext="Development"
          bio="Successful businesses create value, satisfy customers, generate profit, and support economic growth."
        />
        <CategoryDivs
          divclass="bg-[#B8DAFF]"
          imagee={DevelopmentCoinImg}
          maintext="Development"
          bio="Strong leadership helps companies achieve goals, increase productivity, and remain competitive"
        />
        <CategoryDivs
          divclass="bg-[#ABFFF7]"
          imagee={BusinessImg}
          maintext="Business"
          bio="Innovation allows businesses to develop better products, attract customers, and grow."
        />
        <CategoryDivs
          divclass="bg-[#FFAE45]"
          imagee={MarketingImg}
          maintext="Marketing"
          bio="Good customer service builds trust, strengthens relationships, and encourages repeat purchases.."
        />
        <CategoryDivs
          divclass="bg-[#F3857E]"
          imagee={PhotographyImg}
          maintext="Photography"
          bio="Businesses must adapt to market changes to maintain success and profitability."
        />
        <CategoryDivs
          divclass="bg-[#494A56]"
          imagee={ActingImg}
          maintext="Acting"
          bio="Financial planning helps organizations manage resources efficiently and achieve objectives."
        />
        <CategoryDivs
          divclass="bg-[#ABFFF7]"
          imagee={BusinessImg}
          maintext="Business"
          bio="Entrepreneurs identify opportunities, take risks, and create valuable business ventures."
        />
      </div>
    </div>
  );
};

export default Category;
