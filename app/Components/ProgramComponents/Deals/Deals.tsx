import React from "react";
import EduDivs from "../../AboutUsComponents/EduDivs/EduDivs";

const Deals = () => {
  return (
    <div className="pt-[70px] pb-[76px] pl-[139px] pr-[135px]">
      <div className="flex justify-between ">
        <h4 className="font-[Poppins] font-medium text-[30px] text-[#000]">
          Top Education offers and deals are listed here
        </h4>
        <p className="cursor-pointer hover:underline font-[Poppins] font-bold text-[20px] text-[#49BBBD]">
          See all
        </p>
      </div>
      <div className="flex items-center gap-[72px] mt-[70px]">
        <EduDivs
          btnclass="bg-[#49BBBD]"
          main=""
          btn="50%"
          text="Grow Your Business"
          bio="Our online learning platform teaches practical business skills through expert-led courses, real-world projects, and interactive lessons. Build confidence, improve leadership."
        />
        <EduDivs
          btnclass="bg-[#49BBBD]"
          main=""
          btn="10%"
          text="Achieve Business Success"
          bio="Learn marketing, finance, communication, and entrepreneurship from experienced instructors. Our engaging online courses help students and professionals develop valuable knowledge."
        />
        <EduDivs
          btnclass="bg-[#49BBBD]"
          main=""
          btn="50%"
          text="Innovate Inspire Succeed"
          bio="Discover modern business strategies with interactive online lessons designed for every learner. Gain practical experience, strengthen problem-solving abilities."
        />
      </div>
    </div>
  );
};

export default Deals;
