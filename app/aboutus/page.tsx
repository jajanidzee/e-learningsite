import React from "react";
import Header from "../Components/Header/Header";
import OverView from "../Components/AboutUsComponents/OverView/OverView";
import Rating from "../Components/AboutUsComponents/Rating/Rating";
import Articles from "../Components/AboutUsComponents/Articles/Articles";
import Physical from "../Components/HomeComponents/Physical/Physical";
import Education from "../Components/AboutUsComponents/Education/Education";
import Footer from "../Components/Footer/Footer";

const aboutusrouting = () => {
  return (
    <div className="w-[1912px] m-auto">
      <Header />
      <OverView />
      <Rating />
      <Articles />
      <Physical />
      <Education />
      <Footer />
    </div>
  );
};

export default aboutusrouting;
