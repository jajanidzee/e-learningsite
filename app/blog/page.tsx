import React from "react";
import Lesson from "../Components/BlogComponents/Lesson/Lesson";
import Header from "../Components/Header/Header";
import Category from "../Components/BlogComponents/Category/Category";
import Recommended from "../Components/BlogComponents/Recommended/Recommended";
import Choice from "../Components/BlogComponents/Choice/Choice";
import Coaching from "../Components/CarrersComponents/Coaching/Coaching";
import News from "../Components/HomeComponents/News/News";
import Footer from "../Components/Footer/Footer";

const blogrouting = () => {
  return (
    <div className="w-[1912px] m-auto">
      <Header />
      <Lesson />
      <Category />
      <Recommended />
      <Choice />
      <Coaching />
      <News />
      <Footer />
    </div>
  );
};

export default blogrouting;
