import React from "react";
import Image, { StaticImageData } from "next/image";
type Props = {
  imagee: StaticImageData;
  text: string;
  bio: string;
};
const BookDivs = ({ imagee, text, bio }: Props) => {
  return (
    <div className="w-[503px] pt-[29.64px] pb-[27.71px] px-[26.52px] rounded-[10px] shadow-[0px_5px_10px_0px_grey]">
      <Image src={imagee} alt="imagee"></Image>
      <div className="flex items-center justify-between mt-[28.13px]">
        <p className="font-[Poppins] font-normal text-[#000000] text-[30px] ">
          {text}
        </p>
        <p className="font-[Poppins] font-extrabold text-[#49BBBD] text-[30px]">
          {bio}
        </p>
      </div>
    </div>
  );
};

export default BookDivs;
