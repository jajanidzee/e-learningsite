import React from "react";
import Header from "../Components/Header/Header";
import Pricing from "../Components/CarrersComponents/Pricing/Pricing";
import Coaching from "../Components/CarrersComponents/Coaching/Coaching";
import Remote from "../Components/CarrersComponents/Remote/Remote";
import Students from "../Components/CarrersComponents/Students/Students";

const carrersRouting = () => {
  return (
    <div className=" w-[1912px] m-auto">
      <Header />
      <Pricing />
      <Coaching />
      <Remote />
      <Students />
    </div>
  );
};

export default carrersRouting;
