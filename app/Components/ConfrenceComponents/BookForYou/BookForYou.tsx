import React from "react";
import MiniCalendarImg from "../../../../public/MiniCalendar.svg";
import BenefitsImg from "../../../../public/Benefits.png";
import OfPlusImg from "../../../../public/OfPlus.png";
import Image from "next/image";
import BookDivs from "../BookDivs/BookDivs";
const BookForYou = () => {
  return (
    <div className="w-[498px] rounded-[19px] shadow-[0px_5px_10px_0px_grey] pt-[46px] pb-[53px] px-[30px] mt-[30px] bg-[#fff] mb-[88px] ">
      <div className="flex justify-between mb-[28px] ">
        <h4 className="text-[30px] font-[Poppins] font-semibold text-[#252641]">
          Book for you
        </h4>{" "}
        <Image src={MiniCalendarImg} alt="MiniCalendarImg" className=""></Image>
      </div>
      <div className="flex gap-[27px]">
        <BookDivs
          imagee={BenefitsImg}
          text="All Benefits of PLUS"
          price="$24"
        />
        <BookDivs imagee={OfPlusImg} text="All Benefits of PLUS" price="$50" />
      </div>
    </div>
  );
};

export default BookForYou;
