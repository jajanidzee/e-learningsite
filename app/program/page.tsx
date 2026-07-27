import React from "react";
import Header from "../Components/Header/Header";
import Abaliability from "../Components/ProgramComponents/Abaliability/Abaliability";
import Architect from "../Components/ProgramComponents/Architect/Architect";

const programrouting = () => {
  return (
    <div className=" w-[1912px] m-auto">
      <Header />
      <Abaliability />
      <Architect />
    </div>
  );
};

export default programrouting;
