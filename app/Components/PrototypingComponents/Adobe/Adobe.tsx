import React from "react";
import MiniClockImg from "../../../../public/MiniClock.svg";
import Image from "next/image";
const Adobe = () => {
  return (
    <div className="w-[1423px] bg-[#9dccff73]">
      <div className="bg-[#49BBBD] pt-[26px] pb-[30px] pl-[60px] pr-[50px]">
        <h3 className="font-[Poppins] font-normal text-[44px] text-[#fff]">
          Learn about Adobe XD & Prototyping
        </h3>
        <div className="flex justify-between">
          <p className="font-[Poppins] font-normal text-[24px] text-[#fff] mt-[5px]">
            Introduction about XD
          </p>
          <div className="flex items-center gap-[10px]">
            <Image src={MiniClockImg} alt="MiniClockImg"></Image>
            <p className="font-[Poppins] font-normal text-[24px] text-[#fff]">
              1 hour
            </p>
          </div>
        </div>
      </div>
      <div className="pt-[30px] pl-[30px] pr-[34px] pb-[152px]">
        <h4 className="font-[Poppins] font-semibold text-[30px] text-[#252641] ">
          Create new event
        </h4>
        <p className="text-[#696984] font-[Poppins] font-normal text-[18px] mt-[20px]">
          We are dedicated to delivering high-quality products and exceptional
          services that meet the needs of our customers. Our mission is to
          provide innovative solutions, build lasting relationships, and create
          value through reliability, professionalism, and continuous
          improvement. By focusing on customer satisfaction, integrity, and
          excellence, we strive to grow sustainably while making a positive
          impact in our industry and community together.
        </p>
        <div className="pt-[30px] px-[32px] pb-[98px] mt-[50px] bg-[#fff] rounded-[20px]">
          <form action="">
            <label
              htmlFor=""
              className="font-[Poppins] font-semibold text-[18px] text-[#5B5B5B] mb-[10px]"
            >
              Event Name
            </label>
            <input
              type="text"
              className="w-[1276px] h-[60px] py-[16px] px-[21px] border-[1px] border-[#D9D9D9] bg-[#fff] rounded-[10px] font-[Poppins] font-normal text-[24px] placeholder:text-[18px] text-[#9D9B9B]"
              id="name"
              placeholder="Adobe XD Auto - Animate : Your Guide to Creating"
            />
          </form>
          <form action="" className="flex items-center gap-[44px] mt-[20px]">
            <div>
              {" "}
              <label
                htmlFor=""
                className="font-[Poppins] font-semibold text-[18px] text-[#5B5B5B] mb-[10px]"
              >
                Start date / Time
              </label>{" "}
              <input
                type="date"
                className="w-[616px] h-[60px] py-[16px] px-[21px] border-[1px] border-[#D9D9D9] bg-[#fff] rounded-[10px] font-[Poppins] font-normal text-[24px] placeholder:text-[18px] text-[#9D9B9B]"
                id="name"
                placeholder="September 24, 2017 07:59 am"
              />{" "}
            </div>
            <div>
              {" "}
              <label
                htmlFor=""
                className="font-[Poppins] font-semibold text-[18px] text-[#5B5B5B] mb-[10px]"
              >
                End Date / Time
              </label>{" "}
              <input
                type="date"
                className="w-[616px] h-[60px] py-[16px] px-[21px] border-[1px] border-[#D9D9D9] bg-[#fff] rounded-[10px] font-[Poppins] font-normal text-[24px] placeholder:text-[18px] text-[#9D9B9B]"
                id="name"
                placeholder="September 24, 2017 07:59 am"
              />
            </div>
          </form>
          <form action="" className="mt-[20px]">
            {" "}
            <label
              htmlFor=""
              className="font-[Poppins] font-semibold text-[18px] text-[#5B5B5B] mb-[10px]"
            >
              Location
            </label>
            <input
              type="text"
              className="w-[1276px] h-[60px] py-[16px] px-[21px] border-[1px] border-[#D9D9D9] bg-[#fff] rounded-[10px] font-[Poppins] font-normal text-[24px] placeholder:text-[18px] text-[#9D9B9B]"
              id="name"
              placeholder="2118 Thornridge Cir, Syracuse, Connecticut 35624"
            />
          </form>
          <form action="" className="flex gap-[44px] mt-[20px]">
            {" "}
            <div>
              {" "}
              <label
                htmlFor=""
                className="font-[Poppins] font-semibold text-[18px] text-[#5B5B5B] mb-[10px]"
              >
                Notification
              </label>{" "}
              <input
                type="text"
                className="w-[616px] h-[60px] py-[16px] px-[21px] border-[1px] border-[#D9D9D9] bg-[#fff] rounded-[10px] font-[Poppins] font-normal text-[24px] placeholder:text-[18px] text-[#9D9B9B]"
                id="name"
                placeholder="September 24, 2017 07:59 am"
              />{" "}
            </div>
            <div>
              {" "}
              <label
                htmlFor=""
                className="font-[Poppins] font-semibold text-[18px] text-[#5B5B5B] mb-[10px]"
              >
                Email
              </label>{" "}
              <input
                type="email"
                className="w-[616px] h-[60px] py-[16px] mb-[20px] px-[21px] border-[1px] border-[#D9D9D9] bg-[#fff] rounded-[10px] font-[Poppins] font-normal text-[24px] placeholder:text-[18px] text-[#9D9B9B]"
                id="name"
                placeholder="September 24, 2017 07:59 am "
              />
            </div>
          </form>
          <label
            htmlFor=""
            className="font-[Poppins] font-semibold text-[18px] text-[#5B5B5B] mb-[10px] "
          >
            Event Description
          </label>{" "}
          <textarea
            name=""
            className="w-[1276px] h-[260px] py-[16px] px-[21px] border-[1px] border-[#D9D9D9] text-start bg-[#fff] rounded-[10px] font-[Poppins] font-normal text-[24px] placeholder:text-[18px] text-[#9D9B9B]"
            id="name"
          ></textarea>
          <div className="flex mt-[50px] justify-end">
            <button className="w-[337px] rounded-[12px] pt-[13px] pb-[19px] px-[105px] \ bg-[#49BBBD] text-[24px] font-[Poppins] font-bold text-[#fff]">
              Save Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adobe;
