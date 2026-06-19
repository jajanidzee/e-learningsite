import React from "react";
type Props = {
  main: any;
  btn: string;
  text: string;
  bio: string;
};
const EduDivs = ({ main, btn, text, bio }: Props) => {
  return (
    <div
      className={`${main} w-[506px] rounded-[20px] pt-[40px] pb-[56px] px-[50px] bg-[url('/Managment.png')] h-[481px] bg-no-repeat`}
    >
      <button className="w-[100px] rounded-[12px] bg-[#FF0000] h-[100px] flex justify-center items-center text-[#fff] font-[Poppins] font-bold text-[24px]">
        {btn}
      </button>
      <h6 className="font-[Poppins] font-semibold text-[32px] text-[#FFFFFF] mt-[29px]">
        {text}
      </h6>
      <p className="font-[Poppins] font-normal text-[24px] text-[#FFFFFF] mt-[36px]">
        {bio}
      </p>
    </div>
  );
};

export default EduDivs;
