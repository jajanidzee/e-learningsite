import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";
type Props = {
  logo: StaticImageData;
  text: string;
};
const IncludedDiv = ({ logo, text }: Props) => {
  return (
    <div className="flex items-center gap-[9px]">
      <Image src={logo} alt="logo"></Image>
      <p className="font-[Poppins] font-semibold text-[14px] text-[#D9D9D9]">
        {text}
      </p>
    </div>
  );
};

export default IncludedDiv;
