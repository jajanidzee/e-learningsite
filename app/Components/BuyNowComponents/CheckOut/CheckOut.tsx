import React from "react";
import Image from "next/image";
import PayPalImg from "../../../../public/Paypal.png";
import ExpressImg from "../../../../public/Express.png";
import VisaImg from "../../../../public/Visa.png";
import MasterCardImg from "../../../../public/MasterCard.png";
const CheckOut = () => {
  return (
    <div className="flex mt-[50px]">
      <div className="w-[962px] rounded-[20px] bg-[#fff] shadow-[0px_10px_10px_10px_#D9D9D9] pt-[50px] pb-[53px] pl-[50px] pr-[70px] ml-[120px]">
        <h4 className=" font-[Poppins] font-semibold text-[36px] text-[#252641]">
          Checkout
        </h4>
        <p className="font-[Poppins] font-semibold text-[18px] text-[#5B5B5B]">
          Cart Type
        </p>
        <div className="flex gap-[20px] mt-[38px]">
          <Image
            src={PayPalImg}
            alt="PayPalImg"
            className="w-[139px] h-[92.4px]"
          ></Image>
          <Image
            src={ExpressImg}
            alt="ExpressImg"
            className="w-[139px] h-[92.4px]"
          ></Image>
          <Image
            src={VisaImg}
            alt="VisaImg"
            className="w-[139px] h-[92.4px]"
          ></Image>
          <Image
            src={MasterCardImg}
            alt="MasterCardImg"
            className="w-[139px] h-[92.4px]"
          ></Image>
        </div>
        <form action="" className="">
          <label className="text-[18px] text-[#5B5B5B] font-[Poppins] font-semibold mb-[10px]">
            Name on Card
          </label>
          <input
            type="text"
            className="w-[842px] h-[60px] rounded-[10px] border-[1px] border-[#D9D9D9] mb-[30px] px-[21px] py-[16px] text-[25px] text-[#000] font-[Poppins] font-semibold placeholder:text-[20px] text-[#9D9B9B] font-[Poppins] font-semibold "
            id="Name on Card"
            placeholder="Enter name on Card"
          />
          <label className="text-[18px] text-[#5B5B5B] font-[Poppins] font-semibold mb-[10px]">
            Card Number
          </label>
          <input
            type="number"
            className="w-[842px] h-[60px] rounded-[10px] border-[1px] mb-[30px] border-[#D9D9D9] px-[21px] py-[16px] text-[25px] text-[#000] font-[Poppins] font-semibold placeholder:text-[20px] text-[#9D9B9B] font-[Poppins] font-semibold "
            id="Name on Card"
            placeholder="Enter Card Number"
          />
          <div className="flex gap-[36px]">
            {" "}
            <div>
              {" "}
              <label className="text-[18px] text-[#5B5B5B] font-[Poppins] font-semibold mb-[10px]">
                Expiration Date MM/YY
              </label>
              <input
                type="date"
                className="w-[403px] h-[60px] rounded-[10px] border-[1px] border-[#D9D9D9] px-[21px] py-[16px] text-[25px] text-[#000] font-[Poppins] font-semibold placeholder:text-[20px] text-[#9D9B9B] font-[Poppins] font-semibold"
                placeholder="Enter Expiration Date"
              />{" "}
            </div>
            <div>
              {" "}
              <label className="text-[18px] text-[#5B5B5B] font-[Poppins] font-semibold ">
                CVC
              </label>
              <input
                type="number"
                className="w-[403px] h-[60px] rounded-[10px] border-[1px] border-[#D9D9D9] px-[21px] py-[16px] text-[25px] text-[#000] font-[Poppins] font-semibold placeholder:text-[20px] text-[#9D9B9B] font-[Poppins] font-semibold"
                placeholder="Enter CVC"
              />
            </div>
          </div>
          <div className="flex gap-[7px] mt-[10px]">
            <input type="checkbox" className="cursor-pointer" />
            <label
              htmlFor=""
              className="text-[15px] text-[#9D9B9B] font-[Poppins] font-semibold "
            >
              Save my information for faster checkout
            </label>
          </div>
        </form>
        <button className="w-[842px] rounded-[12px] bg-[#49BBBD] px-[298px] pt-[14px] pb-[19px] h-[63px] font-[Poppins] text-[26px] text-[#fff] font-normal mt-[50px]">
          Confirm Payment
        </button>
      </div>
      <div className=""></div>
    </div>
  );
};

export default CheckOut;
