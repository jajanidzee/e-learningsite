import React from "react";
import Link from "next/link";
import OfferDivs from "../OfferDivs/OfferDivs";

const TopListed = () => {
  return (
    <div className="mt-[158px] ml-[120px] mb-[87px]">
      <div className="flex items-center justify-between">
        <h4 className="font-[Poppins] font-medium text-[30px] text-[#000]">
          Top Education offers and deals are listed here
        </h4>
        <Link href="/seeall">
          {" "}
          <p className="cursor-pointer hover:underline font-[Poppins] font-bold text-[20px] text-[#49BBBD]">
            See all
          </p>
        </Link>
      </div>
      <div className="flex items-center gap-[73.31px] mt-[70px]">
        <OfferDivs
          main=""
          btn="50%"
          text="FOR INSTRUCTORS"
          bio="TOTC’s school management software helps traditional and online schools manage scheduling,"
          btnclass="bg-[#49BBBD]"
        />
        <OfferDivs
          main=""
          btn="10%"
          text="FOR INSTRUCTORS"
          bio="TOTC’s school management software helps traditional and online schools manage scheduling,"
          btnclass="bg-[#49BBBD]"
        />
        <OfferDivs
          main=""
          btn="50%"
          text="FOR INSTRUCTORS"
          bio="TOTC’s school management software helps traditional and online schools manage scheduling,"
          btnclass="bg-[#49BBBD]"
        />
      </div>
    </div>
  );
};

export default TopListed;
