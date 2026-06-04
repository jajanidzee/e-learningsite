import React from "react";
import { FaArrowDown } from "react-icons/fa";
type Props = {
  mainp: string;
  ptext: string;
  divclass: any;
};
const RemoteDivs = ({ ptext, divclass, mainp }: Props) => {
  return (
    <>
      <div className="w-[1681px] flex justify-between  px-[20px] py-[23px]">
        <div className="flex gap-[16px]">
          <div
            className={`${divclass} shrink-0 w-[20px] h-[20px] rounded-[100%] bg-[#55EFC4]`}
          ></div>
          <div>
            {" "}
            <p className="font-[Inter] font-bold text-[22px] text-[#2D3436] ">
              {mainp}
            </p>
            <p className="font-[Poppins] font-normal text-[18px] text-[#696984] mt-[15px]">
              {ptext}
            </p>
          </div>
        </div>
        <FaArrowDown />
      </div>
      <hr className="w-[1681px] h-[1px] bg-[#696984]" />
    </>
  );
};

export default RemoteDivs;
