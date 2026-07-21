import React from "react";
import MiniClockImg from "../../../../public/MiniClock.svg";
import Image from "next/image";
import OnWayDivs from "../OnWayDivs/OnWayDivs";
const OnTheWay = () => {
  return (
    <div className="w-full bg-[#9dccff73]">
      <div className="bg-[#49BBBD] pt-[26px] pb-[30px] pl-[60px] pr-[50px] ">
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
      <div className="pt-[30px] pl-[30px] pr-[34px] pb-[33px]">
        {" "}
        <h4 className="font-[Poppins] font-semibold text-[30px] text-[#252641] ">
          Share and refer
        </h4>
        <p className="text-[#696984] font-[Poppins] font-normal text-[18px] mt-[20px] mb-[60px]">
          Learning business is an important step for anyone who wants to succeed
          in today’s competitive world. It helps people understand how companies
          operate, make decisions, and earn profits while meeting customer
          needs. By studying business, students develop valuable skills such as
          communication, leadership, teamwork, critical thinking, and
          problem-solving. They also gain knowledge of marketing, finance,
          management, accounting, and entrepreneurship. Business education
          prepares individuals to start their own companies or build successful
          careers in different industries. It also teaches financial
          responsibility, effective planning, and adaptability in changing
          markets. Overall, learning business builds confidence, encourages
          creativity and innovation, and provides the knowledge and skills
          needed for long-term personal and professional success.
        </p>
        <OnWayDivs
          mainclass="mb-[30px]"
          title="O6 Super Coins on the way"
          bio="O6 Super Coins are coming soon, bringing exciting opportunities everywhere."
          divclass="bg-[#C3E0FF]"
          description="Learning business becomes more exciting through O6 Super Coins. Students earn coins by completing lessons, solving challenges, and sharing ideas. The coins encourage regular practice and build motivation. As learners collect rewards, they also improve business knowledge, decision-making, and teamwork. This fun system makes education more engaging while helping students develop useful skills for future careers and entrepreneurship."
        />
        <OnWayDivs
          mainclass="mb-[30px]"
          title="O6 Super Coins on the way"
          bio="O6 Super Coins are coming soon with amazing rewards."
          divclass="bg-[#FFE2BE]"
          description="O6 Super Coins make business learning interactive and rewarding. Every completed task helps students earn coins, encouraging consistency and effort. Learners gain practical knowledge about entrepreneurship, marketing, finance, and communication while working toward rewards. The system creates a positive learning experience, increases confidence, and inspires students to continue improving their business skills every day."
        />
        <OnWayDivs
          mainclass=""
          title="O6 Super Coins on the way"
          bio="O6 Super Coins are coming soon with amazing rewards."
          divclass="bg-[#ECB6B2]"
          description="Business learning is more enjoyable with O6 Super Coins. Students receive coins for finishing activities, answering questions, and reaching learning goals. These rewards motivate active participation and continuous improvement. At the same time, learners build valuable business knowledge, problem-solving abilities, and confidence, preparing them for future success in education, careers, and entrepreneurship."
        />
      </div>
    </div>
  );
};

export default OnTheWay;
