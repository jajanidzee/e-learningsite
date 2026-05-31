import React from "react";
import { IoIosCheckmark } from "react-icons/io";
type Props = {
  maindiv: any;
  btn: any;
  ptext: string;
};
const PricingSystem = ({ maindiv, btn, ptext }: Props) => {
  return (
    <div
      className={`${maindiv} flex items-center gap-[16px] w-[306px] mt-[16px]`}
    >
      <button
        className={`${btn} w-[32px] h-[32px] rounded-[100%] bg-[#C2C2C2] flex items-center justify-center`}
      >
        <IoIosCheckmark className="w-[25px] h-[25px]" />
      </button>
      <p className="w-[18px] font-normal font-[Inter] text-[#000] whitespace-nowrap">
        {ptext}
      </p>
    </div>
  );
};

export default PricingSystem;
