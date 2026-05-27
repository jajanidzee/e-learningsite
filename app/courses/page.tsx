import React from "react";
import Header from "../Components/Header/Header";
import SecondTotcImg from "../../public/SecondTotc.png";
import Inspiration from "../Components/CourseComponents/Inspiration/Inspiration";
import ReadBlog from "../Components/CourseComponents/ReadBlog/ReadBlog";

const coursesRouting = () => {
  return (
    <div className=" w-[1912px] m-auto  ">
      <Header />
      <Inspiration />
      <ReadBlog />
    </div>
  );
};

export default coursesRouting;
