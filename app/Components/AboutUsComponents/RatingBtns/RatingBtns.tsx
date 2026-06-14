import React from "react";
type Props = {
  btnclass: any;
  btntext: string;
};
const RatingBtns = ({ btnclass, btntext }: Props) => {
  return (
    <button
      className={`${btnclass} w-[200px] py-[17px] px-[50px] rounded-[12px] bg-[#D9D9D9] text-[20px] text-[#000] font-bold font-[Poppins] cursor-pointer hover:bg-[#49BBBD]  `}
    >
      {btntext}
    </button>
  );
};

export default RatingBtns;
