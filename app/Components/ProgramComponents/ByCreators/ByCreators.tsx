import React from "react";
import CooperGirlImg from "../../../../public/CooperGirl.png";
import AdamImg from "../../../../public/Adam.png";
import TomaraImg from "../../../../public/Tomara.png";
import CreatorsDiv from "../CreatorsDiv/CreatorsDiv";

const ByCreators = () => {
  return (
    <div className="bg-[#fff] pt-[90px] pb-[80px] px-[139px]">
      <div className="flex items-center justify-between mb-[188px]">
        <h5 className="font-[Poppins] font-bold text-[30px] text-[#000000]">
          Classes tought by real creators
        </h5>
        <p className="cursor-pointer hover:underline font-[Poppins] font-bold text-[20px] text-[#49BBBD]">
          See all
        </p>
      </div>
      <div className=" mt-[50px] grid grid-cols-3 gap-x-[100px] gap-y-[186px] ">
        <CreatorsDiv
          imagee={CooperGirlImg}
          maintext="Jane Cooper"
          bio="LearnSphere provides interactive online courses helping students achieve academic success through personalized guidance daily."
        />
        <CreatorsDiv
          imagee={AdamImg}
          maintext="Adam"
          bio="BrightAcademy offers flexible virtual classes taught by experienced instructors using engaging multimedia lessons effectively."
        />
        <CreatorsDiv
          imagee={TomaraImg}
          maintext="Tomara"
          bio="EduNova connects learners worldwide with affordable certification programs supporting career growth and lifelong learning."
        />
        <CreatorsDiv
          imagee={AdamImg}
          maintext="Adam"
          bio="SkillBridge delivers practical online training developing professional abilities through expert mentors and real projects."
        />{" "}
        <CreatorsDiv
          imagee={TomaraImg}
          maintext="Tomara"
          bio="SmartStudy empowers students using innovative digital platforms, accessible resources, and supportive learning communities everywhere."
        />
        <CreatorsDiv
          imagee={CooperGirlImg}
          maintext="Jane Cooper"
          bio="FutureClass creates customized learning experiences encouraging confidence, creativity, collaboration, and measurable educational achievements consistently."
        />{" "}
      </div>
    </div>
  );
};

export default ByCreators;
