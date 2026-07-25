import React from "react";
import Image, { StaticImageData } from "next/image";
type Props = {
  imagee: StaticImageData;
  text: string;
  price: string;
};
const BookDivs = ({ imagee, text, price }: Props) => {
  return (
    <div className="w-[205px] pt-[10px] pb-[18px] px-[14px] shadow-[0px_5px_10px_0px_grey] rounded-[19px] flex flex-col items-center justify-center text-center">
      <Image src={imagee} alt="imagee" className=""></Image>
      <p className="text-[24px] font-[Poppins] font-medium text-[#252641] mt-[7px]">
        {text}
      </p>
      <p className="text-[30px] font-[Poppins] font-semibold text-[#49BBBD] mt-[10px]">
        {price}
      </p>
    </div>
  );
};

export default BookDivs;
