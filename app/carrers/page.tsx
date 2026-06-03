import React from "react";
import Header from "../Components/Header/Header";
import Pricing from "../Components/CarrersComponents/Pricing/Pricing";
import Coaching from "../Components/CarrersComponents/Coaching/Coaching";
import Remote from "../Components/CarrersComponents/Remote/Remote";

const carrersRouting = () => {
  return (
    <div className=" w-[1912px] m-auto">
      <Header />
      <Pricing />
      <Coaching />
      <Remote />
    </div>
  );
};

export default carrersRouting;
