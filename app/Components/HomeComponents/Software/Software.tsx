import React from "react";
import SoftwareDivs from "../SoftwareDivs/SoftwareDivs";
import BigFileImg from "../../../../public/BigFile.svg";
import BigCalendarImg from "../../../../public/BigCalendar.png";
import CommunityImg from "../../../../public/Community.png";
const Software = () => {
  return (
    <div className="flex-col justify-center mt-[500px]">
      {" "}
      <div className="text-center">
        <h2 className="font-bold font-[Poppins] text-[36px] text-[#00CBB8] ">
          <span className="text-[#2F327D]">All-In-One</span> Cloud Software.
        </h2>
        <p className="font-normal font-[Poppins] text-[24px] text-[#696984] mt-[20px]">
          TOTC is one powerful online software suite that combines all the tools{" "}
          <br />
          needed to run a successful school or office.
        </p>
      </div>
      <div className="flex gap-[60px] mt-[160px] justify-center">
        <SoftwareDivs
          h3text="Online Billing, Invoicing, & Contracts"
          ptext="Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts"
          imagee={BigFileImg}
          imageClass="bg-[#5B72EE]"
          ptextclass=""
          h3textclass=""
        />
        <SoftwareDivs
          h3text="Easy Scheduling & Attendance Tracking"
          ptext="Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance"
          imagee={BigCalendarImg}
          imageClass=""
          ptextclass=""
          h3textclass="text-[#BBBBBB]"
        />
        <SoftwareDivs
          h3text="Customer Tracking"
          ptext="Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization "
          imagee={CommunityImg}
          imageClass="bg-[#29B9E7]"
          ptextclass=""
          h3textclass="my-[42px]"
        />
      </div>
    </div>
  );
};

export default Software;
