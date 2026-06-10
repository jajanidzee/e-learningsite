import React from "react";
import LessonDivs from "../LessonDivs/LessonDivs";
import GroupChatImg from "../../../../public/GroupChat.png";
import LinaPfpImg from "../../../../public/LinaPfp.png";
import ArchitectImg from "../../../../public/Architect.png";
import CodingImg from "../../../../public/Coding.png";
import Image from "next/image";
const Lesson = () => {
  return (
    <div className="bg-[#9dccff73] pt-[50px] pb-[57px] pl-[120px] pr-[113px]">
      <div className="flex justify-between items-center">
        <h3 className="font-[Poppins] font-semibold text-[36px] text-[#252641]">
          Welcome back, ready for your next lesson?
        </h3>

        <p className="text-[#49BBBD] font-[Poppins] font-bold text-[20px]">
          View hisotry
        </p>
      </div>
      <div className="flex mt-[50px] gap-[50px]">
        <LessonDivs
          imagee={GroupChatImg}
          maintext="AWS Certified Solutions Architect"
          pfpimage={LinaPfpImg}
          nametext="Lina"
          lsntext="Lesson 5 of 7"
        />
        <LessonDivs
          imagee={ArchitectImg}
          maintext="Transforming Ideas Into Success"
          pfpimage={LinaPfpImg}
          nametext="Lina"
          lsntext="Lesson 3 of 7"
        />
        <LessonDivs
          imagee={CodingImg}
          maintext="Strategic Solutions For Growth"
          pfpimage={LinaPfpImg}
          nametext="Lina"
          lsntext="Lesson 7 of 7"
        />
      </div>
    </div>
  );
};

export default Lesson;
