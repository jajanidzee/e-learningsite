import { main } from "motion/react-client";
import React from "react";
type Props = {
  text: string;
  maindiv: any;
};
const LiveDivs = ({ text, maindiv }: Props) => {
  return (
    <div className={`${maindiv} flex gap-[5px] items-center`}>
      <p className="font-[Poppins] font-semibold text-[14px] text-[#696984]">
        {text}
      </p>
      <div className="w-[470px] h-[1px] bg-[#696984]"></div>
    </div>
  );
};

export default LiveDivs;
