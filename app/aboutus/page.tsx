import React from "react";
import Header from "../Components/Header/Header";
import OverView from "../Components/AboutUsComponents/OverView/OverView";
import Rating from "../Components/AboutUsComponents/Rating/Rating";

const aboutusrouting = () => {
  return (
    <div className="w-[1912px] m-auto">
      <Header />
      <OverView />
      <Rating />
    </div>
  );
};

export default aboutusrouting;
