import React from "react";
import Header from "../Components/Header/Header";
import Abaliability from "../Components/ProgramComponents/Abaliability/Abaliability";
import Architect from "../Components/ProgramComponents/Architect/Architect";
import Platform from "../Components/ProgramComponents/Platform/Platform";
import Recommended from "../Components/BlogComponents/Recommended/Recommended";
import ByCreators from "../Components/ProgramComponents/ByCreators/ByCreators";
import Ellipse from "../Components/ProgramComponents/Ellipse/Ellipse";

const programrouting = () => {
  return (
    <div className=" w-[1912px] m-auto">
      <Header />
      <Abaliability />
      <Architect />
      <Platform />
      <Recommended />
      <ByCreators />
      <Ellipse />
    </div>
  );
};

export default programrouting;
