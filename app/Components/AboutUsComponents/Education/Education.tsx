import React from "react";
import EduDivs from "../EduDivs/EduDivs";
const Education = () => {
  return (
    <div className="pl-[173px] pr-[100px] mt-[167px] mb-[205px]">
      <div className="flex justify-between ">
        <h4 className="font-[Poppins] font-medium text-[30px] text-[#000]">
          Top Education offers and deals are listed here
        </h4>
        <p className="cursor-pointer hover:underline font-[Poppins] font-bold text-[20px] text-[#49BBBD]">
          See all
        </p>
      </div>
      <div className="flex gap-[70px] mt-[64px]">
        <EduDivs
          btn="50%"
          text="FOR INSTRUCTORS"
          bio="TOTC’s school management software helps traditional and online schools manage scheduling,"
          main=""
          btnclass="bg-[#FF0000]"
        />
        <EduDivs
          btn="50%"
          text="FOR INSTRUCTORS"
          bio="TOTC’s school management software helps traditional and online schools manage scheduling,"
          main=""
          btnclass="bg-[#FF0000]"
        />
        <EduDivs
          btn="50%"
          text="FOR INSTRUCTORS"
          bio="TOTC’s school management software helps traditional and online schools manage scheduling,"
          main=""
          btnclass="bg-[#FF0000]"
        />
      </div>
    </div>
  );
};

export default Education;
