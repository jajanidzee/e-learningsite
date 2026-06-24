import React from "react";
import Header from "../Components/Header/Header";
import SecondTotcImg from "../../public/SecondTotc.png";
import Inspiration from "../Components/CourseComponents/Inspiration/Inspiration";
import ReadBlog from "../Components/CourseComponents/ReadBlog/ReadBlog";
import RelatedBlog from "../Components/CourseComponents/RelatedBlog/RelatedBlog";
import Marketing from "../Components/CourseComponents/Marketing/Marketing";
import Footer from "../Components/Footer/Footer";

const coursesRouting = () => {
  return (
    <div className=" w-[1912px] m-auto">
      <Header />
      <Inspiration />
      <ReadBlog />
      <RelatedBlog />
      <Marketing />
      <Footer />
    </div>
  );
};

export default coursesRouting;
