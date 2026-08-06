import React from "react";
import Image from "next/image";
import WayTwitterImg from "../../../../public/WayTwitter.svg";
import WayFacebookImg from "../../../../public/WayFacebook.svg";
import WayInstagramImg from "../../../../public/WayInstagram.svg";
import MiniAdamImg from "../../../../public/MiniAdam.png";
import MiniSarahImg from "../../../../public/MiniSarah.png";
import MiniLianaImg from "../../../../public/MiniLiana.png";
import MiniJoeImg from "../../../../public/MiniJoe.png";
const Ellipse = () => {
  return (
    <div className="bg-[#9dccff73] pt-[70px] pb-[80px] px-[138px]">
      <h5 className="font-[Poppins] font-semibold text-[30px] text-[#000000]">
        What our students have to say
      </h5>
      <div className="pt-[80px] pb-[34px] pl-[106px] pr-[61px] rounded-[40px] bg-[#fff] mt-[70px] flex gap-[113px] items-start ">
        <div className="relative w-[450px] h-[450px]">
          <div className="absolute -left-10 -bottom-[20px] w-[240px] h-[240px] rounded-full bg-[#88FFD4] z-0"></div>
          <div className="absolute top-[0] right-[10px] w-[106px] h-[106px] rounded-full bg-[#F0FF92] z-0"></div>{" "}
          <div className="absolute -right-[10px] bottom-[0] w-[150px] h-[150px] rounded-full bg-[#FBBC82] z-0"></div>
          <div className="absolute inset-0 bg-[url('/Ellipse.png')] z-10"></div>
        </div>

        <div className="flex gap-[236px]">
          <div className="w-[527px] ">
            <h6 className="font-[Poppins] font-bold text-[30px] text-[#252641]">
              Savannah Nguyen
            </h6>
            <p className="font-[Poppins] font-medium text-[24px] text-[#252641]">
              tanya.hill@example.com
            </p>
            <p className="font-[Poppins] font-normal text-[18px] text-[#696984] mt-[19px]">
              Business is the activity of producing, buying, and selling goods
              or services to earn profit. Successful businesses understand
              customer needs, manage resources wisely, and adapt to market
              changes. Innovation, teamwork, communication, and strong
              leadership help companies grow, attract customers, build trust,
              and achieve long-term success in competitive markets.
            </p>
            <div className="flex gap-[25px] items-center mt-[31px]">
              <Image src={WayTwitterImg} alt="WayTwitterImg"></Image>
              <Image src={WayFacebookImg} alt="WayFacebookImg"></Image>
              <Image src={WayInstagramImg} alt="WayInstagramImg"></Image>
            </div>
          </div>
          <div className="flex flex-col gap-[25px] mt-[48px]">
            {" "}
            <Image src={MiniAdamImg} alt="MiniAdamImg"></Image>
            <Image src={MiniSarahImg} alt="MiniSarahImg"></Image>{" "}
            <Image src={MiniLianaImg} alt="MiniLianaImg"></Image>{" "}
            <Image src={MiniJoeImg} alt="MiniJoeImg"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ellipse;
