import { div } from "motion/react-client";
import React from "react";
import { te } from "react-day-picker/locale";
import { FaArrowDown } from "react-icons/fa";
type Props = {
  maindiv: any;
  text: string;
};
const LearningType = ({ maindiv, text }: Props) => {
  return (
    <div
      className={`${maindiv} w-[170px] justify-center px-[18.91px] py-[18px] font-[Poppins] text-[24px] font-medium text-[#252641] flex items-center gap-[10px] bg-[#fff] rounded-[10px]`}
    >
      {text}
      <FaArrowDown className="w-[15px] h-[32px]" />
    </div>
  );
};

export default LearningType;
