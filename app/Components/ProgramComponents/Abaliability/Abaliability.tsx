import React from "react";
import LearningType from "../LearningType/LearningType";

const Abaliability = () => {
  return (
    <div className="bg-[url('/Partner.png')] w-[1920px] h-[326px] py-[80px] pl-[303px] pr-[298px]">
      <div className="relative">
        {" "}
        <input
          type="text"
          className="w-[1319px] border-[1px] border-[#D9D9D9] rounded-[10px] py-[21px] pl-[34.62px] bg-[#fff] font-[Poppins] font-normal text-[20px] text-[#83839A]"
          placeholder="Search your favourite course"
        />
        <button className="w-[183.16px] rounded-[12px] py-[16px] px-[41.32px] text-[24px] font-bold font-[Poppins] text-[#fff] bg-[#49BBBD] absolute right-[2px] top-[3px]">
          Search
        </button>
        <div className="flex gap-[20px] mt-[20px] ">
          <LearningType maindiv="" text="Subject" />
          <LearningType maindiv="" text="Partner" />
          <LearningType maindiv="" text="Program" />
          <LearningType maindiv="w-[209px]" text="Language" />
          <LearningType maindiv="w-[216px]" text="Abaliability" />
          <LearningType maindiv="w-[267px]" text="Learning Type" />
        </div>
      </div>
    </div>
  );
};

export default Abaliability;
