import React from "react";
import StarImg from "../../../../public/Star.png";
import Image from "next/image";
import GradeBook1 from "../../../../public/GradeBook1.png";
import SmallStarImg from "../../../../public/SmallStar.png";
import GradeBook2 from "../../../..//public/GradeBook2.png";
const Management = () => {
  return (
    <div className="mt-[175.51px] flex">
      <div>
        <h2 className="font-[Poppins] text-[40px] font-semibold text-[#00CBB8]">
          Class Management <br />
          <span className="text-[#2F327D]"> Tools for Educators</span>
        </h2>
        <p className="text-[22px] font-[Poppins] text-[#696984] mt-[19.91px]">
          Class provides tools to help run and manage the class <br /> such as
          Class Roster, Attendance, and more. With the <br /> Gradebook,
          teachers can review and grade tests <br /> and quizzes in real-time.
        </p>
      </div>
      <div className=" w-[717.69px] rounded-[20px] relative h-[479.16px] bg-red-300">
        <div className=" w-[717.69px] py-[17.97px] text-center bg-[#54AFF0] rounded-[20px]">
          <h3 className="font-[Poppins] text-[22px] font-semibold text-[#F2FDFF]">
            GradeBook
          </h3>
        </div>
        <div className="w-[131.93px] h-[131.78px] rounded-[100%] bg-[#d9d9d962] flex items-center justify-center absolute -left-[120px] -top-[40px] ">
          <div className="w-[99.95px] h-[99.83px] rounded-[100%] bg-[#fff] flex items-center justify-center ">
            <Image src={StarImg} alt="StarImg"></Image>
          </div>
        </div>
        <div className="flex items-end gap-[23.99px] absolute -right-[30px] -top-[50px]">
          <div className="w-[43.98px] h-[43.92px] bg-[#9FD7FF] rounded-[100%]"></div>
          <div className="w-[19.99px] h-[19.96px] bg-[#9FD7FF] rounded-[100%]"></div>
        </div>
        <div className="flex">
          <div className="mt-[109.81px]">
            <div className="w-[126.94px] h-[29.95px] bg-[#3AC6F2] flex items-center justify-end relative">
              <div className="absolute -right-[20px]">
                <Image src={GradeBook1} alt="GradeBook1"></Image>
                <Image
                  src={SmallStarImg}
                  alt="SmallStarImg"
                  className="absolute -bottom-[13px] left-[27px]"
                ></Image>
                <div className="w-[99.96px] h-[49.91px] rounded-[60px] bg-[#CDF3FF] absolute top-[42.92px] left-[60.97px] text-[22px] font-[Poppins] font-medium text-[#43869B] flex items-center justify-center ">
                  100
                </div>
              </div>
            </div>
            <div className="w-[259.89px] h-[29.95px] bg-[#68F146] flex items-center justify-end relative mt-[121.79px]">
              <div className="absolute -right-[20px]">
                <Image src={GradeBook2} alt="GradeBook2"></Image>

                <div className="w-[99.96px] h-[49.91px] rounded-[60px] bg-[#D7FFCD] absolute top-[42.92px] left-[60.97px] text-[22px] font-[Poppins] font-medium text-[#4E8C3F] flex items-center justify-center ">
                  85
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Management;
