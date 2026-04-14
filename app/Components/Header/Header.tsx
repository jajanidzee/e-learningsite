import React from "react";
import Image from "next/image";
import TotcImg from "../../../public/Totc.svg";
const Header = () => {
  return (
    <div className="bg-[#49BBBD] px-[120px] py-[30px] flex justify-between">
      <Image src={TotcImg} alt="TotcImg"></Image>
      <div className="flex items-center gap-[81px]">
        <ul className="font-[Poppins] text-[22px] text-[#ffffff] font-normal flex items-center gap-[79px] ">
          <li>Home</li>
          <li>Courses</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>About Us</li>
        </ul>
        <div className="flex gap-[26px]">
          <button className="bg-[#FFFFFF] text-[#5B5B5B] font-[Poppins] text-[22px] font-medium  rounded-[80px] py-[14px] px-[49px]">
            Login
          </button>
          <button className=" text-[#FFFFFF] bg-[#00CBB8] font-[Poppins] text-[22px] font-medium  rounded-[80px] py-[14px] px-[49px]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
