import React from "react";
import SectorDivs from "../SectorDivs/SectorDivs";
import TeacherLaptopImg from "../../../../public/TeacherLaptop.png";
import CourSectorImg from "../../../../public/CourSector.jpg";
import Image from "next/image";

const Sector = () => {
  return (
    <div className="ml-[120px] flex gap-[108px] mt-[80px] pb-[233px]">
      <SectorDivs
        imagee={TeacherLaptopImg}
        htext="Become a Teacher"
        ptext="Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."
        btntext="Apply a Teacher"
      />
      <SectorDivs
        imagee={CourSectorImg}
        htext="Become a Coursector"
        ptext="inspire learners, share knowledge, build expertise, and create meaningful educational experiences."
        btntext="Apply a Teacher"
      />
    </div>
  );
};

export default Sector;
