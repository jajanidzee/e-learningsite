import React from "react";
import Header from "../Components/Header/Header";
import SecondTotcImg from "../../public/SecondTotc.png";
import Inspiration from "../Components/CourseComponents/Inspiration/Inspiration";
import ReadBlog from "../Components/CourseComponents/ReadBlog/ReadBlog";
import RelatedBlog from "../Components/CourseComponents/RelatedBlog/RelatedBlog";

const coursesRouting = () => {
  return (
    <div className=" w-[1912px] m-auto  ">
      <Header />
      <Inspiration />
      <ReadBlog />
      <RelatedBlog />
    </div>
  );
};

export default coursesRouting;
