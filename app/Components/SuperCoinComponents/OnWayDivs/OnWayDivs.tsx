import React from "react";
import Image from "next/image";
import WayTwitterImg from "../../../../public/WayTwitter.svg";
import WayFacebookImg from "../../../../public/WayFacebook.svg";
import WayYoutubeImg from "../../../../public/WayYoutube.svg";
import WayInstagramImg from "../../../../public/WayInstagram.svg";
import WayTelegramImg from "../../../../public/WayTelegram.svg";
import WayWhatsAppImg from "../../../../public/WayWhatsapp.svg";

type Props = {
  mainclass: any;
  divclass: any;
  title: string;
  bio: string;
  description: string;
};
const OnWayDivs = ({ mainclass, title, bio, divclass, description }: Props) => {
  return (
    <div
      className={`${mainclass} w-[1353px] pt-[30px] pb-[45px] px-[30px] bg-[#FFFFFF] rounded-[20px]`}
    >
      <div className="flex items-center justify-between">
        <p className="font-[Poppins] font-semibold text-[30px] text-[#252641]">
          {title}
        </p>
        <div className="flex items-center gap-[25px]">
          <Image src={WayTwitterImg} alt="WayTwitterImg"></Image>
          <Image src={WayFacebookImg} alt="WayFacebookImg"></Image>
          <Image src={WayYoutubeImg} alt="WayYoutubeImg"></Image>
          <Image src={WayInstagramImg} alt="WayInstagramImg"></Image>
          <Image src={WayTelegramImg} alt="WayTelegramImg"></Image>
          <Image src={WayWhatsAppImg} alt="WayWhatsAppImg"></Image>
        </div>
      </div>
      <p className="font-[Poppins] font-normal text-[18px] text-[#696984] mt-[17px]">
        {bio}
      </p>
      <div
        className={`${divclass} pt-[21px] pb-[30px] pl-[21px] pr-[45px] mt-[20px] w-[1293px] bg-[#]`}
      >
        <p className="font-[Poppins] font-normal text-[18px] text-[#696984]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default OnWayDivs;
