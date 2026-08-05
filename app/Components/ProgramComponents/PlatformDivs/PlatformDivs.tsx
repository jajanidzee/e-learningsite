import React from "react";
type Props = {
  text: string;
};
const PlatformDivs = ({ text }: Props) => {
  return (
    <div className="flex items-center gap-[10px]">
      {" "}
      <div className="w-[20px] h-[20px] rounded-[100%] bg-[#55EFC4]"></div>
      <p className="font-[Inter] text-[20px] gont-normal text-[#2D3436]">
        {text}
      </p>
    </div>
  );
};

export default PlatformDivs;
