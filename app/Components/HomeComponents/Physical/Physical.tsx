import React from "react";

const Physical = () => {
  return (
    <div className="px-[186px] mt-[160px] flex gap-[67px]">
      <div className="w-[730px] relative  pl-[25px] pt-[15px] ">
        {" "}
        <h4 className="text-[36px] font-[Poppins] font-medium text-[#2F327D] relative  z-1">
          Everything you can do in a physical
          <br /> classroom,
          <span className="text-[#00CBB8]"> you can do with TOTC</span>
        </h4>
        <div className="w-[73px] h-[73px] rounded-[100%] bg-[#33EFA0] absolute top-[0] left-[0] "></div>
        <p className="text-[24px] font-[Poppins] font-normal text-[#696984] mt-[30px] ">
          TOTC’s school management software helps traditional <br /> and online
          schools manage scheduling, attendance, <br /> payments and virtual
          classrooms all in one secure cloud- <br />
          based system.
        </p>
        <div className="w-[30px] h-[30px] rounded-[100%] bg-[#33EFA0] absolute right-[163px] bottom-[121px] "></div>
        <p className="underline text-[22px] font-[Poppins] font-normal text-[#696984] mt-[30px]">
          Learn more
        </p>
      </div>
      <div className="relative pl-[20px]">
        <iframe
          className="rounded-[20px] relative z-1 "
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XZrckLYqdys?si=dcuAtAENBNxGYeZY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="w-[137px] h-[137px] bg-[#23BDEE] rounded-[20px] absolute -top-[17px] -left-[3px] "></div>
        <div className="w-[231px] h-[231px] bg-[#33EFA0] rounded-[20px] absolute -bottom-[-20px] -right-[28px] "></div>
      </div>
    </div>
  );
};

export default Physical;
