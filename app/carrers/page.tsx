import React from "react";
import Header from "../Components/Header/Header";
import Pricing from "../Components/CarrersComponents/Pricing/Pricing";
import Coaching from "../Components/CarrersComponents/Coaching/Coaching";

const carrersRouting = () => {
  return (
    <div className=" w-[1912px] m-auto">
      <Header />
      <Pricing />
      <Coaching />
    </div>
  );
};

export default carrersRouting;
