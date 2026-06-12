import React from "react";
import Lesson from "../Components/BlogComponents/Lesson/Lesson";
import Header from "../Components/Header/Header";
import Category from "../Components/BlogComponents/Category/Category";

const blogrouting = () => {
  return (
    <div className="w-[1912px] m-auto">
      <Header />
      <Lesson />
      <Category />
    </div>
  );
};

export default blogrouting;
