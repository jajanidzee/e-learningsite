import React from "react";
import Image, { StaticImageData } from "next/image";
type Props = {
  imagee: StaticImageData;
};
const CallDivs = ({ imagee }: Props) => {
  return (
    <div className="w-[80px] rounded-[13px] bg-[#fff] flex items-center justify-center h-[66.78px]">
      <Image src={imagee} alt="imagee" className="w-[36px] h-[41px]"></Image>
    </div>
  );
};

export default CallDivs;
