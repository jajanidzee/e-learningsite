import React from "react";
type Props = {
  ptext: string;
  mainclass: any;
  smallclass: any;
};
const Stars = ({ ptext, mainclass, smallclass }: Props) => {
  return (
    <div className="flex gap-[45px] items-center">
      <p className="font-[Poppins] font-normal text-[25px] text-[#0000005f]">
        {ptext}
      </p>
      <div
        className={` ${mainclass} w-[432px] h-[8px] bg-[#D9D9D9] rounded-[2px]`}
      >
        <div
          className={`${smallclass}  h-full bg-[#49BBBD] rounded-[2px]`}
        ></div>
      </div>
    </div>
  );
};

export default Stars;
