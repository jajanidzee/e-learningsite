import React from "react";
import Header from "../Components/Header/Header";
import Pricing from "../Components/CarrersComponents/Pricing/Pricing";
import Coaching from "../Components/CarrersComponents/Coaching/Coaching";
import Remote from "../Components/CarrersComponents/Remote/Remote";
import Students from "../Components/CarrersComponents/Students/Students";
import Apps from "../Components/CarrersComponents/Apps/Apps";
import Sector from "../Components/CarrersComponents/Sector/Sector";
import Footer from "../Components/Footer/Footer";

const carrersRouting = () => {
  return (
    <div className=" w-[1912px] m-auto">
      <Header />
      <Pricing />
      <Coaching />
      <Remote />
      <Students />
      <Apps />
      <Sector />
      <Footer />
    </div>
  );
};

export default carrersRouting;
